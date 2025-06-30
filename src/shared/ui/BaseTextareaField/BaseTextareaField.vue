<script lang="ts" setup>
import { useTemplateRef, watch } from 'vue';
import type { TextAreaProps } from './types.ts';
import type { FieldProps } from '../BaseField/types.ts';
import BaseField from '@/shared/ui/BaseField/BaseField.vue';

const modelValue = defineModel<string>();

const props = withDefaults(defineProps<TextAreaProps & FieldProps>(), {
  minHeight: '100',
  maxHeight: '200',
});

const textareaRef = useTemplateRef<HTMLTextAreaElement>('textarea');

watch(() => modelValue.value, (newValue) => {
  if (!newValue && textareaRef.value) textareaRef.value.style.height = 'auto';
});

function handleBlur(): void {
  if (textareaRef.value instanceof HTMLTextAreaElement) {
    textareaRef.value.scrollTo({top: 0, behavior: "smooth"});
  }
}

function handleInput(): void {
  if (textareaRef.value instanceof HTMLTextAreaElement) {
    textareaRef.value.style.height = 'auto';
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
  }
}
</script>

<template>
  <BaseField
    v-bind="props"
    :model-value="undefined"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>

    <textarea
      ref="textarea"
      v-bind="$attrs"
      v-model="modelValue"
      :style="{
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`,
      }"
      class="df-textarea__input text-sm"
      name="textarea"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      autocomplete="off"
      @input="handleInput"
      @blur="handleBlur"
    />

    <template #append>
      <slot name="append" />
    </template>
  </BaseField>
</template>

<style lang="scss" scoped>
.df-textarea {
  &__input {
    resize: none;
    padding-top: 5px;
  }
}
</style>
