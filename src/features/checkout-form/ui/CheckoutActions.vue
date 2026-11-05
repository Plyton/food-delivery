<script setup lang="ts">
  defineOptions({
    name: 'CheckoutActions',
  });

  defineProps<{
    isFirstStep: boolean;
    isLastStep: boolean;
    remainingSteps: number;
  }>();

  const emit = defineEmits<{
    back: [];
    next: [];
    submit: [];
  }>();
</script>

<template>
  <footer class="checkout-actions">
    <button
      v-if="!isFirstStep"
      type="button"
      @click="emit('back')"
    >
      Назад
    </button>

    <button
      v-if="!isLastStep"
      type="button"
      @click="emit('next')"
    >
      Продолжить
    </button>

    <button
      v-else
      type="button"
      @click="emit('submit')"
    >
      Подтвердить заказ
    </button>

    <small v-if="remainingSteps">
      Осталось ещё {{ remainingSteps }} шага
    </small>
  </footer>
</template>

<style scoped lang="scss">
  .checkout-actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }
</style>
