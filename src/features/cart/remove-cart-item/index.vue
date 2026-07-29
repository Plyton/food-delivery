<script setup lang="ts">
  import { useCartStore } from '@/entities/cart';
  import { BaseButton } from '@/shared/ui';

  defineOptions({
    name: 'RemoveCartItem',
  });

  defineProps<{ id: number | string }>();

  const cart = useCartStore();
</script>

<template>
  <BaseButton @click="cart.removeItem(id)">
    x
  </BaseButton>
</template>
