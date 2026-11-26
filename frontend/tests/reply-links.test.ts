// @vitest-environment happy-dom
import { describe, it, expect, beforeEach } from 'vitest';
import { findQuoted, rememberReply } from '../src/utils/reply-links';
import type { ChatMessage } from '../src/types';

const m = (id: string, sender: string, text: string, t: number): ChatMessage =>
  ({ id, sender, text, timestamp: new Date(t), isOutgoing: false, isSystem: false, raw: text, mentions: [] });

describe('findQuoted', () => {
  beforeEach(() => localStorage.clear());
  const msgs = [m('a', 'Dave', 'first', 1), m('b', 'Dave', 'Test', 2), m('c', 'Me', '@[Dave] hi', 3)];
  it('ignores non-replies', () => expect(findQuoted(msgs[1], 'x', msgs)).toBeNull());
  it('does not guess when the sender has two recent messages', () =>
    expect(findQuoted(msgs[2], 'x', msgs)).toBeNull());
  it('quotes the only recent message from the sender', () => {
    const one = msgs.filter((x) => x.id !== 'a');
    expect(findQuoted(one[one.length - 1], 'y', one)?.id).toBe('b');
  });
  it('prefers the saved link', () => {
    rememberReply('x', '@[Dave] hi', { sender: 'Dave', text: 'first' });
    expect(findQuoted(msgs[2], 'x', msgs)?.id).toBe('a');
  });
});
