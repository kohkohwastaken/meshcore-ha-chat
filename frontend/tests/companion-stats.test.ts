import { describe, it, expect } from 'vitest';
import { historyUrl, periodMinutes, statsPeriod, totalChange } from '../src/utils/companion-stats';

describe('companion stats helpers', () => {
  it('uses 5-minute statistics up to 7 days, hourly beyond', () => {
    expect(statsPeriod(48)).toBe('5minute');
    expect(statsPeriod(168)).toBe('5minute');
    expect(statsPeriod(720)).toBe('hour');
    expect(periodMinutes('hour')).toBe(60);
  });

  it('adds up increases, ignoring gaps and negative changes', () => {
    expect(totalChange([{ start: 0, change: 3 }, { start: 1, change: null }, { start: 2, change: -5 }, { start: 3, change: 2 }])).toBe(5);
    expect(totalChange(undefined)).toBe(0);
  });

  it('links to the History page with entities and dates', () => {
    const url = historyUrl(['sensor.a', 'sensor.b'], 24);
    expect(url.startsWith('/history?')).toBe(true);
    const q = new URLSearchParams(url.split('?')[1]);
    expect(q.get('entity_id')).toBe('sensor.a,sensor.b');
    expect(new Date(q.get('end_date')!).getTime() - new Date(q.get('start_date')!).getTime()).toBe(24 * 3600_000);
  });
});
