<script setup lang="ts">
import { ProductList, ProductOfTheDay } from '@/features';

defineOptions({
  name: 'HomePage'
});
</script>

<template>
  <ProductOfTheDay />
  <ProductList />
</template>
