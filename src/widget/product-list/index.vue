<script setup lang="ts">
  import { ProductCard, type ProductI } from '@/entities';
  import { AddToCart } from '@/features';

  defineOptions({
    name: 'ProductList',
  });

  defineProps<{
    items: ProductI[]
  }>();
</script>

<template>
  <section class="popular-dishes">
    <h1
      v-if="$slots.header"
      class="popular-dishes__header d-flex items-center justify-center text-10xl"
    >
      <slot name="header" />
    </h1>

    <slot name="sort" />

    <div class="popular-dishes__list">
      <ProductCard
        v-for="product of items"
        :key="product.id"
        :product="product"
      >
        <template #action="{ item }">
          <AddToCart :product-id="item.id" />
        </template>
      </ProductCard>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .popular-dishes {
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
