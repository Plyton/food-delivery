<script setup lang="ts">
import { ref } from 'vue';
import type { Option, SelectFieldProps } from './types.ts';
import type { FieldEmits, FieldProps } from '@/shared/types/FieldType.ts';
import { BaseButton, BaseChip } from '@/shared/ui';
import type { ChipEmits } from '@/shared/ui/BaseChip/types.ts';
import BaseField from '@/shared/ui/BaseField/BaseField.vue';

withDefaults(
  defineProps<
    FieldProps &
      Omit<Required<SelectFieldProps>, 'options'> & {
        modelMultiple?: Option[];
      }
  >(),
  {
    modelMultiple: () => [],
  },
);
defineEmits<FieldEmits & ChipEmits>();

const modelValue = defineModel<string>('search');
const selectMultipleWrapperRef = ref<HTMLDivElement | null>(null);

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
    <div
      ref="selectMultipleWrapperRef"
      class="df-select-multiple__wrapper disabled"
      @click="$emit('focus', $event)"
    >
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
          <BaseButton type="icon">
            <template #prepend>
              <slot name="prepend" />
            </template>
          </BaseButton>
        </div>
      </div>
      <BaseField
        v-model="modelValue"
        @input="modelValue = $event"
      />
    </div>
    <div
      class="df-select-multiple__error text-xs"
      :class="{ label }"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.df-select-multiple {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  &__wrapper {
    position: relative;
    width: 100%;
    height: 45px;
    overflow-y: auto;
    border: 2px solid transparent;
    margin: 0 -2px;
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

  &__error {
    position: absolute;
    top: 41px;
    color: var(--color-error);
    &.label {
      left: 117px;
    }
  }
}

:deep {
  .df-field {
    padding: 0;
    &__content {
      height: 39px;
    }
  }
}
</style>
