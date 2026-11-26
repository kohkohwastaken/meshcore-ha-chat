import { describe, it, expect } from 'vitest';
import {
  sha256, reactionHash, openReactionHash, parseReaction, formatReaction, collectReactions,
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
  it('matches MeshCore Open\'s MeshCore One hash vector', () =>
    expect(reactionHash('Hello world!', 1234567890)).toBe('tyvbkb33'));
  it('matches MeshCore Open\'s own hash vectors', () => {
    expect(openReactionHash(1700000000, 'Bob', 'hello')).toBe('e779');
    expect(openReactionHash(1700000000, null, 'hi')).toBe('b5bd');
    expect(openReactionHash(1700000000, 'Привет😀', 'x')).toBe('7fee');
  });
  it('parses all three formats', () => {
    expect(parseReaction('@[Dave]👍\nb3je6qf7')).toEqual({ emoji: '👍', target: 'Dave', hash: 'b3je6qf7', kind: 'mc1' });
    expect(parseReaction('👍@[Dave]\nB3JE6QF7')).toEqual({ emoji: '👍', target: 'Dave', hash: 'b3je6qf7', kind: 'mc1' });
    expect(parseReaction('❤️\nb3je6qf7')).toMatchObject({ emoji: '❤️', kind: 'mc1' });
    expect(parseReaction('r:e779:01')).toEqual({ emoji: '❤️', hash: 'e779', kind: 'open' });
    expect(parseReaction('hello\nb3je6qf7')).toBeNull();
    expect(parseReaction('hello @[Dave]')).toBeNull();
  });
  it('attaches by sender timestamp, MeshCore One format', () => {
    const a = { ...m('a', 'Dave', 'Test', 100), senderTimestamp: 90 };
    const b = m('b', 'Dave', 'Again', 200);
    const r = m('r', 'Me', formatReaction('👍', a, true), 300, true);
    expect(r.text).toBe(`@[Dave]👍\n${reactionHash('Test', 90)}`);
    const { visible, reactions } = collectReactions([a, b, r]);
    expect(visible.map((x) => x.id)).toEqual(['a', 'b', 'react_r']);
    expect(visible[2]).toMatchObject({ isSystem: true, activityTarget: 'a', text: 'You reacted 👍 to Dave: “Test”' });
    expect(reactions.get('a')).toMatchObject([{ emoji: '👍', senders: ['You'] }]);
    expect(reactions.get('a')?.[0].who[0].time).toEqual(r.timestamp);
  });
  it('finds a MeshCore Open reaction within the clock window', () => {
    const a = m('a', 'Bob', 'hello there', 1700000005);
    const r = m('r', 'Eve', `r:${openReactionHash(1700000000, 'Bob', 'hello there')}:05`, 1700000100);
    const out = collectReactions([a, r]);
    expect(out.reactions.get('a')).toMatchObject([{ emoji: '🔥', senders: ['Eve'] }]);
    expect(out.visible.map((x) => x.id)).toEqual(['a']); // others' reactions get no log line
  });
  it('a resent reaction moves your log line to the newest copy', () => {
    const a = { ...m('a', 'Dave', 'Test', 100), senderTimestamp: 90 };
    const text = formatReaction('👍', a, true);
    const r1 = { ...m('r1', 'Me', text, 200, true), deliveryStatus: { status: 'sent', repeaterCount: 0, repeatsObservable: true } };
    const r2 = { ...m('r2', 'Me', text, 300, true), deliveryStatus: { status: 'sent', repeaterCount: 2 } };
    const out = collectReactions([a, r1, r2] as never);
    expect(out.visible.map((x) => x.id)).toEqual(['a', 'react_r2']);
    expect(out.visible[1]).toMatchObject({ activityText: text, deliveryStatus: { repeaterCount: 2 } });
    expect(out.reactions.get('a')?.[0].who.length).toBe(1);
  });
  it('drops reactions that match nothing', () => {
    const r = m('r', 'Bob', '@[Dave]🔥\nabcdefgh', 300);
    const out = collectReactions([m('a', 'Dave', 'Test', 100), r]);
    expect(out.visible.length).toBe(1);
    expect(out.reactions.size).toBe(0);
  });
  it('location round-trip', () => {
    const t = formatLocation(51.5, -0.12, 'Pub | garden');
    expect(t).toBe('m:51.500000,-0.120000|Pub   garden|');
    expect(parseLocation(t)).toEqual({ lat: 51.5, lon: -0.12, label: 'Pub   garden' });
    expect(parseLocation('m:99,0|x|')).toBeNull();
  });
  it('contact round-trip', () => {
    const key = 'ab'.repeat(32);
    expect(parseContact(formatContact(key, 2, 'Hill <RPT>'))).toEqual({ publicKey: key, type: 2, name: 'Hill RPT', caption: '' });
    expect(parseContact(`here's Bob ${formatContact(key, 1, 'Bob')}`)).toMatchObject({ name: 'Bob', caption: "here's Bob" });
    expect(parseContact(`<${key}:7:x>`)).toBeNull();
  });
});

