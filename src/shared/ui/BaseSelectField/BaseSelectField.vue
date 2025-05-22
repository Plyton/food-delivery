<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref, computed, useTemplateRef, type ComponentPublicInstance, watch } from 'vue';
import type { Option, SelectFieldProps } from './types.ts';
import type { FieldEmits, FieldProps } from '@/shared/types/FieldType.ts';
import { IconArrow, BaseButton, IconClose } from '@/shared/ui';
import BaseField from '@/shared/ui/BaseField/BaseField.vue';
import BaseSelectFieldMultiple from './BaseSelectFieldMultiple.vue';

const props = withDefaults(defineProps<FieldProps & SelectFieldProps>(), {
  optionId: 'id',
  optionName: 'name',
  options: () => [],
});

const emit = defineEmits<
  FieldEmits & {
    select: [id: Array<number | string> | number | string];
  }
>();

const isExpand = ref<boolean>(false);
const inputValue = ref<string>('');
const localValue = ref<string>('');

const selectRef = useTemplateRef<ComponentPublicInstance>('select');

const modelValue = defineModel<Option>();
const modelMultiple = defineModel<Option[]>('multiple-select', { default: [] });

const localOptions = computed<Option[]>(() => {
  return props.options.filter((option: Option) => {
    const optionName: keyof Option = option[props.optionName];
    return optionName?.toString().toLowerCase().indexOf(inputValue.value.toLowerCase()) >= 0;
  });
});

watch(
  () => modelValue.value,
  () => {
    if (modelValue.value && typeof modelValue.value === 'object') {
      localValue.value = modelValue.value[props.optionName].toString();
    }
  },
  { immediate: true, once: true },
);

function checkSelect(option: Option) {
  if (!modelValue.value || typeof modelValue.value !== 'object') return false;
  return modelValue.value[props.optionId] === option[props.optionId];
}

function checkMultipleSelect(option: Option) {
  if (!modelMultiple.value.length) return false;
  return modelMultiple.value.some((val: Option) => val[props.optionId] === option[props.optionId]);
}

function handleUpdateClose(id: string | number) {
  if (props.disabled) return;
  const ind = modelMultiple.value.findIndex((option) => option[props.optionId] === id);
  modelMultiple.value.splice(ind, 1);
}

function handleSelect(option: Option) {
  modelValue.value = option;
  localValue.value = option[props.optionName].toString();
  emit('select', option[props.optionId]);
}

function handleMultipleSelect(option: Option) {
  const findOption = modelMultiple.value.find(
    (val) => val[props.optionId] === option[props.optionId],
  );
  if (!findOption) modelMultiple.value.push(option);
  const selectContainerEl = selectRef.value as ComponentPublicInstance<
    typeof BaseSelectFieldMultiple
  >;
  selectContainerEl.selectMultipleWrapperRef.scrollTo({ top: 0, behavior: 'smooth' });
  emit(
    'select',
    modelMultiple.value.map((val) => val[props.optionId]),
  );
}

function handleInput(evt: string) {
  inputValue.value = evt;
  inputValue.value = evt;
  if (!inputValue.value) modelValue.value = undefined;
  emit('input', evt);
}

function handleFocus() {
  if (!props.disabled) isExpand.value = true;
}

function clearValue() {
  inputValue.value = '';
  localValue.value = '';
  modelValue.value = undefined;
}

function syncLocalFromModel() {
  inputValue.value = '';
  localValue.value =
    typeof modelValue.value === 'object' && localValue.value && !props.disabled
      ? modelValue.value[props.optionName].toString()
      : '';
}

function expand() {
  if (!props.disabled) {
    isExpand.value = !isExpand.value;
    syncLocalFromModel();
  }
}

onClickOutside(selectRef, () => {
  isExpand.value = false;
  syncLocalFromModel();
});
</script>

<template>
  <div class="df-select">
    <BaseSelectFieldMultiple
      v-if="multiple"
      ref="select"
      v-model:search="inputValue"
      v-bind="props"
      :model-multiple="modelMultiple"
      @focus="handleFocus"
      @input="handleInput"
      @update:close="handleUpdateClose"
    >
      <template #prepend>
        <IconArrow
          :class="['df-select__icon', { rotate: isExpand, multiple, disabled }]"
          @click.stop="expand"
        />
      </template>
    </BaseSelectFieldMultiple>

    <BaseField
      v-else
      v-bind="props"
      ref="select"
      v-model="localValue"
      @input="handleInput"
      @focus="handleFocus"
    >
      <template #append>
        <BaseButton
          type="icon"
          :disabled="disabled"
          @click.stop="expand"
        >
          <template #prepend>
            <IconClose
              v-show="inputValue"
              @click.stop="clearValue"
            />
            <IconArrow :class="['df-select__icon', { rotate: isExpand, disabled }]" />
          </template>
        </BaseButton>
      </template>
    </BaseField>

    <transition name="fade">
      <div
        v-if="isExpand"
        :class="['df-select-list', { label, invalid: errorMessage }]"
      >
        <div
          v-for="option in localOptions"
          :key="option[optionId]"
          :class="{
            'df-select__option': true,
            selected: multiple ? checkMultipleSelect(option) : checkSelect(option),
          }"
          @click.stop.prevent="!multiple ? handleSelect(option) : handleMultipleSelect(option)"
        >
          <slot
            name="option"
            :value="option"
          >
            {{ option[optionName] }}
          </slot>
        </div>
        <div
          v-if="localOptions.length === 0"
          class="df-select__empty pa-8"
        >
          Нет результатов
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.df-select {
  position: relative;
  &-list {
    overflow: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 42px;
    background-color: var(--color-on-surface);
    border: 1px solid var(--color-primary);
    z-index: var(--index-2);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    max-height: 250px;
    &.label {
      margin-left: 117px;
    }
    &.invalid {
      border: 2px solid var(--color-error);
    }
  }

  &__option {
    padding: 14px;
    cursor: pointer;
    color: var(--color-base-text);
    transition: background-color 0.25s;
    white-space: normal;

    &:hover,
    &.selected {
      background-color: var(--color-on-primary-variant);
      color: var(--color-on-primary);
    }
  }

  &__empty {
    color: var(--color-error);
    text-align: center;
  }

  &__icon {
    transition: transform 0.25s ease-in-out !important;
    &.rotate {
      transform: rotate(180deg);
    }
    &.multiple {
      position: absolute;
      right: 5px;
    }
    &.disabled {
      cursor: not-allowed;
    }
  }
}
</style>
