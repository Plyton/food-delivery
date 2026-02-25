<script setup lang="ts">
import { ref } from 'vue';
import {
  BaseButton,
  BaseRadio,
  BaseInputField,
  BaseSelectField,
  BaseCounter,
  BaseTextareaField
} from '@/shared/ui';

// import IconClose from '@/shared/components/Icons/IconClose.vue';

const text = ref('sasd');
const textarea = ref();
const count = ref(-1);
const checkbox1 = ref();
const select = ref();
const options = ref([
  { id: 1, name: 'food' },
  { id: 2, name: 'burger' },
  { id: 3, name: 'fish' },
]);
// function remote(value: string): Promise<{id: number, name: string}[]> {
//   config arr = [
//     { id: 1, name: 'food' },
//     { id: 2, name: 'burger' },
//     { id: 3, name: 'fish' },
//   ];
//   return new Promise(function(resolve, reject) {
//     config filter = arr.filter(val => val.name.includes(value));
//     if (filter) {
//       resolve(filter);
//     } else {
//       reject(new Error('error'));
//     }
//   });
// }
</script>

<template>
  <div class="pa-10 w-5">
    <BaseInputField
      v-model.uppercase="text"
      required
      label="Text"
    />

    <BaseSelectField
      v-model="select"
      :options="options"
      label="Text"
    />
    <BaseButton>
      кнопка
    </BaseButton>

    <BaseRadio
      v-model="checkbox1"
      value="checkbox1"
      class="mt-5"
      label="test"
    />
    <BaseRadio
      v-model="checkbox1"
      value="checkbox2"
      class="mt-5 mb-10"
      label="test"
    />
    <BaseCounter v-model="count" />
    <BaseTextareaField
      v-model="textarea"
      label="Textarea"
      maxlength="20"
    />
  </div>
</template>

<style scoped lang="scss"></style>
