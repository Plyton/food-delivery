<script setup lang="ts">
import type { ProductPropsT } from './model/types.ts';

defineOptions({
  name: 'DishCard',
});

defineProps<ProductPropsT>();
</script>

<template>
  <div class="dish-card">
    <img
      class="dish-card__image"
      :src="product.image"
      alt="photo"
    >

    <div class="dish-card__title text-xl">
      {{ product.title }}
    </div>

    <div class="dish-card__weight text-sm">
      {{ product.weight }}
    </div>

    <div class="dish-card__des text-sm">
      {{ product.des }}
    </div>

    <div class="dish-card__footer">
      <div class="dish-card__price text-2xl-bold">
        {{ product.price }}
      </div>

      <slot name="action" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dish-card {
  display: grid;
  grid-template-rows: auto 12% 21px 1fr auto;
  grid-gap: 10px;
  background: transparent;
  padding: 5px;
  &__image {
    width: 233px;
    height: 233px;
    object-fit: cover;
  }

  &__weight {
    background: var(--color-on-surface-dim);
    color: var(--color-on-surface);
    border-radius: 3px;
    width: fit-content;
    padding: 2px 5px;
  }

  &__des {
    opacity: 0.8;
  }
}
</style>
