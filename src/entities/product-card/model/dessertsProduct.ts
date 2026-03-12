import type { ProductI } from './types';
import { uuid, utils } from '@/shared/lib';

export const dessertsProduct = [
  {
    id: uuid.uuid(),
    title: 'Тирамису',
    price: 370,
    image: utils.getImage('img/desserts/tiramisu.png'),
    des: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
    weight: 430,
  },
] as const satisfies ProductI[];
