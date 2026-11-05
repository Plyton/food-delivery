<script setup lang="ts">
  import type { DeliveryType } from '../model/types';

  defineOptions({
    name: 'DeliveryTypeSwitcher',
  });

  const model = defineModel<DeliveryType>({
    required: true,
  });
</script>

<template>
  <div class="delivery-type">
    <label class="delivery-type__item">
      <input
        v-model="model"
        type="radio"
        value="delivery"
      >

      <span>Бесконтактная доставка</span>
    </label>

    <label class="delivery-type__item">
      <input
        v-model="model"
        type="radio"
        value="pickup"
      >

      <span>Самовывоз</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
  .delivery-type {
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
