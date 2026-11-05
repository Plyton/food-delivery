<script setup lang="ts">
  import type { DeliveryForm } from '../model/types';

  import CheckoutStep from './CheckoutStep.vue';
  import DeliveryAddress from './DeliveryAddress.vue';
  import DeliveryTypeSwitcher from './DeliveryTypeSwitcher.vue';

  defineOptions({
    name: 'DeliveryStep',
  });

  const model = defineModel<DeliveryForm>({
    required: true,
  });
</script>

<template>
  <CheckoutStep
    title="Способ доставки"
    description="Выберите удобный способ получения заказа."
  >
    <DeliveryTypeSwitcher
      v-model="model.type"
    />

    <DeliveryAddress
      v-if="model.type === 'delivery'"
      v-model="model.address"
    />

    <div
      v-else
      class="pickup-placeholder"
    >
      Здесь позже появится выбор ресторана для самовывоза.
    </div>
  </CheckoutStep>
</template>

<style scoped>
  .pickup-placeholder {
    padding: 24px;

    border: 1px dashed var(--color-primary);
    border-radius: 12px;
  }
</style>
