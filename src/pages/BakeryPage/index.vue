<script setup lang="ts">
import { bakeryProduct } from '@/entities';
import { ProductList } from '@/widget';

  defineOptions({
    name: 'BakeryPage'
  });
</script>

<template>
  <ProductList :items="bakeryProduct" />
</template>
