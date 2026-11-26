/**
 * Message formats shared with the MeshCore apps:
 *   reaction (MeshCore One):  "@[Dave]👍\n<8-char hash>" (DM: "👍\n<hash>")
 *   reaction (MeshCore Open): "r:HASH4:IDX2"
 *   location:                 "m:lat,lon|label|poi"
 *   contact:                  "<64 hex key:type:name>"
 */
import type { ChatMessage } from '../types';
import { OPEN_REACTION_EMOJIS } from './reaction-emojis';

/** MeshCore Open's quick reactions; its reaction indices follow this order. */
export const QUICK_REACTIONS = ['👍', '❤️', '😂', '🎉', '👏', '🔥'];

// --- SHA-256 (synchronous, so it works without a secure context) ---------
const K = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

export function sha256(data: Uint8Array): Uint8Array {
  const h = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);
  const len = data.length;
  const total = Math.ceil((len + 9) / 64) * 64;
  const buf = new Uint8Array(total);
  buf.set(data);
  buf[len] = 0x80;
  const view = new DataView(buf.buffer);
  view.setUint32(total - 8, Math.floor((len * 8) / 2 ** 32));
  view.setUint32(total - 4, (len * 8) >>> 0);
  const w = new Uint32Array(64);
  const rotr = (x: number, n: number) => (x >>> n) | (x << (32 - n));
  for (let off = 0; off < total; off += 64) {
    for (let i = 0; i < 16; i++) w[i] = view.getUint32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, hh] = h;
    for (let i = 0; i < 64; i++) {
      const t1 = (hh + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) >>> 0;
      const t2 = ((rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) >>> 0;
      hh = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    h[0] += a; h[1] += b; h[2] += c; h[3] += d; h[4] += e; h[5] += f; h[6] += g; h[7] += hh;
  }
  const out = new Uint8Array(32);
  const ov = new DataView(out.buffer);
  for (let i = 0; i < 8; i++) ov.setUint32(i * 4, h[i]);
  return out;
}

const CROCKFORD = '0123456789abcdefghjkmnpqrstvwxyz';

/**
 * MeshCore One's message hash, as in its docs/Reactions.md: Crockford base32
 * (lower case) of the first 5 bytes of SHA-256(UTF-8 text + uint32 LE of the
 * sender's own timestamp).
 */
export function reactionHash(text: string, timestampSeconds: number): string {
  const t = new TextEncoder().encode(text);
  const data = new Uint8Array(t.length + 4);
  data.set(t);
  new DataView(data.buffer).setUint32(t.length, timestampSeconds >>> 0, true);
  const d = sha256(data);
  let bits = 0n;
  for (let i = 0; i < 5; i++) bits = (bits << 8n) | BigInt(d[i]);
  let out = '';
  for (let i = 7; i >= 0; i--) out += CROCKFORD[Number((bits >> BigInt(i * 5)) & 31n)];
  return out;
}

/**
 * A message's MeshCore One hash, the id reactions use. Exact when the
 * sender's own timestamp is known (incoming messages); otherwise worked out
 * from when it was logged, which may be a second or so off.
 */
const hashMemo = new Map<string, { hash: string; exact: boolean }>();

export function messageHash(msg: ChatMessage): { hash: string; exact: boolean } | null {
  if (!msg.text || msg.isSystem) return null;
  const exact = typeof msg.senderTimestamp === 'number';
  const ts = exact ? msg.senderTimestamp! : Math.floor(msg.timestamp.getTime() / 1000);
  const key = `${ts}|${msg.text}`;
  let out = hashMemo.get(key);
  if (!out) {
    out = { hash: reactionHash(msg.text, ts), exact };
    if (hashMemo.size > 5000) hashMemo.clear();
    hashMemo.set(key, out);
  }
  return out.exact === exact ? out : { hash: out.hash, exact };
}

