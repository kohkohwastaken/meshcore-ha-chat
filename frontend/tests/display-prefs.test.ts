// @vitest-environment happy-dom
import { describe, it, expect, beforeEach } from 'vitest';
import { setTimestampFormat, timestampFormat } from '../src/utils/display-prefs';
import { hopCount } from '../src/components/message-bubble';
import type { ChatMessage } from '../src/types';

describe('display prefs', () => {
  beforeEach(() => localStorage.clear());
  it('defaults to the fallback', () => expect(timestampFormat('time')).toBe('time'));
  it('remembers the choice', () => {
    setTimestampFormat('datetime');
    expect(timestampFormat()).toBe('datetime');
  });
});

describe('hop count', () => {
  const m = (rx?: Array<Record<string, unknown>>) => ({ rxLogData: rx } as unknown as ChatMessage);
  it('uses hop_count', () => expect(hopCount(m([{ hop_count: 7 }]))).toBe(7));
  it('falls back to the path length', () => expect(hopCount(m([{ path_nodes: ['a', 'b'] }]))).toBe(2));
  it('heard directly is 0', () => expect(hopCount(m([{ snr: 5 }]))).toBe(0));
  it('unknown without rx data', () => expect(hopCount(m())).toBeNull());
});

import { formatClock, formatDate, formatFullDateTime, setClockFormat, setDateFormat } from '../src/utils/display-prefs';

describe('clock and date formats', () => {
  const d = new Date(2026, 10, 4, 19, 6, 48);
  it('24 hour', () => expect(formatClock(d, false, '24')).toMatch(/^19:06$/));
  it('12 hour', () => expect(formatClock(d, false, '12')).toMatch(/7:06\s?(pm|PM|p\.m\.)/));
  it('dates', () => {
    expect(formatDate(d, true, 'dmy')).toBe('04/11/2026');
    expect(formatDate(d, true, 'mdy')).toBe('11/04/2026');
    expect(formatDate(d, true, 'iso')).toBe('2026-11-04');
    expect(formatDate(d, true, 'd-mon')).toBe('4 Nov 2026');
    expect(formatDate(d, false, 'dmy')).toBe('04/11');
  });
  it('full uses the saved choices', () => {
    localStorage.clear();
    setClockFormat('24');
    setDateFormat('iso');
    expect(formatFullDateTime(d)).toBe('2026-11-04, 19:06:48');
  });
});
