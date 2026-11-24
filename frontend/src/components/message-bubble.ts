import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ChatMessage, MessageGroup, HomeAssistant } from '../types';
import { formatTimestamp } from '../chat/message-parser';
import { deliveryLabel } from '../utils/delivery-label';
import type { QuotedMessage } from '../utils/reply-links';
import { NODE_TYPE_NAMES, parseContact, parseLocation, type ReactionChip } from '../utils/rich-messages';
import { addContact } from '../api';

/**
 * Generate a deterministic color from a string (e.g., pubkey prefix).
 */
function senderColorFromPrefix(prefix: string): string {
  let hash = 0;
  for (let i = 0; i < prefix.length; i++) {
    hash = ((hash << 5) - hash) + prefix.charCodeAt(i);
  }
  const colors = ['#e57373', '#64b5f6', '#81c784', '#ffb74d', '#ba68c8', '#4dd0e1', '#fff176', '#a1887f'];
  return colors[Math.abs(hash) % colors.length];
}

@customElement('meshcore-message-bubble')
export class MessageBubble extends LitElement {
  @property({ type: Object }) group?: MessageGroup;
  @property({ type: Object }) message?: ChatMessage;
  @property({ type: String }) timestampFormat: 'relative' | 'time' | 'datetime' = 'relative';
  /**
   * Getter rather than `hass`, so bubbles don't re-render on every Home
   * Assistant state change. Only the route map uses it.
   */
  @property({ attribute: false }) getHass?: () => HomeAssistant | undefined;
  @property({ type: String }) entryId?: string;
  /** The conversation is a channel: resending asks for confirmation (others may already have it). */
  @property({ type: Boolean }) isChannel = false;
  /** Finds the message a reply answers (supplied by the chat page). */
  /** Reactions on a message (supplied by the chat page). */
  @property({ attribute: false }) reactionsFor?: (id: string) => ReactionChip[];
  @state() private _contactAdded = '';
  @property({ attribute: false }) quoteFor?: (msg: ChatMessage) => QuotedMessage | null;

  /** The message open in the message panel, outlined in the chat. */
  @property({ type: String }) selectedId?: string;

