// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest';
import '../src/components/message-panel';
import type { ChatMessage } from '../src/types';

const msg: ChatMessage = {
  id: 'a', sender: 'Dave', text: 'Test', timestamp: new Date(), isOutgoing: false, isSystem: false, raw: 'Test', mentions: [],
  rxLogData: [{ path_nodes: ['60aa', '06bb'], hop_count: 2, snr: 12, rssi: -87 }],
};

async function mount(mode: 'sheet' | 'side') {
  const el = document.createElement('meshcore-message-panel') as HTMLElement & { message?: ChatMessage; mode: string; updateComplete: Promise<unknown> };
  el.message = msg;
  el.mode = mode;
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

describe('message panel', () => {
  it('sheet shows the header and closes on the backdrop', async () => {
    const el = await mount('sheet');
    const root = el.shadowRoot!;
    expect(root.querySelector('.sheet')).not.toBeNull();
    expect(root.querySelector('.head')!.textContent).toContain('2 hops · SNR 12');
    let closed = false;
    el.addEventListener('panel-close', () => { closed = true; });
    (root.querySelector('.backdrop') as HTMLElement).click();
    expect(closed).toBe(true);
    el.remove();
  });

  it('reply sends the mention and closes', async () => {
    const el = await mount('sheet');
    const events: string[] = [];
    el.addEventListener('reply-to-sender', (e) => events.push((e as CustomEvent).detail.mention));
    el.addEventListener('panel-close', () => events.push('close'));
    const reply = [...el.shadowRoot!.querySelectorAll('.act')].find((b) => b.textContent!.includes('Reply')) as HTMLElement;
    reply.click();
    expect(events).toEqual(['@[Dave] ', 'close']);
    el.remove();
  });

  it('side panel shows the route details without a toggle', async () => {
    const el = await mount('side');
    const root = el.shadowRoot!;
    expect(root.querySelector('aside.side')).not.toBeNull();
    expect(root.querySelector('.details')!.textContent).toContain('60AA › 06BB');
    expect(root.querySelector('.toggle')).toBeNull();
    el.remove();
  });
});
