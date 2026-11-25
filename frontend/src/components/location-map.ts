import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant } from '../types';
import { loadHaMap, type HaMapElement } from '../utils/ha-map';

type Engine = { setView?: (c: [number, number], z?: number) => void; getView?: () => { center: [number, number]; zoom: number } };

/**
 * A shared location on Home Assistant's own map. Home Assistant's map can't
 * draw a lone point, so the map stays still and a pin sits at its centre;
 * zoom is by buttons, which keep the centre. Tapping the small map opens a
 * large one.
 */
@customElement('meshcore-location-map')
export class MeshCoreLocationMap extends LitElement {
  @property({ attribute: false }) getHass?: () => HomeAssistant | undefined;
  @property({ type: Number }) lat = 0;
  @property({ type: Number }) lon = 0;
  @property({ type: String }) label = '';
  @state() private _ok: boolean | null = null;
  @state() private _large = false;
  private _zoom = 15;

  static styles = css`
    :host { display: block; }
    .frame { position: relative; width: 240px; max-width: 100%; height: 140px; border-radius: 10px; overflow: hidden; cursor: pointer; background: rgba(127,127,127,0.2); }
    .frame ha-map { position: absolute; inset: 0; display: block; pointer-events: none; }
    .pin { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -100%); width: 26px; height: 26px; pointer-events: none; z-index: 2;
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6)); }
    .large { position: fixed; inset: 6vh 5vw; z-index: 1001; border-radius: 12px; overflow: hidden; background: #222; box-shadow: 0 8px 32px rgba(0,0,0,0.6); }
    .large ha-map { position: absolute; inset: 0; display: block; pointer-events: none; }
    .backdrop { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.6); }
    .ctl { position: absolute; top: 10px; right: 10px; z-index: 3; display: flex; flex-direction: column; gap: 6px; }
    .ctl button, .ctl a { width: 38px; height: 38px; border-radius: 8px; border: 1px solid #555; background: var(--card-background-color, #222);
      color: var(--primary-text-color, #fff); font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; text-decoration: none; }
    .cap { position: absolute; left: 10px; bottom: 10px; z-index: 3; background: var(--card-background-color, #222); color: var(--primary-text-color, #fff);
      border-radius: 8px; padding: 6px 10px; font-size: 13px; max-width: 70%; }
    .note { font-size: 12px; opacity: 0.7; }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this._ok === null) void loadHaMap().then((ok) => { this._ok = ok; });
    window.addEventListener('keydown', this._onKey, true);
  }

  disconnectedCallback() {
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
      if ((map as unknown as { _mcSet?: boolean })._mcSet) continue;
      (map as unknown as { _mcSet?: boolean })._mcSet = true;
      (map as unknown as { hass?: unknown }).hass = this.getHass?.();
      map.entities = [];
      map.autoFit = false;
      void this._centre(map, map.closest('.large') ? this._zoom : 15);
    }
  }

  /** Centre the map on the location once its engine is up. */
  private async _centre(map: HaMapElement, zoom: number) {
    for (let i = 0; i < 60; i++) {
      const engine = (map as unknown as { _engine?: Engine })._engine;
      if (engine?.setView) {
        // fitBounds is ha-map's own API and waits for the map to be ready.
        const d = 0.002;
        map.fitBounds?.([[this.lat - d, this.lon - d], [this.lat + d, this.lon + d]], { zoom });
        await new Promise((r) => setTimeout(r, 400));
        engine.setView([this.lat, this.lon], zoom);
        return;
      }
      await new Promise((r) => setTimeout(r, 150));
    }
  }

  private _zoomBy(d: number) {
    this._zoom = Math.max(3, Math.min(19, this._zoom + d));
    const map = this.renderRoot.querySelector('.large ha-map') as HaMapElement | null;
    if (map) void this._centre(map, this._zoom);
  }

  private _pin() {
    return html`<svg class="pin" viewBox="0 0 24 24" aria-hidden="true"><path fill="#e53935" stroke="#fff" stroke-width="1.5" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>`;
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
    return html`
      <div class="frame" role="button" tabindex="0" aria-label="Open a larger map"
        @click=${(e: Event) => { e.stopPropagation(); this._zoom = 15; this._large = true; }}
        @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter') { e.stopPropagation(); this._large = true; } }}>
        ${this._ok ? html`<ha-map></ha-map>` : nothing}
        ${this._pin()}
      </div>
      ${this._large ? html`
        <div class="backdrop" @click=${(e: Event) => { e.stopPropagation(); this._large = false; }}></div>
        <div class="large" role="dialog" aria-label="Location" @click=${(e: Event) => e.stopPropagation()}>
          <ha-map></ha-map>
          ${this._pin()}
          <div class="ctl">
            <button aria-label="Close" @click=${() => { this._large = false; }}>✕</button>
            <button aria-label="Zoom in" @click=${() => this._zoomBy(1)}>+</button>
            <button aria-label="Zoom out" @click=${() => this._zoomBy(-1)}>−</button>
            <a href=${this._externalUrl()} target="_blank" rel="noopener noreferrer" aria-label="Open in maps app" title="Open in maps app">↗</a>
          </div>
          <div class="cap">${this.label ? html`<b>${this.label}</b><br>` : ''}${this.lat.toFixed(5)}, ${this.lon.toFixed(5)}</div>
        </div>` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-location-map': MeshCoreLocationMap;
  }
}