  static styles = css`
    :host {
      display: block;
    }

    .message-group {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }

    .message-group.outgoing {
      align-items: flex-end;
    }

    .message-group.incoming {
      align-items: flex-start;
    }

    .message-group.system {
      align-items: center;
    }

    .sender {
      font-size: 12px;
      font-weight: 600;
      color: var(--sender-color, var(--primary-color, #03a9f4));
      margin-bottom: 2px;
      padding: 0 4px;
      max-width: 85%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .message-group.outgoing .sender {
      display: none;
    }

    .bubble {
      max-width: 85%;
      padding: 8px 12px;
      border-radius: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      position: relative;
      cursor: pointer;
      transition: opacity 0.15s;
      line-height: 1.4;
      font-size: 14px;
    }

    .bubble:active {
      opacity: 0.7;
    }

    .bubble.search-highlight {
      animation: highlight-flash 2.5s ease-out;
    }

    @keyframes highlight-flash {
      0%, 20% {
        box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.6);
      }
      100% {
        box-shadow: 0 0 0 3px transparent;
      }
    }

    .bubble + .bubble {
      margin-top: 2px;
    }

    .bubble.incoming {
      background: var(--bubble-incoming-bg, var(--secondary-background-color, #e8e8e8));
      color: var(--bubble-incoming-text, var(--primary-text-color, #212121));
      border-bottom-left-radius: 4px;
    }

    .bubble.incoming:first-of-type {
      border-top-left-radius: 16px;
    }

    .bubble.outgoing {
      background: var(--bubble-outgoing-bg, var(--primary-color, #03a9f4));
      color: var(--bubble-outgoing-text, #fff);
      border-bottom-right-radius: 4px;
    }

    .bubble.outgoing:first-of-type {
      border-top-right-radius: 16px;
    }

    .bubble.system {
      background: transparent;
      color: var(--system-msg-color, var(--secondary-text-color, #727272));
      font-style: italic;
      font-size: 13px;
      text-align: center;
      cursor: default;
      padding: 4px 12px;
    }

    .message-text {
      white-space: pre-wrap;
    }

    .card { display: flex; flex-direction: column; gap: 2px; min-width: 160px; }
    .card.attached { margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(127, 127, 127, 0.35); }
    .card-title { font-weight: 600; word-break: break-word; }
    .card-meta { font-size: 0.8em; opacity: 0.8; }
    .card-link { align-self: flex-start; margin-top: 4px; font: inherit; font-size: 0.85em; color: inherit; text-decoration: underline;
      background: none; border: none; padding: 0; cursor: pointer; }
    .card-link:disabled { text-decoration: none; opacity: 0.7; cursor: default; }
    .reactions { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
    .reaction { background: rgba(127, 127, 127, 0.25); border-radius: 10px; padding: 1px 6px; font-size: 0.85em; }
    .bubble.selected { outline: 2px solid var(--primary-color, #03a9f4); outline-offset: 1px; }
    .bubble.system.activity { cursor: pointer; font-size: 12px; }
    .bubble.system.activity:hover { text-decoration: underline; }
    .reaction-summary { padding: 8px 16px 6px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .rs-chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .rs-chip { border: 1px solid var(--divider-color, #555); background: rgba(127,127,127,0.12); color: var(--primary-text-color);
      border-radius: 12px; padding: 3px 10px; font-size: 13px; cursor: pointer; font-family: inherit; }
    .rs-chip.mine { border-color: var(--primary-color, #03a9f4); }
    .rs-chip.on { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: #fff; }
    .rs-more { background: none; border: none; color: var(--primary-color, #03a9f4); padding: 4px 0; cursor: pointer; font: inherit; font-size: 13px; }
    .reaction-list { padding-top: 6px; max-height: 180px; overflow-y: auto; }
    .more-react { font-size: 20px !important; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #555) !important; }
    .more-react.on { background: rgba(127,127,127,0.2) !important; }
    .react-picker { padding: 8px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .react-picker meshcore-emoji-picker { width: 100%; }
    .reaction-entry { display: flex; gap: 8px; align-items: center; padding: 3px 0; font-size: 14px; }
    .re-emoji { width: 24px; text-align: center; }
    .re-who { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .re-time { font-size: 12px; color: var(--secondary-text-color); }
    .reaction-row { display: flex; justify-content: space-between; gap: 2px; padding: 6px 10px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .reaction-row button { background: none; border: none; font-size: 22px; line-height: 1; cursor: pointer; border-radius: 50%;
      width: 36px; height: 36px; padding: 0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    @media (hover: hover) { .reaction-row button:hover { background: rgba(127, 127, 127, 0.2); } }
    .quote {
      border-left: 3px solid var(--primary-color, #03a9f4);
      background: rgba(127, 127, 127, 0.15);
      border-radius: 6px;
      padding: 4px 8px;
      margin-bottom: 4px;
      font-size: 0.85em;
      max-width: 100%;
    }
    .quote.linked { cursor: pointer; }
    .bubble.outgoing .quote { border-left-color: rgba(255, 255, 255, 0.85); background: rgba(0, 0, 0, 0.15); }
    .quote-name { font-weight: 600; opacity: 0.9; }
    .quote-text {
      opacity: 0.85;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
    .message-text .mention {
      background: var(--mention-bg, rgba(3, 169, 244, 0.15));
      color: var(--mention-text, var(--primary-color, #03a9f4));
      font-weight: 600;
      padding: 1px 4px;
      border-radius: 4px;
    }

    .bubble.outgoing .message-text .mention {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    .timestamp {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      margin-top: 2px;
      padding: 0 4px;
    }

    .bubble.outgoing .timestamp {
      color: rgba(255, 255, 255, 0.6);
    }

    .bubble.incoming .timestamp {
      color: var(--secondary-text-color, #727272);
    }

    .message-group.outgoing .timestamp {
      text-align: right;
    }

    .route-info {
      font-size: 10px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      padding: 2px 4px;
      font-family: monospace;
    }

    .route-info-inline {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      font-family: monospace;
      margin-top: 2px;
      padding: 0 4px;
      opacity: 0.7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .delivery-status {
      color: inherit;
    }

    .flood-scope {
      color: inherit;
      opacity: 0.85;
      white-space: nowrap;
    }

    .message-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message-dialog {
      background: #333;
      border: 2px solid var(--primary-color, #03a9f4);
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      min-width: 240px;
      max-width: 300px;
      max-height: calc(100vh - 48px);
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      z-index: 21;
    }
    .message-dialog.with-picker {
      width: min(360px, calc(100vw - 24px));
      max-width: min(360px, calc(100vw - 24px));
      box-sizing: border-box;
    }

    .message-dialog-resend {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      padding-top: 4px;
    }
    .resend-note {
      padding: 8px 16px 0;
      font-size: 12px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }
    .resend-actions {
      display: flex;
    }
    .resend-actions .message-dialog-action {
      flex: 1;
    }
    .message-dialog-action.secondary {
      color: var(--secondary-text-color);
    }

    .message-dialog.with-map {
      width: min(560px, 94vw);
      max-width: none;
      max-height: 92vh;
      overflow-y: auto;
    }

    .message-dialog-preview {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 280px;
    }

    .message-dialog-action {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
      min-height: 48px;
      transition: background 0.15s;
    }

    .message-dialog-action:hover,
    .message-dialog-action:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }

    .message-dialog-action + .message-dialog-action {
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .route-footer { word-break: break-word; user-select: text; }
    .message-dialog-route {
      padding: 12px 16px;
      font-size: 12px;
      color: var(--secondary-text-color);
      border-top: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      font-family: monospace;
      word-break: break-all;
      transition: background 0.15s;
    }

    .message-dialog-route:hover,
    .message-dialog-route:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }
  `;

