import type { ProductI } from '@/entities/product-card';

export const useProductOfTheDay = () => {
  const productMock: ProductI = {
    id: 1,
    title: 'Стейк из лосося с овощами',
    des: 'Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных фермерских овощей',
    weight: 250,
    price: 1200,
    image: 'img/dishes/hero-salmon.png',
  };

  return {
    productMock
  };
};
