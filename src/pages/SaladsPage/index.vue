<script setup lang="ts">
import { saladProduct } from '@/entities';
import { ProductList } from '@/widget';

defineOptions({
  name: 'SaladsPage',
});
</script>

<template>
  <ProductList :items="saladProduct" />
</template>
