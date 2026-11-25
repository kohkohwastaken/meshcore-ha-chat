import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Contact, HomeAssistant } from '../types';
import { addContact, getContactsPaginated } from '../api';
import { NODE_TYPE_NAMES } from '../utils/rich-messages';

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

function ago(secs?: number): string {
  if (!secs) return '';
  const m = Math.max(0, (Date.now() - secs * 1000) / 60000);
  if (m < 60) return `${Math.max(1, Math.floor(m))}m ago`;
  if (m < 1440) return `${Math.floor(m / 60)}h ago`;
  return `${Math.floor(m / 1440)}d ago`;
}

/**
 * "New message": pick one of your contacts, or add a node you've heard
 * and start talking to it straight away.
 */
@customElement('meshcore-new-chat-dialog')
export class NewChatDialog extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ type: String }) entryId?: string;
  /** Contacts already on the radio. */
  @property({ attribute: false }) contacts: Contact[] = [];

  @state() private _query = '';
  @state() private _heard: Contact[] = [];
  @state() private _loadingHeard = false;
  @state() private _adding: string | null = null;
  @state() private _error = '';
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
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      border-radius: 12px;
      width: min(440px, 94vw);
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 16px 8px;
      font-size: 17px;
      font-weight: 600;
    }
    .close {
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 22px;
      cursor: pointer;
    }
    input {
      margin: 0 16px 8px;
      padding: 9px 12px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      color: var(--primary-text-color);
      font: inherit;
    }
    .list {
      overflow-y: auto;
      padding: 0 8px 12px;
    }
    .sec {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
      padding: 12px 8px 4px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 8px;
      background: none;
      color: inherit;
      font: inherit;
      text-align: left;
      cursor: pointer;
    }
    .row:hover {
      background: rgba(127, 127, 127, 0.12);
    }
    .av {
      width: 36px;
      height: 36px;
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
    }
    .add {
      flex-shrink: 0;
      font-size: 12px;
      color: var(--primary-color, #03a9f4);
      font-weight: 500;
    }
    .note {
      padding: 8px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .error {
      margin: 0 16px 8px;
      font-size: 13px;
      color: var(--error-color, #db4437);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._loadHeard();
    window.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._onKey);
    if (this._searchTimer) clearTimeout(this._searchTimer);
  }

  firstUpdated() {
    this.renderRoot.querySelector('input')?.focus();
  }

  private _onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this._close();
  };

  private _close() {
    this.dispatchEvent(new CustomEvent('new-chat-closed', { bubbles: true, composed: true }));
  }

  private async _loadHeard() {
    if (!this.hass) return;
    this._loadingHeard = true;
    const res = await getContactsPaginated(this.hass, 'discovered', {
      search: this._query.trim() || undefined,
      limit: 40,
      sortBy: 'last_heard',
      entryId: this.entryId,
    });
    this._heard = res.contacts as Contact[];
    this._loadingHeard = false;
  }

  private _onInput(e: Event) {
    this._query = (e.target as HTMLInputElement).value;
    if (this._searchTimer) clearTimeout(this._searchTimer);
    this._searchTimer = setTimeout(() => this._loadHeard(), 300);
  }

  private _open(c: Contact) {
    this.dispatchEvent(new CustomEvent('open-chat', {
      detail: { id: c.pubkey_prefix }, bubbles: true, composed: true,
    }));
  }

  private async _addAndOpen(c: Contact) {
    if (!this.hass || this._adding) return;
    this._adding = c.public_key || c.pubkey_prefix;
    this._error = '';
    const res = await addContact(this.hass, c.public_key || c.pubkey_prefix, c.adv_name, this.entryId);
    this._adding = null;
    if (!res.success) {
      this._error = `Couldn't add ${c.adv_name || c.pubkey_prefix} to your radio. Try again in a moment.`;
      return;
    }
    this.dispatchEvent(new CustomEvent('contacts-changed', { bubbles: true, composed: true }));
    this._open(c);
  }

  private _row(c: Contact, added: boolean) {
    const infra = c.type === 2 || c.type === 3;
    const initials = (c.adv_name || '').replace(/[^\p{L}\p{N}]/gu, '').substring(0, 2).toUpperCase()
      || c.pubkey_prefix.substring(0, 2).toUpperCase();
    const busy = this._adding === (c.public_key || c.pubkey_prefix);
    return html`
      <button class="row" ?disabled=${busy}
        @click=${() => (added ? this._open(c) : this._addAndOpen(c))}>
        <span class="av ${infra ? 'infra' : ''}">${initials}</span>
        <span class="txt">
          <div class="name">${c.adv_name || c.pubkey_prefix}</div>
          <div class="meta">${NODE_TYPE_NAMES[c.type] ?? 'Node'}${c.last_advert ? ` · heard ${ago(c.last_advert)}` : ''}</div>
        </span>
        ${added ? nothing : html`<span class="add">${busy ? 'Adding…' : 'Add and message'}</span>`}
      </button>
    `;
  }

  render() {
    const mine = matchContacts(this.contacts, this._query)
      .sort((a, b) => (a.adv_name || '').localeCompare(b.adv_name || ''));
    const addedKeys = new Set(this.contacts.map((c) => c.pubkey_prefix));
    const heard = matchContacts(this._heard, '').filter((c) => !addedKeys.has(c.pubkey_prefix));
    return html`
      <div class="overlay" @click=${this._close}>
        <div class="card" role="dialog" aria-modal="true" aria-label="New message"
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="head">
            <span>New message</span>
            <button class="close" aria-label="Close" @click=${this._close}>×</button>
          </div>
          <input type="search" placeholder="Search by name or key" aria-label="Search by name or key"
            .value=${this._query} @input=${this._onInput} />
          ${this._error ? html`<div class="error">${this._error}</div>` : nothing}
          <div class="list">
            <div class="sec">Your contacts</div>
            ${mine.length
              ? mine.map((c) => this._row(c, true))
              : html`<div class="note">${this._query ? 'No contacts match.' : 'No contacts on your radio yet.'}</div>`}
            <div class="sec">Heard nearby</div>
            ${this._loadingHeard && !heard.length
              ? html`<div class="note">Looking…</div>`
              : heard.length
                ? heard.map((c) => this._row(c, false))
                : html`<div class="note">${this._query ? 'Nobody heard matches.' : 'No other nodes heard yet. Their adverts appear here.'}</div>`}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-new-chat-dialog': NewChatDialog;
  }
}
