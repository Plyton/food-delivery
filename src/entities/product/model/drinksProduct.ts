import type { ProductI } from './types';
import { uuid, utils } from '@/shared/lib';

export const drinksProduct = [
  {
    id: uuid.uuid(),
    title: 'Сок свежевыжатый',
    price: 250,
    image: utils.getImage('img/dishes/img-card.png'),
    des: 'Сок из свежих апельсинов',
    weight: 300,
  },
] as const satisfies ProductI[];
