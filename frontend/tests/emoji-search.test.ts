import { describe, it, expect } from 'vitest';
import { searchEmoji } from '../src/components/emoji-picker';

describe('emoji search', () => {
  it('finds by name', () => expect(searchEmoji('thumbs up')[0]).toBe('👍'));
  it('finds by keyword', () => expect(searchEmoji('radio')).toContain('📻'));
  it('needs every word', () => expect(searchEmoji('red heart')).toContain('❤️'));
  it('empty query gives nothing', () => expect(searchEmoji('  ')).toEqual([]));
  it('nonsense gives nothing', () => expect(searchEmoji('zzqqxx')).toEqual([]));
});
