import type { ProductI } from './types';
import { utils } from '@/shared/lib';

export const productOfTheDay: ProductI =
  {
    id: 1,
    title: 'Стейк из лосося с овощами',
    des: 'Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных фермерских овощей',
    weight: 250,
    price: 1200,
    image: utils.getImage('img/dishes/hero-salmon.png')
  } as const satisfies ProductI;
