<script setup lang="ts">
  import { dessertsProduct } from '@/entities';
  import { ProductList } from '@/widget';

  defineOptions({
    name: 'DessertsPage',
  });
</script>

<template>
  <ProductList :items="dessertsProduct" />
</template>
