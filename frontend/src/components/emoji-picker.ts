import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { QUICK_REACTIONS } from '../utils/rich-messages';

const RECENT_KEY = 'meshcore-recent-emoji';

const CATEGORIES: Array<[string, string]> = [
  ['Smileys', '😀 😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 😉 😊 😇 🥰 😍 🤩 😘 😋 😛 😜 🤪 😝 🤑 🤗 🤭 🤫 🤔 🤐 🤨 😐 😑 😶 😏 😒 🙄 😬 😌 😔 😪 😴 😷 🤒 🤕 🤢 🤮 🥵 🥶 🥴 😵 🤯 🤠 🥳 😎 🤓 🧐 😕 😟 🙁 😮 😯 😲 😳 🥺 😦 😧 😨 😰 😥 😢 😭 😱 😖 😣 😞 😓 😩 😫 🥱 😤 😡 😠 🤬 😈 💀 💩 🤡 👻 👽 🤖'],
  ['Gestures', '👋 🤚 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 💪 👀 🧠'],
  ['Hearts', '❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💯 💢 💥 💫 💦 💨 💬 💤'],
  ['Nature', '🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🐔 🐧 🐦 🦆 🦅 🦉 🐺 🐴 🦄 🐝 🦋 🐌 🐞 🐢 🐍 🐙 🐟 🐬 🐳 🦈 🌲 🌳 🌴 🌵 🌿 🍀 🍁 🍂 🌷 🌹 🌻 🌞 🌝 🌚 🌙 ⭐ 🌟 ⚡ 🔥 🌈 ☀️ ⛅ ☁️ 🌧️ ⛈️ 🌩️ ❄️ ☃️ 🌊 🌍'],
  ['Food', '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🥑 🥦 🌽 🥕 🥔 🥐 🍞 🧀 🥚 🍳 🥓 🍔 🍟 🍕 🌭 🥪 🌮 🍝 🍜 🍣 🍰 🎂 🍩 🍪 🍫 🍬 🍿 ☕ 🍵 🍺 🍻 🥂 🍷 🥃 🍸'],
  ['Activity', '⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🎱 🏓 🏸 🥊 ⛳ 🎣 🎽 🎿 🏂 🚴 🏃 🚶 🧗 🏕️ 🎉 🎊 🎈 🎁 🏆 🥇 🎮 🎲 🎯 🎸 🎧 🎤 🎬 📷'],
  ['Travel', '🚗 🚕 🚙 🚌 🚎 🏎️ 🚓 🚑 🚒 🚚 🚜 🏍️ 🚲 🛴 🚂 🚆 🚇 ✈️ 🚁 🚀 🛰️ ⛵ 🚤 🚢 ⚓ ⛽ 🚦 🗺️ 🏔️ ⛰️ 🏕️ 🏖️ 🏝️ 🏠 🏡 🏢 🏥 🏰 🗼 🌉 🌃'],
  ['Objects', '📡 📻 📱 💻 🖥️ ⌨️ 🔋 🔌 💡 🔦 🕯️ 🧭 ⏰ ⌛ 📶 🛜 🔧 🔨 🛠️ ⚙️ 🧰 🔩 🧲 📦 📌 📍 📎 ✏️ 📝 📅 📈 📉 🔒 🔑 🗝️ 🔔 📢 📣'],
  ['Symbols', '✅ ☑️ ✔️ ❌ ❎ ➕ ➖ ❓ ❗ ‼️ ⚠️ 🚫 ⛔ ♻️ 🆗 🆘 🆙 🆕 🔴 🟠 🟡 🟢 🔵 🟣 ⚫ ⚪ 🔺 🔻 ▶️ ⏸️ ⏹️ 🔁 🔄 ⬆️ ⬇️ ⬅️ ➡️ ↩️ 🔝'],
];

export function recentEmoji(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') as string[];
  } catch {
    return [];
  }
}

export function noteEmojiUsed(e: string): void {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify([e, ...recentEmoji().filter((x) => x !== e)].slice(0, 16)));
  } catch {
    /* ignore */
  }
}

/** Emoji grid. Fires `emoji-picked` with `{ emoji }`. */
@customElement('meshcore-emoji-picker')
export class MeshCoreEmojiPicker extends LitElement {
  @state() private _cat = -1;

  static styles = css`
    :host { display: block; width: 320px; max-width: calc(100vw - 24px); }
    .tabs { display: flex; gap: 2px; overflow-x: auto; border-bottom: 1px solid var(--divider-color, #444); padding-bottom: 4px; }
    .tabs button { background: none; border: none; padding: 4px 6px; font-size: 18px; cursor: pointer; border-radius: 6px; opacity: 0.6; }
    .tabs button.on { opacity: 1; background: rgba(127,127,127,0.2); }
    .grid { display: grid; grid-template-columns: repeat(8, 1fr); max-height: 220px; overflow-y: auto; padding-top: 6px; }
    .grid button { background: none; border: none; font-size: 22px; padding: 4px 0; cursor: pointer; border-radius: 6px; }
    .grid button:hover { background: rgba(127,127,127,0.2); }
    .label { font-size: 11px; opacity: 0.7; margin: 6px 2px 0; grid-column: 1 / -1; }
  `;

  private _pick(e: string) {
    noteEmojiUsed(e);
    this.dispatchEvent(new CustomEvent('emoji-picked', { detail: { emoji: e }, bubbles: true, composed: true }));
  }

  render() {
    const icons = ['🕘', ...CATEGORIES.map(([, list]) => list.split(' ')[0])];
    const recents = recentEmoji();
    const list = this._cat < 0
      ? [...new Set([...recents, ...QUICK_REACTIONS])]
      : CATEGORIES[this._cat][1].split(' ');
    return html`
      <div class="tabs">
        ${icons.map((icon, i) => html`<button class=${this._cat === i - 1 ? 'on' : ''}
          title=${i === 0 ? 'Recent' : CATEGORIES[i - 1][0]} @click=${() => { this._cat = i - 1; }}>${icon}</button>`)}
      </div>
      <div class="grid">
        <div class="label">${this._cat < 0 ? 'Recent' : CATEGORIES[this._cat][0]}</div>
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
