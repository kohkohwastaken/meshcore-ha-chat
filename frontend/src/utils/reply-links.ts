import { parseReaction } from './rich-messages';
/**
 * Which message a reply answers. MeshCore only sends "@[Name] text" over the
 * air, so the link to the original message is kept here, in this browser.
 * Replies from other people (or sent from another device) fall back to the
 * newest earlier message from the named sender.
 */
import type { ChatMessage } from '../types';

const KEY = 'meshcore-reply-links';
const MAX = 300;

export interface QuotedMessage {
  sender: string;
  text: string;
  id?: string;
}

const REPLY_RE = /^@\[([^\]]+)\]\s+\S/;
/** Messages before a reply that are searched for the one it answers. */
const QUOTE_LOOKBACK = 10;
/** And how much older than the reply that message may be. */
const QUOTE_MAX_AGE_MS = 30 * 60 * 1000;

type Links = Record<string, { sender: string; text: string }>;

function load(): Links {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}') as Links;
  } catch {
    return {};
  }
}

function linkKey(conversation: string, text: string): string {
  return `${conversation}|${text}`;
}

export function rememberReply(conversation: string, sentText: string, quoted: { sender: string; text: string }): void {
  try {
    const links = load();
    links[linkKey(conversation, sentText)] = { sender: quoted.sender, text: quoted.text };
    const keys = Object.keys(links);
    for (const k of keys.slice(0, Math.max(0, keys.length - MAX))) delete links[k];
    localStorage.setItem(KEY, JSON.stringify(links));
  } catch {
    /* storage unavailable — quote just falls back to the guess */
  }
}

/** The message `msg` replies to, or null when it isn't a reply. */
export function findQuoted(msg: ChatMessage, conversation: string, messages: ChatMessage[]): QuotedMessage | null {
  const m = REPLY_RE.exec(msg.text);
  if (!m) return null;
  const name = m[1];
  const before = messages.filter((x) => x.id !== msg.id && !x.isSystem && x.timestamp.getTime() <= msg.timestamp.getTime());

  const saved = load()[linkKey(conversation, msg.text)];
  if (saved) {
    const hit = [...before].reverse().find((x) => x.sender === saved.sender && x.text === saved.text);
    return { sender: saved.sender, text: saved.text, id: hit?.id };
  }
  // Replies don't say which message they answer, so only quote when the guess
  // can't really be wrong: exactly one message from that person among the last
  // few, and recent (as wadamesh does).
  // Reactions are hidden from the chat, so they don't count as messages here.
  const recent = before.filter((x) => !parseReaction(x.text)).slice(-QUOTE_LOOKBACK);
  const fromThem = recent.filter((x) => x.sender === name);
  if (fromThem.length !== 1) return null;
  const guess = fromThem[0];
  if (msg.timestamp.getTime() - guess.timestamp.getTime() > QUOTE_MAX_AGE_MS) return null;
  return { sender: guess.sender, text: guess.text, id: guess.id };
}
