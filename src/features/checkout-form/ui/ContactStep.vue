<script setup lang="ts">
  import type { ContactForm } from '../model/types';

  import { BaseInputField } from '@/shared/ui';
  import CheckoutStep from './CheckoutStep.vue';

  defineOptions({
    name: 'ContactStep',
  });

  const model = defineModel<ContactForm>({
    required: true,
  });
</script>

<template>
  <CheckoutStep
    title="Уже покупали у нас?"
    description="Войдите в личный кабинет, и все ваши данный автоматически заполнятся"
  >
    <BaseInputField
      v-model="model.name"
      label="Имя"
      required
    />

    <BaseInputField
      v-model="model.phone"
      label="Телефон"
    />

    <BaseInputField
      v-model="model.email"
      label="E-mail"
    />

    <BaseInputField
      v-model.number="model.persons"
      type="number"
      min="1"
      label="Количество персон"
    />
  </CheckoutStep>
</template>