/**
 * MeshCore Open's own 4-hex hash (reaction_helper.dart computeReactionHash):
 * the Dart VM string hash of `${timestamp}${senderName}${first 5 UTF-16
 * units of text}`, lower 16 bits. senderName is left out in 1:1 chats.
 */
export function openReactionHash(timestampSeconds: number, senderName: string | null, text: string): string {
  const input = `${timestampSeconds}${senderName ?? ''}${text.substring(0, 5)}`;
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h + input.charCodeAt(i)) >>> 0;
    h = (h + ((h << 10) >>> 0)) >>> 0;
    h = (h ^ (h >>> 6)) >>> 0;
  }
  h = (h + ((h << 3) >>> 0)) >>> 0;
  h = (h ^ (h >>> 11)) >>> 0;
  h = (h + ((h << 15) >>> 0)) >>> 0;
  h &= 0x3fffffff;
  if (h === 0) h = 1;
  return (h & 0xffff).toString(16).padStart(4, '0');
}

// --- Reactions -------------------------------------------------------------
export interface ParsedReaction {
  emoji: string;
  /** Whose message it reacts to (MeshCore One channel reactions). */
  target?: string;
  hash: string;
  kind: 'mc1' | 'open' | 'plain';
}

/** One emoji (a single grapheme), not ordinary text. */
function looksLikeEmoji(s: string): boolean {
  if (!s) return false;
  const Seg = (Intl as unknown as { Segmenter?: new (l?: string, o?: { granularity: string }) => { segment: (t: string) => Iterable<unknown> } }).Segmenter;
  if (Seg && [...new Seg(undefined, { granularity: 'grapheme' }).segment(s)].length !== 1) return false;
  const first = s.codePointAt(0) ?? 0;
  return first >= 0x2000 || s.includes('\uFE0F') || s.includes('\u20E3');
}

const MC1_RE = /^(?:@\[(.*)\])?(.+?)\n([a-hjkmnp-tv-z0-9]{8})$/i;
const MC1_LEGACY_RE = /^(.+?)(?:@\[(.*)\])?\n([a-hjkmnp-tv-z0-9]{8})$/i;
const OPEN_RE = /^r:([0-9a-f]{4}):([0-9a-f]{2})$/;
/** Plain reaction on a channel: "@[Name] 👍", no hash (goes on their latest message). */
const PLAIN_RE = /^@\[([^\]]+)\]\s*(\S+)$/u;

export function parseReaction(text: string): ParsedReaction | null {
  const open = OPEN_RE.exec(text);
  if (open) {
    const emoji = OPEN_REACTION_EMOJIS[parseInt(open[2], 16)];
    return emoji ? { emoji, hash: open[1], kind: 'open' } : null;
  }
  const one = MC1_RE.exec(text);
  if (one && looksLikeEmoji(one[2])) return { emoji: one[2], target: one[1], hash: one[3].toLowerCase(), kind: 'mc1' };
  const legacy = MC1_LEGACY_RE.exec(text);
  if (legacy && looksLikeEmoji(legacy[1])) return { emoji: legacy[1], target: legacy[2], hash: legacy[3].toLowerCase(), kind: 'mc1' };
  const plain = PLAIN_RE.exec(text);
  if (plain && looksLikeEmoji(plain[2])) return { emoji: plain[2], target: plain[1], hash: '', kind: 'plain' };
  return null;
}

/** Seconds the sender's radio may have stamped on a message, best guess first. */
function candidateTimes(m: ChatMessage): number[] {
  if (m.senderTimestamp) return [m.senderTimestamp];
  // Without it, the sender's clock is usually a little behind when we logged it.
  const t = Math.floor(m.timestamp.getTime() / 1000);
  const out = [t];
  for (let d = 1; d <= 15; d++) out.push(t - d);
  out.push(t + 1, t + 2);
  return out;
}

/**
 * A reaction to `msg` in MeshCore One's format, the community-agreed one
 * (https://github.com/Avi0n/MeshCoreOne/blob/main/docs/Reactions.md):
 * "@[Name]👍\nhash" on channels, "👍\nhash" in DMs, where hash is the
 * Crockford base32 of the first 5 bytes of SHA-256(text + sender time).
 */
