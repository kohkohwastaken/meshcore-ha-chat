/**
 * Per-browser display choices for the chat (stored in localStorage).
 */
export type TimestampFormat = 'relative' | 'time' | 'datetime';

const TS_KEY = 'meshcore-timestamp-format';
export const DISPLAY_PREFS_EVENT = 'meshcore-display-prefs-changed';

export function timestampFormat(fallback: TimestampFormat = 'relative'): TimestampFormat {
  try {
    const v = localStorage.getItem(TS_KEY);
    if (v === 'relative' || v === 'time' || v === 'datetime') return v;
  } catch {
    /* storage unavailable */
  }
  return fallback;
}

export function setTimestampFormat(v: TimestampFormat): void {
  try {
    localStorage.setItem(TS_KEY, v);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(DISPLAY_PREFS_EVENT));
}

export type ClockFormat = 'system' | '12' | '24';
export type DateFormat = 'system' | 'd-mon' | 'dmy' | 'mdy' | 'iso';

const CLOCK_KEY = 'meshcore-clock-format';
const DATE_KEY = 'meshcore-date-format';

function read<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  try {
    const v = localStorage.getItem(key) as T | null;
    if (v && allowed.includes(v)) return v;
  } catch {
    /* storage unavailable */
  }
  return fallback;
}

function write(key: string, v: string): void {
  try {
    localStorage.setItem(key, v);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(DISPLAY_PREFS_EVENT));
}

export const clockFormat = () => read<ClockFormat>(CLOCK_KEY, ['system', '12', '24'], 'system');
export const setClockFormat = (v: ClockFormat) => write(CLOCK_KEY, v);
export const dateFormat = () => read<DateFormat>(DATE_KEY, ['system', 'd-mon', 'dmy', 'mdy', 'iso'], 'system');
export const setDateFormat = (v: DateFormat) => write(DATE_KEY, v);

const pad = (n: number) => String(n).padStart(2, '0');

/** Clock time in the chosen 12/24-hour style ("7:26 pm", "19:26"). */
export function formatClock(d: Date, seconds = false, clock: ClockFormat = clockFormat()): string {
  const opts: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };
  if (seconds) opts.second = '2-digit';
  if (clock === '12') opts.hour12 = true;
  if (clock === '24') {
    opts.hourCycle = 'h23';
    opts.hour = '2-digit';
  }
  return d.toLocaleTimeString(undefined, opts);
}

/** A date in the chosen style; `withYear` false gives the short form used under messages. */
export function formatDate(d: Date, withYear = true, fmt: DateFormat = dateFormat()): string {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  switch (fmt) {
    case 'd-mon': {
      const mon = d.toLocaleDateString('en-GB', { month: 'short' });
      return withYear ? `${day} ${mon} ${year}` : `${day} ${mon}`;
    }
    case 'dmy':
      return withYear ? `${pad(day)}/${pad(month)}/${year}` : `${pad(day)}/${pad(month)}`;
    case 'mdy':
      return withYear ? `${pad(month)}/${pad(day)}/${year}` : `${pad(month)}/${pad(day)}`;
    case 'iso':
      return `${year}-${pad(month)}-${pad(day)}`;
    default:
      return d.toLocaleDateString(undefined, withYear
        ? { day: 'numeric', month: 'short', year: 'numeric' }
        : { day: 'numeric', month: 'short' });
  }
}

/** Full date and time, as in the message details ("24 Nov 2026, 19:26:48"). */
export function formatFullDateTime(d: Date): string {
  return `${formatDate(d, true)}, ${formatClock(d, true)}`;
}

/** Nodes tab: only show nodes heard within this many days (0 = any time), or since a custom date. */
export type HeardWithin = '0' | '1' | '7' | '30' | '365' | 'custom';
const HEARD_KEY = 'meshcore-map-heard-within';
const HEARD_SINCE_KEY = 'meshcore-map-heard-since';
export const heardWithin = () => read<HeardWithin>(HEARD_KEY, ['0', '1', '7', '30', '365', 'custom'], '0');
export const setHeardWithin = (v: HeardWithin) => write(HEARD_KEY, v);

/** The custom "heard since" date (YYYY-MM-DD), or '' when unset. */
export function heardSince(): string {
  try {
    const v = localStorage.getItem(HEARD_SINCE_KEY) || '';
    return /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : '';
  } catch {
    return '';
  }
}

export function setHeardSince(date: string): void {
  try {
    localStorage.setItem(HEARD_SINCE_KEY, date);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(DISPLAY_PREFS_EVENT));
}

/** The heard-within choices, for the Nodes toolbar and Settings. */
export const HEARD_OPTIONS: Array<[HeardWithin, string]> = [
  ['0', 'Any time'], ['1', '24 hours'], ['7', '7 days'], ['30', '30 days'], ['365', '1 year'], ['custom', 'Since a date…'],
];

/**
 * True when a node last heard at `lastAdvertSecs` passes the filter.
 * `since` (YYYY-MM-DD, local midnight) is used for 'custom'.
 */
export function heardRecently(lastAdvertSecs: number | undefined, within: HeardWithin, now = Date.now(), since = heardSince()): boolean {
  if (within === '0') return true;
  if (within === 'custom') {
    if (!since) return true;
    const from = new Date(`${since}T00:00:00`).getTime();
    return !!lastAdvertSecs && lastAdvertSecs * 1000 >= from;
  }
  if (!lastAdvertSecs) return false;
  return now - lastAdvertSecs * 1000 <= Number(within) * 86400000;
}

/** A channel message that is just "@[Name]" + one emoji: message, reaction or both. */
export type PlainReactionPref = 'message' | 'reaction' | 'both';
const PLAIN_KEY = 'meshcore-plain-reaction-mode';
export const plainReactionMode = () => read<PlainReactionPref>(PLAIN_KEY, ['message', 'reaction', 'both'], 'message');
export const setPlainReactionMode = (v: PlainReactionPref) => write(PLAIN_KEY, v);

/** With reactions shown, also show reactions whose message hasn't arrived. */
const PENDING_KEY = 'meshcore-show-pending-reactions';
export const showPendingReactions = () => read<'on' | 'off'>(PENDING_KEY, ['on', 'off'], 'on') === 'on';
export const setShowPendingReactions = (v: boolean) => write(PENDING_KEY, v ? 'on' : 'off');
