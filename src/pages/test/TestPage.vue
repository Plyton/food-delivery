<script setup lang="ts">
import { ref } from 'vue';
import { BaseButton, BaseInputField, BaseSelectField } from '@/shared/ui';
// import IconClose from '@/shared/ui/Icons/IconClose.vue';

const text = ref('sasd');
const select = ref({ id: 1, name: 'food' });
const options = ref([
  { id: 1, name: 'food' },
  { id: 2, name: 'burger' },
  { id: 3, name: 'fish' },
]);
</script>

<template>
  <div class="pa-10">
    <BaseInputField
      v-model.uppercase="text"
      required
      disabled
      label="Text"
      error-message="error"
    />

    <BaseSelectField
      v-model="select"
      :options="options"
    />

    <BaseButton disabled>
      кнопка
    </BaseButton>
  </div>
</template>

<style scoped lang="scss"></style>
