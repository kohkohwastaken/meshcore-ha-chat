import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Contact, DeviceConfig, HomeAssistant } from '../types';
import { addContact, getContactsPaginated, getDeviceConfig, removeContact } from '../api';
import { NODE_TYPE_NAMES, distanceMetres, formatContact } from '../utils/rich-messages';

/** Contact types you can hold a conversation with (not sensors). */
const CHATTABLE = new Set([1, 2, 3]);

/** Pure filter used by the dialog: name or key prefix match, chattable types only. */
export function matchContacts(list: Contact[], query: string): Contact[] {
  const q = query.trim().toLowerCase();
  return list
    .filter((c) => CHATTABLE.has(c.type))
    .filter((c) => !q
      || (c.adv_name || '').toLowerCase().includes(q)
      || (c.pubkey_prefix || '').toLowerCase().startsWith(q));
}

/** Contacts grouped for display: companions, then room servers, then repeaters. */
export function groupContacts(list: Contact[]): Array<{ label: string; items: Contact[] }> {
  const groups: Array<[number, string]> = [[1, 'Companions'], [3, 'Room servers'], [2, 'Repeaters']];
  return groups
    .map(([type, label]) => ({ label, items: list.filter((c) => c.type === type) }))
    .filter((g) => g.items.length > 0);
}

function ago(secs?: number): string {
  if (!secs) return '';
  const m = Math.max(0, (Date.now() - secs * 1000) / 60000);
  if (m < 60) return `${Math.max(1, Math.floor(m))}m ago`;
  if (m < 1440) return `${Math.floor(m / 60)}h ago`;
  return `${Math.floor(m / 1440)}d ago`;
}

const GROUPS_KEY = 'meshcore-contact-groups-collapsed';

function readCollapsed(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(GROUPS_KEY) || '[]');
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function hasLocation(c: Contact): boolean {
  const lat = Number(c.adv_lat);
  const lon = Number(c.adv_lon);
  return Number.isFinite(lat) && Number.isFinite(lon) && !(lat === 0 && lon === 0);
}

type Tab = 'contacts' | 'heard';

/**
 * Contacts popup: your contacts (grouped; message, or tap for details),
 * nodes heard nearby (add them), and your own card with Share my contact.
 */
