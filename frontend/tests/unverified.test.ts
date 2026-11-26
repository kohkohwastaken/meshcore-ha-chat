// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { loadUnverified, unverifiedSince } from '../src/utils/unverified';
import type { HomeAssistant } from '../src/types';

describe('unverified contacts', () => {
  it('looks contacts up by full key or prefix', async () => {
    const key = 'ab'.repeat(32);
    const hass = { callWS: async () => ({ unverified: { [key]: 1700000000 } }) } as unknown as HomeAssistant;
    await loadUnverified(hass);
    expect(unverifiedSince(key)).toBe(1700000000);
    expect(unverifiedSince(key.slice(0, 12).toUpperCase())).toBe(1700000000);
    expect(unverifiedSince('cd'.repeat(6))).toBeNull();
  });
});
