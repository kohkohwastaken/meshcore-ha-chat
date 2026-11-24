import { describe, it, expect } from 'vitest';
import {
  sha256, reactionHash, parseReaction, formatReaction, collectReactions,
  parseLocation, formatLocation, parseContact, formatContact,
} from '../src/utils/rich-messages';
import type { ChatMessage } from '../src/types';

const hex = (b: Uint8Array) => [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
const m = (id: string, sender: string, text: string, t: number, out = false): ChatMessage =>
  ({ id, sender, text, timestamp: new Date(t * 1000), isOutgoing: out, isSystem: false, raw: text, mentions: [] });

describe('rich messages', () => {
  it('sha256 matches the standard vectors', () => {
    expect(hex(sha256(new TextEncoder().encode('abc')))).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
    expect(hex(sha256(new Uint8Array(0)))).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
    expect(hex(sha256(new TextEncoder().encode('a'.repeat(1000))))).toBe('41edece42d63e8d9bf515a9ba6932e1c20cbc9f5a5d134645adb5db1b9737ea3');
  });
  it('reaction hash is 8 Crockford chars', () => expect(reactionHash('Test', 1700000000)).toMatch(/^[0-9A-HJKMNP-TV-Z]{8}$/));
  it('round-trips a reaction and attaches it by hash', () => {
    const a = m('a', 'Dave', 'Test', 100);
    const b = m('b', 'Dave', 'Again', 200);
    const r = m('r', 'Me', formatReaction('👍', a), 300, true);
    expect(parseReaction(r.text)).toMatchObject({ emoji: '👍', target: 'Dave' });
    const { visible, reactions } = collectReactions([a, b, r]);
    expect(visible.map((x) => x.id)).toEqual(['a', 'b']);
    expect(reactions.get('a')).toEqual([{ emoji: '👍', senders: ['You'] }]);
  });
  it('falls back to the newest message from the named person', () => {
    const a = m('a', 'Dave', 'Test', 100);
    const r = m('r', 'Bob', '🔥@[Dave]\nABCDEFGH', 300);
    expect(collectReactions([a, r]).reactions.get('a')?.[0].emoji).toBe('🔥');
  });
  it('parses MeshCore Open reactions by index', () => expect(parseReaction('r:1a2b:01')?.emoji).toBe('❤️'));
  it('leaves ordinary text alone', () => expect(parseReaction('hello @[Dave]')).toBeNull());
  it('location round-trip', () => {
    const t = formatLocation(51.5, -0.12, 'Pub | garden');
    expect(t).toBe('m:51.500000,-0.120000|Pub   garden|');
    expect(parseLocation(t)).toEqual({ lat: 51.5, lon: -0.12, label: 'Pub   garden' });
    expect(parseLocation('m:99,0|x|')).toBeNull();
  });
  it('contact round-trip', () => {
    const key = 'ab'.repeat(32);
    expect(parseContact(formatContact(key, 2, 'Hill <RPT>'))).toEqual({ publicKey: key, type: 2, name: 'Hill RPT' });
  });
});
