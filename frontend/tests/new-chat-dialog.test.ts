// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { matchContacts } from '../src/components/new-chat-dialog';
import type { Contact } from '../src/types';

const c = (adv_name: string, pubkey_prefix: string, type: number) => ({ adv_name, pubkey_prefix, type }) as Contact;

describe('matchContacts', () => {
  const list = [c('Dave', 'aa11', 1), c('Winterfield', 'bb22', 2), c('Sensor', 'cc33', 4)];
  it('leaves out sensors', () => {
    expect(matchContacts(list, '').map((x) => x.adv_name)).toEqual(['Dave', 'Winterfield']);
  });
  it('matches by name or key prefix', () => {
    expect(matchContacts(list, 'win').map((x) => x.adv_name)).toEqual(['Winterfield']);
    expect(matchContacts(list, 'AA1').map((x) => x.adv_name)).toEqual(['Dave']);
  });
});
