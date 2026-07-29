import { computed, ref, watch, type ComputedRef, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { BreadcrumbItem, Title } from './types';
import { useCartStore } from '@/entities';

interface UseBreadcrumbsReturn {
  breadcrumbs: ComputedRef<BreadcrumbItem[]>;
  visible: ComputedRef<boolean>;
  title: ComputedRef<Title>;
}

export const useBreadcrumbs = (): UseBreadcrumbsReturn => {
  const cart = useCartStore();

  const route = useRoute();
  const items: Ref<BreadcrumbItem[]> = ref([]);

  const buildBreadcrumbs = async (): Promise<void> => {
    if (route.path === '/') {
      items.value = [];
      return;
    }

    const result: BreadcrumbItem[] = [{ name: 'Главная', path: '/' }];

    for (const record of route.matched) {
      const resolver = record.meta.breadcrumb;
      if (!resolver) continue;

      const name = typeof resolver === 'function' ? await resolver(route) : resolver;

      result.push({
        name,
        path: record.path.includes(':') ? route.path : record.path,
      });
    }

    items.value = result;
  };

  watch(
    () => route.path,
    () => {
      void buildBreadcrumbs();
    },
    { immediate: true },
  );

  const visible = computed<boolean>(() => items.value.length > 0);

  const title = computed<Title>(() => {
    if (route.name === 'Cart') {
      return {
        text: (route.meta.title as string) ?? 'Корзина',
        count: cart.totalCount || undefined,
      };
    }

    return {
      text: (route.meta.title as string) ?? '',
      count: undefined,
    };
  });

  return {
    breadcrumbs: computed<BreadcrumbItem[]>(() => items.value),
    visible,
    title,
  };
};
