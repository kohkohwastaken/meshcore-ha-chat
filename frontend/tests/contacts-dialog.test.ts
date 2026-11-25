// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest';
import { matchContacts } from '../src/components/contacts-dialog';
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

import { groupContacts } from '../src/components/contacts-dialog';

describe('groupContacts', () => {
  it('groups people, room servers, then repeaters and skips empty groups', () => {
    const g = groupContacts([c('R', 'r1', 2), c('P', 'p1', 1), c('Q', 'q1', 1)]);
    expect(g.map((x) => [x.label, x.items.length])).toEqual([['Companions', 2], ['Repeaters', 1]]);
  });
});

import { sortContacts } from '../src/components/contacts-dialog';

describe('sortContacts', () => {
  const list = [
    { adv_name: 'bob', last_advert: 100 },
    { adv_name: 'Alice', last_advert: 300 },
    { adv_name: 'carl', last_advert: 200 },
  ] as Contact[];
  const names = (l: Contact[]) => l.map((x) => x.adv_name);
  it('sorts by name both ways', () => {
    expect(names(sortContacts(list, 'az'))).toEqual(['Alice', 'bob', 'carl']);
    expect(names(sortContacts(list, 'za'))).toEqual(['carl', 'bob', 'Alice']);
  });
  it('sorts by last heard both ways', () => {
    expect(names(sortContacts(list, 'recent'))).toEqual(['Alice', 'carl', 'bob']);
    expect(names(sortContacts(list, 'oldest'))).toEqual(['bob', 'carl', 'Alice']);
  });
});
