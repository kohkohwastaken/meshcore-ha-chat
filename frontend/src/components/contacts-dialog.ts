import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Contact, DeviceConfig, HomeAssistant } from '../types';
import { addContact, addContactManual, getContactsPaginated, getDeviceConfig, removeContact } from '../api';
import { NODE_TYPE_NAMES, distanceMetres, parseManualContact } from '../utils/rich-messages';
import './share-contact-dialog';
import { UNVERIFIED_EVENT, loadUnverified, unverifiedSince } from '../utils/unverified';
import type { ShareTarget } from './share-contact-dialog';

/** Contact types listed here: companions, repeaters, room servers and sensors. */
const LISTED = new Set([1, 2, 3, 4]);
/** Ones you can hold a conversation with (not sensors). */
const CHATTABLE = new Set([1, 2, 3]);

/** Pure filter used by the dialog: name or key prefix match, known node types. */
export function matchContacts(list: Contact[], query: string): Contact[] {
  const q = query.trim().toLowerCase();
  return list
    .filter((c) => LISTED.has(c.type))
    .filter((c) => !q
      || (c.adv_name || '').toLowerCase().includes(q)
      || (c.pubkey_prefix || '').toLowerCase().startsWith(q));
}

/** Contacts grouped for display: companions, then room servers, then repeaters. */
export function groupContacts(list: Contact[]): Array<{ label: string; items: Contact[] }> {
  const groups: Array<[number, string]> = [[1, 'Companions'], [3, 'Room servers'], [2, 'Repeaters'], [4, 'Sensors']];
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

type SortOrder = 'az' | 'za' | 'recent' | 'oldest';

/** Sort a contact list locally; mirrors the server's ordering for Discovered. */
export function sortContacts(list: Contact[], order: SortOrder): Contact[] {
  const byName = (a: Contact, b: Contact) =>
    (a.adv_name || '').trim().toLowerCase().localeCompare((b.adv_name || '').trim().toLowerCase());
  if (order === 'az' || order === 'za') {
    const sorted = list.slice().sort(byName);
    return order === 'za' ? sorted.reverse() : sorted;
  }
  // Last advert, newest or oldest first. Times more than a day ahead (some
  // firmware stamps adverts decades out) count as unknown and go last.
  const horizon = Date.now() / 1000 + 86400;
  const heard = (c: Contact) => {
    const t = c.last_advert || 0;
    return t > 0 && t <= horizon ? t : 0;
  };
  const known = list.filter((c) => heard(c) > 0)
    .sort((a, b) => (order === 'recent' ? heard(b) - heard(a) : heard(a) - heard(b)));
  return [...known, ...list.filter((c) => heard(c) === 0)];
}

/** Discovered nodes fetched per page as the list scrolls. */
const PAGE = 500;

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
  @state() private _sort: SortOrder = 'az';
  /** Collapsed contact groups, remembered in this browser. */
  @state() private _collapsed = new Set<string>(readCollapsed());
  @state() private _heard: Contact[] = [];
  @state() private _loadingHeard = false;
  @state() private _heardTotal = 0;
  private _heardSeq = 0;
  @state() private _busy: string | null = null;
  @state() private _detail: Contact | null = null;
  @state() private _confirmRemove = false;
  @state() private _me: DeviceConfig | null = null;
  @state() private _toast = '';
  /** "Add manually" view: open, the pasted text, and the name/type to use. */
  @state() private _manual = false;
  @state() private _paste = '';
  @state() private _mName = '';
  @state() private _mType = 1;
  @state() private _mBusy = false;
  @state() private _mError = '';
  /** Contact shown in the Share window, if open. */
  @state() private _sharing: ShareTarget | null = null;
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
    .paste {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      color: var(--primary-text-color);
      font-family: monospace;
      font-size: 12px;
      resize: vertical;
    }
    .m-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 10px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .m-ok {
      margin-top: 8px;
      font-size: 13px;
    }
    .m-error {
      margin-top: 8px;
      font-size: 13px;
      color: var(--error-color, #db4437);
    }
    code {
      font-size: 12px;
    }
    .unv {
      display: inline-block;
      margin-left: 6px;
      padding: 0 6px;
      border-radius: 8px;
      font-size: 10px;
      font-weight: 600;
      line-height: 16px;
      vertical-align: middle;
      color: var(--warning-color, #ff9800);
      border: 1px solid var(--warning-color, #ff9800);
    }
    .unv-note {
      font-size: 12px;
      line-height: 1.45;
      color: var(--warning-color, #ff9800);
      background: rgba(255, 152, 0, 0.1);
      border-radius: 8px;
      padding: 8px 10px;
      margin-bottom: 8px;
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

  private _onUnverified = () => this.requestUpdate();

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(UNVERIFIED_EVENT, this._onUnverified);
    if (this.hass) void loadUnverified(this.hass, this.entryId);
    window.addEventListener('keydown', this._onKey);
    void this._loadMe();
    void this._loadHeard();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(UNVERIFIED_EVENT, this._onUnverified);
    window.removeEventListener('keydown', this._onKey);
    if (this._searchTimer) clearTimeout(this._searchTimer);
    if (this._toastTimer) clearTimeout(this._toastTimer);
  }

  private _onKey = (e: KeyboardEvent) => {
    if (e.key !== 'Escape' || this._sharing) return;
    if (this._manual) this._manual = false;
    else if (this._detail) this._detail = null;
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

  /** Load the first page (reset) or the next page of discovered nodes. */
  private async _loadHeard(more = false) {
    if (!this.hass) return;
    if (more && (this._loadingHeard || this._heard.length >= this._heardTotal)) return;
    const query = this._query.trim();
    const seq = ++this._heardSeq;
    this._loadingHeard = true;
    const res = await getContactsPaginated(this.hass, 'discovered', {
      search: query || undefined,
      limit: PAGE,
      offset: more ? this._heard.length : 0,
      sortBy: this._sort === 'az' || this._sort === 'za' ? 'name' : 'last_heard',
      reverse: this._sort === 'za' || this._sort === 'oldest',
      entryId: this.entryId,
    });
    if (seq !== this._heardSeq) return; // a newer search replaced this one
    const page = res.contacts as Contact[];
    this._heard = more ? [...this._heard, ...page] : page;
    this._heardTotal = res.total ?? this._heard.length;
    this._loadingHeard = false;
  }

  /** Fetch the next page when the list is scrolled near its end. */
  private _onScroll(e: Event) {
    if (this._tab !== 'heard') return;
    const el = e.target as HTMLElement;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 300) void this._loadHeard(true);
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

  private _badge(c: Contact) {
    return this._isMine(c) && unverifiedSince(c.public_key || c.pubkey_prefix) !== null
      ? html`<span class="unv" title="Added manually and not heard from yet">Unverified</span>`
      : nothing;
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

  private _share(c: Contact) {
    this._sharing = {
      name: c.adv_name || c.pubkey_prefix,
      publicKey: c.public_key || c.pubkey_prefix,
      type: c.type,
      self: false,
    };
  }

  private _shareMe = () => {
    if (!this._me?.pubkey) {
      this._say("Couldn't read your radio's key yet. Try again in a moment.");
      return;
    }
    this._sharing = { name: this._me.name || '', publicKey: this._me.pubkey, type: 1, self: true };
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
          <div class="name">${c.adv_name || c.pubkey_prefix}${hasLocation(c) ? html` <span title="Shared a location">📍</span>` : nothing}${this._badge(c)}</div>
          <div class="meta">${this._meta(c)}</div>
        </span>
        ${CHATTABLE.has(c.type) ? html`<button class="round" title="Message" aria-label="Message ${c.adv_name}"
          @click=${(e: Event) => { e.stopPropagation(); this._message(c); }}>💬</button>` : nothing}
      </div>`;
  }

  private _heardRow(c: Contact) {
    const busy = this._busy === this._key(c);
    return html`
      <div class="row" @click=${() => this._open(c)}>
        ${this._avatar(c)}
        <span class="txt">
          <div class="name">${c.adv_name || c.pubkey_prefix}${hasLocation(c) ? html` <span title="Shared a location">📍</span>` : nothing}${this._badge(c)}</div>
          <div class="meta">${this._meta(c)}</div>
        </span>
        <button class="btn primary" ?disabled=${busy}
          @click=${(e: Event) => { e.stopPropagation(); void this._add(c); }}>${busy ? 'Adding…' : 'Add'}</button>
      </div>`;
  }

  private _openManual = () => {
    this._manual = true;
    this._paste = '';
    this._mName = '';
    this._mType = 1;
    this._mError = '';
  };

  private _onPaste(e: Event) {
    this._paste = (e.target as HTMLTextAreaElement).value;
    this._mError = '';
    const p = parseManualContact(this._paste);
    if (p.kind === 'card') {
      this._mName = p.name;
      this._mType = p.type;
    }
  }

  private async _addManual() {
    if (!this.hass || this._mBusy) return;
    const p = parseManualContact(this._paste);
    if (p.kind === 'invalid') return;
    const name = this._mName.trim();
    if (p.kind !== 'advert' && !name) {
      this._mError = 'Give the contact a name.';
      return;
    }
    if (p.kind !== 'advert' && this.contacts.some((c) => (c.public_key || '').toLowerCase() === p.publicKey
      || p.publicKey.startsWith((c.pubkey_prefix || '').toLowerCase()))) {
      this._mError = "That contact is already on your radio.";
      return;
    }
    this._mBusy = true;
    const res = await addContactManual(this.hass, p.kind === 'advert'
      ? { advert: p.hex }
      : { publicKey: p.publicKey, name, type: this._mType }, this.entryId);
    this._mBusy = false;
    if (!res.success) {
      this._mError = `Couldn't add it: ${res.error || 'the radio said no'}`;
      return;
    }
    this.dispatchEvent(new CustomEvent('contacts-changed', { bubbles: true, composed: true }));
    if (this.hass) void loadUnverified(this.hass, this.entryId);
    this._manual = false;
    this._tab = 'contacts';
    this._say(p.kind === 'advert' ? 'Contact added from its advert' : `${name} added to your contacts`);
  }

  private _renderManual() {
    const p = parseManualContact(this._paste);
    const needsName = p.kind === 'card' || p.kind === 'key';
    return html`
      <div class="detail">
        <div class="head">
          <button class="icon-btn" aria-label="Back" @click=${() => { this._manual = false; }}>‹</button>
          <b>Add a contact</b>
          <button class="icon-btn" aria-label="Close" @click=${this._close}>×</button>
        </div>
        <div class="detail-body">
          <div class="sub" style="text-align:left;margin-bottom:8px">
            Paste a contact code, a <code>meshcore://</code> link or advert, or a 64-character public key.
            Your radio doesn't need to have heard them.
          </div>
          <textarea class="paste" rows="4" placeholder="<public key:1:Name>  or  meshcore://…"
            .value=${this._paste} @input=${this._onPaste}></textarea>
          ${p.kind === 'invalid' && p.reason ? html`<div class="m-error">${p.reason}</div>` : nothing}
          ${p.kind === 'advert' ? html`<div class="m-ok">Signed advert. Your radio checks it and adds the contact, including its location if it has one.</div>` : nothing}
          ${needsName ? html`
            <div class="m-ok">Public key <span class="mono">${(p as { publicKey: string }).publicKey.substring(0, 12)}…</span></div>
            <label class="m-field">Name
              <input .value=${this._mName} maxlength="31"
                @input=${(e: Event) => { this._mName = (e.target as HTMLInputElement).value; }} />
            </label>
            <label class="m-field">Type
              <select .value=${String(this._mType)}
                @change=${(e: Event) => { this._mType = Number((e.target as HTMLSelectElement).value); }}>
                <option value="1">Companion</option>
                <option value="2">Repeater</option>
                <option value="3">Room server</option>
                <option value="4">Sensor</option>
              </select>
            </label>
            <div class="sub" style="text-align:left">Without an advert there's no location or route yet. Those fill in once your radio hears from them.</div>` : nothing}
          ${this._mError ? html`<div class="m-error">${this._mError}</div>` : nothing}
          <button class="btn primary" style="width:100%;margin-top:14px"
            ?disabled=${this._mBusy || p.kind === 'invalid'} @click=${this._addManual}>
            ${this._mBusy ? 'Adding…' : 'Add to contacts'}
          </button>
        </div>
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
      const list = sortContacts(matchContacts(this.contacts, this._query), this._sort);
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
    return html`${list.map((c) => this._heardRow(c))}
      ${this._heard.length < this._heardTotal
        ? html`<div class="empty">${this._loadingHeard ? 'Loading more…' : html`<button class="btn" @click=${() => this._loadHeard(true)}>Load more</button>`}</div>`
        : nothing}`;
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
          <div class="title">${c.adv_name || c.pubkey_prefix}${this._badge(c)}</div>
          <div class="sub">${NODE_TYPE_NAMES[c.type] ?? 'Node'}</div>
          <div class="acts">
            ${mine
              ? (CHATTABLE.has(c.type) ? html`<button class="btn primary" @click=${() => this._message(c)}>💬 Message</button>` : nothing)
              : html`<button class="btn primary" ?disabled=${busy} @click=${() => this._add(c)}>${busy ? 'Adding…' : '＋ Add to contacts'}</button>`}
            <button class="btn" ?disabled=${!hasLocation(c)} title=${hasLocation(c) ? '' : "This node hasn't shared a location"}
              @click=${() => this._nodeAction(c, 'show-on-map')}>🗺 Show on map</button>
            <button class="btn" @click=${() => this._nodeAction(c, 'trace')}>↯ Trace route</button>
            <button class="btn" @click=${() => this._share(c)}>⧉ Share</button>
          </div>
          ${mine && unverifiedSince(c.public_key || c.pubkey_prefix) !== null ? html`<div class="unv-note">
            Added manually on ${new Date(unverifiedSince(c.public_key || c.pubkey_prefix)! * 1000).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}.
            Not yet heard from this key, so its name and identity aren't confirmed. This clears when an advert or a direct message arrives from it.
          </div>` : nothing}
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
    const heardCount = this._query ? this._heardList().length : Math.max(this._heardTotal, this._heardList().length);
    const meName = this._me?.name || 'Your radio';
    return html`
      <div class="overlay" @click=${this._close}>
        <div class="card" role="dialog" aria-modal="true" aria-label="Contacts"
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="head">
            <b>Contacts</b>
            <button class="btn" @click=${this._openManual}>＋ Add manually</button>
            <button class="icon-btn" aria-label="Close" @click=${this._close}>×</button>
          </div>
          <div class="me">
            <span class="av self">${meName.replace(/[^\p{L}\p{N}]/gu, '').substring(0, 2).toUpperCase() || 'ME'}</span>
            <span class="txt">
              <div class="name">${meName} <span class="meta">(you)</span></div>
              <div class="meta">${this._me?.pubkey ? this._me.pubkey.substring(0, 12) : ''}</div>
            </span>
            <button class="btn" @click=${this._shareMe}>Share my contact</button>
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
            <select aria-label="Sort" .value=${this._sort}
              @change=${(e: Event) => {
                this._sort = (e.target as HTMLSelectElement).value as SortOrder;
                void this._loadHeard();
              }}>
              <option value="az">A–Z</option>
              <option value="za">Z–A</option>
              <option value="recent">Recently heard</option>
              <option value="oldest">Longest ago</option>
            </select>
          </div>
          <div class="body" @scroll=${this._onScroll}>${this._renderList()}</div>
          ${this._detail ? this._renderDetail(this._detail) : nothing}
          ${this._manual ? this._renderManual() : nothing}
          ${this._toast ? html`<div class="toast" role="status">${this._toast}</div>` : nothing}
          ${this._sharing ? html`<meshcore-share-contact-dialog
            .hass=${this.hass} .entryId=${this.entryId} .target=${this._sharing}
            @share-closed=${() => { this._sharing = null; }}></meshcore-share-contact-dialog>` : nothing}
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
