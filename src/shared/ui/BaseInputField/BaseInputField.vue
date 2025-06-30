<script setup lang="ts">
import type { FieldProps, FieldEmits } from '../BaseField/types.ts';
import BaseField from '../BaseField/BaseField.vue';

const props = withDefaults(defineProps<FieldProps>(), {
  type: 'text',
});
const emit = defineEmits<FieldEmits>();
const modelValue = defineModel<string>();

function handleInput(value: string): void {
  emit('update:modelValue', value);
}

function handleChange(value: string): void {
  emit('change', value);
}
</script>

<template>
  <BaseField
    v-bind="props"
    v-model="modelValue"
    @input="handleInput"
    @change="handleChange"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
    <template #default>
      <slot />
    </template>
    <template #append>
      <slot name="append" />
    </template>
  </BaseField>
</template>