import { findReactionTarget } from '../src/utils/rich-messages';

describe('findReactionTarget', () => {
  it('finds the message a reaction points at', () => {
    const a = { ...m('a', 'Swale', 'Beam test', 100), senderTimestamp: 95 };
    const r = m('r', 'Rambler', formatReaction('👍', a, true), 200);
    const hit = findReactionTarget(r, [a, r], true);
    expect(hit?.emoji).toBe('👍');
    expect(hit?.target?.id).toBe('a');
  });
  it('returns null for ordinary messages and a null target when it is not loaded', () => {
    expect(findReactionTarget(m('x', 'A', 'hello', 1), [], true)).toBeNull();
    const r = m('r', 'Rambler', '@[Swale]👍\n272jvvz7', 200);
    expect(findReactionTarget(r, [r], true)).toEqual({ emoji: '👍', target: null });
  });
});

describe('reaction handling', () => {
  const a = { ...m('a', 'Dave', 'hello', 1700000000), senderTimestamp: 1700000000 };
  it('always sends MeshCore One', () => {
    expect(formatReaction('🦄', a, true)).toBe(`@[Dave]🦄\n${reactionHash('hello', 1700000000)}`);
    expect(formatReaction('👍', a, false)).toBe(`👍\n${reactionHash('hello', 1700000000)}`);
  });
  it('treats "@[Name] 👍" as a message by default', () => {
    const r = m('r', 'Sam', '@[Dave] 👍', 1700000200);
    const { visible, reactions } = collectReactions([a, r], true);
    expect(visible.map((x) => x.id)).toEqual(['a', 'r']);
    expect(reactions.size).toBe(0);
  });
  it('can treat it as a reaction, or both', () => {
    expect(parseReaction('@[Dave] 👍')).toEqual({ emoji: '👍', target: 'Dave', hash: '', kind: 'plain' });
    const b = m('b', 'Dave', 'later', 1700000100);
    const r = m('r', 'Sam', '@[Dave] 👍', 1700000200);
    const asReaction = collectReactions([a, b, r], true, { plainMode: 'reaction' });
    expect(asReaction.visible.map((x) => x.id)).toEqual(['a', 'b']);
    expect(asReaction.reactions.get('b')?.[0].emoji).toBe('👍');
    const both = collectReactions([a, b, r], true, { plainMode: 'both' });
    expect(both.visible.map((x) => x.id)).toEqual(['a', 'b', 'r']);
    expect(both.reactions.get('b')?.[0].emoji).toBe('👍');
  });
  it('keeps reaction messages in the chat when asked', () => {
    const r = m('r', 'Sam', formatReaction('👍', a, true), 1700000200);
    const { visible, reactions } = collectReactions([a, r], true, true);
    expect(visible.map((x) => x.id)).toEqual(['a', 'r']);
    expect(reactions.get('a')?.[0].emoji).toBe('👍');
  });
  it('matches a reaction that arrived before its message', () => {
    const r = m('r', 'Sam', formatReaction('👍', a, true), 1699999990);
    const { visible, reactions } = collectReactions([r, a], true);
    expect(visible.map((x) => x.id)).toEqual(['a']);
    expect(reactions.get('a')?.[0].emoji).toBe('👍');
  });
  it('shows a pending line for an unmatched reaction only when reactions are shown', () => {
    const r = m('r', 'Sam', '@[Dave]👍\n272jvvz7', 1700000200);
    expect(collectReactions([r], true).visible).toEqual([]);
    const shown = collectReactions([r], true, { keepRaw: true });
    expect(shown.visible[0].text).toBe('Sam reacted 👍 · message not received yet');
    expect(collectReactions([r], true, { keepRaw: true, showPending: false }).visible).toEqual([]);
  });
});

import { parseManualContact } from '../src/utils/rich-messages';

describe('parseManualContact', () => {
  const key = 'ab'.repeat(32);
  it('reads a contact code', () => {
    expect(parseManualContact(`<${key}:2:Hill Top>`)).toEqual({ kind: 'card', publicKey: key, name: 'Hill Top', type: 2 });
  });
  it('reads a contact link', () => {
    expect(parseManualContact(`meshcore://contact/add?name=Bob%20B&public_key=${key.toUpperCase()}&type=1`))
      .toEqual({ kind: 'card', publicKey: key, name: 'Bob B', type: 1 });
  });
  it('reads an advert', () => {
    const hex = 'cd'.repeat(110);
    expect(parseManualContact(`meshcore://${hex}`)).toEqual({ kind: 'advert', hex });
  });
  it('reads a bare key and rejects nonsense', () => {
    expect(parseManualContact(key)).toEqual({ kind: 'key', publicKey: key });
    expect(parseManualContact('hello').kind).toBe('invalid');
    expect(parseManualContact('meshcore://abcd').kind).toBe('invalid');
  });
});
