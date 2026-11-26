import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ChatMessage, HomeAssistant } from '../types';
import { formatTimestamp } from '../chat/message-parser';
import { QUICK_REACTIONS, messageHash, type ReactionChip } from '../utils/rich-messages';
import { canResend } from '../utils/delivery-label';
import { formatFullDateTime } from '../utils/display-prefs';
import { hasMapPath } from './path-map';
import './path-map';
import './emoji-picker';

/**
 * What opens when you tap a message: a bottom sheet on phones ("sheet"),
 * a panel beside the chat on wider screens ("side"). Same content in both.
 *
 * Fires (bubbling, composed): panel-close, react-to-message {emoji,msg},
 * reply-to-sender {mention,sender,text}, resend-message {text}, delete-message {id},
 * open-conversation {id}.
 */
@customElement('meshcore-message-panel')
export class MeshCoreMessagePanel extends LitElement {
  @property({ attribute: false }) message?: ChatMessage;
  @property({ type: String }) mode: 'sheet' | 'side' = 'sheet';
  @property({ attribute: false }) reactions: ReactionChip[] = [];
  @property({ attribute: false }) getHass?: () => HomeAssistant | undefined;
  @property({ type: String }) entryId?: string;
  @property({ type: Boolean }) isChannel = false;
  @property({ type: String }) timestampFormat: 'relative' | 'time' | 'datetime' = 'relative';
  /** Conversation id of a contact with the sender's name, for "Message". */
  @property({ type: String }) senderConversation?: string;
  /** Why Reply is unavailable for this message, if it is. */
  @property({ type: String }) replyBlocked?: string;
  @state() private _replyWhy = false;

  @state() private _picker = false;
  /** Desktop: the reaction buttons open from the React button. */
  @state() private _reactRow = false;
  @state() private _showMap = false;
  @state() private _copied = false;
  @state() private _confirmResend = false;
  @state() private _confirmDelete = false;
  @state() private _reactOpen: string | null = null;
  @state() private _reactAll = false;
  private _shownId?: string;