export function formatReaction(emoji: string, msg: ChatMessage, isChannel: boolean): string {
  const ts = msg.senderTimestamp ?? Math.floor(msg.timestamp.getTime() / 1000);
  const hash = reactionHash(msg.text, ts);
  return isChannel ? `@[${msg.sender}]${emoji}\n${hash}` : `${emoji}\n${hash}`;
}

export interface ReactionChip {
  emoji: string;
  senders: string[];
  /** Each reaction, oldest first. */
  who: Array<{ sender: string; time: Date }>;
}

/** The "You reacted 👍 to Dave: “Test”" line for a reaction you sent. */
function logLine(m: ChatMessage, emoji: string, target: ChatMessage): ChatMessage {
  const snippet = target.text.length > 40 ? `${target.text.slice(0, 40)}…` : target.text;
  return {
    ...m,
    id: `react_${m.id}`,
    isSystem: true,
    // Stays outgoing so it never counts as unread.
    isOutgoing: true,
    text: `You reacted ${emoji} to ${target.sender}: “${snippet}”`,
    mentions: [],
    activityTarget: target.id,
    activityText: m.text,
  };
}

/**
 * The message a reaction points at, searching messages sent before it.
 * Null when it isn't a reaction or its target isn't loaded.
 */
export function findReactionTarget(reaction: ChatMessage, messages: ChatMessage[], isChannel = true): { emoji: string; target: ChatMessage | null } | null {
  const r = parseReaction(reaction.text);
  if (!r) return null;
  const at = reaction.timestamp.getTime();
  const target = [...messages].reverse().find((x) => {
    if (x.id === reaction.id || x.isSystem || x.timestamp.getTime() > at) return false;
    if (parseReaction(x.text)) return false;
    if (r.target && x.sender !== r.target) return false;
    if (r.kind === 'plain') return true;
    return candidateTimes(x).some((t) => (r.kind === 'mc1'
      ? reactionHash(x.text, t)
      : openReactionHash(t, isChannel ? x.sender : null, x.text)) === r.hash);
  }) ?? null;
  return { emoji: r.emoji, target };
}

/**
 * Pull reactions out of the message list and attach them to the message
 * whose hash they carry. Reactions that match nothing are dropped, as the
 * MeshCore apps do (the message may be older than what's loaded).
 */
/** How a channel message that is just "@[Name]" + one emoji is treated. */
export type PlainReactionMode = 'message' | 'reaction' | 'both';

export interface CollectOptions {
  /** Keep reaction messages in the chat as sent (the header toggle). */
  keepRaw?: boolean;
  /** "@[Name] 👍" with no hash: a message (default), a reaction, or both. */
  plainMode?: PlainReactionMode;
  /** With keepRaw, show reactions whose message hasn't arrived (default on). */
  showPending?: boolean;
}

/** "Dave reacted 👍 · message not received yet". */
function pendingLine(m: ChatMessage, emoji: string): ChatMessage {
  return {
    ...m,
    id: `pending_${m.id}`,
    isSystem: true,
    isOutgoing: true,
    text: `${m.isOutgoing ? 'You' : m.sender} reacted ${emoji} · message not received yet`,
    mentions: [],
  };
}

/**
 * Pull reactions out of the message list and attach them to the message
 * whose hash they carry. A reaction can arrive before its message (mesh
 * routes differ), so it is matched against every message, earlier ones
 * first; one that matches nothing waits, and attaches once its message
 * turns up (or shows as "not received yet" when reactions are shown).
 */
