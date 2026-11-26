// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { contactLink, qrModules } from '../src/components/share-contact-dialog';

describe('contactLink', () => {
  it('builds the MeshCore app link', () => {
    expect(contactLink({ name: 'wiki home', publicKey: 'ABCD', type: 1 }))
      .toBe('meshcore://contact/add?name=wiki%20home&public_key=abcd&type=1');
  });
});

describe('qrModules', () => {
  it('makes a square QR grid', () => {
    const m = qrModules('meshcore://contact/add?name=x&public_key=' + 'a'.repeat(64) + '&type=1');
    expect(m.length).toBeGreaterThan(20);
    expect(m.every((row) => row.length === m.length)).toBe(true);
    expect(m[0][0]).toBe(true); // finder pattern corner
  });
});