  static styles = css`
    :host { display: block; color: var(--primary-text-color); font-size: 14px; }
    .backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); z-index: 30; display: flex; flex-direction: column; justify-content: flex-end; }
    .sheet { background: var(--card-background-color, #262626); border-radius: 18px 18px 0 0; max-height: 85vh; overflow-y: auto;
      overscroll-behavior: contain; padding: 8px 16px calc(16px + env(safe-area-inset-bottom, 0px)); box-sizing: border-box; }
    .grab { width: 40px; height: 4px; border-radius: 2px; background: var(--divider-color, #555); margin: 0 auto 10px; }
    .side { height: 100%; width: 340px; box-sizing: border-box; overflow-y: auto; padding: 14px 16px;
      background: var(--card-background-color, #1a1a1a); border-left: 1px solid var(--divider-color, #333);
      display: flex; flex-direction: column; gap: 14px; }
    .side-head { display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 15px; }
    .x { background: none; border: none; color: var(--secondary-text-color); font-size: 16px; cursor: pointer; padding: 4px 8px; }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
    .sender { font-size: 13px; font-weight: 600; color: var(--sender-color, var(--primary-color, #03a9f4)); }
    .meta { font-size: 12px; color: var(--secondary-text-color); }
    .preview { background: rgba(127, 127, 127, 0.15); border-radius: 12px; padding: 9px 12px; margin: 6px 0 10px;
      white-space: pre-wrap; word-break: break-word; max-height: 140px; overflow-y: auto; }
    .reacts { display: flex; justify-content: space-between; align-items: center; gap: 2px; }
    .side .reacts { justify-content: flex-start; flex-wrap: wrap; }
    .em { background: none; border: none; font-size: 22px; line-height: 1; width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .em.more { font-size: 18px; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #555); }
    .em.more.on { background: rgba(127, 127, 127, 0.2); }
    @media (hover: hover) { .em:hover { background: rgba(127, 127, 127, 0.2); } }
    .picker { margin-top: 8px; }
    .picker meshcore-emoji-picker { width: 100%; }
    .actions { display: flex; justify-content: space-around; border-top: 1px solid var(--divider-color, #3a3a3a);
      border-bottom: 1px solid var(--divider-color, #3a3a3a); margin-top: 12px; }
    .side .actions { justify-content: flex-start; flex-wrap: wrap; gap: 8px; border: none; margin: 0; }
    .reacts { margin-top: 10px; }
    .side .reacts { margin-top: 0; }
    .reactions-block { margin-top: 10px; }
    .side .reactions-block { margin-top: 0; }
    .act { background: none; border: none; color: var(--primary-text-color); font: inherit; font-size: 12px; cursor: pointer;
      display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px 4px; min-width: 64px; min-height: 56px; }
    .side .act { flex-direction: row; min-height: 0; min-width: 0; font-size: 13px; padding: 7px 10px; border-radius: 8px;
      background: rgba(127, 127, 127, 0.12); border: 1px solid var(--divider-color, #3a3a3a); }
    .act svg { width: 22px; height: 22px; }
    .side .act svg { width: 16px; height: 16px; }
    .act.on { color: var(--primary-color, #03a9f4); }
    .lbl { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); margin-bottom: 6px; }
    .map { margin-top: 10px; }
    .side .map { margin-top: 0; }
    .info { margin-top: 2px; }
    .preview + .info { margin-top: -4px; }
    .toggle { background: none; border: none; color: var(--secondary-text-color); font: inherit; font-size: 12px; cursor: pointer; padding: 10px 0 0; }
    .details { font-size: 12px; color: var(--secondary-text-color); line-height: 1.7; word-break: break-word; }
    .resend { margin-top: 10px; font-size: 13px; }
    .resend .note { color: var(--secondary-text-color); margin-bottom: 6px; }
    .btn { font: inherit; border-radius: 8px; padding: 8px 14px; cursor: pointer; border: 1px solid var(--divider-color, #555);
      background: none; color: var(--primary-text-color); }
    .btn.primary { background: var(--primary-color, #03a9f4); border-color: transparent; color: #fff; }
    .rs-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
    .rs-chip { border: 1px solid var(--divider-color, #555); background: rgba(127, 127, 127, 0.12); color: var(--primary-text-color);
      border-radius: 12px; padding: 3px 10px; font-size: 13px; cursor: pointer; font-family: inherit; }
    .rs-chip.mine { border-color: var(--primary-color, #03a9f4); }
    .rs-chip.on { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: #fff; }
    .entry { display: flex; gap: 8px; align-items: center; padding: 3px 0; }
    .entry .e { width: 24px; text-align: center; }
    .entry .who { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .more-link { background: none; border: none; color: var(--primary-color, #03a9f4); padding: 4px 0; cursor: pointer; font: inherit; font-size: 13px; }
    .none { font-size: 12px; color: var(--secondary-text-color); }
    .act.blocked { opacity: 0.45; }
    .btn.danger { color: var(--error-color, #db4437); border-color: var(--error-color, #db4437); }
    .reply-why { font-size: 12px; line-height: 1.45; color: var(--secondary-text-color);
      background: rgba(127, 127, 127, 0.12); border-radius: 8px; padding: 8px 10px; margin-top: 8px; }
  `;

  willUpdate() {
    // A different message resets the per-message toggles.
    if (this.message?.id !== this._shownId) {
      this._shownId = this.message?.id;
      this._picker = false;
      this._reactRow = false;
      this._replyWhy = false;
      this._showMap = this.mode === 'side';
      this._copied = false;
      this._confirmResend = false;
      this._confirmDelete = false;
      this._reactOpen = null;
      this._reactAll = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this._onKey);
    super.disconnectedCallback();
  }

