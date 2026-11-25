// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { previewLine, shortAge } from '../src/components/conversation-list';

const p = (text: string, extra: Partial<{ sender: string; outgoing: boolean }> = {}) => ({
  ts: '2026-11-25T12:00:00Z', sender: 'Dave', outgoing: false, text, ...extra,
});

describe('previewLine', () => {
  it('prefixes the sender on channels only', () => {
    expect(previewLine(p('hello'), true)).toBe('Dave: hello');
    expect(previewLine(p('hello'), false)).toBe('hello');
  });
  it('marks your own messages', () => {
    expect(previewLine(p('hi', { outgoing: true }), true)).toBe('You: hi');
  });
  it('summarises reactions, locations and contacts', () => {
    expect(previewLine(p('r:1a2b:00'), false)).toMatch(/^Reacted /);
    expect(previewLine(p('m:51.293000,0.429000|Home|'), false)).toBe('📍 Location');
    expect(previewLine(p(`<${'a'.repeat(64)}:1:Bob>`), false)).toBe('👤 Contact');
  });
  it('is empty without a message', () => {
    expect(previewLine(undefined, true)).toBe('');
  });
});

describe('shortAge', () => {
  const now = Date.parse('2026-11-25T12:00:00Z');
  it('formats minutes, hours and days', () => {
    expect(shortAge('2026-11-25T11:59:40Z', now)).toBe('now');
    expect(shortAge('2026-11-25T11:55:00Z', now)).toBe('5m');
    expect(shortAge('2026-11-25T09:00:00Z', now)).toBe('3h');
    expect(shortAge('2026-11-23T12:00:00Z', now)).toBe('2d');
  });
  it('ignores bad timestamps', () => {
    expect(shortAge('', now)).toBe('');
  });
});
