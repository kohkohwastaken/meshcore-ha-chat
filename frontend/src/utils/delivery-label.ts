import type { DeliveryStatus } from '../types';

/** The short delivery label shown under your own messages ("Repeated", "Unheard"…). */
export function deliveryLabel(deliveryStatus: DeliveryStatus): string {
    const status = deliveryStatus.status;
    const repeats = deliveryStatus.repeaterCount ?? 0;
    if (status !== 'failed' && deliveryStatus.repeatsObservable === false) return 'Unconfirmed';
    if (status !== 'failed' && deliveryStatus.collecting && repeats === 0) return 'Waiting...';

    switch (status) {
      case 'pending':
      case 'waiting':
        return 'Waiting...';
      case 'sent':
        return repeats > 0 ? 'Repeated' : 'Unheard';
      case 'delivered':
        return 'Delivered';
      case 'failed':
        return 'Failed';
      case 'unconfirmed':
      default:
        return 'Sent';
    }
}

/** Your own messages that no repeater was heard passing on, or that failed, can be resent. */
export function canResend(isOutgoing: boolean, deliveryStatus?: DeliveryStatus): boolean {
  if (!isOutgoing || !deliveryStatus) return false;
  const label = deliveryLabel(deliveryStatus);
  return label === 'Unheard' || label === 'Failed';
}
