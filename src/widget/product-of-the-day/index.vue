<script setup lang="ts">
  import { ProductCard, productOfTheDay } from '@/entities';
  import { AddToCart } from '@/features';

  defineOptions({
    name: 'ProductOfTheDay',
  });
</script>

<template>
  <section class="product-of-the-day">
    <ProductCard
      :product="productOfTheDay"
      variant="hero"
    >
      <template #action="{ item }">
        <AddToCart :product="item" />
      </template>
    </ProductCard>
  </section>
</template>

<style scoped lang="scss">
  .product-of-the-day {
    margin-bottom: 150px;
  }
</style>
