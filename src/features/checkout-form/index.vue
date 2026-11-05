<script setup lang="ts">
  import { useCheckoutForm } from './model/useCheckoutForm';

  import CheckoutActions from './ui/CheckoutActions.vue';
  import CheckoutStepper from './ui/CheckoutStepper.vue';
  import CheckoutStepView from './ui/CheckoutStepView.vue';

  defineOptions({
    name: 'CheckoutForm',
  });

  const {
    step,
    form,

    next,
    back,
    submit,

    isFirstStep,
    isLastStep,
    remainingSteps,
  } = useCheckoutForm();
</script>

<template>
  <div class="checkout-form w-5">
    <CheckoutStepper
      :step="step"
    />

    <CheckoutStepView
      v-model="form"
      :step="step"
    />

    <CheckoutActions
      :is-first-step="isFirstStep"
      :is-last-step="isLastStep"
      :remaining-steps="remainingSteps"
      @back="back"
      @next="next"
      @submit="submit"
    />
  </div>
</template>

<style scoped lang="scss">
  .checkout-form {
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    gap: 48px;
  }
</style>
