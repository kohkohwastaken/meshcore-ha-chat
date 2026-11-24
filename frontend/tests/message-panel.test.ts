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
    const info = [...root.querySelectorAll('.info')].map((e) => e.textContent!.trim());
    expect(info[0]).toMatch(/^Received /);
    expect(info[1]).toBe('2 hops · SNR 12 · RSSI -87');
    expect(root.querySelector('.toggle')).toBeNull();
    expect(root.querySelector('.reacts')).toBeNull();
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

  it('side panel shows the same info lines, no route text', async () => {
    const el = await mount('side');
    const root = el.shadowRoot!;
    expect(root.querySelector('aside.side')).not.toBeNull();
    expect(root.textContent).toContain('2 hops · SNR 12 · RSSI -87');
    expect(root.textContent).not.toContain('60AA › 06BB');
    expect(root.querySelector('.toggle')).toBeNull();
    el.remove();
  });
});

describe('desktop react button', () => {
  it('opens the reaction buttons from React', async () => {
    const el = document.createElement('meshcore-message-panel') as HTMLElement & { message?: ChatMessage; mode: string; updateComplete: Promise<unknown> };
    el.message = msg;
    el.mode = 'side';
    document.body.appendChild(el);
    await el.updateComplete;
    const root = el.shadowRoot!;
    expect(root.querySelector('.reacts')).toBeNull();
    const react = [...root.querySelectorAll('.act')].find((b) => b.textContent!.includes('React')) as HTMLElement;
    react.click();
    await el.updateComplete;
    expect(root.querySelector('.reacts')).not.toBeNull();
    el.remove();
  });
});