@customElement('meshcore-contacts-dialog')
export class ContactsDialog extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ type: String }) entryId?: string;
  /** Contacts already on the radio. */
  @property({ attribute: false }) contacts: Contact[] = [];

  @state() private _tab: Tab = 'contacts';
  @state() private _query = '';
  @state() private _sort: 'name' | 'heard' = 'name';
  /** Collapsed contact groups, remembered in this browser. */
  @state() private _collapsed = new Set<string>(readCollapsed());
  @state() private _heard: Contact[] = [];
  @state() private _loadingHeard = false;
  @state() private _busy: string | null = null;
  @state() private _detail: Contact | null = null;
  @state() private _confirmRemove = false;
  @state() private _me: DeviceConfig | null = null;
  @state() private _toast = '';
  private _toastTimer: ReturnType<typeof setTimeout> | null = null;
  private _searchTimer: ReturnType<typeof setTimeout> | null = null;

  static styles = css`
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      position: relative;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      border-radius: 14px;
      width: min(480px, 94vw);
      height: min(720px, 88vh);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 870px) {
      .card {
        width: 100vw;
        height: 100%;
        border-radius: 0;
      }
    }
    .head {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 14px 14px 8px;
    }
    .head b {
      flex: 1;
      font-size: 17px;
    }
    .icon-btn {
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 22px;
      line-height: 1;
      cursor: pointer;
      padding: 2px 6px;
    }
    .me {
      margin: 0 14px 10px;
      padding: 10px;
      border-radius: 12px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .tabs {
      display: flex;
      margin: 0 14px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }
    .tabs button {
      flex: 1;
      padding: 9px;
      border: none;
      border-bottom: 2px solid transparent;
      background: none;
      color: var(--secondary-text-color);
      font: inherit;
      cursor: pointer;
    }
    .tabs button.on {
      color: var(--primary-color, #03a9f4);
      border-bottom-color: var(--primary-color, #03a9f4);
    }
    .tools {
      display: flex;
      gap: 6px;
      padding: 10px 14px;
    }
    input, select {
      padding: 7px 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
    }
    input {
      flex: 1;
      min-width: 0;
    }
    .body {
      flex: 1;
      overflow-y: auto;
      padding: 0 8px 12px;
    }
    .grp {
      display: flex;
      align-items: center;
      gap: 6px;
      width: 100%;
      border: none;
      background: none;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
      padding: 10px 8px 4px;
    }
    .caret {
      display: inline-block;
      transition: transform 0.15s;
    }
    .caret.open {
      transform: rotate(90deg);
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;
    }
    .row:hover {
      background: rgba(127, 127, 127, 0.12);
    }
    .av {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;
      font-weight: 600;
      font-size: 13px;
      flex-shrink: 0;
      background: var(--primary-color, #03a9f4);
    }
    .av.infra {
      background: #8e5bb5;
    }
    .av.self {
      background: #2e7d32;
    }
    .av.big {
      width: 64px;
      height: 64px;
      font-size: 22px;
      margin: 4px auto 6px;
    }
    .txt {
      flex: 1;
      min-width: 0;
    }
    .name {
      font-size: 14px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta {
      font-size: 12px;
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .round {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: none;
      color: var(--primary-text-color);
      display: grid;
      place-items: center;
      flex-shrink: 0;
      cursor: pointer;
    }
    .round:hover {
      border-color: var(--primary-color, #03a9f4);
    }
    .btn {
      padding: 6px 12px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .btn.primary {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }
    .btn.danger {
      border-color: var(--error-color, #db4437);
      color: var(--error-color, #db4437);
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .empty {
      padding: 20px;
      text-align: center;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .detail {
      position: absolute;
      inset: 0;
      background: var(--card-background-color, #fff);
      display: flex;
      flex-direction: column;
    }
    .detail-body {
      flex: 1;
      overflow-y: auto;
      padding: 0 16px 16px;
    }
    .title {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
    }
    .sub {
      text-align: center;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .acts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin: 16px 0;
    }
    .kv {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      font-size: 13px;
    }
    .kv span:first-child {
      color: var(--secondary-text-color);
    }
    .mono {
      font-family: monospace;
      word-break: break-all;
      text-align: right;
    }
    .confirm {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
      font-size: 13px;
      flex-wrap: wrap;
    }
    .toast {
      position: absolute;
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
      background: #263238;
      color: #fff;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      max-width: 90%;
      z-index: 5;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this._onKey);
    void this._loadMe();
    void this._loadHeard();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._onKey);
    if (this._searchTimer) clearTimeout(this._searchTimer);
    if (this._toastTimer) clearTimeout(this._toastTimer);
  }

  private _onKey = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    if (this._detail) this._detail = null;
    else this._close();
  };

  private _close = () => {
    this.dispatchEvent(new CustomEvent('new-chat-closed', { bubbles: true, composed: true }));
  };

  private _say(text: string) {
    this._toast = text;
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => { this._toast = ''; }, 2500);
  }

  private async _loadMe() {
    if (!this.hass) return;
    try {
      this._me = await getDeviceConfig(this.hass, this.entryId);
    } catch {
      this._me = null;
    }
  }

  private async _loadHeard() {
    if (!this.hass) return;
    this._loadingHeard = true;
    const res = await getContactsPaginated(this.hass, 'discovered', {
      search: this._query.trim() || undefined,
      limit: 500,
      sortBy: 'last_heard',
      entryId: this.entryId,
    });
    this._heard = res.contacts as Contact[];
    this._loadingHeard = false;
  }

  private _onSearch(e: Event) {
    this._query = (e.target as HTMLInputElement).value;
    if (this._searchTimer) clearTimeout(this._searchTimer);
    this._searchTimer = setTimeout(() => this._loadHeard(), 300);
  }

  private _key(c: Contact): string {
    return c.public_key || c.pubkey_prefix;
  }

  private _isMine(c: Contact): boolean {
    return this.contacts.some((m) => m.pubkey_prefix === c.pubkey_prefix);
  }

  private _km(c: Contact): number | null {
    if (!hasLocation(c)) return null;
    const lat = Number(this._me?.latitude);
    const lon = Number(this._me?.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || (lat === 0 && lon === 0)) return null;
    return distanceMetres(lat, lon, Number(c.adv_lat), Number(c.adv_lon)) / 1000;
  }

  private _route(c: Contact): string {
    const h = c.out_path_len;
    if (typeof h !== 'number' || h < 0) return 'Flood';
    return h === 0 ? 'Direct' : `${h} hop${h === 1 ? '' : 's'}`;
  }

  private _meta(c: Contact): string {
    const km = this._km(c);
    return [
      NODE_TYPE_NAMES[c.type] ?? 'Node',
      c.last_advert ? `heard ${ago(c.last_advert)}` : null,
      this._route(c),
      km !== null ? `${km < 10 ? km.toFixed(1) : Math.round(km)} km` : null,
    ].filter(Boolean).join(' · ');
  }

  private _avatar(c: Contact, big = false) {
    const infra = c.type === 2 || c.type === 3;
    const initials = (c.adv_name || '').replace(/[^\p{L}\p{N}]/gu, '').substring(0, 2).toUpperCase()
      || c.pubkey_prefix.substring(0, 2).toUpperCase();
    return html`<span class="av ${infra ? 'infra' : ''} ${big ? 'big' : ''}">${initials}</span>`;
  }

  private _message(c: Contact) {
    this.dispatchEvent(new CustomEvent('open-chat', {
      detail: { id: c.pubkey_prefix }, bubbles: true, composed: true,
    }));
  }

  private _nodeAction(c: Contact, action: string) {
    this.dispatchEvent(new CustomEvent('node-action', {
      detail: { action, node: c }, bubbles: true, composed: true,
    }));
    this._close();
  }

  private async _copy(text: string, done: string) {
    try {
      await navigator.clipboard.writeText(text);
      this._say(done);
    } catch {
      this._say(text);
    }
  }

  private _share(c: Contact) {
    void this._copy(
      formatContact(c.public_key || c.pubkey_prefix, c.type, c.adv_name || ''),
      `Copied ${c.adv_name || 'their'} contact code. Paste it into a chat on its own to share it.`,
    );
  }

  private _shareMe = () => {
    if (!this._me?.pubkey) {
      this._say("Couldn't read your radio's key yet. Try again in a moment.");
      return;
    }
    void this._copy(
      formatContact(this._me.pubkey, 1, this._me.name || ''),
      'Copied your contact code. Paste it into a chat on its own so others can add you.',
    );
  };

  private async _add(c: Contact) {
    if (!this.hass || this._busy) return;
    this._busy = this._key(c);
    const res = await addContact(this.hass, this._key(c), c.adv_name, this.entryId);
    this._busy = null;
    if (!res.success) {
      this._say(`Couldn't add ${c.adv_name || c.pubkey_prefix}. Try again in a moment.`);
      return;
    }
    this._heard = this._heard.filter((h) => this._key(h) !== this._key(c));
    this.dispatchEvent(new CustomEvent('contacts-changed', { bubbles: true, composed: true }));
    this._say(`${c.adv_name || c.pubkey_prefix} added to your contacts`);
    if (this._detail && this._key(this._detail) === this._key(c)) this._detail = null;
  }

  private async _remove(c: Contact) {
    if (!this.hass) return;
    this._confirmRemove = false;
    this._busy = this._key(c);
    const res = await removeContact(this.hass, this._key(c), this.entryId);
    this._busy = null;
    if (!res.success) {
      this._say(`Couldn't remove ${c.adv_name || c.pubkey_prefix}. Try again in a moment.`);
      return;
    }
    this.dispatchEvent(new CustomEvent('contacts-changed', { bubbles: true, composed: true }));
    this._say(`Removed ${c.adv_name || c.pubkey_prefix}`);
    this._detail = null;
    void this._loadHeard();
  }

  private _open(c: Contact) {
    this._detail = c;
    this._confirmRemove = false;
  }

  private _contactRow(c: Contact) {
    return html`
      <div class="row" @click=${() => this._open(c)}>
        ${this._avatar(c)}
        <span class="txt">
          <div class="name">${c.adv_name || c.pubkey_prefix}${hasLocation(c) ? html` <span title="Shared a location">📍</span>` : nothing}</div>
          <div class="meta">${this._meta(c)}</div>
        </span>
        <button class="round" title="Message" aria-label="Message ${c.adv_name}"
          @click=${(e: Event) => { e.stopPropagation(); this._message(c); }}>💬</button>
      </div>`;
  }

  private _heardRow(c: Contact) {
    const busy = this._busy === this._key(c);
    return html`
      <div class="row" @click=${() => this._open(c)}>
        ${this._avatar(c)}
        <span class="txt">
          <div class="name">${c.adv_name || c.pubkey_prefix}${hasLocation(c) ? html` <span title="Shared a location">📍</span>` : nothing}</div>
          <div class="meta">${this._meta(c)}</div>
        </span>
        <button class="btn primary" ?disabled=${busy}
          @click=${(e: Event) => { e.stopPropagation(); void this._add(c); }}>${busy ? 'Adding…' : 'Add'}</button>
      </div>`;
  }

  private _heardList(): Contact[] {
    return matchContacts(this._heard, '').filter((c) => !this._isMine(c));
  }

  private _toggleGroup(label: string) {
    const next = new Set(this._collapsed);
    if (next.has(label)) next.delete(label); else next.add(label);
    this._collapsed = next;
    try { localStorage.setItem(GROUPS_KEY, JSON.stringify([...next])); } catch { /* storage unavailable */ }
  }

  private _renderList() {
    if (this._tab === 'contacts') {
      const list = matchContacts(this.contacts, this._query).sort(this._sort === 'name'
        ? (a, b) => (a.adv_name || '').localeCompare(b.adv_name || '')
        : (a, b) => (b.last_advert || 0) - (a.last_advert || 0));
      const groups = groupContacts(list);
      if (!groups.length) {
        return html`<div class="empty">${this._query ? 'No contacts match.' : 'No contacts on your radio yet. Add some from Discovered.'}</div>`;
      }
      return groups.map((g) => {
        const shut = this._collapsed.has(g.label) && !this._query;
        return html`
          <button class="grp" aria-expanded=${shut ? 'false' : 'true'} @click=${() => this._toggleGroup(g.label)}>
            <span class="caret ${shut ? '' : 'open'}" aria-hidden="true">▸</span>${g.label} · ${g.items.length}
          </button>
          ${shut ? nothing : g.items.map((c) => this._contactRow(c))}`;
      });
    }
    const list = this._heardList();
    if (this._loadingHeard && !list.length) return html`<div class="empty">Looking…</div>`;
    if (!list.length) {
      return html`<div class="empty">${this._query ? 'No discovered nodes match.' : 'No other nodes discovered yet. They appear here when your radio hears their adverts.'}</div>`;
    }
    return list.map((c) => this._heardRow(c));
  }

  private _renderDetail(c: Contact) {
    const mine = this._isMine(c);
    const km = this._km(c);
    const busy = this._busy === this._key(c);
    return html`
      <div class="detail">
        <div class="head">
          <button class="icon-btn" aria-label="Back" @click=${() => { this._detail = null; }}>‹</button>
          <b>${mine ? 'Contact' : 'Discovered'}</b>
          <button class="icon-btn" aria-label="Close" @click=${this._close}>×</button>
        </div>
        <div class="detail-body">
          ${this._avatar(c, true)}
          <div class="title">${c.adv_name || c.pubkey_prefix}</div>
          <div class="sub">${NODE_TYPE_NAMES[c.type] ?? 'Node'}</div>
          <div class="acts">
            ${mine
              ? html`<button class="btn primary" @click=${() => this._message(c)}>💬 Message</button>`
              : html`<button class="btn primary" ?disabled=${busy} @click=${() => this._add(c)}>${busy ? 'Adding…' : '＋ Add to contacts'}</button>`}
            <button class="btn" ?disabled=${!hasLocation(c)} title=${hasLocation(c) ? '' : "This node hasn't shared a location"}
              @click=${() => this._nodeAction(c, 'show-on-map')}>🗺 Show on map</button>
            <button class="btn" @click=${() => this._nodeAction(c, 'trace')}>↯ Trace route</button>
            <button class="btn" @click=${() => this._share(c)}>⧉ Copy contact</button>
          </div>
          <div class="kv"><span>Last heard</span><span>${c.last_advert ? ago(c.last_advert) : 'Not yet'}</span></div>
          <div class="kv"><span>Route</span><span>${this._route(c)}</span></div>
          <div class="kv"><span>Distance</span><span>${km !== null ? `${km.toFixed(1)} km` : 'No location shared'}</span></div>
          <div class="kv"><span>Key</span><span class="mono">${c.public_key || c.pubkey_prefix}</span></div>
          ${mine
            ? this._confirmRemove
              ? html`<div class="confirm">Remove ${c.adv_name} from your radio?
                  <button class="btn danger" ?disabled=${busy} @click=${() => this._remove(c)}>Remove</button>
                  <button class="btn" @click=${() => { this._confirmRemove = false; }}>Cancel</button></div>`
              : html`<button class="btn danger" style="width:100%;margin-top:16px"
                  @click=${() => { this._confirmRemove = true; }}>Remove from radio</button>`
            : nothing}
        </div>
      </div>`;
  }

  render() {
    const myCount = matchContacts(this.contacts, '').length;
    const heardCount = this._heardList().length;
    const meName = this._me?.name || 'Your radio';
    return html`
      <div class="overlay" @click=${this._close}>
        <div class="card" role="dialog" aria-modal="true" aria-label="Contacts"
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="head">
            <b>Contacts</b>
            <button class="icon-btn" aria-label="Close" @click=${this._close}>×</button>
          </div>
          <div class="me">
            <span class="av self">${meName.replace(/[^\p{L}\p{N}]/gu, '').substring(0, 2).toUpperCase() || 'ME'}</span>
            <span class="txt">
              <div class="name">${meName} <span class="meta">(you)</span></div>
              <div class="meta">${this._me?.pubkey ? this._me.pubkey.substring(0, 12) : ''}</div>
            </span>
            <button class="btn" @click=${this._shareMe}>Copy my contact</button>
          </div>
          <div class="tabs" role="tablist">
            <button role="tab" class=${this._tab === 'contacts' ? 'on' : ''} aria-selected=${this._tab === 'contacts'}
              @click=${() => { this._tab = 'contacts'; }}>Contacts · ${myCount}</button>
            <button role="tab" class=${this._tab === 'heard' ? 'on' : ''} aria-selected=${this._tab === 'heard'}
              @click=${() => { this._tab = 'heard'; }}>Discovered · ${heardCount}</button>
          </div>
          <div class="tools">
            <input type="search" placeholder="Search by name or key" aria-label="Search by name or key"
              .value=${this._query} @input=${this._onSearch} />
            ${this._tab === 'contacts'
              ? html`<select aria-label="Sort" .value=${this._sort}
                  @change=${(e: Event) => { this._sort = (e.target as HTMLSelectElement).value as 'name' | 'heard'; }}>
                  <option value="name">A–Z</option>
                  <option value="heard">Recently heard</option>
                </select>`
              : nothing}
          </div>
          <div class="body">${this._renderList()}</div>
          ${this._detail ? this._renderDetail(this._detail) : nothing}
          ${this._toast ? html`<div class="toast" role="status">${this._toast}</div>` : nothing}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-contacts-dialog': ContactsDialog;
  }
}
