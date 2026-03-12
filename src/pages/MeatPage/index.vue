<script setup lang="ts">
  import { meatProduct } from '@/entities';
  import { ProductList } from '@/widget';

  defineOptions({
    name: 'MeatPage',
  });
</script>

<template>
  <ProductList :items="meatProduct" />
</template>
