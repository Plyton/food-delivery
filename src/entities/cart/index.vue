<script setup lang="ts">
  import type { CartI } from './model/types';
  import CartHeader from '@/entities/cart/ui/CartHeader.vue';
  import CartEmpty from './ui/CartEmpty.vue';
  import CartRow from './ui/CartRow.vue';

  defineOptions({
    name: 'CartTable'
  });

  defineProps<{
    items: CartI[];
  }>();
</script>

<template>
  <div class="cart">
    <CartEmpty v-if="!items.length" />

    <template v-else>
      <CartHeader />

      <ul class="cart__body d-flex flex-column gap-5 mb-20">
        <CartRow
          v-for="item in items"
          :key="item.id"
          :item="item"
        >
          <template #counter="slotProps">
            <slot
              name="counter"
              v-bind="slotProps"
            />
          </template>

          <template #remove="slotProps">
            <slot
              name="remove"
              v-bind="slotProps"
            />
          </template>
        </CartRow>
      </ul>

      <slot name="footer" />
    </template>
  </div>
</template>

<style scoped lang="scss">
  .cart {
    color: var(--color-on-surface);
  }
</style>
