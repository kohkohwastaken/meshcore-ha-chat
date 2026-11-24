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
