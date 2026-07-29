<script setup lang="ts">
  import { CartTable, useCartStore } from '@/entities';
  import { CartItemCount, RemoveCartItem, CartCheckout } from '@/features';

  defineOptions({
    name: 'CartList',
  });

  const cart = useCartStore();
</script>

<template>
  <CartTable :items="cart.items">
    <template #counter="{ item }">
      <CartItemCount
        :id="item.id"
        :count="item.count"
      />
    </template>

    <template #remove="{ item }">
      <RemoveCartItem :id="item.id" />
    </template>

    <template #footer>
      <CartCheckout />
    </template>
  </CartTable>
</template>
