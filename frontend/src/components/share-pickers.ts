import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant, Contact } from '../types';
import { loadHaMap, NO_MAP_NOTE, type HaMapElement } from '../utils/ha-map';
import { NODE_TYPE_NAMES } from '../utils/rich-messages';

export interface PickedLocation {
  lat: number;
  lon: number;
  /** Where it came from, e.g. "Pixel 8" or "Picked on map". */
  source: string;
  /** GPS accuracy in metres, when the entity reports one. */
  accuracy?: number;
}

interface Candidate {
  entityId: string;
  name: string;
  lat: number;
  lon: number;
  accuracy?: number;
  updated: number;
}

const EXCLUDED_DOMAINS = new Set(['zone', 'geo_location']);

/** Entities with a position that can be shared: not zones, not MeshCore nodes or the radio. */
export function locationCandidates(hass: HomeAssistant | undefined): Candidate[] {
  const out: Candidate[] = [];
  for (const [entityId, s] of Object.entries(hass?.states ?? {})) {
    if (EXCLUDED_DOMAINS.has(entityId.split('.')[0])) continue;
    const reg = hass?.entities?.[entityId] as Record<string, unknown> | undefined;
    if (reg?.platform === 'meshcore' || entityId.includes('meshcore')) continue;
    const a = s.attributes as Record<string, unknown>;
    const lat = Number(a.latitude);
    const lon = Number(a.longitude);
    if (a.latitude == null || a.longitude == null || !Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    if (lat === 0 && lon === 0) continue;
    const acc = Number(a.gps_accuracy);
    out.push({
      entityId,
      name: String(a.friendly_name ?? entityId),
      lat,
      lon,
      accuracy: Number.isFinite(acc) ? acc : undefined,
      updated: Date.parse(s.last_updated) || 0,
    });
  }
  return out.sort((a, b) => b.updated - a.updated);
}

function ago(ms: number): string {
  const s = Math.max(0, (Date.now() - ms) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  return `${Math.round(s / 86400)} days ago`;
}

const dialogStyles = css`
  .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; }
  .dialog { background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); border-radius: 12px;
    width: 460px; max-width: calc(100vw - 24px); max-height: calc(100vh - 48px); display: flex; flex-direction: column; overflow: hidden; }
  header { display: flex; align-items: center; padding: 12px 16px; font-weight: 600; font-size: 16px; }
  header .x { margin-left: auto; background: none; border: none; color: inherit; font-size: 18px; cursor: pointer; }
  .tabs { display: flex; gap: 6px; padding: 0 16px 8px; }
  .tabs button { flex: 1; padding: 6px; border-radius: 8px; border: 1px solid var(--divider-color, #444); background: none; color: inherit; cursor: pointer; }
  .tabs button.on { background: var(--primary-color, #03a9f4); border-color: transparent; color: #fff; }
  input.search { margin: 0 16px 8px; padding: 8px 10px; border-radius: 8px; border: 1px solid var(--divider-color, #444);
    background: transparent; color: inherit; font: inherit; }
  .list { overflow-y: auto; padding: 0 8px 8px; min-height: 120px; }
  .row { display: flex; flex-direction: column; width: 100%; text-align: left; padding: 8px; border-radius: 8px; background: none; border: none; color: inherit; cursor: pointer; font: inherit; }
  .row:hover { background: rgba(127,127,127,0.15); }
  .row .meta { font-size: 12px; opacity: 0.7; }
  .row .meta.stale { color: var(--warning-color, #ffa600); opacity: 1; }
  .empty { padding: 16px; opacity: 0.7; font-size: 14px; }
  .mapwrap { position: relative; height: 320px; margin: 0 16px; border-radius: 8px; overflow: hidden; }
  .mapwrap ha-map { height: 100%; display: block; }
  .pin { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -100%); font-size: 30px; pointer-events: none; z-index: 500; }
  footer { display: flex; justify-content: flex-end; gap: 8px; padding: 12px 16px; }
  footer button { padding: 8px 14px; border-radius: 8px; border: none; cursor: pointer; font: inherit; }
  .primary { background: var(--primary-color, #03a9f4); color: #fff; }
  .secondary { background: none; color: inherit; border: 1px solid var(--divider-color, #444) !important; }
  .hint { font-size: 12px; opacity: 0.7; padding: 6px 16px 0; }
`;

/** Pick a location from a Home Assistant entity or the map. Fires `location-picked` / `close`. */
@customElement('meshcore-location-picker')
export class MeshCoreLocationPicker extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _tab: 'devices' | 'map' = 'map';
  @state() private _q = '';
  @state() private _mapOk: boolean | null = null;
  private _fitted = false;

  static styles = dialogStyles;

  private _close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  private _pick(loc: PickedLocation) {
    this.dispatchEvent(new CustomEvent('location-picked', { detail: loc }));
  }

  /** ha-map's map engine (2026.10+), or the older Leaflet map. */
  private _engine() {
    return this.renderRoot.querySelector('ha-map') as (HaMapElement & {
      _engine?: { getView?: () => { center: [number, number]; zoom: number }; setView?: (c: [number, number], z?: number) => void };
      leafletMap?: { getCenter: () => { lat: number; lng: number }; setView: (c: [number, number], z: number) => void };
    }) | null;
  }

  private _useMapCentre() {
    const map = this._engine();
    const view = map?._engine?.getView?.();
    if (view) {
      this._pick({ lat: view.center[0], lon: view.center[1], source: 'Picked on map' });
      return;
    }
    const c = map?.leafletMap?.getCenter();
    if (c) this._pick({ lat: c.lat, lon: c.lng, source: 'Picked on map' });
  }

  /** Start the map on home once its engine is up. */
  private async _centreOnHome() {
    const home = this.hass?.states['zone.home']?.attributes as Record<string, number> | undefined;
    if (home?.latitude == null) return;
    const centre: [number, number] = [home.latitude, home.longitude];
    for (let i = 0; i < 40; i++) {
      const map = this._engine();
      if (!map) return;
      if (map._engine?.setView) {
        map._engine.setView(centre, 15);
        return;
      }
      if (map.leafletMap) {
        map.leafletMap.setView(centre, 15);
        return;
      }
      await new Promise((r) => setTimeout(r, 150));
    }
  }

  updated() {
    if (this._tab !== 'map') return;
    if (this._mapOk === null) {
      void loadHaMap().then((ok) => { this._mapOk = ok; });
      return;
    }
    const map = this.renderRoot.querySelector('ha-map') as HaMapElement | null;
    if (!map || this._fitted) return;
    this._fitted = true;
    map.entities = [];
    map.autoFit = false;
    void this._centreOnHome();
  }

  render() {
    const q = this._q.toLowerCase();
    const items = locationCandidates(this.hass).filter((c) => !q || c.name.toLowerCase().includes(q) || c.entityId.includes(q));
    return html`
      <div class="backdrop" @click=${this._close}>
        <div class="dialog" @click=${(e: Event) => e.stopPropagation()}>
          <header>Share a location<button class="x" aria-label="Close" @click=${this._close}>✕</button></header>
          <div class="tabs">
            <button class=${this._tab === 'map' ? 'on' : ''} @click=${() => { this._tab = 'map'; this._fitted = false; }}>Pick on map</button>
            <button class=${this._tab === 'devices' ? 'on' : ''} @click=${() => { this._tab = 'devices'; }}>From a device</button>
          </div>
          ${this._tab === 'devices' ? html`
            <input class="search" placeholder="Search devices" .value=${this._q} @input=${(e: Event) => { this._q = (e.target as HTMLInputElement).value; }}>
            <div class="list">
              ${items.length === 0 ? html`<div class="empty">No devices with a position. Phones with the Home Assistant app, and other trackers, show here.</div>` : ''}
              ${items.map((c) => {
                const stale = Date.now() - c.updated > 3600_000;
                return html`<button class="row" @click=${() => this._pick({ lat: c.lat, lon: c.lon, source: c.name, accuracy: c.accuracy })}>
                  <span>${c.name}</span>
                  <span class="meta ${stale ? 'stale' : ''}">Updated ${ago(c.updated)}${c.accuracy != null ? ` · ±${Math.round(c.accuracy)} m` : ''}</span>
                </button>`;
              })}
            </div>
          ` : html`
            ${this._mapOk === false ? html`<div class="empty">${NO_MAP_NOTE}</div>` : html`
              <div class="hint">Move the map so the pin is on the spot.</div>
              <div class="mapwrap">
                ${this._mapOk ? html`<ha-map .hass=${this.hass}></ha-map><div class="pin">📍</div>` : ''}
              </div>
              <footer>
                <button class="secondary" @click=${this._close}>Cancel</button>
                <button class="primary" ?disabled=${!this._mapOk} @click=${this._useMapCentre}>Use this spot</button>
              </footer>`}
          `}
        </div>
      </div>
    `;
  }
}

/** Pick a contact to share (or your own). Fires `contact-picked` / `close`. */
@customElement('meshcore-contact-picker')
export class MeshCoreContactPicker extends LitElement {
  @property({ attribute: false }) contacts: Contact[] = [];
  @property({ attribute: false }) own?: { publicKey: string; name: string };
  @state() private _q = '';

  static styles = dialogStyles;

  private _close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  private _pick(publicKey: string, type: number, name: string) {
    this.dispatchEvent(new CustomEvent('contact-picked', { detail: { publicKey, type, name } }));
  }

  render() {
    const q = this._q.toLowerCase();
    const list = this.contacts
      .filter((c) => c.public_key && c.public_key.length === 64)
      .filter((c) => !q || (c.adv_name || '').toLowerCase().includes(q) || c.public_key.startsWith(q))
      .sort((a, b) => (a.adv_name || '').localeCompare(b.adv_name || ''));
    return html`
      <div class="backdrop" @click=${this._close}>
        <div class="dialog" @click=${(e: Event) => e.stopPropagation()}>
          <header>Share a contact<button class="x" aria-label="Close" @click=${this._close}>✕</button></header>
          <input class="search" placeholder="Search contacts" .value=${this._q} @input=${(e: Event) => { this._q = (e.target as HTMLInputElement).value; }}>
          <div class="list">
            ${this.own && !q ? html`<button class="row" @click=${() => this._pick(this.own!.publicKey, 1, this.own!.name)}>
              <span>My contact (${this.own.name})</span><span class="meta">So others can add you</span></button>` : ''}
            ${list.map((c) => html`<button class="row" @click=${() => this._pick(c.public_key, c.type, c.adv_name)}>
              <span>${c.adv_name || c.pubkey_prefix}</span>
              <span class="meta">${NODE_TYPE_NAMES[c.type] ?? 'Node'} · ${c.public_key.slice(0, 8)}</span></button>`)}
            ${list.length === 0 && !this.own ? html`<div class="empty">No contacts to share.</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-location-picker': MeshCoreLocationPicker;
    'meshcore-contact-picker': MeshCoreContactPicker;
  }
}
