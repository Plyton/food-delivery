import type { ProductI } from './types';
import { uuid, utils } from '@/shared/lib';

export const saladProduct = [
  {
    id: uuid.uuid(),
    title: 'Ланч низкокалорийный',
    price: 1148,
    image: utils.getImage('img/dishes/ланч-низкокалорийный.png'),
    des: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
    weight: 450,
  },
  {
    id: uuid.uuid(),
    title: 'Ланч низкокалорийный',
    price: 1148,
    image: utils.getImage('img/dishes/ланч низкокалорийный.png'),
    des: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
    weight: 450,
  },
] as const satisfies ProductI[];
