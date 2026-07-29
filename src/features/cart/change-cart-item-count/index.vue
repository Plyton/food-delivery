<script setup lang="ts">
  import { useCartStore } from '@/entities';
  import { BaseCounter } from '@/shared/ui';

  defineOptions({
    name: 'CartItemCount',
  });

  const props = defineProps<{
    id: string | number;
    count: number;
  }>();

  const cart = useCartStore();

  function onChange(value: number) {
    if (value > props.count) {
      cart.increase(props.id);
    } else if (value < props.count) {
      cart.decrease(props.id);
    }
  }
</script>

<template>
  <BaseCounter
    :model-value="props.count"
    @update:model-value="onChange"
  />
</template>
