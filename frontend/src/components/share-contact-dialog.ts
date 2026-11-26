import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import qrcode from 'qrcode-generator';
import type { HomeAssistant } from '../types';
import { formatContact } from '../utils/rich-messages';

/** The contact being shared: your own radio or one of your contacts. */
export interface ShareTarget {
  name: string;
  publicKey: string;
  type: number;
  /** True for your own radio. */
  self: boolean;
}

/** `meshcore://contact/add?…` link the MeshCore apps open (and scan as a QR code). */
export function contactLink(t: Pick<ShareTarget, 'name' | 'publicKey' | 'type'>): string {
  return `meshcore://contact/add?name=${encodeURIComponent(t.name)}`
    + `&public_key=${t.publicKey.toLowerCase()}&type=${t.type}`;
}

/** QR modules for `text`: a square grid of dark (true) and light cells. */
export function qrModules(text: string): boolean[][] {
  const qr = qrcode(0, 'M');
  qr.addData(text, 'Byte');
  qr.make();
  const n = qr.getModuleCount();
  return Array.from({ length: n }, (_, r) => Array.from({ length: n }, (_, c) => qr.isDark(r, c)));
}

/**
 * Share a contact: copy its chat code or link, show its QR code, or send
 * it over the air to radios in direct range.
 */
@customElement('meshcore-share-contact-dialog')
export class ShareContactDialog extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ type: String }) entryId?: string;
  @property({ attribute: false }) target!: ShareTarget;

  @state() private _note = '';
  @state() private _sending = false;

  static styles = css`
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 1100;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      border-radius: 14px;
      width: min(420px, 94vw);
      max-height: 90vh;
      overflow-y: auto;
      padding: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }
    .head {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    .head b {
      flex: 1;
      font-size: 17px;
    }
    .close {
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 22px;
      cursor: pointer;
    }
    .qr {
      display: block;
      width: 220px;
      height: 220px;
      margin: 4px auto 4px;
      background: #fff;
      border-radius: 8px;
    }
    .qr-note {
      text-align: center;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 12px;
    }
    .opt {
      padding: 10px 0;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }
    .opt-title {
      font-size: 14px;
      font-weight: 500;
    }
    .opt-help {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin: 2px 0 6px;
    }
    .line {
      display: flex;
      gap: 6px;
    }
    input {
      flex: 1;
      min-width: 0;
      padding: 7px 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      color: var(--primary-text-color);
      font-family: monospace;
      font-size: 12px;
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
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .note {
      margin-top: 10px;
      font-size: 13px;
      color: var(--secondary-text-color);
      text-align: center;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this._onKey, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._onKey, true);
  }

  private _onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      this._close();
    }
  };

  private _close = () => {
    this.dispatchEvent(new CustomEvent('share-closed', { bubbles: true, composed: true }));
  };

  private async _copy(text: string, what: string) {
    try {
      await navigator.clipboard.writeText(text);
      this._note = `${what} copied.`;
    } catch {
      this._note = "Couldn't copy automatically. Select the text and copy it.";
    }
  }

  /** Send the advert over the air to radios in direct range (zero hop). */
  private async _sendOverAir() {
    if (!this.hass) return;
    this._sending = true;
    this._note = '';
    const t = this.target;
    const call: Record<string, unknown> = {
      command: t.self ? 'send_advert false' : `share_contact ${t.publicKey.substring(0, 12)}`,
    };
    if (this.entryId) call.entry_id = this.entryId;
    try {
      await this.hass.callService('meshcore', 'execute_command', call);
      this._note = t.self
        ? 'Sent your advert to radios in direct range.'
        : `Sent ${t.name}'s contact to radios in direct range.`;
    } catch (err) {
      const e = err as { message?: string };
      this._note = `Couldn't send it: ${e?.message || 'no answer from the radio'}`;
    } finally {
      this._sending = false;
    }
  }

  private _qr(text: string) {
    const m = qrModules(text);
    const n = m.length;
    const pad = 2;
    const size = n + pad * 2;
    return html`<svg class="qr" viewBox="0 0 ${size} ${size}" role="img" aria-label="QR code"
      shape-rendering="crispEdges">
      <rect width=${size} height=${size} fill="#fff"></rect>
      ${m.map((row, r) => row.map((dark, c) => (dark
        ? svg`<rect x=${c + pad} y=${r + pad} width="1" height="1" fill="#000"></rect>`
        : nothing)))}
    </svg>`;
  }

  render() {
    const t = this.target;
    if (!t) return nothing;
    const code = formatContact(t.publicKey, t.type, t.name);
    const link = contactLink(t);
    const who = t.self ? 'your contact' : `${t.name}'s contact`;
    return html`
      <div class="overlay" @click=${this._close}>
        <div class="card" role="dialog" aria-modal="true" aria-label="Share ${t.name}"
          @click=${(e: Event) => e.stopPropagation()}>
          <div class="head">
            <b>${t.self ? 'Share my contact' : `Share ${t.name}`}</b>
            <button class="close" aria-label="Close" @click=${this._close}>×</button>
          </div>

          ${this._qr(link)}
          <div class="qr-note">Scan with a MeshCore app to add ${t.self ? 'you' : t.name}.</div>

          <div class="opt">
            <div class="opt-title">Chat code</div>
            <div class="opt-help">Paste into a MeshCore chat on its own and it shows as a contact card with an Add button.</div>
            <div class="line">
              <input readonly .value=${code} @focus=${(e: Event) => (e.target as HTMLInputElement).select()} aria-label="Chat code" />
              <button class="btn" @click=${() => this._copy(code, 'Chat code')}>Copy</button>
            </div>
          </div>

          <div class="opt">
            <div class="opt-title">Link</div>
            <div class="opt-help">Opens a MeshCore app and offers to add ${who}. Good for sending by text or email.</div>
            <div class="line">
              <input readonly .value=${link} @focus=${(e: Event) => (e.target as HTMLInputElement).select()} aria-label="Link" />
              <button class="btn" @click=${() => this._copy(link, 'Link')}>Copy</button>
            </div>
          </div>

          <div class="opt">
            <div class="opt-title">Share over the air</div>
            <div class="opt-help">${t.self
              ? 'Sends your advert once to radios in direct range (no repeats), so people nearby can add you.'
              : `Sends ${t.name}'s advert once to radios in direct range (no repeats), so people nearby can add them.`}</div>
            <button class="btn primary" ?disabled=${this._sending} @click=${this._sendOverAir}>
              ${this._sending ? 'Sending…' : 'Send to nearby radios'}
            </button>
          </div>

          ${this._note ? html`<div class="note" role="status">${this._note}</div>` : nothing}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-share-contact-dialog': ShareContactDialog;
  }
}
