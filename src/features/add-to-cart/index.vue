<script setup lang="ts">
  import { BaseButton, IconCard } from '@/shared/ui';
  import { useAddToCart } from './model/useAddToCart.ts';

  defineOptions({
    name: 'AddToCart',
  });

  const props = defineProps<{
    productId: string | number;
  }>();

  const { addToCart } = useAddToCart();

  function handleClick() {
    addToCart(props.productId);
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
