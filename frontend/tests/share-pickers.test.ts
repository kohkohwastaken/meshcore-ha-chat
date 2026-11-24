// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest';
import { ownTrackers, locationCandidates } from '../src/components/share-pickers';
import type { HomeAssistant } from '../src/types';

const st = (entity_id: string, attributes: Record<string, unknown>) =>
  ({ entity_id, state: 'home', attributes, last_changed: '', last_updated: new Date().toISOString(), context: { id: '', parent_id: null, user_id: null } });

const hass = {
  user: { id: 'u1', is_admin: false },
  entities: {},
  states: {
    'person.me': st('person.me', { user_id: 'u1', device_trackers: ['device_tracker.my_phone'] }),
    'person.them': st('person.them', { user_id: 'u2', device_trackers: ['device_tracker.their_phone'] }),
    'device_tracker.my_phone': st('device_tracker.my_phone', { latitude: 51.5, longitude: -0.1, gps_accuracy: 12 }),
    'device_tracker.their_phone': st('device_tracker.their_phone', { latitude: 51.6, longitude: -0.2 }),
    'zone.home': st('zone.home', { latitude: 51.5, longitude: -0.1, radius: 100 }),
    'sensor.meshcore_abc_position': st('sensor.meshcore_abc_position', { latitude: 51, longitude: 0 }),
  },
} as unknown as HomeAssistant;

describe('location sources', () => {
  it('finds the logged-in user\'s trackers', () =>
    expect([...ownTrackers(hass)]).toEqual(['device_tracker.my_phone']));
  it('leaves out zones and MeshCore entities', () =>
    expect(locationCandidates(hass).map((c) => c.entityId).sort()).toEqual(['device_tracker.my_phone', 'device_tracker.their_phone']));
});
