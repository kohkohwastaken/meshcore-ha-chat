import type { HomeAssistant } from '../types';

/**
 * Contacts added by hand and not yet heard from (no advert or direct message
 * since): public key (lower case) → when they were added (epoch seconds).
 * Shared by the chat list, Contacts and Nodes so they all show the same badge.
 */
let unverified: Record<string, number> = {};
let loading: Promise<void> | null = null;
const listeners = new Set<() => void>();

export const UNVERIFIED_EVENT = 'meshcore-unverified-changed';

/** Fetch the list (deduplicated while a request is running). */
export function loadUnverified(hass: HomeAssistant, entryId?: string): Promise<void> {
  if (loading) return loading;
  const msg: Record<string, unknown> = { type: 'meshcore_chat/get_unverified_contacts' };
  if (entryId) msg.entry_id = entryId;
  loading = hass.callWS<{ unverified?: Record<string, number> }>(msg)
    .then((r) => {
      unverified = r.unverified || {};
      listeners.forEach((l) => l());
      window.dispatchEvent(new Event(UNVERIFIED_EVENT));
    })
    .catch(() => { /* keep what we had */ })
    .finally(() => { loading = null; });
  return loading;
}

/** When this contact was added by hand, if it is still unverified. */
export function unverifiedSince(publicKeyOrPrefix: string | undefined): number | null {
  if (!publicKeyOrPrefix) return null;
  const k = publicKeyOrPrefix.toLowerCase();
  for (const [key, added] of Object.entries(unverified)) {
    if (key === k || key.startsWith(k)) return added;
  }
  return null;
}

export function onUnverifiedChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
