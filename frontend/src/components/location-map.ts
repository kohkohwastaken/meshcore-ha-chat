import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { loadHaMap, type HaMapElement } from '../utils/ha-map';

type Engine = { invalidateSize?: () => void };

const PIN_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" style="position:absolute;left:-16px;top:-32px;width:32px;height:32px;'
  + 'filter:drop-shadow(0 1px 2px rgba(0,0,0,.6))"><path fill="#e53935" stroke="#fff" stroke-width="1.2" '
  + 'd="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>';

/**
 * ha-map draws an editable location as a plain dot. Turn it into a drop pin
 * whose tip sits on the spot.
 */
function pinMarker(map: HaMapElement): void {
  const dot = map.shadowRoot?.querySelector('.editable-circle-center') as HTMLElement | null;
  if (!dot || dot.dataset.mcPin) return;
  dot.dataset.mcPin = '1';
  Object.assign(dot.style, { width: '0', height: '0', background: 'none', border: 'none', boxShadow: 'none', overflow: 'visible' });
  dot.innerHTML = PIN_SVG;
}

/**
 * A shared location on Home Assistant's own map, with a marker you can pan
 * and zoom around. The small map in the chat has a button to open a large
 * one; the large one can open the location in a maps app.
 */
@customElement('meshcore-location-map')
export class MeshCoreLocationMap extends LitElement {
  @property({ attribute: false }) getHass?: () => HomeAssistant | undefined;
  @property({ type: Number }) lat = 0;
  @property({ type: Number }) lon = 0;
  @property({ type: String }) label = '';
  /** Fill the width of its container (for a tile) instead of the chat-sized frame. */
  @property({ type: Boolean, reflect: true }) fill = false;
  /** In the large map, let the user drag the pin to choose a new spot ("location-picked"). */
  @property({ type: Boolean }) editable = false;
  /** Where the pin was dragged to in the large map, before it's confirmed. */
  @state() private _picked: [number, number] | null = null;

  /** Open the large map (with a draggable pin when editable). */
  openLarge() {
    this._picked = null;
    this._large = true;
  }
  @state() private _ok: boolean | null = null;
  @state() private _large = false;
  private _observer?: ResizeObserver;

