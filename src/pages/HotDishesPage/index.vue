<script setup lang="ts">
import { hotDishProducts } from '@/entities';
import { ProductList } from '@/widget';

defineOptions({
   name: 'HotDishesPage',
 });
</script>

<template>
  <ProductList :items="hotDishProducts" />
</template>
