<script setup lang="ts">
  import type { PaymentForm } from '../model/types';

  import CheckoutStep from './CheckoutStep.vue';
  import PaymentMethodSelector from './PaymentMethodSelector.vue';

  defineOptions({
    name: 'PaymentStep',
  });

  const model = defineModel<PaymentForm>({
    required: true,
  });
</script>

<template>
  <CheckoutStep
    title="Способ оплаты"
    description="Выберите удобный способ оплаты."
  >
    <PaymentMethodSelector
      v-model="model.type"
    />
  </CheckoutStep>
</template>