  static styles = css`
    :host { display: block; }
    .frame { position: relative; width: 260px; max-width: 100%; height: 150px; border-radius: 10px; overflow: hidden; background: rgba(127,127,127,0.2); }
    .frame ha-map, .large ha-map { position: absolute; inset: 0; display: block; width: 100%; height: 100%; }
    .large { position: fixed; inset: 6vh 5vw; z-index: 1001; border-radius: 12px; overflow: hidden; background: #222; box-shadow: 0 8px 32px rgba(0,0,0,0.6); }
    .backdrop { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.6); }
    .ctl { position: absolute; top: 8px; right: 8px; z-index: 3; display: flex; flex-direction: column; gap: 6px; }
    .ctl button, .ctl a { width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--divider-color, #555);
      background: var(--card-background-color, #222); color: var(--primary-text-color, #fff); cursor: pointer;
      display: flex; align-items: center; justify-content: center; text-decoration: none; padding: 0; }
    .ctl svg { width: 18px; height: 18px; }
    .cap { position: absolute; left: 10px; bottom: 10px; z-index: 3; background: var(--card-background-color, #222); color: var(--primary-text-color, #fff);
      border-radius: 8px; padding: 6px 10px; font-size: 13px; max-width: 70%; }
    .note { font-size: 12px; opacity: 0.7; }
    .cap.pick { max-width: calc(100% - 20px); display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
    .pick-btns { display: flex; gap: 6px; margin-left: auto; }
    .pick-btns button { border: none; border-radius: 6px; padding: 5px 10px; font: inherit; cursor: pointer;
      background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
    .pick-btns button:last-child { background: none; border: 1px solid var(--divider-color, #555); color: var(--primary-text-color, #fff); }
    .pick-btns button:disabled { opacity: 0.5; cursor: default; }
    :host([fill]) .frame { width: 100%; height: 130px; }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this._ok === null) void loadHaMap().then((ok) => { this._ok = ok; });
    window.addEventListener('keydown', this._onKey, true);
  }

  disconnectedCallback() {
    this._observer?.disconnect();
    this._observer = undefined;
    window.removeEventListener('keydown', this._onKey, true);
    super.disconnectedCallback();
  }

  private _onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._large) {
      e.stopPropagation();
      this._large = false;
    }
  };

  updated() {
    for (const map of this.renderRoot.querySelectorAll('ha-map') as NodeListOf<HaMapElement>) {
      const m = map as unknown as { _mcSet?: boolean; hass?: unknown; editableLocations?: unknown[] };
      if (m._mcSet) continue;
      m._mcSet = true;
      m.hass = this.getHass?.();
      map.entities = [];
      map.autoFit = false;
      // ha-map draws a lone marker from editableLocations (as its location
      // editor does); "location" is [lat, lon].
      const inLarge = !!map.closest('.large');
      const draggable = inLarge && this.editable;
      m.editableLocations = [{
        id: 'shared', location: [this.lat, this.lon], radius: 0, name: this.label || 'Location',
        icon: 'mdi:map-marker', location_editable: draggable, radius_editable: false,
      }];
      if (draggable) {
        // ha-map reports a dragged pin as "location-updated" with [lat, lon].
        map.addEventListener('location-updated', (e: Event) => {
          const loc = (e as CustomEvent<{ location?: [number, number] }>).detail?.location;
          if (Array.isArray(loc) && loc.length === 2) this._picked = [Number(loc[0]), Number(loc[1])];
        });
      }
      void this._centre(map);
    }
  }

  /** Centre on the location once the map is ready. */
  private async _centre(map: HaMapElement) {
    for (let i = 0; i < 60; i++) {
      const engine = (map as unknown as { _engine?: Engine })._engine;
      if (engine) {
        const d = 0.003;
        map.fitBounds?.([[this.lat - d, this.lon - d], [this.lat + d, this.lon + d]], { zoom: 15 });
        // The map measures itself once, often before its box has its final
        // size (blank or cut-off map). Re-measure whenever the box changes,
        // and a few times while it settles.
        if (!this._observer) {
          this._observer = new ResizeObserver(() => {
            for (const m of this.renderRoot.querySelectorAll('ha-map')) {
              (m as unknown as { _engine?: Engine })._engine?.invalidateSize?.();
            }
          });
        }
        this._observer.observe(map);
        for (const ms of [200, 600, 1500, 3000]) {
          await new Promise((r) => setTimeout(r, ms));
          if (!map.isConnected) return;
          engine.invalidateSize?.();
          pinMarker(map);
          if (ms === 600) map.fitBounds?.([[this.lat - d, this.lon - d], [this.lat + d, this.lon + d]], { zoom: 15 });
        }
        return;
      }
      await new Promise((r) => setTimeout(r, 150));
    }
  }

  private _usePicked = () => {
    if (!this._picked) return;
    const [lat, lon] = this._picked;
    this.dispatchEvent(new CustomEvent('location-picked', { detail: { lat, lon }, bubbles: true, composed: true }));
    this._large = false;
    this._picked = null;
  };

  private _recentre() {
    const map = this.renderRoot.querySelector('.large ha-map') as HaMapElement | null;
    const d = 0.003;
    map?.fitBounds?.([[this.lat - d, this.lon - d], [this.lat + d, this.lon + d]], { zoom: 15 });
  }

  /** On phones, geo: opens the phone's own maps app; elsewhere OpenStreetMap. */
  private _externalUrl(): string {
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const q = `${this.lat},${this.lon}`;
    return mobile
      ? `geo:${q}?q=${q}${this.label ? `(${encodeURIComponent(this.label)})` : ''}`
      : `https://www.openstreetmap.org/?mlat=${this.lat}&mlon=${this.lon}#map=16/${this.lat}/${this.lon}`;
  }

  render() {
    if (this._ok === false) return html`<div class="note">Map needs Home Assistant 2026.10 or newer.</div>`;
    const icon = (d: string) => html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d=${d}></path></svg>`;
    return html`
      <div class="frame" @click=${(e: Event) => e.stopPropagation()} @hass-more-info=${(e: Event) => e.stopPropagation()}>
        ${this._ok && !this._large ? html`<ha-map></ha-map>` : nothing}
        <div class="ctl">
          <button aria-label="Open a larger map" title="Larger map" @click=${() => { this._large = true; }}>${icon('M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7')}</button>
        </div>
      </div>
      ${this._large ? html`
        <div class="backdrop" @click=${(e: Event) => { e.stopPropagation(); this._large = false; }}></div>
        <div class="large" role="dialog" aria-label="Location" @click=${(e: Event) => e.stopPropagation()} @hass-more-info=${(e: Event) => e.stopPropagation()}>
          <ha-map></ha-map>
          <div class="ctl">
            <button aria-label="Close" title="Close" @click=${() => { this._large = false; }}>${icon('M6 6l12 12M18 6L6 18')}</button>
            <button aria-label="Re-centre on the location" title="Re-centre" @click=${this._recentre}>${icon('M12 2v4M12 18v4M2 12h4M18 12h4M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z')}</button>
            <a href=${this._externalUrl()} target="_blank" rel="noopener noreferrer" aria-label="Open in maps app" title="Open in maps app">${icon('M14 3h7v7M10 14L21 3M21 14v7H3V3h7')}</a>
          </div>
          ${this.editable
            ? html`<div class="cap pick">
                ${this._picked
                  ? html`<b>New spot</b> ${this._picked[0].toFixed(5)}, ${this._picked[1].toFixed(5)}`
                  : html`Drag the pin to where your radio is.`}
                <span class="pick-btns">
                  <button ?disabled=${!this._picked} @click=${this._usePicked}>Use this location</button>
                  <button @click=${() => { this._large = false; this._picked = null; }}>Cancel</button>
                </span>
              </div>`
            : html`<div class="cap">${this.label ? html`<b>${this.label}</b><br>` : ''}${this.lat.toFixed(5)}, ${this.lon.toFixed(5)}</div>`}
        </div>` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-location-map': MeshCoreLocationMap;
  }
}
