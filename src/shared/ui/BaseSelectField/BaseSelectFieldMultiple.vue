<script setup lang="ts">
import { ref } from 'vue';
import type { Option, SelectFieldProps } from './types.ts';
import type { ChipEmits } from '../BaseChip/types.ts';
import type { FieldEmits, FieldProps } from '../BaseField/types.ts';
import { BaseButton, BaseChip } from '@/shared/ui';
import BaseField from '../BaseField/BaseField.vue';

withDefaults(
  defineProps<
    FieldProps &
      Pick<Required<SelectFieldProps>, 'optionId' | 'optionName'> & {
        modelMultiple?: Option[];
      }
  >(),
  {
    modelMultiple: () => [],
  },
);
const emit = defineEmits<FieldEmits & ChipEmits>();

const modelValue = defineModel<string>('search');
const selectMultipleWrapperRef = ref<HTMLDivElement | null>(null);

const handleInput = ($event: string): void => {
  modelValue.value = $event;
  emit('input', modelValue.value);
};

defineExpose({
  selectMultipleWrapperRef,
});
</script>

<template>
  <div class="df-select-multiple">
    <label
      v-if="label"
      class="df-select-multiple__label text-sm text-clamped-2"
      :class="{ required }"
    >
      {{ label }}
    </label>
    <div class="df-select-multiple__container">
      <div
        ref="selectMultipleWrapperRef"
        class="df-select-multiple__wrapper"
        :content="{disabled}"
        @click="$emit('focus', $event)"
      >
        <div class="df-select-multiple d-flex items-center">
          <slot name="prepend" />
        </div>

        <div
          class="d-flex df-select-multiple__content-wrapper w-full"
          :class="{ invalid: errorMessage, disabled }"
        >
          <div class="df-select-multiple__content">
            <transition-group name="scale">
              <BaseChip
                v-for="option in modelMultiple"
                :key="option[optionId]"
                :text="option[optionName]"
                :value="option[optionId]"
                :disabled="disabled"
                closable
                @update:close="$emit('update:close', $event)"
              />
            </transition-group>
          </div>

          <div class="df-select-multiple__append d-flex items-center">
            <BaseButton type="icon">
              <template #prepend>
                <slot name="append" />
              </template>
            </BaseButton>
          </div>
        </div>
        <BaseField
          v-model="modelValue"
          @input="handleInput"
        />
      </div>
      <div
        class="df-select-multiple__error text-xs"
        :class="{ label }"
      >
        {{ errorMessage }}
      </div>
      <slot name="list" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.df-select-multiple {
  display: flex;
  &__container {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
  }
  &__wrapper {
    position: relative;
    width: 100%;
    height: 42px;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE и Edge */
    &.disabled {
      overflow-y: hidden;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 5px;
    gap: 4px;
    background-color: white;
    &-wrapper {
      position: relative;
      background-color: var(--color-on-surface);
      border: 2px solid transparent;
      transition: border-color ease-in-out 0.2s;
      height: 42px;
      overflow-y: auto;
      padding: 5px 0;

      &:not(.disabled):hover {
        border: 2px solid var(--color-on-primary-variant);
      }

      &:not(.disabled):active {
        border: 2px solid var(--color-primary);
      }

      &.invalid {
        border: 2px solid var(--color-error);
      }

      &.disabled {
        color: var(--color-on-primary-disadled);
        border: 2px solid var(--color-primary-disadled);
        opacity: 0.8;
        cursor: not-allowed;
      }
    }
  }

  &__label {
    width: 125px;
    text-align: right;
    text-transform: uppercase;
    color: var(--color-on-surface-dim);
    pointer-events: none;
    padding-right: 20px;

    &.required::after {
      content: '*';
      display: inline-block;
      text-rendering: auto;
      line-height: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font: 500 14px/21px 'Material Design Icons';
      color: var(--color-primary);
    }
  }

  &__append {
    padding-right: 5px;
  }

  &__prepend {
    padding-left: 5px;
  }

  &__error {
    position: absolute;
    top: 41px;
    color: var(--color-error);
  }
}

:deep {
  .df-field-container {
    padding: 0;
    &__content {
      height: 39px;
    }
  }
}
</style>