  render() {
    if (this.group) {
      return html`
        ${this._renderGroup()}
      `;
    }
    return html``;
  }

  private _renderGroup() {
    if (!this.group) return html``;

    const g = this.group;
    const classes = {
      'message-group': true,
      incoming: !g.isOutgoing && !g.isSystem,
      outgoing: g.isOutgoing,
      system: g.isSystem,
    };

    // Determine sender color
    let senderColor: string | undefined;
    if (g.messages.length > 0) {
      const firstMsg = g.messages[0];
      senderColor = firstMsg.senderColor || senderColorFromPrefix(g.sender);
    }

    return html`
      <div class=${this._classMap(classes)} style=${senderColor ? `--sender-color: ${senderColor}` : ''}>
        ${!g.isSystem && !g.isOutgoing
          ? html`<div class="sender">${g.sender}</div>`
          : html``}
        ${g.messages.map((msg) => this._renderBubble(msg))}
      </div>
    `;
  }

  private _renderBubble(msg: ChatMessage) {
    if (msg.activityTarget) {
      return html`<div class="bubble system activity" data-msg-id=${msg.id} title="Show the message"
        @click=${(e: Event) => {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('jump-to-message', { detail: { id: msg.activityTarget }, bubbles: true, composed: true }));
        }}>${msg.text} · ${formatTimestamp(msg.timestamp, this.timestampFormat)}</div>`;
    }
    const bubbleClasses = {
      bubble: true,
      incoming: !msg.isOutgoing && !msg.isSystem,
      outgoing: msg.isOutgoing,
      system: msg.isSystem,
      selected: msg.id === this.selectedId,
    };

    const statusLabel = msg.isOutgoing && msg.deliveryStatus ? deliveryLabel(msg.deliveryStatus) : '';
    const ts = formatTimestamp(msg.timestamp, this.timestampFormat);
    // Inbound region scope — incoming bubbles only. "*" → "🌐 all regions",
    // a region name renders verbatim, absent renders nothing. The outbound
    // scope is shown by the thread-header chip, so outgoing is unaffected.
    const scopeLabel =
      !msg.isOutgoing && !msg.isSystem && msg.floodScope
        ? msg.floodScope === '*'
          ? '🌐 all regions'
          : msg.floodScope
        : '';

    return html`
      <div class=${this._classMap(bubbleClasses)} data-msg-id=${msg.id} @click=${(e: Event) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent('message-selected', { detail: { msg }, bubbles: true, composed: true })); }}>
        ${this._renderQuote(msg)}
        ${this._renderBody(msg)}
        ${this._renderReactions(msg)}
        <div class="timestamp">${statusLabel ? html`<span class="delivery-status">${statusLabel}</span> · ` : ''}${ts}${scopeLabel ? html` · <span class="flood-scope">${scopeLabel}</span>` : ''}</div>
      </div>
    `;
  }

