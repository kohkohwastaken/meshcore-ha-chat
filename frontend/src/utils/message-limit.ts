/**
 * How much text fits in one MeshCore message, in UTF-8 bytes (not
 * characters: accented letters take 2 bytes, most emoji 4 or more).
 *
 * Firmware (BaseChatMesh.h): MAX_TEXT_LEN = 160 bytes.
 * - Direct messages: up to 160 bytes of text. Longer ones are refused.
 * - Channel messages are sent as "<radio name>: <text>", and that whole
 *   string must fit in 160 bytes. Older meshcore-ha versions let the
 *   firmware cut the rest silently, possibly mid-character.
 * meshcore-ha counts the same way (TEXT_MAX_BYTES, channel_text_budget).
 *
 * Channel messages over 155 bytes ("<name>: <text>") still send, but are
 * encrypted into an 11th 16-byte block. The radio then never passes heard
 * copies of them to Home Assistant (it only forwards raw packets that fit
 * a 176-byte frame), so repeats can't be detected and the message always
 * shows as unheard.
 */

export const TEXT_MAX_BYTES = 160;
/** Longest "<name>: <text>" whose repeats Home Assistant can still see. */
export const CHANNEL_ECHO_MAX_BYTES = 155;
/** Below this many bytes left the counter turns amber. */
export const LOW_BYTES = 20;

const encoder = new TextEncoder();

export function utf8Bytes(text: string): number {
  return encoder.encode(text).length;
}

export interface MessageBudget {
  /** Bytes the text uses, as typed. */
  used: number;
  /** Bytes allowed for the text itself. */
  limit: number;
  /** limit - used; negative when too long. */
  left: number;
  /** Too long to send. */
  over: boolean;
  /** A channel message that sends, but whose repeats can't be detected. */
  echoUndetectable: boolean;
}

/**
 * The budget for the text exactly as typed. The panel trims spaces from the
 * ends before sending, so this can over-count by a trailing space or two,
 * but every key typed visibly changes the count.
 */
export function messageBudget(text: string, channelSender: string | null): MessageBudget {
  const used = utf8Bytes(text);
  const prefix = channelSender === null ? 0 : utf8Bytes(`${channelSender}: `);
  const limit = Math.max(0, TEXT_MAX_BYTES - prefix);
  const left = limit - used;
  return {
    used,
    limit,
    left,
    over: left < 0,
    echoUndetectable: channelSender !== null && left >= 0 && prefix + used > CHANNEL_ECHO_MAX_BYTES,
  };
}
