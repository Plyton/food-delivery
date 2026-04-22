import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { CartI } from './types.ts';
import type { ProductI } from '@/entities';

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartI[]>([]);

  const totalCount = computed<number>(() =>
    items.value.reduce((sum, i) => sum + i.count, 0)
  );

  const totalPrice = computed<number>(() =>
    items.value.reduce((sum, i) => sum + i.price * i.count, 0)
  );

  function addItem(product: ProductI) {
    const exist = items.value.find(i => i.id === product.id);

    if (exist) {
      exist.count++;
    } else {
      items.value.push({
        ...product,
        count: 1,
      });
    }
  }

  function removeItem(id: ProductI['id']) {
    items.value = items.value.filter(i => i.id !== id);
  }

  function increase(id: ProductI['id']) {
    const item = items.value.find(i => i.id === id);
    if (item) item.count++;
  }

  function decrease(id: ProductI['id']) {
    const item = items.value.find(i => i.id === id);
    if (!item) return;

    if (item.count === 1) removeItem(id);
    else item.count--;
  }

  return {
    items,
    totalCount,
    totalPrice,
    addItem,
    removeItem,
    increase,
    decrease,
  };
});
