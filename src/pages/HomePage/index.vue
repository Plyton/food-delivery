<script setup lang="ts">
import { ProductList, ProductOfTheDay, popularProduct } from '@/features';

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
