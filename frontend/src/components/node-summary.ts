import { LitElement, html, svg, css, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant, ManagedDevice } from '../types';
import type { EntityInfo } from '../utils/classify-entity';
import {
  evaluateSensor,
  type Band,
  type MetricKey,
  type SensorEval,
} from '../utils/sensor-thresholds';
import { longPress } from '../directives/long-press';
import './stat-bar';
import './stacked-bar';
import './info-tip';
import './message-rate-chart';
import './location-map';
import { fetchStats, historyUrl, periodMinutes, statsPeriod, totalChange, type StatSeries } from '../utils/companion-stats';
import { getRadioLimits, type RadioLimits } from '../api';
import type { StackedBarSegment } from './stacked-bar';
import type { RatePoint } from './message-rate-chart';

/**
 * Synthesized device descriptor for the Settings tab's companion device.
 * The companion's underlying type is `MeshCoreDevice` (see types.ts) which
 * doesn't share a shape with `ManagedDevice`; the page-level adapter wraps
 * it into this descriptor so node-summary's discriminated-union switch
 * works uniformly.
 */
export interface CompanionDeviceDescriptor {
  type: 'companion';
  name: string;
  pubkey_prefix: string;
  connected: boolean;
  firmware?: string;
  entry_id?: string;
}

export type NodeSummaryDevice = ManagedDevice | CompanionDeviceDescriptor;

type GroupName =
  | 'Radio · live'
  | 'Radio · configuration'
  | 'Status'
  | 'Identity';

/**
 * Aggregated card body used by the Devices and Settings tabs in place of
 * the prior flat tile grid. Pairs a "hero row" of headline values with a
 * categorised, threshold-banded table of every other meshcore sensor on
 * the node.
 *
 * Layout per node type:
 *  - Repeater: 4-tile hero row (Battery / Last message strength /
 *    Radio activity / Location); every Power/Radio/Traffic/Status group
 *    that has any sensors renders.
 *  - Client: 3-tile hero row (Battery / Last message strength / Location);
 *    only the Status group renders below.
 *  - Companion: 3-tile hero row (Mesh node count / Location / Power);
 *    Radio · configuration is the dominant table group.
 *
 * The component owns the hero row, the table, and the (N hidden) suffix.
 * It does NOT own the outer .device-section wrapper, the header (icon +
 * name + meta + status badge), or the actions row — those continue to
 * live in devices-page.ts and settings-page.ts so the per-page differences
 * (icon glyph, action handlers) stay where they belong.
 *
 * Click on any row fires `hass-more-info` so the existing entity-deep-link
 * UX is preserved. Long-press fires `tile-context-menu` so the existing
 * sensor-hide flow is preserved.
 */
