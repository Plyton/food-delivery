<script setup lang="ts">
import type { FieldProps, FieldEmits } from './types.ts';
import { BaseButton, IconClose } from '@/shared/ui';
import { useModifier, type Modifiers } from '../../lib/hooks/useModifier.ts';

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
  <div class="df-field">
    <label
      v-if="label"
      class="df-field__label text-sm text-clamped-2"
      :class="{ required }"
    >
      {{ label }}
    </label>
    <div
      class="df-field-container d-flex"
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
 display: flex;
  &-container {
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    padding-bottom: 20px;
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
    top: 38px;
    color: var(--color-error);
  }
}
</style>
