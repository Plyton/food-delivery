import type { ProductI } from '@/entities';

export interface CartI extends ProductI {
  count: number;
}
