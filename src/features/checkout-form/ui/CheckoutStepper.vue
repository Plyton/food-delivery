<script setup lang="ts">
  import { computed } from 'vue';

  import type { CheckoutStep } from '../model/types';

  defineProps<{
    step: CheckoutStep;
  }>();

  const steps = computed(() => [
    {
      id: 1,
      title: 'Контактные данные'
    },
    {
      id: 2,
      title: 'Способ доставки'
    },
    {
      id: 3,
      title: 'Оплата'
    }
  ]);
</script>

<template>
  <ol class="checkout-stepper text-2xl d-flex items-center gap-6">
    <template
      v-for="(item, index) in steps"
      :key="item.id"
    >
      <li
        class="checkout-stepper__item d-flex items-center gap-3"
        :class="{
          'checkout-stepper__item--active': step === item.id,
          'checkout-stepper__item--completed': step > item.id,
        }"
      >
        <span class="checkout-stepper__number">
          {{ String(item.id).padStart(2, '0') }}.
        </span>

        <span class="checkout-stepper__title">
          {{ item.title }}
        </span>
      </li>

      <span
        v-if="index < steps.length - 1"
        class="checkout-stepper__separator"
      >
        »
      </span>
    </template>
  </ol>
</template>

<style scoped lang="scss">
  .checkout-stepper {
    list-style: none;

    &__item {
      color: var(--color-on-surface-dim);
      transition: color .2s;

      &--active {
        color: var(--color-on-surface);
      }

      &--completed {
        color: var(--color-primary);
      }
    }

    &__separator {
      color: var(--color-on-surface-dim);
    }
  }
</style>