@customElement('meshcore-node-summary')
export class NodeSummary extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: Object }) device?: NodeSummaryDevice;
  @property({ type: Array }) entities: EntityInfo[] = [];
  @property({ type: Number }) hiddenCount = 0;
  /** Fallback location for nodes that don't expose lat/lon as sensor
   *  entities (typical for managed repeaters/clients — their location
   *  comes from the user's contact list via Contact.adv_lat/adv_lon).
   *  When set and no dedicated entity is found, the Location hero tile
   *  shows these. */
  @property({ type: Number }) fallbackLatitude?: number;
  @property({ type: Number }) fallbackLongitude?: number;
  /** Unix-seconds timestamp accompanying the fallback location (e.g.,
   *  Contact.last_advert). Used for the "Updated X ago" line beneath
   *  the coordinates in the Location hero tile. */
  @property({ type: Number }) fallbackUpdated?: number;

  /** 48h message-rate history (msg/min) for the activity chart, fetched from
   *  recorder statistics for the node's *_rate sensors. */
  @state() private _rateHistory: RatePoint[] = [];
  /** Guard: the nb_sent entity_id the current _rateHistory was fetched for,
   *  so we fetch once per device rather than on every hass state push. */
  private _rateHistoryKey: string | null = null;

  // ─── Companion statistics (recorder) ──────────────────────────────────
  /** Last 24 h at 5-minute resolution, for the tiles' small graphs. */
  @state() private _spark: StatSeries = {};
  /** The activity chart's range, in hours, and its data. */
  @state() private _range = 48;
  @state() private _rangeStats: StatSeries = {};
  @state() private _limits: RadioLimits | null = null;
  private _companionKey: string | null = null;
  private _companionTimer?: ReturnType<typeof setInterval>;

  static styles = css`
    .spark {
      display: block;
      width: 100%;
      height: 40px;
      margin-top: 8px;
    }

    .spark polyline {
      fill: none;
      stroke-width: 1.6;
      vector-effect: non-scaling-stroke;
    }

    .s-ok, .s-rx { stroke: var(--success-color, #4caf50); }
    .s-tx { stroke: #2196f3; }
    .s-err { stroke: var(--error-color, #f44336); }
    .key { font-weight: 500; }
    .key.s-ok, .key.s-rx { color: var(--success-color, #4caf50); }
    .key.s-tx { color: #2196f3; }
    .key.s-err { color: var(--error-color, #f44336); }

    .spark-wrap {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 6px;
      margin-top: 8px;
      font-size: 10px;
      color: var(--secondary-text-color);
    }

    .spark-y {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;
      line-height: 1;
    }

    .spark-plot {
      position: relative;
      cursor: zoom-in;
    }

    .spark-plot .spark { margin-top: 0; }

    .spark-cur { stroke: var(--secondary-text-color); stroke-width: 1; stroke-dasharray: 2 2; vector-effect: non-scaling-stroke; }

    .spark-tip {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100%;
      margin-bottom: 2px;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      border-radius: 4px;
      padding: 2px 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      pointer-events: none;
    }

    .spark-x .key {
      margin-left: 6px;
    }

    .spark-x {
      display: flex;
      justify-content: space-between;
      gap: 6px;
      margin-top: 2px;
    }

    .detail-scrim {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: 50;
    }

    .detail {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: min(720px, 94vw);
      max-height: 90vh;
      overflow: auto;
      background: var(--card-background-color, #1e1e1e);
      color: var(--primary-text-color);
      border-radius: 14px;
      padding: 14px 16px;
      z-index: 51;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
    }

    .detail-head {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 16px;
    }

    .detail-close {
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 18px;
      cursor: pointer;
    }

    .detail-chart {
      width: 100%;
      height: auto;
      display: block;
    }

    .detail-chart polyline { fill: none; stroke-width: 1.8; }
    .detail-chart .grid { stroke: var(--divider-color, #333); stroke-width: 1; }
    .detail-chart .axis { fill: var(--secondary-text-color); font-size: 11px; }
    .detail-chart .cur { stroke: var(--secondary-text-color); stroke-dasharray: 3 3; }

    .detail-read, .detail-empty {
      font-size: 12.5px;
      color: var(--secondary-text-color);
      margin-top: 6px;
      min-height: 18px;
    }

    .detail-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 18px;
      margin-top: 10px;
      font-size: 13px;
    }

    .detail-line {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .link-btn {
      border: none;
      background: none;
      color: var(--primary-color, #03a9f4);
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      padding: 0;
    }

    .spark-cap, .noise-line {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }

    .noise-line {
      font-size: 12px;
      cursor: pointer;
    }

    .activity-head {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    .range-chips {
      display: flex;
      gap: 4px;
      margin-left: auto;
    }

    .range-chip {
      border: 1px solid var(--divider-color, #444);
      background: none;
      color: var(--secondary-text-color);
      border-radius: 12px;
      padding: 2px 9px;
      font: inherit;
      font-size: 11px;
      text-transform: none;
      letter-spacing: 0;
      cursor: pointer;
    }

    .range-chip.on {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }

    .raw-link {
      font-size: 11.5px;
      text-transform: none;
      letter-spacing: 0;
      color: var(--primary-color, #03a9f4);
      text-decoration: none;
    }

    .activity-empty, .diag-hint {
      font-size: 13px;
      color: var(--secondary-text-color);
      padding: 10px 12px;
      border-radius: 8px;
      background: rgba(127, 127, 127, 0.08);
    }

    .diag-hint {
      margin-top: 12px;
      background: rgba(3, 169, 244, 0.08);
      border: 1px solid rgba(3, 169, 244, 0.3);
      color: var(--primary-text-color);
    }

    .diag-hint a {
      color: var(--primary-color, #03a9f4);
    }

    .health-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 24px;
    }

    @media (max-width: 700px) {
      .health-grid { grid-template-columns: 1fr; }
    }

    .health-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 2px;
      border-bottom: 1px solid var(--divider-color, #2a2a2a);
      cursor: pointer;
      font-size: 13px;
    }

    .hk { color: var(--secondary-text-color); }
    .hv { margin-left: auto; font-weight: 500; display: flex; gap: 6px; align-items: center; }

    .hbadge {
      font-size: 11px;
      border-radius: 10px;
      padding: 1px 8px;
      font-weight: 600;
    }

    .hbadge.ok { background: rgba(76, 175, 80, 0.15); color: var(--success-color, #4caf50); }
    .hbadge.warn { background: rgba(255, 152, 0, 0.15); color: var(--warning-color, #ff9800); }
    .hbadge.info { background: rgba(3, 169, 244, 0.15); color: var(--primary-color, #03a9f4); }

    /* container-type lets the sensor grid's @container query react to this
       card's own width rather than the raw viewport. */
    :host { display: block; container-type: inline-size; }

    /* ─── Hero row ─── */
    .hero-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }

    .hero-row.three {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 900px) {
      .hero-row.three { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 560px) {
      .hero-row.three { grid-template-columns: 1fr; }
    }
    .hero-tile {
      background: var(--secondary-background-color, #f0f0f0);
      border-radius: 10px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: border-color 0.15s;
    }
    .hero-tile:hover { border-color: var(--primary-color, #03a9f4); }
    .hero-tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value {
      display: flex;
      align-items: baseline;
      gap: 6px;
      flex-wrap: wrap;
    }
    .hero-tile-value .primary {
      font-size: 22px;
      font-weight: 600;
      color: var(--primary-text-color);
      line-height: 1;
    }
    .hero-tile-value .secondary {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value .compact {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    /* Clickable TX/RX segments inside Radio activity hero tile */
    .ra-segment {
      cursor: pointer;
      border-radius: 3px;
      padding: 0 2px;
      transition: background 0.15s;
    }
    .ra-segment:hover {
      background: rgba(127, 127, 127, 0.18);
    }

    /* Bar + custom legend wrapper — keeps the legend tight to the bar
       (4px) regardless of the hero-tile's 8px flex-column gap, matching
       the spacing inside Messages Sent / Received tiles. */
    .ra-bar-wrap { display: block; }

    /* Radio activity legend (matches the stacked-bar inline legend
       layout used by Messages Sent / Received) */
    .ra-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 4px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .ra-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .ra-legend-item:hover {
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .legend-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .legend-swatch.tx   { background: var(--info, #2196f3); }
    .legend-swatch.rx   { background: var(--good, #4caf50); }
    .legend-swatch.idle {
      background: var(--divider-color, #e0e0e0);
      border: 1px solid var(--secondary-text-color);
    }

    /* ─── Status dots ─── */
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      display: inline-block;
    }
    .status-dot.good { background: var(--good, #4caf50); }
    .status-dot.warn { background: var(--warn, #ff9800); }
    .status-dot.bad  { background: var(--bad,  #f44336); }
    .status-dot.info { background: var(--info, #2196f3); }

    /* ─── Subsection label ─── */
    .subsection-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      margin-top: 16px;
    }
    .hidden-suffix {
      font-weight: 400;
      text-transform: none;
      opacity: 0.6;
      margin-left: 6px;
    }

    /* ─── Sensor grid ─── responsive: one column on a narrow card, two
       once the card is wide. The breakpoint is a @container query keyed on
       :host's inline-size, so it reacts to the card width (panel layout,
       sidebar state) rather than just the raw viewport. Category headers
       span the full width so paired sensors stay within their category. */
    .sensor-grid {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 28px;
    }
    @container (min-width: 620px) {
      .sensor-grid { grid-template-columns: 1fr 1fr; }
    }
    .group-label {
      grid-column: 1 / -1;
      padding: 12px 4px 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
    }
    .sensor-item {
      display: grid;
      grid-template-columns: 14px minmax(0, 1fr) auto minmax(72px, 120px);
      align-items: center;
      gap: 10px;
      padding: 8px 4px;
      border-top: 1px solid var(--divider-color);
      font-size: 13px;
      cursor: pointer;
    }
    .sensor-item:hover { background: rgba(127, 127, 127, 0.06); }
    .si-label {
      color: var(--secondary-text-color);
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .si-value {
      color: var(--primary-text-color);
      font-weight: 500;
      text-align: right;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .si-bar { min-width: 0; }
    .si-bar meshcore-stat-bar { width: 100%; }

    .unit {
      font-size: 11px;
      font-weight: 400;
      color: var(--secondary-text-color);
      margin-left: 2px;
    }

    .map-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 12px;
      background: var(--info-bg, rgba(33, 150, 243, 0.18));
      color: var(--info, #2196f3);
      font-size: 11px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
    }
    .coord-pair {
      font-family: ui-monospace, 'SF Mono', Menlo, monospace;
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .loc-updated {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 2px;
      text-transform: none;
      letter-spacing: 0;
      font-weight: 400;
    }

    .loc-tile meshcore-location-map {
      margin-top: 6px;
    }

    .dup-annotation {
      font-size: 11px;
      color: var(--secondary-text-color);
      font-style: italic;
      margin-top: 2px;
    }
    .dup-annotation .num {
      font-weight: 500;
      color: var(--primary-text-color);
      font-style: normal;
    }
    /* Thin red line beneath the Messages Received composition bar showing
       the lifetime receive-error share. */
    .err-line {
      height: 3px;
      width: 100%;
      margin-top: 3px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .err-line-fill {
      height: 100%;
      background: var(--bad, #f44336);
    }
    /* Duplicates line — same thin track, amber fill, stacked under the
       error line. */
    .dup-line {
      height: 3px;
      width: 100%;
      margin-top: 2px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .dup-line-fill {
      height: 100%;
      background: var(--warning, #ff9800);
    }
    /* Unified legend beneath the Messages Received bar stack. */
    .msg-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      margin-top: 5px;
      font-size: 10px;
      color: var(--secondary-text-color);
    }
    .msg-legend > span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .msg-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .msg-swatch.flood  { background: var(--info, #2196f3); }
    .msg-swatch.direct { background: var(--good, #4caf50); }
    .msg-swatch.error  { background: var(--bad, #f44336); }
    .msg-swatch.dup    { background: var(--warning, #ff9800); }
  `;

  // ─── Render ────────────────────────────────────────────────────────────

  render() {
    if (!this.hass || !this.device) return nothing;

    // The hero tiles for repeaters consume traffic-totals entities
    // (nb_sent / sent_flood / sent_direct / nb_recv / recv_flood /
    // recv_direct / dups / request_succ / request_fail). We share this
    // Set with _buildGroups so those entities don't double-render as
    // table rows.
    const consumed = new Set<string>();
    const heroTiles = this._renderHeroTiles(consumed);
    const companion = this.device.type === 'companion';
    const health = companion ? this._renderCompanionHealth(consumed) : nothing;
    const groups = this._buildGroups(consumed);

    return html`
      <div class="hero-row ${companion ? 'three' : ''}">
        ${heroTiles}
      </div>

      ${companion ? this._renderDetail() : nothing}
      ${companion ? this._renderDiagnosticsHint() : nothing}
      ${companion ? this._renderCompanionActivityCard() : this._renderMessageActivityCard()}
      ${health}

      ${groups.length > 0
        ? html`
          <div class="subsection-label">
            Sensors${this.hiddenCount > 0
              ? html`<span class="hidden-suffix">(${this.hiddenCount} hidden)</span>`
              : nothing}
          </div>

          <div class="sensor-grid">
            ${groups.map((g) => this._renderGroup(g))}
          </div>`
        : nothing}
    `;
  }

  // ─── Message activity (48h rate history) ──────────────────────────────

  /** Fetch once per device when entities/hass become available. The hass
   *  object identity changes on every state push, so guard on the nb_sent
   *  entity_id to avoid refetching on every update. */
  updated(changed: Map<string, unknown>) {
    if (!this.hass || !this.device) return;
    if (!changed.has('hass') && !changed.has('device') && !changed.has('entities')) return;
    if (this.device.type === 'companion') {
      const key = this.entities.map((e) => e.entity_id).sort().join(',');
      if (key !== this._companionKey) {
        this._companionKey = key;
        void this._loadCompanionStats();
        if (!this._limits) void getRadioLimits(this.hass, this.device.entry_id).then((l) => { this._limits = l; });
        if (!this._companionTimer) this._companionTimer = setInterval(() => void this._loadCompanionStats(), 300_000);
      }
      return;
    }
    const nbSent = this._findEntityIdMatching('nb_sent');
    const key = nbSent?.entity_id ?? null;
    if (key && key !== this._rateHistoryKey) {
      this._rateHistoryKey = key;
      void this._fetchRateHistory();
    } else if (!key && this._rateHistoryKey !== null) {
      this._rateHistoryKey = null;
      this._rateHistory = [];
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._companionTimer) clearInterval(this._companionTimer);
    this._companionTimer = undefined;
    this._companionKey = null;
  }

  /** The companion's statistics entities, by sensor key. */
  private _companionIds(): Record<string, string> {
    const out: Record<string, string> = {};
    for (const key of ['nb_sent', 'sent_flood', 'sent_direct', 'nb_recv', 'recv_flood', 'recv_direct', 'recv_errors',
      'tx_airtime', 'rx_airtime', 'noise_floor', 'last_rssi', 'battery_percentage']) {
      const e = this.entities.find((x) => x.entity_id.startsWith('sensor.') && x.entity_id.includes(key)
        && !x.entity_id.includes(`${key}_rate`) && !x.entity_id.includes(`${key}_util`));
      if (e) out[key] = e.entity_id;
    }
    return out;
  }

  private async _loadCompanionStats() {
    if (!this.hass) return;
    const ids = Object.values(this._companionIds());
    if (!ids.length) { this._spark = {}; this._rangeStats = {}; return; }
    const [spark, range] = await Promise.all([
      fetchStats(this.hass, ids, 24),
      this._range === 24 ? Promise.resolve(null) : fetchStats(this.hass, ids, this._range),
    ]);
    this._spark = spark;
    this._rangeStats = range ?? spark;
  }

  private async _setRange(hours: number) {
    this._range = hours;
    if (!this.hass) return;
    const ids = Object.values(this._companionIds());
    this._rangeStats = hours === 24 ? this._spark : await fetchStats(this.hass, ids, hours);
  }

  /** The series behind each companion tile, for its small graph and its larger chart. */
  private static readonly TILE_CHARTS: Record<string, { title: string; unit: string; lines: Array<{ key: string; how: 'mean' | 'rate' | 'pct'; label: string; cls: string }> }> = {
    battery: { title: 'Battery', unit: '%', lines: [{ key: 'battery_percentage', how: 'mean', label: 'Battery', cls: 's-ok' }] },
    noise: { title: 'Noise floor', unit: 'dBm', lines: [{ key: 'noise_floor', how: 'mean', label: 'Noise floor', cls: 's-ok' }] },
    signal: { title: 'Last packet strength', unit: 'dBm', lines: [{ key: 'last_rssi', how: 'mean', label: 'RSSI', cls: 's-tx' }] },
    airtime: { title: 'Radio activity', unit: '% of time', lines: [
      { key: 'tx_airtime', how: 'pct', label: 'Transmitting', cls: 's-tx' },
      { key: 'rx_airtime', how: 'pct', label: 'Receiving', cls: 's-rx' }] },
    sent: { title: 'Messages sent', unit: 'msg/min', lines: [
      { key: 'sent_flood', how: 'rate', label: 'Flood', cls: 's-tx' },
      { key: 'sent_direct', how: 'rate', label: 'Direct', cls: 's-rx' }] },
    received: { title: 'Messages received', unit: 'msg/min', lines: [
      { key: 'recv_flood', how: 'rate', label: 'Flood', cls: 's-tx' },
      { key: 'recv_direct', how: 'rate', label: 'Direct', cls: 's-rx' },
      { key: 'recv_errors', how: 'rate', label: 'Errors', cls: 's-err' }] },
  };

  /** Each line of a tile chart as [time, value] points, from the given statistics. */
  private _chartLines(chart: string, stats: StatSeries, hours: number) {
    const def = NodeSummary.TILE_CHARTS[chart];
    const ids = this._companionIds();
    const per = periodMinutes(statsPeriod(hours));
    return def.lines.filter((l) => ids[l.key]).map((l) => ({
      ...l,
      entity: ids[l.key],
      points: (stats[ids[l.key]] || []).map((p) => {
        const v = l.how === 'mean' ? p.mean : typeof p.change === 'number' ? Math.max(0, p.change) / per * (l.how === 'pct' ? 100 : 1) : null;
        return [p.start, v] as [number, number | null];
      }).filter((pt): pt is [number, number] => typeof pt[1] === 'number' && Number.isFinite(pt[1])),
    }));
  }

  private static _fmtVal(v: number): string {
    const a = Math.abs(v);
    return a >= 100 ? v.toFixed(0) : a >= 10 ? v.toFixed(1) : v.toFixed(2).replace(/\.?0+$/, '') || '0';
  }

  private static _fmtTime(ts: number): string {
    const d = new Date(ts);
    const today = new Date().toDateString() === d.toDateString();
    return today ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : d.toLocaleString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' });
  }

  @state() private _hover: { chart: string; x: number; text: string } | null = null;

  /** A tile's small graph of the last 24 h, with its range and unit labelled. */
  private _sparkline(chart: string) {
    const def = NodeSummary.TILE_CHARTS[chart];
    const lines = this._chartLines(chart, this._spark, 24).filter((l) => l.points.length > 1);
    if (!lines.length) return nothing;
    const all = lines.flatMap((l) => l.points.map((p) => p[1]));
    let min = Math.min(...all);
    let max = Math.max(...all);
    if (def.lines[0].how !== 'mean') min = 0;
    if (max - min < 1e-9) max = min + 1;
    const t0 = Math.min(...lines.map((l) => l.points[0][0]));
    const t1 = Math.max(...lines.map((l) => l.points[l.points.length - 1][0]));
    const x = (t: number) => ((t - t0) / Math.max(1, t1 - t0)) * 200;
    const y = (v: number) => 38 - ((v - min) / (max - min)) * 34;
    const onMove = (e: MouseEvent) => {
      const box = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const frac = Math.min(1, Math.max(0, (e.clientX - box.left) / box.width));
      const t = t0 + frac * (t1 - t0);
      const parts = lines.map((l) => {
        const near = l.points.reduce((best, p) => (Math.abs(p[0] - t) < Math.abs(best[0] - t) ? p : best), l.points[0]);
        return `${lines.length > 1 ? `${l.label} ` : ''}${NodeSummary._fmtVal(near[1])}`;
      });
      this._hover = { chart, x: frac * 100, text: `${NodeSummary._fmtTime(t)} · ${parts.join(' · ')} ${def.unit}` };
    };
    const hover = this._hover?.chart === chart ? this._hover : null;
    return html`
      <div class="spark-wrap" @click=${(e: Event) => e.stopPropagation()}>
        <div class="spark-y"><span>${NodeSummary._fmtVal(max)}</span><span>${NodeSummary._fmtVal(min)}</span></div>
        <div class="spark-plot" @mousemove=${onMove} @mouseleave=${() => { this._hover = null; }}
          @click=${() => this._openChart(chart)}>
          <svg class="spark" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
            ${lines.map((l) => svg`<polyline class=${l.cls} points=${l.points.map((p) => `${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join(' ')}></polyline>`)}
            ${hover ? svg`<line class="spark-cur" x1=${hover.x * 2} x2=${hover.x * 2} y1="0" y2="40"></line>` : nothing}
          </svg>
          ${hover ? html`<div class="spark-tip">${hover.text}</div>` : nothing}
        </div>
        <div></div>
        <div class="spark-x"><span>24 h ago</span><span>${def.unit}${lines.length > 1 ? html` · ${lines.map((l) => html`<span class="key ${l.cls}">${l.label}</span>`)}` : ''}</span><span>now</span></div>
      </div>`;
  }

  // ─── A tile's larger chart (all its lines) ─────────────────────────
  @state() private _detail: string | null = null;
  @state() private _detailRange = 24;
  @state() private _detailStats: StatSeries = {};
  @state() private _detailHover: { x: number; t: number } | null = null;

  /** Open a tile's larger chart (also used by the battery badge in the card header). */
  openChart(chart: string) {
    this._openChart(chart);
  }

  private _openChart(chart: string) {
    this._detail = chart;
    this._detailHover = null;
    void this._loadDetail(this._detailRange);
  }

  private async _loadDetail(hours: number) {
    this._detailRange = hours;
    if (!this.hass || !this._detail) return;
    const ids = this._companionIds();
    const want = NodeSummary.TILE_CHARTS[this._detail].lines.map((l) => ids[l.key]).filter(Boolean);
    this._detailStats = hours === 24 ? this._spark : await fetchStats(this.hass, want, hours);
  }

  private _renderDetail() {
    if (!this._detail) return nothing;
    const chart = this._detail;
    const def = NodeSummary.TILE_CHARTS[chart];
    const hours = this._detailRange;
    const lines = this._chartLines(chart, this._detailStats, hours);
    const pts = lines.flatMap((l) => l.points);
    const W = 640, H = 240, L = 48, R = 12, T = 12, B = 28;
    let body: unknown = html`<div class="detail-empty">No recorded data for this period yet.</div>`;
    if (pts.length > 1) {
      let min = Math.min(...pts.map((p) => p[1]));
      let max = Math.max(...pts.map((p) => p[1]));
      if (def.lines[0].how !== 'mean') min = 0;
      if (max - min < 1e-9) max = min + 1;
      const t1 = Date.now();
      const t0 = t1 - hours * 3600_000;
      const x = (t: number) => L + ((t - t0) / (t1 - t0)) * (W - L - R);
      const y = (v: number) => T + (1 - (v - min) / (max - min)) * (H - T - B);
      const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => min + f * (max - min));
      const xTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => t0 + f * (t1 - t0));
      const hover = this._detailHover;
      const onMove = (e: MouseEvent) => {
        const box = (e.currentTarget as SVGElement).getBoundingClientRect();
        const px = ((e.clientX - box.left) / box.width) * W;
        if (px < L || px > W - R) { this._detailHover = null; return; }
        this._detailHover = { x: px, t: t0 + ((px - L) / (W - L - R)) * (t1 - t0) };
      };
      const nearest = (l: { points: Array<[number, number]> }, t: number) =>
        l.points.reduce((best, p) => (Math.abs(p[0] - t) < Math.abs(best[0] - t) ? p : best), l.points[0]);
      body = html`
        <svg class="detail-chart" viewBox="0 0 ${W} ${H}" @mousemove=${onMove} @mouseleave=${() => { this._detailHover = null; }}>
          ${ticks.map((v) => svg`<line class="grid" x1=${L} x2=${W - R} y1=${y(v)} y2=${y(v)}></line>
            <text class="axis" x=${L - 6} y=${y(v) + 4} text-anchor="end">${NodeSummary._fmtVal(v)}</text>`)}
          ${xTicks.map((t, i) => svg`<text class="axis" x=${x(t)} y=${H - 8} text-anchor=${i === 0 ? 'start' : i === 4 ? 'end' : 'middle'}>${i === 4 ? 'now' : NodeSummary._fmtTime(t)}</text>`)}
          ${lines.map((l) => (l.points.length > 1 ? svg`<polyline class=${l.cls} points=${l.points.map((p) => `${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join(' ')}></polyline>` : nothing))}
          ${hover ? svg`<line class="cur" x1=${hover.x} x2=${hover.x} y1=${T} y2=${H - B}></line>` : nothing}
        </svg>
        <div class="detail-read">${hover
          ? html`<b>${NodeSummary._fmtTime(hover.t)}</b> · ${lines.filter((l) => l.points.length).map((l) => html`<span class="key ${l.cls}">${l.label}</span> ${NodeSummary._fmtVal(nearest(l, hover.t)[1])} `)}${def.unit}`
          : html`Hover the chart to read values. Values are ${def.unit}${def.lines[0].how === 'mean' ? '' : ', worked out from the radio\'s running totals'}.`}</div>`;
    }
    const ranges: Array<[string, number]> = [['6 h', 6], ['24 h', 24], ['48 h', 48], ['7 d', 168], ['30 d', 720]];
    return html`
      <div class="detail-scrim" @click=${() => { this._detail = null; }}></div>
      <div class="detail" role="dialog" aria-label=${def.title}>
        <div class="detail-head">
          <b>${def.title}</b>
          <span class="range-chips">${ranges.map(([label, h]) => html`<button class="range-chip ${hours === h ? 'on' : ''}"
            aria-pressed=${hours === h} @click=${() => this._loadDetail(h)}>${label}</button>`)}</span>
          <button class="detail-close" aria-label="Close" @click=${() => { this._detail = null; }}>✕</button>
        </div>
        ${body}
        <div class="detail-legend">${lines.map((l) => html`
          <span class="detail-line"><span class="key ${l.cls}">${l.label}</span>
            <button class="link-btn" @click=${() => this._fireMoreInfo(l.entity)}>Open in Home Assistant</button></span>`)}</div>
      </div>`;
  }

  /** Activity chart data from the totals' per-period change, as messages per minute. */
  private _companionRatePoints(): RatePoint[] {
    const ids = this._companionIds();
    const per = periodMinutes(statsPeriod(this._range));
    const map: Array<[string, string]> = [['sent_flood', 'sent_flood'], ['sent_direct', 'sent_direct'],
      ['recv_flood', 'recv_flood'], ['recv_direct', 'recv_direct'], ['errors', 'recv_errors']];
    const byTs: Record<number, Record<string, number>> = {};
    for (const [seriesKey, key] of map) {
      for (const p of this._rangeStats[ids[key]] || []) {
        if (typeof p.change !== 'number') continue;
        (byTs[p.start] ??= {})[seriesKey] = Math.max(0, p.change) / per;
      }
    }
    return Object.entries(byTs).map(([ts, values]) => ({ timestamp: Number(ts), values })).sort((a, b) => a.timestamp - b.timestamp);
  }

  private _renderCompanionActivityCard() {
    const ids = this._companionIds();
    if (!ids.nb_sent && !ids.nb_recv) return nothing;
    const data = this._companionRatePoints();
    const ranges: Array<[string, number]> = [['6 h', 6], ['24 h', 24], ['48 h', 48], ['7 d', 168], ['30 d', 720]];
    const rawIds = ['nb_sent', 'nb_recv', 'recv_errors', 'tx_airtime', 'rx_airtime'].map((k) => ids[k]).filter(Boolean);
    return html`
      <div class="subsection-label activity-head">
        <span>Message activity</span>
        <span class="range-chips" role="group" aria-label="Period">
          ${ranges.map(([label, h]) => html`<button class="range-chip ${this._range === h ? 'on' : ''}"
            aria-pressed=${this._range === h} @click=${() => this._setRange(h)}>${label}</button>`)}
        </span>
        <a class="raw-link" href=${historyUrl(rawIds, this._range)}
          title="Home Assistant's History shows these as running totals, which reset when the radio restarts"
          @click=${(e: Event) => { e.preventDefault(); history.pushState(null, '', historyUrl(rawIds, this._range)); window.dispatchEvent(new CustomEvent('location-changed')); }}>Raw totals in History ↗</a>
      </div>
      ${data.length
        ? html`<meshcore-message-rate-chart .data=${data} .timeRange=${this._range}></meshcore-message-rate-chart>`
        : html`<div class="activity-empty">No recorded activity for this period yet. Home Assistant records these every 5 minutes.</div>`}
    `;
  }

  /** Uptime, send queue, faults, contact space and firmware, for the companion. */
  private _renderCompanionHealth(consumed: Set<string>) {
    const rows: TemplateResult[] = [];
    const uptime = this._findByMetric('uptime_hours');
    if (uptime) {
      consumed.add(uptime.entity_id);
      const min = this._readUptimeMinutes(uptime);
      const d = Math.floor(min / 1440);
      const h = Math.floor((min % 1440) / 60);
      rows.push(html`<div class="health-row" @click=${() => this._fireMoreInfo(uptime.entity_id)}><span class="hk">Uptime</span>
        <span class="hv">${Number.isFinite(min) ? (d ? `${d} d ${h} h` : `${h} h ${Math.floor(min % 60)} min`) : '—'}</span></div>`);
    }
    const queue = this._findEntityIdMatching('tx_queue_len');
    if (queue) {
      consumed.add(queue.entity_id);
      rows.push(html`<div class="health-row" @click=${() => this._fireMoreInfo(queue.entity_id)}><span class="hk">Send queue</span>
        <span class="hv">${this._formatNumber(this._readNumber(queue.entity_id), 0)}</span></div>`);
    }
    const faults = this.entities.filter((e) => e.entity_id.startsWith('binary_sensor.') && /err_(pool_full|cad_timeout|rx_timeout)/.test(e.entity_id));
    if (faults.length) {
      faults.forEach((f) => consumed.add(f.entity_id));
      const names: Record<string, string> = { pool_full: 'Message pool full', cad_timeout: 'Channel-check timeout', rx_timeout: 'Receive timeout' };
      const on = faults.filter((f) => this.hass?.states[f.entity_id]?.state === 'on');
      rows.push(html`<div class="health-row" title="Each stays set until the radio restarts"
        @click=${() => this._fireMoreInfo((on[0] ?? faults[0]).entity_id)}><span class="hk">Radio faults since restart</span>
        <span class="hv">${on.length
          ? html`<span class="hbadge warn">${on.map((f) => Object.entries(names).find(([k]) => f.entity_id.includes(`err_${k}`))?.[1] ?? f.label).join(', ')}</span>`
          : html`<span class="hbadge ok">None</span>`}</span></div>`);
    }
    const lim = this._limits;
    const nodeCount = this._findEntityIdMatching('node_count');
    const contacts = lim?.contacts ?? (nodeCount ? this._readNumber(nodeCount.entity_id) : NaN);
    if (Number.isFinite(contacts)) {
      rows.push(html`<div class="health-row" title="Contacts stored on your radio, out of the most it can hold">
        <span class="hk">Contacts on radio</span><span class="hv">${contacts}${lim?.max_contacts ? ` / ${lim.max_contacts}` : ''}</span></div>`);
    }
    if (lim?.discovered != null) {
      rows.push(html`<div class="health-row" title="Kept by Home Assistant, not on your radio">
        <span class="hk">Discovered nodes</span><span class="hv">${lim.discovered.toLocaleString()}${lim.discovered_limit
          ? ` / ${lim.discovered_limit.toLocaleString()}` : html` <span class="hbadge info">no limit set</span>`}</span></div>`);
    }
    const fw = this._firmwareEntity();
    if (fw) {
      const st = this.hass?.states[fw];
      const latest = st?.attributes?.latest_version as string | undefined;
      const installed = st?.attributes?.installed_version as string | undefined;
      rows.push(html`<div class="health-row" @click=${() => this._fireMoreInfo(fw)}><span class="hk">Firmware</span>
        <span class="hv">${installed ?? '—'}${st?.state === 'on' && latest ? html` <span class="hbadge info">${latest} available</span>` : nothing}</span></div>`);
    }
    if (!rows.length) return nothing;
    return html`<div class="subsection-label">Health</div><div class="health-grid">${rows}</div>`;
  }

  /** The core integration's firmware update entity for this radio. */
  private _firmwareEntity(): string | null {
    const own = this.entities.find((e) => e.entity_id.startsWith('update.'));
    if (own) return own.entity_id;
    const p6 = (this.device as CompanionDeviceDescriptor | undefined)?.pubkey_prefix?.slice(0, 6).toLowerCase();
    if (!p6 || !this.hass) return null;
    return Object.keys(this.hass.states).find((id) => id.startsWith('update.') && id.includes(p6) && id.endsWith('firmware')) ?? null;
  }

  private _renderDiagnosticsHint() {
    if (this._companionIds().nb_sent || this._companionIds().noise_floor) return nothing;
    return html`<div class="diag-hint">Turn on <b>Self Diagnostics</b> in the MeshCore integration to see signal, airtime and
      traffic stats for your radio. It reads them over your radio's connection and doesn't use any airtime.
      <a href="/config/integrations/integration/meshcore" @click=${(e: Event) => { e.preventDefault(); history.pushState(null, '', '/config/integrations/integration/meshcore'); window.dispatchEvent(new CustomEvent('location-changed')); }}>Open MeshCore settings</a></div>`;
  }

  /** Derive a `_rate` sibling entity_id from a totals entity_id. The rate
   *  sensors are excluded from `entities` by classify-entity but follow the
   *  fixed `..._<key>_rate_<suffix>` pattern (mirrors _readDerivedRate). */
  private _deriveRateId(totalsEid: string, key: string): string {
    return totalsEid.replace(`_${key}_`, `_${key}_rate_`);
  }

  private async _fetchRateHistory(): Promise<void> {
    if (!this.hass) return;
    // Five series: sent + received split into flood/direct, plus errors.
    // Each maps a totals entity to its `_rate` sibling statistic.
    const wanted: Array<[string, string]> = [
      ['sent_flood', 'sent_flood'],
      ['sent_direct', 'sent_direct'],
      ['recv_flood', 'recv_flood'],
      ['recv_direct', 'recv_direct'],
      ['errors', 'recv_errors'],
    ];
    const series: Array<[string, string]> = [];
    for (const [seriesKey, totalsKey] of wanted) {
      const info = this._findEntityIdMatching(totalsKey);
      if (info) series.push([seriesKey, this._deriveRateId(info.entity_id, totalsKey)]);
    }
    if (series.length === 0) { this._rateHistory = []; return; }

    try {
      const stats = await this.hass.callWS<Record<string, Array<{ start?: string; mean?: number }>>>({
        type: 'recorder/statistics_during_period',
        start_time: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        end_time: new Date().toISOString(),
        statistic_ids: series.map(([, id]) => id),
        period: 'hour',
      });
      const byTs: Record<number, Record<string, number>> = {};
      for (const [seriesKey, statId] of series) {
        const pts = stats[statId];
        if (!Array.isArray(pts)) continue;
        for (const p of pts) {
          if (p.start == null || p.mean == null) continue;
          const ts = new Date(p.start).getTime();
          (byTs[ts] ??= {})[seriesKey] = p.mean;
        }
      }
      this._rateHistory = Object.entries(byTs)
        .map(([ts, values]) => ({ timestamp: parseInt(ts, 10), values }))
        .sort((a, b) => a.timestamp - b.timestamp);
    } catch {
      this._rateHistory = [];
    }
  }

  private _renderMessageActivityCard() {
    if (!this._rateHistory.length) return nothing;
    return html`
      <div class="subsection-label">Message activity (48h)</div>
      <meshcore-message-rate-chart .data=${this._rateHistory}></meshcore-message-rate-chart>
    `;
  }

  // ─── Hero row variants ────────────────────────────────────────────────

  private _renderHeroTiles(consumed: Set<string>): TemplateResult | typeof nothing {
    const dev = this.device!;
    if (dev.type === 'companion') return this._renderCompanionHero(consumed);
    if (dev.type === 'repeater') return this._renderRepeaterHero(consumed);
    return this._renderClientHero(consumed);
  }

  // Managed-device (repeater/client) location is shown as a compact "Loc:"
  // stat in the card header (devices-page) rather than a hero tile, so it is
  // not rendered here. The companion keeps its Location hero tile.
  private _renderRepeaterHero(consumed: Set<string>) {
    return html`
      ${this._renderBatteryTile()}
      ${this._renderSignalTile()}
      ${this._renderRadioActivityTile()}
      ${this._renderMessagesSentTile(consumed)}
      ${this._renderMessagesReceivedTile(consumed)}
      ${this._renderRequestsTile(consumed)}
    `;
  }

  private _renderClientHero(consumed: Set<string>) {
    return html`
      ${this._renderBatteryTile()}
      ${this._renderSignalTile()}
      ${this._renderRequestsTile(consumed)}
    `;
  }

  // Companion hero mirrors the repeater hero so the locally-attached node
  // gets the same rich tiles once its self-diagnostic entities exist. Every
  // tile self-hides when its backing entity is absent, so a companion with
  // no Self Diagnostics and no battery simply renders no hero tiles. The
  // battery slot uses _renderBatteryTile directly — it shows the battery
  // card when a battery is present and renders nothing otherwise (no "USB /
  // mains" placeholder).
  private _renderCompanionHero(consumed: Set<string>) {
    // Battery is a badge in the card header (settings-page); its chart opens
    // through openChart('battery').
    const battery = this._findByMetric('battery_pct');
    if (battery) consumed.add(battery.entity_id);
    return html`
      ${this._renderNoiseTile(consumed)}
      ${this._renderSignalTile()}
      ${this._renderCompanionRadioActivityTile()}
      ${this._renderMessagesSentTile(consumed)}
      ${this._renderMessagesReceivedTile(consumed)}
      ${this._renderLocationTile()}
    `;
  }

  /** Companion: the radio's noise floor, with its last 24 h. */
  private _renderNoiseTile(consumed: Set<string>) {
    const noise = this._findEntityIdMatching('noise_floor');
    if (!noise) return nothing;
    consumed.add(noise.entity_id);
    const v = this._readNumber(noise.entity_id);
    return html`
      <div class="hero-tile" @click=${() => this._openChart('noise')}>
        <div class="hero-tile-head">
          <span>Noise floor${this._renderInfoTip({
            band: 'info',
            fillPct: 0,
            tooltip: 'Background radio noise your radio hears on its frequency. Lower (more negative) is quieter. ' +
                     'A rise usually means interference nearby.',
          })}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${this._formatNumber(v, 0)}<span class="unit">dBm</span></span>
        </div>
        ${this._sparkline('noise')}
      </div>`;
  }

  private _renderBatteryTile() {
    const battery = this._findByMetric('battery_pct');
    if (!battery) return nothing; // mains-powered node — omit tile
    const pct = this._readNumber(battery.entity_id);
    const voltage = this._findEntityIdMatching('battery_voltage') ?? this._findEntityByLabel('Voltage');
    const voltageVal = voltage ? this._readNumber(voltage.entity_id) : NaN;
    const ev = evaluateSensor('battery_pct', pct);

    return html`
      <div class="hero-tile" @click=${() => (this.device?.type === 'companion' ? this._openChart('battery') : this._fireMoreInfo(battery.entity_id))}>
        <div class="hero-tile-head">
          <span>Battery${this._renderInfoTip(ev)}</span>
          <span class="status-dot ${ev.band}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${this._formatNumber(pct, 0)}<span class="unit">%</span>
          </span>
          ${Number.isFinite(voltageVal)
            ? html`<span class="secondary">· ${voltageVal.toFixed(3)} V</span>`
            : nothing}
        </div>
        <meshcore-stat-bar
          .value=${pct}
          .min=${0}
          .max=${100}
          .band=${ev.band}>
        </meshcore-stat-bar>
        ${this.device?.type === 'companion' ? this._sparkline('battery') : nothing}
      </div>
    `;
  }

  private _renderSignalTile() {
    const rssi = this._findByMetric('rssi');
    if (!rssi) return nothing;
    const rssiVal = this._readNumber(rssi.entity_id);
    const snr = this._findByMetric('snr');
    const snrVal = snr ? this._readNumber(snr.entity_id) : NaN;
    const ev = evaluateSensor('rssi', rssiVal);

    return html`
      <div class="hero-tile" @click=${() => (this.device?.type === 'companion' ? this._openChart('signal') : this._fireMoreInfo(rssi.entity_id))}>
        <div class="hero-tile-head">
          <span>Last message strength${this._renderInfoTip(ev)}</span>
          <span class="status-dot ${ev.band}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${this._formatNumber(rssiVal, 0)}<span class="unit">dBm</span>
          </span>
          ${Number.isFinite(snrVal)
            ? html`<span class="secondary">· SNR ${snrVal.toFixed(1)} dB</span>`
            : nothing}
        </div>
        <meshcore-stat-bar
          .value=${rssiVal}
          .min=${-130}
          .max=${-30}
          .band=${ev.band}>
        </meshcore-stat-bar>
        ${this.device?.type === 'companion' ? this._sparkline('signal') : nothing}
      </div>
    `;
  }

  private _renderRadioActivityTile() {
    const tx = this._findByMetric('tx_airtime_util');
    const rx = this._findByMetric('rx_airtime_util');
    if (!tx && !rx) return nothing;
    const txVal = tx ? this._readNumber(tx.entity_id) : 0;
    const rxVal = rx ? this._readNumber(rx.entity_id) : 0;
    const txN = Number.isFinite(txVal) ? Math.max(0, txVal) : 0;
    const rxN = Number.isFinite(rxVal) ? Math.max(0, rxVal) : 0;
    const idleN = Math.max(0, 100 - txN - rxN);

    // Use the worse of the two airtime bands as the dot.
    const txBand = evaluateSensor('tx_airtime_util', txN).band;
    const rxBand = evaluateSensor('rx_airtime_util', rxN).band;
    const dotBand: Band = this._worseBand(txBand, rxBand);

    const segments: StackedBarSegment[] = [
      { value: txN, label: `TX ${txN.toFixed(1)}%`, kind: 'tx' },
      { value: rxN, label: `RX ${rxN.toFixed(1)}%`, kind: 'rx' },
      { value: idleN, label: `Idle ${idleN.toFixed(1)}%`, kind: 'idle' },
    ];

    // Click handlers for the TX / RX text segments — open more-info for
    // the corresponding utilization entity. Idle has no entity to deep-link
    // to, so it stays plain text. Each handler stops propagation so the
    // parent tile's click doesn't double-fire.
    const onTxClick = (e: Event) => {
      e.stopPropagation();
      if (tx) this._fireMoreInfo(tx.entity_id);
    };
    const onRxClick = (e: Event) => {
      e.stopPropagation();
      if (rx) this._fireMoreInfo(rx.entity_id);
    };

    const totalUsed = txN + rxN;

    return html`
      <div class="hero-tile"
           @click=${() => tx && this._fireMoreInfo(tx.entity_id)}>
        <div class="hero-tile-head">
          <span>Radio activity${this._renderInfoTip({
            band: dotBand,
            fillPct: 0,
            tooltip: 'Half-duplex composition over the last reporting interval. ' +
                     'The radio can transmit OR receive, never both. TX above 10% ' +
                     'indicates duty-cycle pressure; sustained TX+RX above 30% ' +
                     'means the channel is congested.',
          })}</span>
          <span class="status-dot ${dotBand}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${totalUsed.toFixed(1)}<span class="unit">%</span></span>
          <span class="secondary">busy · ${window}</span>
        </div>
        <div class="ra-bar-wrap">
          <meshcore-stacked-bar
            .segments=${segments}
            .total=${100}
            .legend=${'none'}>
          </meshcore-stacked-bar>
          <div class="ra-legend">
            ${tx
              ? html`<span class="ra-legend-item" @click=${onTxClick}>
                  <span class="legend-swatch tx"></span>TX ${txN.toFixed(1)}%
                </span>`
              : html`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${txN.toFixed(1)}%
                </span>`}
            ${rx
              ? html`<span class="ra-legend-item" @click=${onRxClick}>
                  <span class="legend-swatch rx"></span>RX ${rxN.toFixed(1)}%
                </span>`
              : html`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${rxN.toFixed(1)}%
                </span>`}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${idleN.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    `;
  }

  private _renderMessagesSentTile(consumed: Set<string>) {
    const nbSent = this._findEntityIdMatching('nb_sent');
    const sentFlood = this._findEntityIdMatching('sent_flood');
    const sentDirect = this._findEntityIdMatching('sent_direct');
    if (!nbSent || (!sentFlood && !sentDirect)) return nothing;

    const totalSent = this._readNumber(nbSent.entity_id);
    const flood = sentFlood ? this._readNumber(sentFlood.entity_id) : 0;
    const direct = sentDirect ? this._readNumber(sentDirect.entity_id) : 0;
    const segs: StackedBarSegment[] = [
      { value: flood,  label: `Flood ${flood}`,   kind: 'flood' },
      { value: direct, label: `Direct ${direct}`, kind: 'direct' },
    ];
    consumed.add(nbSent.entity_id);
    if (sentFlood) consumed.add(sentFlood.entity_id);
    if (sentDirect) consumed.add(sentDirect.entity_id);

    return html`
      <div class="hero-tile" @click=${() => (this.device?.type === 'companion' ? this._openChart('sent') : this._fireMoreInfo(nbSent.entity_id))}>
        <div class="hero-tile-head">
          <span>Messages Sent${this._renderInfoTip({
            band: 'info',
            fillPct: 0,
            tooltip:
              'Messages sent (lifetime), split by send mode:\n' +
              '• Flood — broadcast retransmits visible to all neighbours.\n' +
              '• Direct — routed point-to-point along a path.',
          })}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${this._formatCount(totalSent)}</span>
        </div>
        <meshcore-stacked-bar
          .segments=${segs}
          .legend=${'inline'}>
        </meshcore-stacked-bar>
        ${this.device?.type === 'companion' ? this._sparkline('sent') : nothing}
      </div>
    `;
  }

  private _renderMessagesReceivedTile(consumed: Set<string>) {
    const nbRecv = this._findEntityIdMatching('nb_recv');
    const recvFlood = this._findEntityIdMatching('recv_flood');
    const recvDirect = this._findEntityIdMatching('recv_direct');
    const floodDups = this._findEntityIdMatching('flood_dups');
    const directDups = this._findEntityIdMatching('direct_dups');
    if (!nbRecv || (!recvFlood && !recvDirect)) return nothing;

    const totalRecv = this._readNumber(nbRecv.entity_id);
    const flood = recvFlood ? this._readNumber(recvFlood.entity_id) : 0;
    const direct = recvDirect ? this._readNumber(recvDirect.entity_id) : 0;
    const segs: StackedBarSegment[] = [
      { value: flood,  label: `Flood ${flood}`,   kind: 'flood' },
      { value: direct, label: `Direct ${direct}`, kind: 'direct' },
    ];

    const fdups = floodDups ? this._readNumber(floodDups.entity_id) : 0;
    const ddups = directDups ? this._readNumber(directDups.entity_id) : 0;
    const totalDups = (Number.isFinite(fdups) ? fdups : 0)
                    + (Number.isFinite(ddups) ? ddups : 0);
    const dupRatio = totalRecv > 0 ? (totalDups / totalRecv) * 100 : 0;
    // Dup ratio is informational only -- no banding (see iter14 commit).

    consumed.add(nbRecv.entity_id);
    if (recvFlood) consumed.add(recvFlood.entity_id);
    if (recvDirect) consumed.add(recvDirect.entity_id);
    if (floodDups) consumed.add(floodDups.entity_id);
    if (directDups) consumed.add(directDups.entity_id);

    // recv_errors (STATS_PACKETS counter): surfaced as a thin red line in the
    // bar stack plus an "Error N" legend item -- not a separate table row.
    // Applies to any node that reports it (companion + managed repeater).
    // Each bar is a percentage of its OWN total (verified against firmware):
    //  - errors are CRC failures, DISJOINT from received (RadioLibWrappers:
    //    n_recv vs n_recv_errors), so the error rate's denominator is all
    //    reception attempts = received + errors.
    //  - duplicates are a SUBSET of received, so their denominator is nb_recv.
    const recvErrorsInfo = this._findEntityIdMatching('recv_errors');
    const recvErrorsRaw = recvErrorsInfo
      ? this._readNumber(recvErrorsInfo.entity_id)
      : NaN;
    const recvErrorsN = Number.isFinite(recvErrorsRaw) ? recvErrorsRaw : 0;
    const attempts = totalRecv + recvErrorsN;
    const errRatio = attempts > 0 ? (recvErrorsN / attempts) * 100 : 0;
    if (recvErrorsInfo) consumed.add(recvErrorsInfo.entity_id);

    return html`
      <div class="hero-tile" @click=${() => (this.device?.type === 'companion' ? this._openChart('received') : this._fireMoreInfo(nbRecv.entity_id))}>
        <div class="hero-tile-head">
          <span>Messages Received${this._renderInfoTip({
            band: 'info',
            fillPct: 0,
            tooltip:
              'Messages received (lifetime), split by receive mode:\n' +
              '• Flood — broadcast packets received from neighbours.\n' +
              '• Direct — routed packets where this node is on the path.\n\n' +
              'Each bar below is a percentage of its own total:\n' +
              '• Red = receive errors (CRC failures), as a share of all ' +
              'reception attempts (received + errors) — i.e. the error rate.\n' +
              '• Amber = duplicate receptions, as a share of received ' +
              'messages (duplicates are a subset of received).\n\n' +
              'Both are context only, not banded — in a flooding mesh every ' +
              'active neighbour retransmits the same flood once, so a high ' +
              'duplicate ratio is normal (a 2-neighbour repeater sees ~50%, ' +
              'a 3-neighbour ~67%, etc.).',
          })}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${this._formatCount(totalRecv)}</span>
        </div>
        <meshcore-stacked-bar
          .segments=${segs}
          .legend=${'none'}>
        </meshcore-stacked-bar>
        ${recvErrorsN > 0
          ? html`<div class="err-line"
                      title="Receive errors (CRC failures): ${recvErrorsN} — ${errRatio.toFixed(1)}% of reception attempts (received + errors)">
              <div class="err-line-fill" style="width:${Math.min(100, errRatio).toFixed(1)}%"></div>
            </div>`
          : nothing}
        ${totalDups > 0
          ? html`<div class="dup-line"
                      title="Duplicate receptions: ${totalDups} — ${dupRatio.toFixed(1)}% of received messages">
              <div class="dup-line-fill" style="width:${Math.min(100, dupRatio).toFixed(1)}%"></div>
            </div>`
          : nothing}
        <div class="msg-legend">
          <span><span class="msg-swatch flood"></span>Flood ${flood}</span>
          <span><span class="msg-swatch direct"></span>Direct ${direct}</span>
          ${recvErrorsN > 0
            ? html`<span><span class="msg-swatch error"></span>Error ${recvErrorsN}</span>`
            : nothing}
          ${totalDups > 0
            ? html`<span><span class="msg-swatch dup"></span>Dup ${totalDups}</span>`
            : nothing}
        </div>
        ${this.device?.type === 'companion' ? this._sparkline('received') : nothing}
      </div>
    `;
  }

  private _renderRequestsTile(consumed: Set<string>) {
    const successes = this._findEntityIdMatching('request_succ');
    const failures = this._findEntityIdMatching('request_fail');
    if (!successes || !failures) return nothing;

    const sVal = this._readNumber(successes.entity_id);
    const fVal = this._readNumber(failures.entity_id);
    const total = sVal + fVal;
    const rate = total > 0 ? (sVal / total) * 100 : 0;
    const ev: SensorEval = total >= 50
      ? evaluateSensor('request_success_rate', rate)
      : { band: 'info', fillPct: 0, tooltip: '' };

    const tooltip =
      'Outgoing requests this node initiated (login, telemetry, ' +
      'neighbour query) and how they resolved. Success rate bands: ' +
      'Green > 90%, Yellow 70–90%, Red < 70%, with a minimum sample ' +
      'of 50 attempts to colour. Below the floor, the bar stays ' +
      'neutral — too few samples to judge.';

    const segs: StackedBarSegment[] = [
      { value: sVal, label: `OK ${sVal}`,    kind: 'success' },
      { value: fVal, label: `Fail ${fVal}`, kind: 'failure' },
    ];

    consumed.add(successes.entity_id);
    consumed.add(failures.entity_id);

    return html`
      <div class="hero-tile" @click=${() => this._fireMoreInfo(successes.entity_id)}>
        <div class="hero-tile-head">
          <span>Requests${this._renderInfoTip({ ...ev, tooltip })}</span>
          <span class="status-dot ${ev.band}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${total > 0 ? `${rate.toFixed(0)}%` : '—'}</span>
          ${total > 0
            ? html`<span class="secondary">· ${total} attempt${total === 1 ? '' : 's'}</span>`
            : nothing}
        </div>
        <meshcore-stacked-bar
          .segments=${segs}
          .legend=${'inline'}>
        </meshcore-stacked-bar>
      </div>
    `;
  }

  /** Format an integer count with thousands separators (e.g., 13,807). */
  private _formatCount(n: number): string {
    if (!Number.isFinite(n)) return '—';
    return Math.round(n).toLocaleString();
  }

  private _renderLocationTile() {
    const lat = this._findEntityIdMatching('latitude');
    const lon = this._findEntityIdMatching('longitude');
    let latVal = lat ? this._readNumber(lat.entity_id) : NaN;
    let lonVal = lon ? this._readNumber(lon.entity_id) : NaN;
    let source: 'entity' | 'fallback' = 'entity';

    // Fallback to caller-supplied lat/lon (typically Contact.adv_lat/lon
    // for managed devices that don't have dedicated location sensors).
    if (!Number.isFinite(latVal) && Number.isFinite(this.fallbackLatitude!)) {
      latVal = this.fallbackLatitude!;
      source = 'fallback';
    }
    if (!Number.isFinite(lonVal) && Number.isFinite(this.fallbackLongitude!)) {
      lonVal = this.fallbackLongitude!;
      source = 'fallback';
    }

    const hasGps = Number.isFinite(latVal) && Number.isFinite(lonVal)
                   && (latVal !== 0 || lonVal !== 0);

    // Nothing to show: no usable coordinates (no GPS entity/fallback, or a
    // 0,0 placeholder). Hide the tile entirely rather than render an empty
    // "—" that just wastes hero space.
    if (!hasGps) return nothing;

    // "Updated X ago" timestamp resolution:
    //  - Entity-based location: HA state's `last_updated` (ISO string).
    //  - Fallback location:    `fallbackUpdated` prop (Unix seconds,
    //    typically Contact.last_advert).
    let updatedDate: Date | null = null;
    if (source === 'entity' && lat) {
      const iso = this.hass?.states[lat.entity_id]?.last_updated;
      if (iso) {
        const d = new Date(iso);
        if (!Number.isNaN(d.getTime())) updatedDate = d;
      }
    } else if (source === 'fallback' && Number.isFinite(this.fallbackUpdated!)) {
      updatedDate = new Date(this.fallbackUpdated! * 1000);
    }
    const updatedText = hasGps && updatedDate
      ? this._formatRelativeTime(updatedDate)
      : '';

    const onClick = () => {
      if (lat) this._fireMoreInfo(lat.entity_id);
    };

    return html`
      <div class="hero-tile loc-tile">
        <div class="hero-tile-head" @click=${onClick} style="cursor:pointer">
          <span>Location${source === 'fallback'
            ? html`<span style="opacity:0.55;text-transform:none;letter-spacing:0;font-size:10px;margin-left:4px;">via contact</span>`
            : nothing}</span>
          ${updatedText ? html`<span class="loc-updated">Updated ${updatedText}</span>` : nothing}
        </div>
        <meshcore-location-map fill .getHass=${() => this.hass} .lat=${latVal} .lon=${lonVal}
          .label=${this.device?.name ?? ''}></meshcore-location-map>
      </div>
    `;
  }

  /** Format a Date as a short relative-time string like
   *  "just now" / "5 min ago" / "2 h ago" / "3 d ago". */
  private _formatRelativeTime(d: Date): string {
    const deltaSec = (Date.now() - d.getTime()) / 1000;
    if (!Number.isFinite(deltaSec) || deltaSec < 0) return 'just now';
    if (deltaSec < 60)    return 'just now';
    if (deltaSec < 3600)  return `${Math.floor(deltaSec / 60)} min ago`;
    if (deltaSec < 86400) return `${Math.floor(deltaSec / 3600)} h ago`;
    return `${Math.floor(deltaSec / 86400)} d ago`;
  }

  // _renderMeshNodeCountTile removed: the companion's added-node count moved
  // to the Settings-tab device header (next to Firmware / Key) as a compact
  // "Added nodes" stat — see settings-page.ts.

  // _renderCompanionPowerTile removed: the companion battery slot now uses
  // _renderBatteryTile directly, which renders nothing when there's no
  // battery (no "USB / mains" placeholder tile).

  // Radio Activity tile for the companion node. A managed repeater reports
  // a windowed *_airtime_utilization percentage that _renderRadioActivityTile
  // consumes directly; the companion exposes only RAW cumulative airtime
  // (tx_airtime / rx_airtime, minutes) plus uptime. Derive a lifetime-average
  // duty composition (airtime ÷ uptime) so the companion gets the same tile.
  // Self-hides when airtime or uptime is absent/unavailable (e.g. Self
  // Diagnostics disabled upstream), preserving graceful degradation.
  private _renderCompanionRadioActivityTile() {
    const txAir = this._findEntityIdMatching('tx_airtime');
    const rxAir = this._findEntityIdMatching('rx_airtime');
    const uptimeInfo = this._findByMetric('uptime_hours');
    if ((!txAir && !rxAir) || !uptimeInfo) return nothing;

    const uptimeMin = this._readUptimeMinutes(uptimeInfo);
    if (!Number.isFinite(uptimeMin) || uptimeMin <= 0) return nothing;

    const txMin = txAir ? this._readNumber(txAir.entity_id) : 0;
    const rxMin = rxAir ? this._readNumber(rxAir.entity_id) : 0;
    // If neither airtime value is readable the tile carries no information.
    if (!Number.isFinite(txMin) && !Number.isFinite(rxMin)) return nothing;

    const pct = (m: number) =>
      Number.isFinite(m) ? Math.min(100, Math.max(0, (m / uptimeMin) * 100)) : 0;
    // Prefer the last 24 h, from recorded statistics: airtime minutes gained
    // over the minutes covered. Falls back to the since-restart average.
    const ids = this._companionIds();
    const txPts = this._spark[ids.tx_airtime ?? ''] || [];
    const rxPts = this._spark[ids.rx_airtime ?? ''] || [];
    const covered = Math.max(txPts.length, rxPts.length) * 5;
    const recent = covered >= 60;
    const txN = recent ? Math.min(100, (totalChange(txPts) / covered) * 100) : pct(txMin);
    const rxN = recent ? Math.min(100, (totalChange(rxPts) / covered) * 100) : pct(rxMin);
    const windowLabel = recent ? (covered >= 1440 ? 'last 24 h' : `last ${Math.round(covered / 60)} h`) : 'since restart';
    const idleN = Math.max(0, 100 - txN - rxN);

    // Reuse the repeater airtime-utilisation threshold bands for the dot.
    const txBand = evaluateSensor('tx_airtime_util', txN).band;
    const rxBand = evaluateSensor('rx_airtime_util', rxN).band;
    const dotBand: Band = this._worseBand(txBand, rxBand);

    const segments: StackedBarSegment[] = [
      { value: txN, label: `TX ${txN.toFixed(1)}%`, kind: 'tx' },
      { value: rxN, label: `RX ${rxN.toFixed(1)}%`, kind: 'rx' },
      { value: idleN, label: `Idle ${idleN.toFixed(1)}%`, kind: 'idle' },
    ];

    const totalUsed = txN + rxN;
    const onTxClick = (e: Event) => {
      e.stopPropagation();
      this._openChart('airtime');
    };
    const onRxClick = (e: Event) => {
      e.stopPropagation();
      if (rxAir) this._fireMoreInfo(rxAir.entity_id);
    };

    return html`
      <div class="hero-tile"
           @click=${() => this._openChart('airtime')}>
        <div class="hero-tile-head">
          <span>Radio activity${this._renderInfoTip({
            band: dotBand,
            fillPct: 0,
            tooltip: 'Share of time your radio spent transmitting or receiving. ' +
                     'Worked out from its running airtime totals as recorded by Home ' +
                     'Assistant over the last 24 hours; until there is an hour of ' +
                     'history it shows the average since the radio last restarted.',
          })}</span>
          <span class="status-dot ${dotBand}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${totalUsed.toFixed(1)}<span class="unit">%</span></span>
          <span class="secondary">busy · ${windowLabel}</span>
        </div>
        <div class="ra-bar-wrap">
          <meshcore-stacked-bar
            .segments=${segments}
            .total=${100}
            .legend=${'none'}>
          </meshcore-stacked-bar>
          <div class="ra-legend">
            ${txAir
              ? html`<span class="ra-legend-item" @click=${onTxClick}>
                  <span class="legend-swatch tx"></span>TX ${txN.toFixed(1)}%
                </span>`
              : html`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${txN.toFixed(1)}%
                </span>`}
            ${rxAir
              ? html`<span class="ra-legend-item" @click=${onRxClick}>
                  <span class="legend-swatch rx"></span>RX ${rxN.toFixed(1)}%
                </span>`
              : html`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${rxN.toFixed(1)}%
                </span>`}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${idleN.toFixed(1)}%
            </span>
          </div>
        </div>
        ${this._sparkline('airtime')}
      </div>
    `;
  }

  /** Read an uptime entity's value and normalise to minutes using its
   *  reported unit (companion uptime is days; other flavours may be h/min/s).
   *  Mirrors the unit handling in _evaluateForRow's uptime branch. */
  private _readUptimeMinutes(info: EntityInfo): number {
    const raw = this._readNumber(info.entity_id);
    if (!Number.isFinite(raw)) return NaN;
    const unit = (this.hass?.states[info.entity_id]?.attributes
                  ?.unit_of_measurement as string) ?? '';
    switch (unit) {
      case 'd':   return raw * 1440;
      case 'h':   return raw * 60;
      case 'min': return raw;
      case 's':   return raw / 60;
      default:    return raw / 60; // assume seconds when the unit is unknown
    }
  }

  // ─── Sensor table grouping ────────────────────────────────────────────

  private _buildGroups(consumed: Set<string>): { name: GroupName; rows: TemplateResult[] }[] {
    // Insertion order is the render order. Traffic · totals dropped --
    // Messages Sent / Received / Requests now live in the hero row.
    // Power group also absent (battery + voltage in hero).
    const groups: Record<GroupName, TemplateResult[]> = {
      'Radio · live': [],
      'Radio · configuration': [],
      'Status': [],
      'Identity': [],
    };

    // No radio composite rows: the windowed TX/RX/Idle composition is
    // already shown in the Radio Activity hero tile. Individual airtime
    // entities are filtered upstream in _isHeroDuplicate.

    for (const e of this.entities) {
      if (consumed.has(e.entity_id)) continue;
      if (this._isHeroDuplicate(e)) continue;
      const group = this._groupOf(e);
      groups[group].push(this._renderRow(e));
    }

    // Companion devices (Settings tab) don't benefit from the Radio ·
    // configuration table (frequency / bandwidth / SF / TX power /
    // rate-limiter are all surfaced elsewhere via the integration's
    // device-config dialog) or the Identity catch-all. Drop both groups
    // so the card ends cleanly after the hero row when there's nothing
    // operationally interesting left to show in the table.
    const isCompanion = this.device?.type === 'companion';
    const skipForCompanion: GroupName[] = ['Radio · configuration', 'Identity'];

    return (Object.entries(groups) as [GroupName, TemplateResult[]][])
      .filter(([name, rows]) => {
        if (rows.length === 0) return false;
        if (isCompanion && skipForCompanion.includes(name)) return false;
        return true;
      })
      .map(([name, rows]) => ({ name, rows }));
  }

  /** Return true for entities whose value is already shown in the hero
   *  row or in the device header status badge. Filtering here keeps the
   *  table tight without losing the entity from hidden-sensors-modal
   *  visibility (it's still in `this.entities`, just not rendered). */
  private _isHeroDuplicate(info: EntityInfo): boolean {
    // Battery percentage — primary value in Battery hero tile.
    if (info.metricKey === 'battery_pct') return true;
    // Voltage entities — battery voltage shows alongside battery % in
    // the hero. Other voltage channels (Ch1 Voltage etc.) are also
    // hidden because the user doesn't want them next to the battery
    // voltage already on display. If a future user wants per-channel
    // voltage visibility back, this is the line to flip.
    if (info.sortOrder === 2) return true;
    // SNR / RSSI — shown in Last message strength hero tile.
    if (info.metricKey === 'snr' || info.metricKey === 'rssi') return true;
    // Uptime — promoted to the device header status badge ("Online · 12d 19h").
    if (info.metricKey === 'uptime_hours') return true;
    // Airtime variants — Radio Activity hero tile shows the windowed
    // TX/RX/Idle composition, which is the value of these entities.
    // Hide both the windowed util sensors and the raw cumulative ones.
    if (info.metricKey === 'tx_airtime_util'
        || info.metricKey === 'rx_airtime_util') return true;
    if (info.label === 'Airtime' || info.label === 'RX Airtime') return true;
    return false;
  }

  private _groupOf(info: EntityInfo): GroupName {
    const eid = info.entity_id;
    const so = info.sortOrder;

    // Radio fault flags (boolean problem sensors) live under Status, which
    // is not skipped for companion devices.
    if (info.booleanProblem) return 'Status';

    // Power group dropped. Battery (1) is hero-filtered; voltages (2) go
    // to Status (battery_voltage is hero-filtered, leaving Ch1 Voltage etc.).
    if (so === 2) return 'Status';
    if (so === 6) return 'Radio · configuration';
    if (so === 4 || so === 5 || so === 9 || so === 10 || so === 11 || so === 12)
      return 'Radio · live';
    if (eid.includes('noise_floor') || eid.includes('tx_queue')) return 'Radio · live';

    if (eid.includes('frequency') || eid.includes('bandwidth')
        || eid.includes('spreading_factor') || eid.includes('rate_limiter')) {
      return 'Radio · configuration';
    }

    if (eid.includes('hop_count') || eid.includes('out_path')
        || eid.includes('last_seen') || eid.includes('last_advert')
        || so === 3 || so === 8 || so === 7) {
      return 'Status';
    }

    return 'Identity';
  }

  private _renderGroup(g: { name: GroupName; rows: TemplateResult[] }) {
    return html`
      <div class="group-label">${g.name}</div>
      ${g.rows}
    `;
  }

  // ─── Sensor row ───────────────────────────────────────────────────────

  private _renderRow(info: EntityInfo) {
    // Boolean "problem" rows (companion radio fault flags) — show OK /
    // Detected with a green/red dot instead of a numeric value + bar.
    if (info.booleanProblem) {
      const raw = this.hass?.states[info.entity_id]?.state;
      const unknown = raw === undefined || raw === 'unknown' || raw === 'unavailable';
      const on = raw === 'on';
      const band: Band = unknown ? 'info' : (on ? 'bad' : 'good');
      return html`
        <div class="sensor-item"
             @click=${() => this._fireMoreInfo(info.entity_id)}
             @contextmenu=${(e: MouseEvent) => this._fireContextMenu(e, info)}
             ${longPress(() => this._fireContextMenu(undefined, info))}>
          <span class="status-dot ${band}"></span>
          <span class="si-label">${info.label}</span>
          <span class="si-value">${unknown ? '—' : on ? 'Detected' : 'OK'}</span>
          <span class="si-bar"></span>
        </div>
      `;
    }

    const value = this._readNumber(info.entity_id);
    const stateObj = this.hass?.states[info.entity_id];
    const unit = (stateObj?.attributes?.unit_of_measurement as string) ?? '';
    const ev = info.metricKey ? this._evaluateForRow(info.metricKey, value, info) : null;
    const band = ev?.band ?? 'info';

    // Tooltip resolution: staticTooltip wins when set (lets entities like
    // Temperature carry a metricKey for the bar AND a custom tooltip).
    // Otherwise fall back to the metric-derived tooltip.
    const tooltipText = info.staticTooltip || ev?.tooltip || '';
    const tooltipEv: SensorEval | null = tooltipText
      ? {
          band,
          fillPct: ev?.fillPct ?? 0,
          tooltip: tooltipText,
          source: ev?.source,
        }
      : null;

    const formattedValue = this._formatRowValue(info, value, stateObj?.state);

    return html`
      <div class="sensor-item"
           @click=${() => this._fireMoreInfo(info.entity_id)}
           @contextmenu=${(e: MouseEvent) => this._fireContextMenu(e, info)}
           ${longPress(() => this._fireContextMenu(undefined, info))}>
        <span class="status-dot ${band}"></span>
        <span class="si-label">
          ${info.label}${tooltipEv ? this._renderInfoTip(tooltipEv) : nothing}
        </span>
        <span class="si-value">
          ${formattedValue}${unit ? html`<span class="unit">${unit}</span>` : nothing}
        </span>
        <span class="si-bar">
          ${ev && info.metricKey
            ? html`<meshcore-stat-bar
                .value=${ev.fillPct}
                .min=${0}
                .max=${100}
                .band=${band}>
              </meshcore-stat-bar>`
            : nothing}
        </span>
      </div>
    `;
  }

  /** Apply metric-specific unit conversion for evaluateSensor. */
  private _evaluateForRow(key: MetricKey, raw: number, info: EntityInfo): SensorEval {
    if (key === 'uptime_hours') {
      // The integration's uptime sensor unit varies — the home install
      // reports days (`d`) per the duration device_class default, but
      // some flavours report seconds. Convert based on the live unit.
      const unit = (this.hass?.states[info.entity_id]?.attributes
                    ?.unit_of_measurement as string) ?? '';
      let hours = raw;
      switch (unit) {
        case 'd':   hours = raw * 24; break;
        case 'h':   hours = raw; break;
        case 'min': hours = raw / 60; break;
        case 's':
        default:    hours = raw / 3600; break;
      }
      return evaluateSensor(key, hours);
    }
    if (key === 'temperature') {
      // Threshold bands are defined in °F. Convert Celsius readings up
      // before invoking evaluateSensor so the same band logic works
      // regardless of the entity's reporting unit.
      const unit = (this.hass?.states[info.entity_id]?.attributes
                    ?.unit_of_measurement as string) ?? '';
      const fahrenheit = unit.includes('C') ? (raw * 9 / 5) + 32 : raw;
      return evaluateSensor(key, fahrenheit);
    }
    return evaluateSensor(key, raw);
  }

  // _readDerivedRate removed: the per-tile msg/min text is gone (rates now
  // live in the 48h Message activity chart, which reads recorder statistics
  // for the *_rate sensors via _fetchRateHistory / _deriveRateId).

  // Traffic composite logic moved to the hero tile renderers
  // (_renderMessagesSentTile / _renderMessagesReceivedTile /
  // _renderRequestsTile). The Traffic · totals table group is gone --
  // those rows are now hero tiles.

  // ─── Helpers ──────────────────────────────────────────────────────────

  private _findByMetric(key: MetricKey): EntityInfo | undefined {
    return this.entities.find((e) => e.metricKey === key);
  }

  private _findEntityIdMatching(substr: string): EntityInfo | undefined {
    return this.entities.find((e) => e.entity_id.includes(substr));
  }

  private _findEntityByLabel(label: string): EntityInfo | undefined {
    return this.entities.find((e) => e.label === label);
  }

  private _readNumber(entityId: string): number {
    const s = this.hass?.states[entityId];
    if (!s || s.state === 'unavailable' || s.state === 'unknown') return NaN;
    const n = parseFloat(s.state);
    return Number.isFinite(n) ? n : NaN;
  }

  private _formatNumber(value: number, precision: number): string {
    if (!Number.isFinite(value)) return '—';
    return value.toFixed(precision);
  }

  private _formatRowValue(info: EntityInfo, num: number, raw?: string): string {
    if (raw === 'unavailable' || raw === 'unknown') return '—';
    if (!Number.isFinite(num)) return raw ?? '—';

    const dp = this.hass?.entities?.[info.entity_id]?.display_precision;
    if (dp != null && dp >= 0) return num.toFixed(dp);
    if (raw && raw.includes('.')) return raw;
    return num.toString();
  }

  private _renderInfoTip(ev: SensorEval): TemplateResult | typeof nothing {
    if (!ev.tooltip) return nothing;
    return html`<meshcore-info-tip
      .content=${ev.tooltip}
      .source=${ev.source ?? ''}>
    </meshcore-info-tip>`;
  }

  private _worseBand(a: Band, b: Band): Band {
    const rank: Record<Band, number> = { good: 0, info: 0, warn: 1, bad: 2 };
    return rank[a] >= rank[b] ? a : b;
  }

  private _fireMoreInfo(entityId: string) {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent('hass-more-info', {
      detail: { entityId },
      bubbles: true,
      composed: true,
    }));
  }

  private _fireContextMenu(e: MouseEvent | undefined, info: EntityInfo) {
    e?.preventDefault();
    this.dispatchEvent(new CustomEvent('tile-context-menu', {
      detail: { entityId: info.entity_id, label: info.label },
      bubbles: true,
      composed: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-node-summary': NodeSummary;
  }
}
