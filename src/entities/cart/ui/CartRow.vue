<script setup lang="ts">
  import type { CartI } from '../model/types';
  import { CURRENCY_SYMBOL, WEIGHT_UNIT } from '@/shared/config';
  import { formatNumber } from '@/shared/lib/utils';

  defineProps<{
    item: CartI;
  }>();
</script>

<template>
  <li class="cart-row">
    <div class="cart-row__image">
      <img
        :src="item.image"
        :alt="item.title"
      >
    </div>

    <div>
      <p class="mb-2 text-lg">
        {{ item.title }}
      </p>

      <small class="cart-row__weight">{{ item.weight }} {{ WEIGHT_UNIT }}</small>
    </div>

    <div class="text-xl-bold">
      {{ formatNumber(item.price) }} {{ CURRENCY_SYMBOL }}
    </div>

    <div>
      <slot
        name="counter"
        :item="item"
      />
    </div>

    <div class="text-xl-bold">
      {{ formatNumber(item.price * item.count) }} {{ CURRENCY_SYMBOL }}
    </div>

    <div class="cart-row__remove">
      <slot
        name="remove"
        :item="item"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
  .cart-row {
    display: grid;
    grid-template: minmax(180px, auto) / minmax(180px, 180px) 3fr repeat(4, 1fr);
    grid-column-gap: 70px;
    align-items: center;
    background-color: var(--color-surface-container-low);

    &__image img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    &__weight {
      background: var(--color-on-surface-dim);
      color: var(--color-on-surface);
      border-radius: 3px;
      width: fit-content;
      padding: 2px 5px;
    }

    &__remove {
      justify-self: center;
    }
  }
</style>
