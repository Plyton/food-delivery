<script setup lang="ts">
  import type { CheckoutFormModel, CheckoutStep } from '../model/types';

  import ContactStep from './ContactStep.vue';
  import DeliveryStep from './DeliveryStep.vue';
  import PaymentStep from './PaymentStep.vue';

  defineOptions({
    name: 'CheckoutStepView',
  });

  defineProps<{
    step: CheckoutStep;
  }>();

  const form = defineModel<CheckoutFormModel>({
    required: true,
  });
</script>

<template>
  <Transition
    mode="out-in"
    name="fade"
  >
    <ContactStep
      v-if="step === 1"
      :key="1"
      v-model="form.contact"
    />

    <DeliveryStep
      v-else-if="step === 2"
      :key="2"
      v-model="form.delivery"
    />

    <PaymentStep
      v-else
      :key="3"
      v-model="form.payment"
    />
  </Transition>
</template>