  private _onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.message) this._close();
  };

  private _emit(name: string, detail?: unknown) {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  private _close() {
    this._emit('panel-close');
  }

  private _react(emoji: string) {
    const msg = this.message!;
    this._emit('react-to-message', { emoji, msg });
    this._picker = false;
    this._reactRow = false;
    if (this.mode === 'sheet') this._close();
  }

  private async _copy() {
    const text = this.message!.text;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    this._copied = true;
    setTimeout(() => { this._copied = false; }, 1500);
  }

  private _reply() {
    const m = this.message!;
    this._emit('reply-to-sender', { mention: `@[${m.sender}] `, sender: m.sender, text: m.text });
    this._close();
  }

  private _resend() {
    this._emit('resend-message', { text: this.message!.text });
    this._close();
  }

  /** Hops, SNR and RSSI from the first heard copy ("7 hops · SNR 12 · RSSI -87"). */
  private _radioLine(m: ChatMessage): string {
    const e = m.rxLogData?.[0];
    if (!e) return '';
    const nodes = e.path_nodes as string[] | undefined;
    const hops = (e.hop_count as number | undefined) ?? nodes?.length ?? 0;
    const parts = [`${hops} hop${hops === 1 ? '' : 's'}`];
    if (e.snr !== undefined) parts.push(`SNR ${e.snr}`);
    if (e.rssi !== undefined) parts.push(`RSSI ${e.rssi}`);
    return parts.join(' · ');
  }

  private _icon(path: string) {
    return html`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d=${path}></path></svg>`;
  }

  private _renderReactions() {
    const chips = this.reactions;
    if (chips.length === 0) return '';
    const total = chips.reduce((n, c) => n + c.who.length, 0);
    const mine = new Set(chips.filter((c) => c.senders.includes('You')).map((c) => c.emoji));
    // The side panel has room: list everyone by default.
    const open = this._reactOpen ?? (this.mode === 'side' ? '*' : null);
    const chip = (key: string, label: string, isMine = false) => html`<button
      class="rs-chip ${open === key ? 'on' : ''} ${isMine ? 'mine' : ''}" aria-expanded=${open === key}
      @click=${() => { this._reactOpen = open === key ? '' : key; this._reactAll = false; }}>${label}</button>`;
    let rows = open
      ? chips.filter((c) => open === '*' || c.emoji === open)
        .flatMap((c) => c.who.map((w) => ({ emoji: c.emoji, ...w })))
        .sort((x, y) => y.time.getTime() - x.time.getTime())
      : [];
    const limit = this.mode === 'side' ? 20 : 5;
    const hidden = rows.length - limit;
    if (!this._reactAll && hidden > 0) rows = rows.slice(0, limit);
    return html`<div>
      <div class="rs-chips">
        ${[...chips].sort((x, y) => y.who.length - x.who.length).map((c) => chip(c.emoji, `${c.emoji} ${c.who.length}`, mine.has(c.emoji)))}
        ${chip('*', `${total} ${total === 1 ? 'reaction' : 'reactions'}`)}
      </div>
      ${rows.map((r) => html`<div class="entry"><span class="e">${r.emoji}</span><span class="who">${r.sender}</span><span class="meta">${formatTimestamp(r.time, this.timestampFormat)}</span></div>`)}
      ${!this._reactAll && hidden > 0 ? html`<button class="more-link" @click=${() => { this._reactAll = true; }}>Show all ${rows.length + hidden}</button>` : ''}
    </div>`;
  }

  private _renderResend(m: ChatMessage) {
    if (!canResend(m.isOutgoing, m.deliveryStatus)) return '';
    const failed = m.deliveryStatus?.status === 'failed';
    if (this._confirmResend) {
      return html`<div class="resend"><div class="note">Resend to this channel? Others may already have it, and they'd see it twice.</div>
        <button class="btn" @click=${() => { this._confirmResend = false; }}>Cancel</button>
        <button class="btn primary" @click=${this._resend}>Resend</button></div>`;
    }
    if (this._confirmDelete) {
      return html`<div class="resend"><div class="note">Delete this message from Home Assistant? It's only removed here, not from anyone who did receive it.</div>
        <button class="btn" @click=${() => { this._confirmDelete = false; }}>Cancel</button>
        <button class="btn danger" @click=${() => { this._emit('delete-message', { id: m.id }); this._close(); }}>Delete</button></div>`;
    }
    return html`<div class="resend"><div class="note">${failed
      ? 'No reply came back, so it most likely didn\'t arrive.'
      : 'No repeat was heard. It may still have been delivered, out of your radio\'s range.'}</div>
      <button class="btn" @click=${() => { this._confirmDelete = true; this._confirmResend = false; }}>Delete</button>
      <button class="btn primary" @click=${() => { if (this.isChannel && !failed) this._confirmResend = true; else this._resend(); }}>Resend</button></div>`;
  }

  private _renderBody(m: ChatMessage) {
    const side = this.mode === 'side';
    const mapAvailable = !!this.getHass && hasMapPath(m);
    const ds = m.deliveryStatus;
    const delivery = m.isOutgoing && ds
      ? `${(ds.repeaterCount ?? 0) > 0 ? `${ds.repeaterCount} repeater${ds.repeaterCount === 1 ? '' : 's'} responded` : 'No repeaters responded'}${ds.ackReceived ? ' · ACK received' : ''}${ds.roundTripMs ? ` · ${ds.roundTripMs}ms RTT` : ''}`
      : '';
    const radio = this._radioLine(m);
    // Your own message nobody was heard passing on: others may not have it,
    // so a reaction to it would have nothing to attach to.
    const unheard = canResend(m.isOutgoing, m.deliveryStatus);
    const reactIcon = 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z';

    return html`
      ${side ? html`<div class="side-head">Message<button class="x" aria-label="Close" @click=${this._close}>✕</button></div>` : html`<div class="grab"></div>`}
      <div>
        <div class="sender">${m.isOutgoing ? 'You' : m.sender}</div>
        <div class="preview">${m.text}</div>
        <div class="meta info">${m.isOutgoing ? 'Sent' : 'Received'} ${formatFullDateTime(m.timestamp)}</div>
        ${radio ? html`<div class="meta info">${radio}</div>` : ''}
        ${(() => {
          const h = messageHash(m);
          return h ? html`<div class="meta info" title=${h.exact ? 'Used by reactions to point at this message' : 'The exact send time was not recorded, so this may be off'}>
            Hash <span style="font-family:monospace">${h.hash}</span>${h.exact ? '' : ' (estimated)'}</div>` : '';
        })()}
        ${delivery ? html`<div class="meta info">${delivery}</div>` : ''}
      </div>
      <div class="actions">
        ${!m.isOutgoing ? html`<button class="act ${this.replyBlocked ? 'blocked' : ''}" aria-disabled=${this.replyBlocked ? 'true' : 'false'}
          title=${this.replyBlocked ?? ''}
          @click=${() => { if (this.replyBlocked) this._replyWhy = !this._replyWhy; else this._reply(); }}>${this._icon('M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z')}Reply</button>` : ''}
        ${unheard ? '' : html`<button class="act ${this._reactRow ? 'on' : ''}" aria-expanded=${this._reactRow} @click=${() => { this._reactRow = !this._reactRow; this._picker = false; }}>${this._icon(reactIcon)}React</button>`}
        <button class="act" @click=${this._copy}>${this._icon('M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z')}${this._copied ? 'Copied' : 'Copy'}</button>
        ${mapAvailable && !side ? html`<button class="act ${this._showMap ? 'on' : ''}" aria-expanded=${this._showMap} @click=${() => { this._showMap = !this._showMap; }}>${this._icon('M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z')}Route</button>` : ''}
        ${!m.isOutgoing && this.senderConversation ? html`<button class="act" @click=${() => { this._emit('open-conversation', { id: this.senderConversation }); this._close(); }}>${this._icon('M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z')}Message</button>` : ''}
      </div>
      ${this.replyBlocked && this._replyWhy ? html`<div class="reply-why" role="note">${this.replyBlocked}</div>` : ''}
      ${unheard ? html`<div class="reply-why" role="note">Reactions are off for this message because nobody was heard receiving it. Resend it first, or delete it.</div>` : ''}
      ${this._reactRow && !unheard ? html`<div class="reacts" role="group" aria-label="React">
        ${QUICK_REACTIONS.map((e) => html`<button class="em" aria-label="React ${e}" @click=${() => this._react(e)}>${e}</button>`)}
        <button class="em more ${this._picker ? 'on' : ''}" aria-label="More emoji" aria-expanded=${this._picker}
          @click=${() => { this._picker = !this._picker; }}>＋</button>
      </div>
      ${this._picker ? html`<div class="picker" @emoji-picked=${(e: CustomEvent) => { e.stopPropagation(); this._react((e.detail as { emoji: string }).emoji); }}><meshcore-emoji-picker></meshcore-emoji-picker></div>` : ''}` : ''}
      ${this.reactions.length ? html`<div class="reactions-block">${this._renderReactions()}</div>` : ''}
      ${this._renderResend(m)}
      ${mapAvailable && this._showMap ? html`<div class="map">${side ? html`<div class="lbl">Route</div>` : ''}<meshcore-path-map .getHass=${this.getHass} .message=${m} .entryId=${this.entryId}></meshcore-path-map></div>` : ''}
    `;
  }

  render() {
    const m = this.message;
    if (!m) return html``;
    if (this.mode === 'side') {
      return html`<aside class="side" aria-label="Message details">${this._renderBody(m)}</aside>`;
    }
    return html`<div class="backdrop" @click=${this._close}>
      <div class="sheet" role="dialog" aria-modal="true" aria-label="Message actions" @click=${(e: Event) => e.stopPropagation()}>
        ${this._renderBody(m)}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-message-panel': MeshCoreMessagePanel;
  }
}
