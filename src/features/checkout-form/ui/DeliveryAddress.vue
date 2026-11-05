<script setup lang="ts">
  import type { DeliveryAddressForm } from '../model/types';
  import { BaseInputField, BaseTextareaField } from '@/shared/ui';

  defineOptions({
    name: 'DeliveryAddress',
  });

  const model = defineModel<DeliveryAddressForm>({
    required: true,
  });
</script>

<template>
  <div class="delivery-address">
    <BaseInputField
      v-model="model.street"
      label="Улица"
    />

    <div class="delivery-address__row">
      <BaseInputField
        v-model="model.house"
        label="Дом"
      />

      <BaseInputField
        v-model="model.apartment"
        label="Квартира"
      />
    </div>

    <BaseTextareaField
      v-model="model.comment"
      label="Комментарий"
      rows="4"
    />
  </div>
</template>

<style scoped lang="scss">
  .delivery-address {
    display: grid;
    gap: 24px;

    &__row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
  }
</style>
