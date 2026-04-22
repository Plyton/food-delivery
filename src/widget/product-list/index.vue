<script setup lang="ts">
  import { ProductCard, type ProductI } from '@/entities';
  import { AddToCart, ProductSort, useSortProducts } from '@/features';

  defineOptions({
    name: 'ProductList',
  });

  const props = withDefaults(
    defineProps<{
      items: ProductI[];
      sort?: boolean;
    }>(),
    {
      sort: true,
    },
  );

  const { sortType, sortedProducts } = useSortProducts(props.items);
</script>

<template>
  <section class="product-list d-flex flex-column">
    <h1
      v-if="$slots.header"
      class="product-list__header d-flex items-center justify-center text-10xl"
    >
      <slot name="header" />
    </h1>

    <ProductSort
      v-if="sort"
      v-model="sortType"
    />

    <div class="product-list__list">
      <ProductCard
        v-for="product of sortedProducts"
        :key="product.id"
        :product="product"
      >
        <template #action="{ item }">
          <AddToCart :product="item" />
        </template>
      </ProductCard>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .product-list {
    color: var(--color-on-surface);

    &__header {
      height: 194px;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, 244px);
      grid-auto-rows: 500px;
      grid-gap: 40px;
      justify-content: space-between;
    }
  }
</style>
