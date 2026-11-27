/**
 * Recorded statistics for the companion radio's self-diagnostic sensors.
 *
 * The companion only reports running totals (messages sent/received,
 * airtime minutes), which reset to zero when the radio restarts. Home
 * Assistant's statistics turn those into a per-period "change" that already
 * copes with resets, so rates come from that rather than from raw states.
 * Short-term (5-minute) statistics are kept as long as state history
 * (10 days by default); longer ranges use hourly statistics.
 */
import type { HomeAssistant } from '../types';

export interface StatPoint {
  start: number;
  change?: number | null;
  mean?: number | null;
}

export type StatSeries = Record<string, StatPoint[]>;

export function statsPeriod(hours: number): '5minute' | 'hour' {
  return hours <= 168 ? '5minute' : 'hour';
}

export function periodMinutes(period: '5minute' | 'hour'): number {
  return period === '5minute' ? 5 : 60;
}

/** Statistics for these entities over the last `hours`. Empty on failure. */
export async function fetchStats(hass: HomeAssistant, ids: string[], hours: number): Promise<StatSeries> {
  if (!ids.length) return {};
  try {
    const res = await hass.callWS<Record<string, Array<{ start: number | string; change?: number | null; mean?: number | null }>>>({
      type: 'recorder/statistics_during_period',
      start_time: new Date(Date.now() - hours * 3600_000).toISOString(),
      end_time: new Date().toISOString(),
      statistic_ids: ids,
      period: statsPeriod(hours),
      types: ['change', 'mean'],
    });
    const out: StatSeries = {};
    for (const [id, pts] of Object.entries(res || {})) {
      out[id] = (pts || []).map((p) => ({
        start: typeof p.start === 'number' ? p.start : new Date(p.start).getTime(),
        change: p.change,
        mean: p.mean,
      }));
    }
    return out;
  } catch {
    return {};
  }
}

/** Sum of `change` over the points (a running total's increase), ignoring gaps. */
export function totalChange(points: StatPoint[] | undefined): number {
  return (points || []).reduce((n, p) => n + (typeof p.change === 'number' && p.change > 0 ? p.change : 0), 0);
}

/** Link to Home Assistant's History page for these entities over the last `hours`. */
export function historyUrl(ids: string[], hours: number): string {
  const end = new Date();
  const start = new Date(end.getTime() - hours * 3600_000);
  const q = new URLSearchParams({ entity_id: ids.join(','), start_date: start.toISOString(), end_date: end.toISOString() });
  return `/history?${q.toString()}`;
}