export function collectReactions(
  messages: ChatMessage[],
  isChannel = true,
  options: boolean | CollectOptions = {},
): { visible: ChatMessage[]; reactions: Map<string, ReactionChip[]> } {
  const opts: CollectOptions = typeof options === 'boolean' ? { keepRaw: options } : options;
  const keepRaw = !!opts.keepRaw;
  const plainMode = opts.plainMode ?? 'message';
  const showPending = opts.showPending ?? true;
  const visible: ChatMessage[] = [];
  const reactions = new Map<string, ReactionChip[]>();
  const mc1 = new Map<string, Set<string>>();
  const open = new Map<string, Set<string>>();
  const hashes = (m: ChatMessage, kind: 'mc1' | 'open') => {
    const cache = kind === 'mc1' ? mc1 : open;
    let set = cache.get(m.id);
    if (!set) {
      const times = candidateTimes(m);
      set = new Set(kind === 'mc1'
        ? times.map((t) => reactionHash(m.text, t))
        : times.map((t) => openReactionHash(t, isChannel ? m.sender : null, m.text)));
      cache.set(m.id, set);
    }
    return set;
  };
  // What each message is: a reaction (and of what kind), or ordinary chat.
  const parsed = messages.map((m) => {
    const r = m.isSystem ? null : parseReaction(m.text);
    if (r && r.kind === 'plain' && plainMode === 'message') return null;
    return r;
  });
  // Messages a reaction can point at: everything that isn't itself a reaction
  // (plain ones stay messages in "both" mode). With reactions shown, a
  // reaction to a reaction can land on that reaction's line too.
  const targets = messages.filter((m, i) => !m.isSystem
    && (keepRaw || !parsed[i] || (parsed[i]!.kind === 'plain' && plainMode === 'both')));
  const seen = new Set<string>();
  messages.forEach((m, i) => {
    const r = parsed[i];
    if (!r) {
      visible.push(m);
      return;
    }
    const plainAsMessage = r.kind === 'plain' && plainMode === 'both';
    if (plainAsMessage) visible.push(m);
    const at = m.timestamp.getTime();
    const earlierFirst = [
      ...targets.filter((x) => x.id !== m.id && x.timestamp.getTime() <= at).reverse(),
      ...targets.filter((x) => x.id !== m.id && x.timestamp.getTime() > at),
    ];
    const target = r.kind === 'plain'
      ? earlierFirst.find((x) => x.sender === r.target && x.timestamp.getTime() <= at)
      : earlierFirst.find((x) => (!r.target || x.sender === r.target) && hashes(x, r.kind as 'mc1' | 'open').has(r.hash));
    if (!target) {
      if (keepRaw && showPending && !plainAsMessage) visible.push(pendingLine(m, r.emoji));
      return;
    }
    if (keepRaw && !plainAsMessage) visible.push(m);
    const sender = m.isOutgoing ? 'You' : m.sender;
    const dedup = `${target.id}|${sender}|${r.emoji}`;
    if (seen.has(dedup)) {
      // The same reaction again (a resend): your log line moves to the newest
      // copy, so it shows that copy's delivery state.
      if (m.isOutgoing && !keepRaw) {
        const j = visible.findIndex((x) => x.activityTarget === target.id && x.activityText === m.text);
        if (j >= 0) visible.splice(j, 1);
        visible.push(logLine(m, r.emoji, target));
      }
      return;
    }
    seen.add(dedup);
    const chips = reactions.get(target.id) ?? [];
    const chip = chips.find((c) => c.emoji === r.emoji);
    if (chip) {
      chip.senders.push(sender);
      chip.who.push({ sender, time: m.timestamp });
    } else chips.push({ emoji: r.emoji, senders: [sender], who: [{ sender, time: m.timestamp }] });
    reactions.set(target.id, chips);
    // Your own reactions also get a small line in the chat, where you sent them.
    if (m.isOutgoing && !keepRaw && !plainAsMessage) visible.push(logLine(m, r.emoji, target));
  });
  return { visible, reactions };
}

// --- Location --------------------------------------------------------------
export interface SharedLocation {
  lat: number;
  lon: number;
  label: string;
}

const LOC_RE = /^m:(-?\d{1,2}(?:\.\d+)?),(-?\d{1,3}(?:\.\d+)?)(?:\|([^|]*))?(?:\|([\s\S]*))?$/;

