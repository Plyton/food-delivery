<script setup lang="ts">
  import { DishCard } from '@/entities';
  import { productListMock } from './model/producyListMock.ts';

  defineOptions({
    name: 'ProductList',
  });
</script>

<template>
  <section class="popular-dishes">
    <h1 class="popular-dishes__header d-flex items-center justify-center text-10xl">
      Популярные блюда
    </h1>
    <div class="popular-dishes__list">
      <DishCard
        v-for="product of productListMock"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .popular-dishes {
    padding-top: 150px;
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
