import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { setTrackableChannelLimit, trackableChannelLimit } from '../utils/message-limit';
import {
  clockFormat, dateFormat, formatClock, formatDate, setClockFormat, setDateFormat,
  setTimestampFormat, timestampFormat,
  heardWithin, setHeardWithin,
  type ClockFormat, type DateFormat, type HeardWithin, type TimestampFormat,
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
