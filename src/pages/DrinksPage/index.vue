<script setup lang="ts">
  import { drinksProduct } from '@/entities';
  import { ProductList } from '@/widget';

  defineOptions({
    name: 'DrinksPage',
  });
</script>

<template>
  <ProductList :items="drinksProduct" />
</template>
