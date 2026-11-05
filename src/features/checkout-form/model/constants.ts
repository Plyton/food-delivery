import type { CheckoutStep } from './types';

export interface CheckoutStepItem {
  id: CheckoutStep;
  title: string;
}

export const CHECKOUT_STEPS: readonly CheckoutStepItem[] = [
  {
    id: 1,
    title: 'Контактные данные',
  },
  {
    id: 2,
    title: 'Способ доставки',
  },
  {
    id: 3,
    title: 'Оплата',
  },
] as const;
