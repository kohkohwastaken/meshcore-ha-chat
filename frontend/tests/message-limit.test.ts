import { describe, expect, it } from 'vitest';
import { messageBudget, utf8Bytes } from '../src/utils/message-limit';

describe('message byte budget', () => {
  it('counts UTF-8 bytes, not characters', () => {
    expect(utf8Bytes('abc')).toBe(3);
    expect(utf8Bytes('é')).toBe(2);
    expect(utf8Bytes('€')).toBe(3);
    expect(utf8Bytes('👍')).toBe(4);
    expect(utf8Bytes('👍🏽')).toBe(8);
    expect(utf8Bytes('👨‍👩‍👧')).toBe(18);
  });

  it('gives direct messages the full 160 bytes', () => {
    const b = messageBudget('x'.repeat(160), null);
    expect(b.limit).toBe(160);
    expect(b.left).toBe(0);
    expect(b.over).toBe(false);
    expect(messageBudget('x'.repeat(161), null).over).toBe(true);
  });

  it('takes "<name>: " off a channel message', () => {
    expect(messageBudget('', 'wiki').limit).toBe(154);
    expect(messageBudget('', '🦄 base').limit).toBe(160 - 11);
    expect(messageBudget('x'.repeat(155), 'wiki').over).toBe(true);
  });

  it('counts the text as sent, trimmed', () => {
    expect(messageBudget('  hi \n', null).used).toBe(2);
  });

  it('flags channel messages whose repeats cannot be detected', () => {
    // "wiki: " is 6 bytes; over 155 in total means text over 149.
    expect(messageBudget('x'.repeat(149), 'wiki').echoUndetectable).toBe(false);
    expect(messageBudget('x'.repeat(150), 'wiki').echoUndetectable).toBe(true);
    expect(messageBudget('x'.repeat(154), 'wiki').echoUndetectable).toBe(true);
    // Too long is "over", not this warning.
    expect(messageBudget('x'.repeat(155), 'wiki').echoUndetectable).toBe(false);
    // Never for direct messages.
    expect(messageBudget('x'.repeat(160), null).echoUndetectable).toBe(false);
  });
});
