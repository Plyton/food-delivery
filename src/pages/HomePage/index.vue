<script setup lang="ts">
import { ProductList, ProductOfTheDay } from '@/features';

defineOptions({
  name: 'HomePage'
});
</script>

<template>
  <main class="pa-10">
    <ProductOfTheDay />
    <ProductList />
  </main>
</template>