export function parseLocation(text: string): SharedLocation | null {
  const m = LOC_RE.exec(text);
  if (!m) return null;
  const lat = Number(m[1]);
  const lon = Number(m[2]);
  if (Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
  return { lat, lon, label: (m[3] ?? '').trim() };
}

export function formatLocation(lat: number, lon: number, label: string): string {
  return `m:${lat.toFixed(6)},${lon.toFixed(6)}|${label.replace(/[|\n]/g, ' ').trim()}|`;
}

// --- Contact ---------------------------------------------------------------
export interface SharedContact {
  publicKey: string;
  type: number;
  name: string;
  /** Any text sent with it, with the token taken out. */
  caption: string;
}

// As MeshCore Open's contact_share_message.dart.
const CONTACT_RE = /<([0-9a-fA-F]{64}):([1-4]):([^<>\r\n]*)>/;

/** A contact token anywhere in the message, plus the rest of the text as its caption. */
export function parseContact(text: string): SharedContact | null {
  const m = CONTACT_RE.exec(text);
  if (!m) return null;
  const caption = (text.slice(0, m.index) + text.slice(m.index + m[0].length)).replace(/\s+/g, ' ').trim();
  return { publicKey: m[1].toLowerCase(), type: Number(m[2]), name: m[3].trim(), caption };
}

export function formatContact(publicKey: string, type: number, name: string): string {
  return `<${publicKey.toLowerCase()}:${type}:${name.replace(/[<>\r\n]/g, '').trim()}>`;
}

export const NODE_TYPE_NAMES: Record<number, string> = { 1: 'Companion', 2: 'Repeater', 3: 'Room server', 4: 'Sensor' };

// --- Places ------------------------------------------------------------------
export function distanceMetres(aLat: number, aLon: number, bLat: number, bLon: number): number {
  const r = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLon / 2) ** 2;
  return 2 * r * Math.asin(Math.sqrt(x));
}

// --- Adding a contact by hand ------------------------------------------------
/** What a pasted contact turned out to be. */
export type ManualContact =
  | { kind: 'card'; publicKey: string; name: string; type: number }
  | { kind: 'advert'; hex: string }
  | { kind: 'key'; publicKey: string }
  | { kind: 'invalid'; reason: string };

/**
 * Recognise a pasted contact: a chat code `<key:type:name>`, a
 * `meshcore://contact/add?…` link, an advert `meshcore://<hex>`, or a bare
 * 64-character public key (which still needs a name).
 */
export function parseManualContact(input: string): ManualContact {
  const text = input.trim();
  if (!text) return { kind: 'invalid', reason: '' };
  const code = parseContact(text);
  if (code) return { kind: 'card', publicKey: code.publicKey, name: code.name, type: code.type };
  if (/^meshcore:\/\/contact\/add\b/i.test(text)) {
    const query = text.split('?')[1] ?? '';
    const p = new URLSearchParams(query);
    const key = (p.get('public_key') ?? '').toLowerCase();
    const type = Number(p.get('type') ?? 1);
    if (!/^[0-9a-f]{64}$/.test(key)) return { kind: 'invalid', reason: "The link's public key isn't valid." };
    return { kind: 'card', publicKey: key, name: (p.get('name') ?? '').trim(), type: type >= 1 && type <= 4 ? type : 1 };
  }
  const advert = /^meshcore:\/\/([0-9a-f]+)$/i.exec(text);
  if (advert) {
    const hex = advert[1].toLowerCase();
    if (hex.length % 2 || hex.length < 196 || hex.length > 342) return { kind: 'invalid', reason: "That advert is the wrong length." };
    return { kind: 'advert', hex };
  }
  if (/^[0-9a-f]{64}$/i.test(text)) return { kind: 'key', publicKey: text.toLowerCase() };
  return { kind: 'invalid', reason: "That isn't a contact code, link, advert or public key." };
}
