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
// import IconClose from '@/shared/ui/Icons/IconClose.vue';

const text = ref('sasd');
const textarea = ref();
const count = ref(-1);
const checkbox1 = ref();
const select = ref([{ id: 1, name: 'food' }]);
const options = ref([
  { id: 1, name: 'food' },
  { id: 2, name: 'burger' },
  { id: 3, name: 'fish' },
  { id: 4, name: 'fish' },
  { id: 5, name: 'fish' },
  { id: 6, name: 'fish' },
  { id: 7, name: 'fish' },
  { id: 8, name: 'fish' },
  { id: 9, name: 'fish' },
  { id: 10, name: 'fish' },
  { id: 11, name: 'fish' },
  { id: 12, name: 'fish' },
  { id: 13, name: 'fish' },
  { id: 14, name: 'fish' },
  { id: 15, name: 'fish' },
  { id: 16, name: 'fish' },
  { id: 17, name: 'fish' },
  { id: 18, name: 'fish' },
  { id: 19, name: 'fish' },
  { id: 20, name: 'fish' },
  { id: 21, name: 'fish' },
]);
// function remote(value: string): Promise<{id: number, name: string}[]> {
//   const arr = [
//     { id: 1, name: 'food' },
//     { id: 2, name: 'burger' },
//     { id: 3, name: 'fish' },
//   ];
//   return new Promise(function(resolve, reject) {
//     const filter = arr.filter(val => val.name.includes(value));
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
      v-model:multiple-select="select"
      multiple
      :options="options"
      label="Text"
    />
    <BaseButton
      type="arrow-right"
    >
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
