<script setup lang="ts">
  import { snackProduct } from '@/entities';
  import { ProductList } from '@/widget';

  defineOptions({
    name: 'SnacksPage',
  });
</script>

<template>
  <ProductList :items="snackProduct" />
</template>
