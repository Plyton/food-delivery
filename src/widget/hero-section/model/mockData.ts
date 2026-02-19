import type { Product } from './types';
import heroImage from '../assets/hero-salmon.png';

export const heroProductMock: Product = {
  id: 1,
  title: 'Стейк из лосося с овощами',
  des: 'Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных фермерских овощей',
  weight: '250 г',
  price: '1 200 ₽',
  image: heroImage,
};
