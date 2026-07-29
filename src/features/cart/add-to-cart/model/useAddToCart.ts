import { type ProductI, useCartStore } from '@/entities';

export function useAddToCart() {

  const { addItem } = useCartStore();

  const addToCart = (item: ProductI) => {
    addItem(item);
  };
  return {
    addToCart,
  };
}
