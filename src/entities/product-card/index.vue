<script setup lang="ts">
import { computed } from 'vue';
import type { ProductPropsT } from './model/types.ts';
import { WEIGHT_UNIT, CURRENCY_SYMBOL } from '@/shared/config';
import { formatNumber } from '@/shared/lib/utils';

defineOptions({
  name: 'ProductCard',
});

const props = defineProps<ProductPropsT>();

const cardClass = computed(() => [
  'product-card',
  `product-card--${props.variant ?? 'default'}`
]);
</script>

<template>
  <article :class="cardClass">
    <img
      class="product-card__image"
      :src="product.image"
      :alt="product.title"
    >

    <div class="product-card__container">
      <h2 class="product-card__title">
        {{ product.title }}
      </h2>

      <span class="product-card__weight text-sm">
        {{ product.weight }} {{ WEIGHT_UNIT }}
      </span>

      <p class="product-card__des">
        {{ product.des }}
      </p>

      <footer class="product-card__footer d-flex items-center gap-17">
        <data
          class="product-card__price text-2xl-bold"
          :value="product.price"
        >
          {{ formatNumber(product.price) }} {{ CURRENCY_SYMBOL }}
        </data>

        <slot name="action" />
      </footer>
    </div>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  position: relative;
  display: flex;
  background: transparent;
  padding: 5px;
  font-weight: 500;

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

  &--default {
    flex-direction: column;
    gap: 16px;

    .product-card {
      &__container {
        height: 100%;
        display: grid;
        grid-template-rows: 20% 21px;
        justify-content: space-between;
        grid-gap: 10px;
      }

      &__image {
        width: 233px;
        height: 233px;
        object-fit: cover;
      }

      &__title {
        font-size: 20px;
      }

      &__des {
       font-size: 13px;
      }

      &__footer {
        height: fit-content;
        align-self: flex-end;
      }
    }
  }

  &--hero {
    justify-content: center;
    padding: 20px 0;

    .product-card {
      &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        position: absolute;
        top: 70%;
        left: 5%;
        background-image: url("./assets/hero-container-product.png");
        padding: 40px;
        color: var(--color-on-surface);
        max-width: 355px;
        min-height: 357px;
      }

      &__image {
        height: 100vh;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }

      &__title {
        font-size: 25px;
        line-height: 25px;
      }

      &__des {
        font-size: 15px;
      }
    }
  }
}
</style>
