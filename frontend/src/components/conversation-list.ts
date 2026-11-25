import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Contact, Channel } from '../types';
import type { UnreadController } from '../chat/unread-controller';
import type { ConversationPreview } from '../api';
import { parseContact, parseLocation, parseReaction } from '../utils/rich-messages';
// manage-dialog is loaded by chat-page

type ChatFilter = 'all' | 'unread';

/** Contact types that are infrastructure rather than people. */
const INFRA_TYPES = new Set([2, 3]);

const COLLAPSE_KEY = 'meshcore-collapsed-sections';

function readCollapsed(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(COLLAPSE_KEY) || '[]');
    return Array.isArray(v) ? v.filter((x) => x === 'channels' || x === 'dms') : [];
  } catch {
    return [];
  }
}

/** One line describing a conversation's last message. */
export function previewLine(p: ConversationPreview | undefined, isChannel: boolean): string {
  if (!p || !p.text) return '';
  let body = p.text;
  const reaction = parseReaction(body);
  if (reaction) body = `Reacted ${reaction.emoji}`;
  else if (parseLocation(body)) body = '📍 Location';
  else if (parseContact(body)) body = '👤 Contact';
  body = body.replace(/\s+/g, ' ').trim();
  if (p.outgoing) return `You: ${body}`;
  return isChannel && p.sender ? `${p.sender}: ${body}` : body;
}

/** Short age for the conversation list ("now", "5m", "3h", "2d"). */
export function shortAge(ts: string, now = Date.now()): string {
  const t = Date.parse(ts);
  if (!Number.isFinite(t)) return '';
  const m = Math.max(0, (now - t) / 60000);
  if (m < 1) return 'now';
  if (m < 60) return `${Math.floor(m)}m`;
  if (m < 1440) return `${Math.floor(m / 60)}h`;
  if (m < 10080) return `${Math.floor(m / 1440)}d`;
  return new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
}

@customElement('meshcore-conversation-list')
export class ConversationList extends LitElement {
  @property({ type: Array }) conversations: Array<Contact | Channel> = [];
  @property({ type: String }) activeId: string | null = null;
  /**
   * The panel-owned `UnreadController`. `_getUnreadCount` reads the
   * badge value from `unread.badgeCount`.
   */
  @property({ attribute: false }) unread!: UnreadController;
  /**
   * Still bound (`.unreadCounts=${unread.counts}` from
   * chat-page) — its fresh identity on every controller mutation is
   * what re-renders this component. The badge VALUE, however, now
   * comes from the controller via `_getUnreadCount`.
   */
  @property({ type: Object }) unreadCounts: Record<string, number> = {};
  @property({ type: String }) nodePrefix: string | null = null;
  /** Last message per conversation entity_id (from the backend index). */
  @property({ attribute: false }) previews: Record<string, ConversationPreview> = {};

  @state() private _query = '';
  /** Collapsed sections, remembered in this browser. */
  @state() private _collapsed = new Set<string>(readCollapsed());

  private _toggleSection(key: string) {
    const next = new Set(this._collapsed);
    if (next.has(key)) next.delete(key); else next.add(key);
    this._collapsed = next;
    try { localStorage.setItem(COLLAPSE_KEY, JSON.stringify([...next])); } catch { /* storage unavailable */ }
  }

