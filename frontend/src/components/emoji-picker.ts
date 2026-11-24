import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { QUICK_REACTIONS } from '../utils/rich-messages';
import { EMOJI_GROUPS } from '../utils/emoji-data';

const RECENT_KEY = 'meshcore-recent-emoji';
const MAX_RESULTS = 120;

interface EmojiEntry {
  emoji: string;
  words: string;
}

let parsed: Array<{ name: string; items: EmojiEntry[] }> | null = null;
function groups() {
  parsed ??= EMOJI_GROUPS.map(([name, lines]) => ({
    name,
    items: lines.split('\n').map((l) => {
      const [emoji, words] = l.split('\t');
      return { emoji, words };
    }),
  }));
  return parsed;
}

/** Emoji whose name or keywords match every word of the query, best matches first. */
export function searchEmoji(query: string): string[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  const scored: Array<[number, string]> = [];
  for (const g of groups()) {
    for (const e of g.items) {
      if (!terms.every((t) => e.words.includes(t))) continue;
      // Name starting with the query beats a keyword match deep in the list.
      const score = e.words.startsWith(terms[0]) ? 0 : e.words.includes(` ${terms[0]}`) ? 1 : 2;
      scored.push([score, e.emoji]);
    }
  }
  return scored.sort((a, b) => a[0] - b[0]).map(([, e]) => e).slice(0, MAX_RESULTS);
}

export function recentEmoji(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') as string[];
  } catch {
    return [];
  }
}

export function noteEmojiUsed(e: string): void {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify([e, ...recentEmoji().filter((x) => x !== e)].slice(0, 24)));
  } catch {
    /* ignore */
  }
}

/** Emoji grid with search. Fires `emoji-picked` with `{ emoji }`. */
@customElement('meshcore-emoji-picker')
export class MeshCoreEmojiPicker extends LitElement {
  @state() private _cat = -1;
  @state() private _q = '';

  static styles = css`
    :host { display: block; width: 330px; max-width: 100%; box-sizing: border-box; }
    input { width: 100%; box-sizing: border-box; padding: 7px 10px; margin-bottom: 6px; border-radius: 8px;
      border: 1px solid var(--divider-color, #444); background: transparent; color: var(--primary-text-color); font: inherit; outline: none; -webkit-appearance: none; appearance: none; }
    input:focus { border-color: var(--primary-color, #03a9f4); }
    .tabs { display: flex; gap: 2px; overflow-x: auto; overscroll-behavior: contain; touch-action: pan-x; border-bottom: 1px solid var(--divider-color, #444); padding-bottom: 4px; }
    .tabs button { flex-shrink: 0; background: none; border: none; padding: 4px 6px; font-size: 18px; cursor: pointer; border-radius: 6px; opacity: 0.6; }
    .tabs button.on { opacity: 1; background: rgba(127,127,127,0.2); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(38px, 1fr)); height: 220px; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; touch-action: pan-y; padding-top: 6px; align-content: start; }
    .grid button { background: none; border: none; font-size: 22px; padding: 4px 0; cursor: pointer; border-radius: 6px; }
    @media (hover: hover) { .grid button:hover { background: rgba(127,127,127,0.2); } }
    .label { font-size: 11px; opacity: 0.7; margin: 6px 2px 0; grid-column: 1 / -1; }
    .none { grid-column: 1 / -1; font-size: 13px; opacity: 0.7; padding: 12px 4px; }
  `;

  firstUpdated() {
    (this.renderRoot.querySelector('input') as HTMLInputElement | null)?.focus();
  }

  private _pick(e: string) {
    noteEmojiUsed(e);
    this.dispatchEvent(new CustomEvent('emoji-picked', { detail: { emoji: e }, bubbles: true, composed: true }));
  }

  render() {
    const gs = groups();
    const searching = this._q.trim().length > 0;
    const list = searching
      ? searchEmoji(this._q)
      : this._cat < 0
        ? [...new Set([...recentEmoji(), ...QUICK_REACTIONS])]
        : gs[this._cat].items.map((i) => i.emoji);
    const label = searching ? 'Results' : this._cat < 0 ? 'Recent' : gs[this._cat].name;
    return html`
      <input type="search" placeholder="Search emoji" aria-label="Search emoji" .value=${this._q}
        @input=${(e: Event) => { this._q = (e.target as HTMLInputElement).value; }}
        @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' && list[0]) { e.preventDefault(); this._pick(list[0]); } }}>
      ${searching ? '' : html`<div class="tabs">
        <button class=${this._cat === -1 ? 'on' : ''} title="Recent" @click=${() => { this._cat = -1; }}>🕘</button>
        ${gs.map((g, i) => html`<button class=${this._cat === i ? 'on' : ''} title=${g.name} @click=${() => { this._cat = i; }}>${g.items[0].emoji}</button>`)}
      </div>`}
      <div class="grid">
        <div class="label">${label}</div>
        ${list.length === 0 ? html`<div class="none">No emoji found.</div>` : ''}
        ${list.map((e) => html`<button @click=${() => this._pick(e)}>${e}</button>`)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-emoji-picker': MeshCoreEmojiPicker;
  }
}
