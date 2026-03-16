<script setup lang="ts">
  import type { FieldProps, FieldEmits } from '../../types/Field';
  import { BaseButton, IconClose } from '@/shared/ui';
  import { useModifier, type Modifiers } from './useModifier.ts';

  defineProps<FieldProps>();
  const emit = defineEmits<FieldEmits>();
  const [modelValue, modelModifiers] = defineModel<string, Modifiers>({
    set(value) {
      return useModifier(value, modelModifiers);
    },
  });

  function handleInput(evt: Event): void {
    emit('input', (evt.target as HTMLInputElement).value);
  }

  function handleChange(evt: Event): void {
    emit('change', (evt.target as HTMLInputElement).value);
  }

  function handleFocus(evt: Event): void {
    emit('focus', evt);
  }

  function clearValue(): void {
    modelValue.value = '';
  }
</script>

<template>
  <div class="df-field d-flex items-center gap-4">
    <label
      v-if="label"
      class="df-field__label d-flex items-center text-sm text-clamped-2"
      :class="{ required }"
    >
      {{ label }}
    </label>

    <div
      class="df-field-container d-flex items-center flex-nowrap flex-1 w-full"
      :class="{ invalid: errorMessage }"
    >
      <div
        class="d-flex df-field-wrap w-full"
        :class="{ invalid: errorMessage, disabled }"
      >
        <div class="df-field__prepend d-flex items-center">
          <slot name="prepend" />
        </div>

        <div class="df-field__content w-full">
          <slot>
            <input
              v-model="modelValue"
              class="df-field__input text-sm"
              :disabled="disabled"
              :readonly="readonly"
              :type="type"
              :placeholder="placeholder"
              @input="handleInput"
              @change="handleChange"
              @focus="handleFocus"
            >
          </slot>
        </div>

        <div class="df-field__append d-flex items-center">
          <slot name="append">
            <BaseButton
              v-show="modelValue && !disabled"
              type="icon"
              @click.stop="clearValue"
            >
              <template #prepend>
                <IconClose />
              </template>
            </BaseButton>
          </slot>
        </div>

        <div class="df-field__error text-xs">
          {{ errorMessage }}
        </div>
      </div>
      <slot name="list" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .df-field {
    padding-bottom: 20px;
    &-container {
      position: relative;
    }

    &-wrap {
      position: relative;
      background-color: var(--color-on-surface);
      border: 2px solid transparent;
      transition: border-color ease-in-out 0.2s;

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
      }
    }

    &__content {
      padding: 0 5px;
    }

    &__input {
      height: 38px;
      width: 100%;
    }

    &__label {
      text-align: right;
      height: 100%;
      text-transform: uppercase;
      color: var(--color-on-surface-dim);
      pointer-events: none;
      white-space: nowrap;

      &.required::after {
        content: '*';
        display: inline-block;
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
      top: 40px;
      color: var(--color-error);
    }
  }
</style>
