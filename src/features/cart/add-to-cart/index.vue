<script setup lang="ts">
  import type { ProductI } from '@/entities';
  import { BaseButton, IconCard } from '@/shared/ui';
  import { useAddToCart } from './model/useAddToCart.ts';

  defineOptions({
    name: 'AddToCart',
  });

  const props = defineProps<{
    product: ProductI;
  }>();

  const { addToCart } = useAddToCart();

  function handleClick() {
    addToCart(props.product);
  }
</script>

<template>
  <BaseButton
    type="icon-fill"
    @click="handleClick"
  >
    <IconCard />
  </BaseButton>
</template>