  /**
   * Get inline delivery status label for the timestamp line.
   * Shows "Repeated" for messages heard by repeaters, "No repeats" otherwise.
   * Full details (repeater count, RTT) are in the click-to-open dialog.
   */
  private _renderBody(msg: ChatMessage) {
    const loc = msg.isSystem ? null : parseLocation(msg.text);
    if (loc) {
      const osm = `https://www.openstreetmap.org/?mlat=${loc.lat}&mlon=${loc.lon}#map=16/${loc.lat}/${loc.lon}`;
      return html`<div class="card">
        <div class="card-title">📍 ${loc.label || 'Location'}</div>
        <div class="card-meta">${loc.lat.toFixed(5)}, ${loc.lon.toFixed(5)}</div>
        <a class="card-link" href=${osm} target="_blank" rel="noopener noreferrer" @click=${(e: Event) => e.stopPropagation()}>Open map</a>
      </div>`;
    }
    const contact = msg.isSystem ? null : parseContact(msg.text);
    if (contact) {
      const added = this._contactAdded === contact.publicKey;
      return html`
        ${contact.caption ? html`<div class="message-text">${this._renderTextWithMentions(contact.caption, msg.mentions)}</div>` : ''}
        <div class="card ${contact.caption ? 'attached' : ''}">
          <div class="card-title">👤 ${contact.name || 'Contact'}</div>
          <div class="card-meta">${NODE_TYPE_NAMES[contact.type] ?? 'Node'} · ${contact.publicKey.slice(0, 6)}…${contact.publicKey.slice(-6)}</div>
          ${msg.isOutgoing ? '' : html`<button class="card-link" ?disabled=${added} @click=${(e: Event) => { e.stopPropagation(); void this._addSharedContact(contact.publicKey, contact.name); }}>${added ? 'Added' : 'Add contact'}</button>`}
        </div>`;
    }
    return html`<div class="message-text">${this._renderTextWithMentions(msg.text, msg.mentions)}</div>`;
  }

  private async _addSharedContact(publicKey: string, name: string) {
    const hass = this.getHass?.();
    if (!hass) return;
    const r = await addContact(hass, publicKey, name, this.entryId);
    if (r.success) {
      this._contactAdded = publicKey;
      this.dispatchEvent(new CustomEvent('contacts-changed', { bubbles: true, composed: true }));
    }
  }

  private _renderReactions(msg: ChatMessage) {
    const chips = this.reactionsFor?.(msg.id) ?? [];
    if (chips.length === 0) return '';
    return html`<div class="reactions">${chips.map((c) => html`<span class="reaction" title=${c.senders.join(', ')}>${c.emoji}${c.senders.length > 1 ? html` <b>${c.senders.length}</b>` : ''}</span>`)}</div>`;
  }

  private _renderQuote(msg: ChatMessage) {
    const q = this.quoteFor?.(msg);
    if (!q) return '';
    const jump = (e: Event) => {
      e.stopPropagation();
      if (q.id) this.dispatchEvent(new CustomEvent('jump-to-message', { detail: { id: q.id }, bubbles: true, composed: true }));
    };
    return html`<div class="quote ${q.id ? 'linked' : ''}" @click=${jump} title=${q.id ? 'Show the original message' : ''}>
      <div class="quote-name">${q.sender}</div>
      <div class="quote-text">${q.text}</div>
    </div>`;
  }

  private _renderTextWithMentions(text: string, mentions: string[]) {
    if (mentions.length === 0) {
      // No mentions to highlight — return raw text. Lit auto-escapes
      // string interpolations in html`...` templates.
      return text;
    }

    // Build a single regex matching either @[Name] or @Name forms for any
    // known mention. Escape regex special chars in mention names so a name
    // containing parentheses or other regex metacharacters can't break the
    // pattern or inject capture groups.
    const escaped = mentions.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(
      `@\\[(${escaped.join('|')})\\]|@(${escaped.join('|')})\\b`,
      'g',
    );

    const parts: (string | ReturnType<typeof html>)[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = pattern.exec(text)) !== null) {
      if (m.index > last) parts.push(text.slice(last, m.index));
      const name = m[1] ?? m[2];
      parts.push(html`<span class="mention">@${name}</span>`);
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push(text.slice(last));
    return parts;
  }

  private _classMap(obj: Record<string, boolean>): string {
    return Object.entries(obj)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(' ');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-message-bubble': MessageBubble;
  }
}
