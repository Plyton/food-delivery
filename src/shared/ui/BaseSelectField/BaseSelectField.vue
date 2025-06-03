<script setup lang="ts">
import { onClickOutside, useDebounceFn } from '@vueuse/core';
import { ref, computed, useTemplateRef, type ComponentPublicInstance, watch } from 'vue';
import type { Option, SelectFieldProps } from './types.ts';
import type { FieldEmits, FieldProps } from '../BaseField/types.ts';
import { useMultipleSelect } from '@/shared/lib/hooks/useMultipleSelect.ts';
import { IconArrow, BaseButton, IconClose } from '@/shared/ui';
import BaseSelectFieldMultiple from './BaseSelectFieldMultiple.vue';
import BaseField from '../BaseField/BaseField.vue';

const props = withDefaults(defineProps<FieldProps & SelectFieldProps>(), {
  optionId: 'id',
  optionName: 'name',
  options: () => [],
  searchFn: () => Promise.resolve([]),
});

const emit = defineEmits<
  FieldEmits & {
    select: [id: Array<number | string> | number | string];
  }
>();

const isExpand = ref<boolean>(false);
const inputValue = ref<string>('');
const localValue = ref<string>('');
const remotelyOptions = ref<Option[]>([]);
const listTarget = ref<HTMLDivElement | null>(null);

const selectRef = useTemplateRef<ComponentPublicInstance>('select');

const modelValue = defineModel<Option>();
const modelMultiple = defineModel<Option[]>('multiple-select', { default: [] });

const {
  checkMultipleSelect,
  handleMultipleSelect,
  handleUpdateClose
}: ReturnType<typeof useMultipleSelect> = useMultipleSelect(
  props,
  emit as (event: string, ...args: unknown[]) => void,
  selectRef,
  modelMultiple
);

const localOptions = computed<Option[]>(() => {
  return !props.remotely
    ? props.options.filter((option: Option) => {
      const optionName: keyof Option = option[props.optionName];
      return optionName?.toString().toLowerCase().indexOf(inputValue.value.toLowerCase()) >= 0;
    })
    : remotelyOptions.value;
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

function checkSelect(option: Option): boolean {
  if (!modelValue.value || typeof modelValue.value !== 'object') return false;
  return modelValue.value[props.optionId] === option[props.optionId];
}

function handleSelect(option: Option): void {
  modelValue.value = option;
  localValue.value = option[props.optionName].toString();
  emit('select', option[props.optionId]);
}

async function handleInput(evt: string): Promise<void> {
  if (!props.multiple) inputValue.value = evt;
  if (!inputValue.value) modelValue.value = undefined;
  if (props.remotely) remotelyOptions.value = await debouncedGetDataRemotely(evt);
  emit('input', evt);
}

function handleFocus(): void {
  if (!props.disabled) isExpand.value = true;
}

function clearValue(): void {
  inputValue.value = '';
  localValue.value = '';
  modelValue.value = undefined;
}

function syncLocalFromModel(): void {
  isExpand.value = false;
  inputValue.value = '';
  localValue.value = typeof modelValue.value === 'object' && localValue.value && !props.disabled
      ? modelValue.value[props.optionName].toString()
      : '';
}

function expand(): void {
  if (!props.disabled) {
    isExpand.value = !isExpand.value;
    syncLocalFromModel();
  }
}

const debouncedGetDataRemotely = useDebounceFn(props.searchFn, 450);

onClickOutside(selectRef, () => {
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
        <slot name="prepend" />
      </template>
      <template #append>
        <slot name="append" />
        <IconArrow
          :class="['df-select__icon', { rotate: isExpand, multiple, disabled }]"
          @click.stop="expand"
        />
      </template>
      <template #list>
        <div
          ref="listTarget"
          class="list"
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
      <template #prepend>
        <slot name="prepend" />
      </template>
      <template #append>
        <slot name="append" />
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
      <template #list>
        <div
          ref="listTarget"
          class="list"
        />
      </template>
    </BaseField>

    <teleport
      v-if="listTarget"
      :to="listTarget"
    >
      <transition name="fade">
        <div
          v-if="isExpand"
          :class="['df-select-list', { invalid: errorMessage }]"
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
    </teleport>
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
      &:hover {
        background-color: var(--color-primary);
      }
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
