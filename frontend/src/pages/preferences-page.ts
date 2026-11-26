import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { setTrackableChannelLimit, trackableChannelLimit } from '../utils/message-limit';
import {
  clockFormat, dateFormat, formatClock, formatDate, setClockFormat, setDateFormat,
  setTimestampFormat, timestampFormat,
  heardWithin, setHeardWithin, plainReactionMode, setPlainReactionMode, showPendingReactions, setShowPendingReactions,
  type ClockFormat, type DateFormat, type HeardWithin, type PlainReactionPref, type TimestampFormat,
} from '../utils/display-prefs';

/**
 * Settings tab: this panel's own preferences, saved per browser.
 * Nothing here talks to the radio (that lives on the My radio tab).
 */
@customElement('meshcore-preferences-page')
export class PreferencesPage extends LitElement {
  @state() private _trackable = trackableChannelLimit();
  @state() private _ts: TimestampFormat = timestampFormat();
  @state() private _clock: ClockFormat = clockFormat();
  @state() private _date: DateFormat = dateFormat();
  @state() private _heard: HeardWithin = heardWithin();
  @state() private _plain: PlainReactionPref = plainReactionMode();
  @state() private _pending = showPendingReactions();

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      background: var(--primary-background-color);
    }
    /* The panel sets overflow: hidden on each page, so scroll inside. */
    .scroll {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    .wrap {
      max-width: 760px;
      margin: 0 auto;
      padding: 16px;
    }
    .card {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    h2 {
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 8px;
      color: var(--primary-text-color);
    }
    .row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
    }
    .row:last-child {
      border-bottom: none;
    }
    .text {
      flex: 1;
      min-width: 0;
    }
    .title {
      display: block;
      font-size: 14px;
      color: var(--primary-text-color);
    }
    .help {
      display: block;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-top: 2px;
      line-height: 1.4;
    }
    select {
      padding: 6px 8px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #555);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font: inherit;
      max-width: 55%;
    }
    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
    .formula {
      font-size: 12px;
      line-height: 1.5;
      color: var(--secondary-text-color);
      padding: 8px 0 2px;
    }
    .formula a {
      color: var(--primary-color, #03a9f4);
    }
    code {
      font-size: 12px;
      background: rgba(127, 127, 127, 0.15);
      padding: 0 4px;
      border-radius: 4px;
    }
    .formula code {
      font-size: 12px;
      background: rgba(127, 127, 127, 0.15);
      padding: 0 4px;
      border-radius: 4px;
    }
    .foot {
      text-align: center;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `;

  render() {
    const now = new Date();
    return html`
      <div class="scroll"><div class="wrap">
        <div class="card">
          <h2>Messages</h2>
          <label class="row">
            <span class="text">
              <span class="title">Keep channel messages trackable</span>
              <span class="help">Limits channel messages to 155 bytes including your radio's name, so repeats of every message you send can be detected. Off allows the full 160 bytes, but messages over 155 always show as Unheard.</span>
            </span>
            <input type="checkbox" .checked=${this._trackable}
              @change=${(e: Event) => {
                this._trackable = (e.target as HTMLInputElement).checked;
                setTrackableChannelLimit(this._trackable);
              }} />
          </label>
          <label class="row">
            <span class="text">
              <span class="title">Message times</span>
              <span class="help">Under each message. Clock time adds the date for older days.</span>
            </span>
            <select aria-label="Message times" .value=${this._ts}
              @change=${(e: Event) => { this._ts = (e.target as HTMLSelectElement).value as TimestampFormat; setTimestampFormat(this._ts); }}>
              <option value="relative">Time since (5m)</option>
              <option value="time">Clock time</option>
              <option value="datetime">Date and time</option>
            </select>
          </label>
        </div>

        <div class="card">
          <h2>Reactions</h2>
          <div class="formula">
            Reactions are sent in MeshCore One's format, which the MeshCore app developers have agreed to use
            until MeshCore supports reactions itself:
            <a href="https://github.com/Avi0n/MeshCoreOne/blob/main/docs/Reactions.md" target="_blank" rel="noopener">MeshCore One reactions guide</a>.
            Reactions from other apps' formats are still shown.
          </div>
          <label class="row">
            <span class="text">
              <span class="title">Channel messages that are just @[Name] and one emoji</span>
              <span class="help">Some apps send <code>@[Name] 👍</code> as a reaction to that person's latest message; others mean it as a short reply.</span>
            </span>
            <select aria-label="Channel messages that are just a mention and one emoji" .value=${this._plain}
              @change=${(e: Event) => { this._plain = (e.target as HTMLSelectElement).value as PlainReactionPref; setPlainReactionMode(this._plain); }}>
              <option value="message">Show as a message</option>
              <option value="reaction">Treat as a reaction</option>
              <option value="both">Both</option>
            </select>
          </label>
          <label class="row">
            <span class="text">
              <span class="title">Show reactions to messages that haven't arrived</span>
              <span class="help">When reactions are shown in a chat (😊 toggle), list reactions whose message hasn't been received yet. They attach to the message once it arrives.</span>
            </span>
            <input type="checkbox" .checked=${this._pending}
              @change=${(e: Event) => { this._pending = (e.target as HTMLInputElement).checked; setShowPendingReactions(this._pending); }} />
          </label>
        </div>

        <div class="card">
          <h2>Date and time</h2>
          <label class="row">
            <span class="text">
              <span class="title">Clock</span>
              <span class="help">12 or 24 hour, or your device's own setting.</span>
            </span>
            <select aria-label="Clock" .value=${this._clock}
              @change=${(e: Event) => { this._clock = (e.target as HTMLSelectElement).value as ClockFormat; setClockFormat(this._clock); }}>
              <option value="system">System default (${formatClock(now, false, 'system')})</option>
              <option value="12">12 hour (${formatClock(now, false, '12')})</option>
              <option value="24">24 hour (${formatClock(now, false, '24')})</option>
            </select>
          </label>
          <label class="row">
            <span class="text">
              <span class="title">Date</span>
              <span class="help">How dates are written.</span>
            </span>
            <select aria-label="Date" .value=${this._date}
              @change=${(e: Event) => { this._date = (e.target as HTMLSelectElement).value as DateFormat; setDateFormat(this._date); }}>
              <option value="system">System default (${formatDate(now, true, 'system')})</option>
              <option value="d-mon">${formatDate(now, true, 'd-mon')}</option>
              <option value="dmy">${formatDate(now, true, 'dmy')} (day/month)</option>
              <option value="mdy">${formatDate(now, true, 'mdy')} (month/day)</option>
              <option value="iso">${formatDate(now, true, 'iso')} (ISO)</option>
            </select>
          </label>
        </div>

        <div class="card">
          <h2>Nodes</h2>
          <label class="row">
            <span class="text">
              <span class="title">Show nodes heard within</span>
              <span class="help">Hides nodes that haven't advertised for a while. You can also change this from the Nodes toolbar.</span>
            </span>
            <select aria-label="Show nodes heard within" .value=${this._heard}
              @change=${(e: Event) => { this._heard = (e.target as HTMLSelectElement).value as HeardWithin; setHeardWithin(this._heard); }}>
              <option value="0">Any time</option>
              <option value="1">24 hours</option>
              <option value="7">7 days</option>
              <option value="30">30 days</option>
            </select>
          </label>
        </div>

        <p class="foot">These preferences are saved in this browser.</p>
      </div></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meshcore-preferences-page': PreferencesPage;
  }
}
