<script setup lang="ts">
import { popularProduct } from '@/entities';
import { ProductList, ProductOfTheDay } from '@/widget';

defineOptions({
  name: 'HomePage'
});
</script>

<template>
  <ProductOfTheDay />
  <ProductList :items="popularProduct">
    <template #header>
      Популярные блюда
    </template>
  </ProductList>
</template>
