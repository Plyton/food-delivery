<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useCartStore } from '@/entities';
  import { IconCard, BaseButton } from '@/shared/ui';

  defineOptions({
    name: 'CartButton',
  });

  const cart = useCartStore();
  const router = useRouter();
</script>

<template>
  <BaseButton
    class="cart-button position-relative"
    type="icon"
    @click="router.push({ name: 'Cart' })"
  >
    <template #prepend>
      <IconCard />
    </template>

    <span
      v-if="cart.totalCount"
      class="cart-button__badge text-xs d-flex items-center justify-center"
    >
      {{ cart.totalCount }}
    </span>
  </BaseButton>
</template>

<style lang="scss" scoped>
  .cart-button {
    &__badge {
      position: absolute;
      top: -5px;
      right: 15px;
      width: 21px;
      height: 21px;
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      border-radius: 3px;
    }
  }
</style>
