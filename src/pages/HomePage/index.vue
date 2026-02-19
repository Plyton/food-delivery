<script setup lang="ts">
import ProductList from '@/features/product-list/index.vue';
import { HeroSection } from '@/widget';

defineOptions({
  name: 'HomePage'
});
</script>

<template>
  <main class="pa-10">
    <HeroSection />
    <ProductList />
  </main>
</template>

<style scoped lang="scss">

</style>
