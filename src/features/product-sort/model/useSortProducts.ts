import { ref, computed, type Ref, type ComputedRef } from 'vue';
import type { ProductSortT } from './types';
import type { ProductI } from '@/entities';

interface UseSortProductsReturnI {
  sortType: Ref<ProductSortT>;
  sortedProducts: ComputedRef<ProductI[]>;
}

export const useSortProducts = (products: ProductI[]): UseSortProductsReturnI => {
  const sortType = ref<ProductSortT>('default');

  const sortMap: Record<Exclude<ProductSortT, 'default'>, (a: ProductI, b: ProductI) => number> = {
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    'name-asc': (a, b) => a.title.localeCompare(b.title),
    'name-desc': (a, b) => b.title.localeCompare(a.title),
  };

  const sortedProducts = computed<ProductI[]>(() => {
    if (sortType.value === 'default') {
      return products;
    }

    const sorter = sortMap[sortType.value];
    return [...products].sort(sorter);
  });

  return {
    sortType,
    sortedProducts,
  };
};