  @state() private _activeFilter: ChatFilter = 'all';
  @state() private _filteredConversations: Array<Contact | Channel> = [];

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 280px;
      border-right: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 12px 0;
      gap: 8px;
    }

    .sidebar-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      flex: 1;
    }

    .compose-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .contacts-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 16px;
      border: 1px solid var(--primary-color, #03a9f4);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
      color: var(--primary-color, #03a9f4);
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      flex-shrink: 0;
    }

    .contacts-pill:hover {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.22);
    }

    .compose-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--primary-text-color);
    }

    .filter-bar {
      display: flex;
      padding: 12px 12px 8px;
      gap: 4px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .filter-btn {
      flex: 1;
      padding: 6px 4px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 16px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }

    .filter-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    .filter-btn.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .conversation-list {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .conversation-list::-webkit-scrollbar {
      width: 6px;
    }

    .conversation-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .conversation-list::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .conversation-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: background 0.15s;
      outline: none;
    }

    .conversation-item:hover,
    .conversation-item:focus-visible {
      background: rgba(0, 0, 0, 0.02);
    }

    .conversation-item:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -2px;
    }

    .conversation-item.active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-left: 3px solid var(--primary-color, #03a9f4);
    }

    .conversation-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .conversation-avatar.channel {
      background: var(--accent-color, #ff9800);
    }

    .conversation-avatar.infra {
      background: #8e5bb5;
    }

    .conversation-info {
      flex: 1;
      overflow: hidden;
    }

    .conversation-top {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .conversation-top .conversation-name {
      flex: 1;
      min-width: 0;
    }

    .conversation-age {
      flex-shrink: 0;
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
    }

    .list-search {
      margin: 8px 12px 0;
      padding: 7px 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
    }

    .list-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px 4px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
    }

    .section-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: none;
      background: none;
      padding: 4px 0;
      color: inherit;
      font: inherit;
      letter-spacing: inherit;
      text-transform: inherit;
      cursor: pointer;
    }

    .section-caret {
      display: inline-block;
      transition: transform 0.15s;
    }

    .section-caret.open {
      transform: rotate(90deg);
    }

    .section-unread {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-radius: 9px;
      padding: 0 6px;
      font-size: 11px;
      letter-spacing: 0;
      line-height: 18px;
    }

    .section-count {
      font-weight: 400;
      letter-spacing: 0;
    }

    .section-add {
      border: none;
      background: none;
      color: var(--primary-color, #03a9f4);
      font-size: 16px;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
    }

    .section-empty {
      padding: 4px 14px 8px;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
    }

    .conversation-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .conversation-detail {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .chevron {
      flex-shrink: 0;
      color: var(--secondary-text-color, #727272);
      font-size: 18px;
      line-height: 1;
      opacity: 0.5;
    }

    .unread-badge {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 24px;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }
  `;

  updated(changedProperties: Map<string, unknown>) {
    if (
      changedProperties.has('conversations') ||
      changedProperties.has('_activeFilter') ||
      changedProperties.has('_query') ||
      changedProperties.has('previews')
    ) {
      this._updateFiltered();
    }
  }

  render() {
    return html`
      <div class="sidebar-header">
        <span class="sidebar-title">Chats</span>
        <button
          class="contacts-pill"
          @click=${() => this.dispatchEvent(new CustomEvent('new-chat-requested', { bubbles: true, composed: true }))}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          Contacts
        </button>
        <button
          class="compose-btn"
          title="Manage channels"
          aria-label="Manage channels"
          @click=${() => this.dispatchEvent(new CustomEvent('manage-requested', { bubbles: true, composed: true }))}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </button>
      </div>
      <input
        class="list-search"
        type="search"
        placeholder="Search chats"
        aria-label="Search chats"
        .value=${this._query}
        @input=${(e: Event) => { this._query = (e.target as HTMLInputElement).value; }} />
      <div class="filter-bar" role="tablist" aria-label="Conversation filter">
        ${this._renderFilterBtn('all', 'All')}
        ${this._renderFilterBtn('unread', 'Unread')}
      </div>
      <div
        class="conversation-list"
        role="listbox"
        aria-label="Conversations"
        @keydown=${this._onListKeyDown}>
        ${this._renderSections()}
      </div>
    `;
  }

  /**
   * Arrow-key navigation between conversation rows. Each
   * row is a focusable role="option" (see _renderConversation); arrow
   * keys move focus, Enter/Space selects, Home/End jump to ends.
   */
  private _onListKeyDown(e: KeyboardEvent) {
    const key = e.key;
    if (
      key !== 'ArrowDown' &&
      key !== 'ArrowUp' &&
      key !== 'Home' &&
      key !== 'End' &&
      key !== 'Enter' &&
      key !== ' '
    ) {
      return;
    }

    const root = this.shadowRoot;
    if (!root) return;
    const items = Array.from(
      root.querySelectorAll<HTMLElement>('.conversation-item'),
    );
    if (items.length === 0) return;

    const current = root.activeElement as HTMLElement | null;
    let idx = current ? items.indexOf(current) : -1;

    if (key === 'Enter' || key === ' ') {
      if (current && idx >= 0) {
        e.preventDefault();
        current.click();
      }
      return;
    }

    e.preventDefault();
    if (key === 'Home') {
      idx = 0;
    } else if (key === 'End') {
      idx = items.length - 1;
    } else if (key === 'ArrowDown') {
      idx = idx < 0 ? 0 : Math.min(idx + 1, items.length - 1);
    } else if (key === 'ArrowUp') {
      idx = idx < 0 ? items.length - 1 : Math.max(idx - 1, 0);
    }

    items[idx]?.focus();
  }

  private _renderFilterBtn(filter: ChatFilter, label: string) {
    const active = this._activeFilter === filter;
    return html`
      <button
        class="filter-btn ${active ? 'active' : ''}"
        role="tab"
        aria-selected=${active ? 'true' : 'false'}
        @click=${() => { this._activeFilter = filter; }}>
        ${label}
      </button>
    `;
  }

  private _sections(): { channels: Array<Contact | Channel>; dms: Array<Contact | Channel> } {
    const channels = this._filteredConversations.filter((c) => !('pubkey_prefix' in c));
    const dms = this._filteredConversations
      .filter((c) => 'pubkey_prefix' in c)
      .sort((a, b) => (this._previewFor(b)?.ts || '').localeCompare(this._previewFor(a)?.ts || ''));
    return { channels, dms };
  }

  private _renderSections() {
    const { channels, dms } = this._sections();
    if (!channels.length && !dms.length) {
      return html`<div class="empty-state"><div class="empty-text">${this._emptyMessage()}</div></div>`;
    }
    // Rows are indexed across both sections so roving focus still works.
    let idx = 0;
    const section = (key: 'channels' | 'dms', title: string, items: Array<Contact | Channel>, add: string) => {
      const collapsed = this._collapsed.has(key);
      const unread = items.reduce((n, c) => n + this._getUnreadCount(
        'pubkey_prefix' in c ? (c as Contact).pubkey_prefix : String((c as Channel).channel_idx)), 0);
      return html`
        <div class="list-section">
          <button class="section-toggle" aria-expanded=${collapsed ? 'false' : 'true'}
            @click=${() => this._toggleSection(key)}>
            <span class="section-caret ${collapsed ? '' : 'open'}" aria-hidden="true">▸</span>
            <span>${title}</span>
            ${collapsed && unread > 0 ? html`<span class="section-unread">${unread}</span>` : ''}
            ${collapsed && unread === 0 ? html`<span class="section-count">${items.length}</span>` : ''}
          </button>
          <button class="section-add" title=${add} aria-label=${add}
            @click=${() => this.dispatchEvent(new CustomEvent(
              key === 'channels' ? 'add-channel-requested' : 'new-chat-requested',
              { bubbles: true, composed: true }))}>＋</button>
        </div>
        ${collapsed
          ? ''
          : items.length
            ? items.map((c) => this._renderConversation(c, idx++))
            : html`<div class="section-empty">${key === 'dms' ? 'No conversations yet. Tap Contacts to start one.' : 'None yet'}</div>`}
      `;
    };
    return html`
      ${section('channels', 'Channels', channels, 'Add a channel')}
      ${section('dms', 'Direct messages', dms, 'Contacts')}
    `;
  }

  /** Same entity_id matching as the unread badges. */
  private _previewFor(conv: Contact | Channel): ConversationPreview | undefined {
    const isContact = 'pubkey_prefix' in conv;
    const entries = Object.entries(this.previews || {});
    if (isContact) {
      const p6 = (conv as Contact).pubkey_prefix.substring(0, 6);
      return entries.find(([k]) => k.endsWith(`_${p6}_messages`))?.[1];
    }
    const idx = (conv as Channel).channel_idx;
    const needle = this.nodePrefix ? `meshcore_${this.nodePrefix}_ch_${idx}_messages` : `_ch_${idx}_messages`;
    return entries.find(([k]) => k.endsWith(needle))?.[1];
  }

  private _emptyMessage(): string {
    switch (this._activeFilter) {
      case 'unread': return 'No unread conversations';
      default: return 'No conversations yet';
    }
  }

  private _renderConversation(conv: Contact | Channel, listIdx: number) {
    const isContact = 'pubkey_prefix' in conv;
    const id = isContact ? (conv as Contact).pubkey_prefix : String((conv as Channel).channel_idx);
    const name = isContact ? (conv as Contact).adv_name : (conv as Channel).name;
    const preview = this._previewFor(conv);
    const line = previewLine(preview, !isContact);
    const detail = line || (isContact ? (conv as Contact).pubkey_prefix : 'No messages yet');
    const age = preview ? shortAge(preview.ts) : '';
    const infra = isContact && INFRA_TYPES.has((conv as Contact).type);
    const avatar = isContact
      ? (conv as Contact).adv_name.replace(/[^\p{L}\p{N}]/gu, '').substring(0, 2).toUpperCase()
        || (conv as Contact).pubkey_prefix.substring(0, 2).toUpperCase()
      : '#';

    const isActive = this.activeId === id;

    const unread = this._getUnreadCount(id);
    const ariaLabel = unread > 0
      ? `${name}, ${detail}, ${unread} unread`
      : `${name}, ${detail}`;

    // Roving tabindex: exactly one item in the list is the Tab stop.
    // Prefer the active item; if nothing is active, the first row.
    const hasActiveInList = this._filteredConversations.some(
      (c) =>
        ('pubkey_prefix' in c
          ? (c as Contact).pubkey_prefix
          : String((c as Channel).channel_idx)) === this.activeId,
    );
    const isTabStop = isActive || (!hasActiveInList && listIdx === 0);

    return html`
      <div
        class=${isActive ? 'conversation-item active' : 'conversation-item'}
        role="option"
        tabindex=${isTabStop ? '0' : '-1'}
        aria-selected=${isActive ? 'true' : 'false'}
        aria-label=${ariaLabel}
        @click=${() => this.dispatchEvent(
          new CustomEvent('conversation-selected', { detail: { id, isContact } }),
        )}>
        <div class="conversation-avatar ${isContact ? (infra ? 'infra' : '') : 'channel'}">${avatar}</div>
        <div class="conversation-info">
          <div class="conversation-top">
            <span class="conversation-name">${name}</span>
            ${age ? html`<span class="conversation-age">${age}</span>` : ''}
          </div>
          <div class="conversation-detail">${detail}</div>
        </div>
        ${unread > 0
          ? html`<div class="unread-badge" aria-hidden="true">${unread}</div>`
          : ''}
      </div>
    `;
  }

  private _getUnreadCount(id: string): number {
    // Unified badge projection. `UnreadController.badgeCount`
    // is the single implementation backing this and
    // `chat-page._getUnreadCountForSelected`. It owns the entity-id
    // suffix matching, the node_prefix scoping for
    // channels (so same-named channels on different upstream entries
    // don't cross-contaminate), and the suffix-only fallback when
    // nodePrefix is null. The `unread` prop is always supplied by
    // chat-page; the guard covers the brief pre-binding window.
    return this.unread ? this.unread.badgeCount(id, this.nodePrefix) : 0;
  }

  private _updateFiltered() {
    const q = this._query.trim().toLowerCase();
    this._filteredConversations = this.conversations.filter((conv) => {
      const isContact = 'pubkey_prefix' in conv;
      const id = isContact ? (conv as Contact).pubkey_prefix : String((conv as Channel).channel_idx);
      const name = isContact ? (conv as Contact).adv_name : (conv as Channel).name;
      if (q && !(name || '').toLowerCase().includes(q)) return false;
      const unread = this._getUnreadCount(id);
      if (this._activeFilter === 'unread' && unread <= 0) return false;
      // Direct messages only appear once there's a conversation to show
      // (searching still finds every contact).
      if (isContact && !this._previewFor(conv) && unread <= 0 && this.activeId !== id && !q) return false;
      return true;
    });
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-conversation-list': ConversationList;
  }
}
