<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { ref, useTemplateRef, type ComponentPublicInstance } from 'vue';
import type { SelectFieldProps } from './types.ts';
import type { Option } from '../../types';
import type { FieldEmits, FieldProps } from '../../types/Field.ts';
import { IconArrow, BaseButton, IconClose } from '@/shared/ui';
import BaseSelectFieldMultiple from './BaseSelectFieldMultiple.vue';
import BaseField from '../BaseField/BaseField.vue';
import { useDropdown } from './model/useDropdown.ts';
import { useMultipleSelect } from './model/useMultipleSelect.ts';
import { useSingleSelect } from './model/useSingleSelect.ts';

const props = withDefaults(defineProps<FieldProps & SelectFieldProps>(), {
  optionId: 'id',
  optionName: 'name',
  options: () => [],
  searchFn: () => Promise.resolve([]),
});

const emit = defineEmits<
  FieldEmits & {  select: [id: Array<number | string> | number | string];}
>();

const listTarget = ref<HTMLDivElement | null>(null);

const selectRef = useTemplateRef<ComponentPublicInstance>('select');

const modelValue = defineModel<Option>();
// для v-model:multiple-select обязательно передать массив и использовать multiple prop
const modelMultiple = defineModel<Option[]>('multiple-select', { default: [] });

const {
  checkMultipleSelect,
  handleMultipleSelect,
  handleUpdateClose
} = useMultipleSelect(
  props,
  emit as (event: string, ...args: unknown[]) => void,
  selectRef,
  modelMultiple
);

const {
  inputValue,
  localValue,
  remotelyOptions,
  localOptions,
  syncLocalFromModel,
  checkSelect,
  clearValue,
} = useSingleSelect(props, modelValue);

const {
  isOpen: isExpand,
  toggle: expand,
  open: handleFocus
} =  useDropdown(selectRef, props.disabled, syncLocalFromModel);

function handleSelect(option: Option): void {
  modelValue.value = option;
  localValue.value = option[props.optionName].toString();
  emit('select', option[props.optionId]);
  isExpand.value = !isExpand.value;
}

async function handleInput(evt: string): Promise<void> {
  if (!props.multiple) inputValue.value = evt;
  if (!inputValue.value) modelValue.value = undefined;
  if (props.remotely) remotelyOptions.value = await debouncedGetDataRemotely(evt);
  emit('input', evt);
}

const debouncedGetDataRemotely = useDebounceFn(props.searchFn, 450);
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
