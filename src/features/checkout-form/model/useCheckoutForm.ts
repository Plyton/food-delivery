import { computed, reactive, ref } from 'vue';

import type {
  CheckoutFormModel,
  CheckoutStep,
} from './types';
import { CHECKOUT_STEPS } from './constants';

export const useCheckoutForm = () => {
  const step = ref<CheckoutStep>(1);

  const form = reactive<CheckoutFormModel>({
    contact: {
      name: '',
      phone: '',
      email: '',
      persons: 1,
    },

    delivery: {
      type: 'delivery',

      address: {
        street: '',
        house: '',
        apartment: '',
        entrance: '',
        floor: '',
        intercom: '',
        comment: '',
      },
    },

    payment: {
      type: 'online',
    },
  });

  const isFirstStep = computed(() => step.value === 1);

  const isLastStep = computed(
    () => step.value === CHECKOUT_STEPS.length,
  );

  const remainingSteps = computed(
    () => CHECKOUT_STEPS.length - step.value,
  );

  const next = (): void => {
    if (!isLastStep.value) {
      step.value++;
    }
  };

  const back = (): void => {
    if (!isFirstStep.value) {
      step.value--;
    }
  };

  const goTo = (value: CheckoutStep): void => {
    step.value = value;
  };

  const submit = (): void => {
    console.log(form);

    // TODO:
    // await api.createOrder(form)
  };

  return {
    step,
    form,

    isFirstStep,
    isLastStep,
    remainingSteps,

    next,
    back,
    goTo,
    submit,
  };
};
