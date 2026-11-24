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
