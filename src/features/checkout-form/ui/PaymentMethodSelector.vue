<script setup lang="ts">
  import type { PaymentType } from '../model/types';

  defineOptions({
    name: 'PaymentMethodSelector',
  });

  const model = defineModel<PaymentType>({
    required: true,
  });

  const methods = [
    {
      value: 'online',
      title: 'Банковской картой',
    },
    {
      value: 'cash',
      title: 'Наличными',
    },
    {
      value: 'card',
      title: 'Картой курьеру',
    },
  ] as const;
</script>

<template>
  <div class="payment-methods">
    <label
      v-for="method in methods"
      :key="method.value"
      class="payment-methods__item"
    >
      <input
        v-model="model"
        type="radio"
        :value="method.value"
      >

      <span>
        {{ method.title }}
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
  .payment-methods {
    display: grid;
    gap: 16px;

    &__item {
      display: flex;
      align-items: center;
      gap: 12px;

      cursor: pointer;
    }
  }
</style>
