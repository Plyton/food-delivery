<script setup lang="ts">
import type { RadioBoxState } from './types';

defineProps<RadioBoxState>();
const modelValue = defineModel<unknown>();
</script>

<template>
  <label
    class="df-radio"
    :class="{ disabled }"
  >
    <input
      v-model="modelValue"
      class="df-radio__input"
      :value="value"
      :disabled="disabled"
      type="radio"
    >
    <slot name="label">
      <span class="df-radio__label">{{ label }}</span>
    </slot>
    <span class="df-radio__marker" />
  </label>
</template>

<style scoped lang="scss">
@mixin size($size: 25px) {
  width: $size;
  height: $size;
}

.df-radio {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  @include size();

  &.disabled {
    opacity: 0.6;
  }

  &__label {
    color: var(--color-on-surface-dim);
  }

  &__input {
    opacity: 0;
    height: 0;
    width: 0;

    &:not([disabled]):hover {
      & ~ .df-radio__marker {
        border: 1px solid var(--color-on-primary-variant);
        &:after {
        background-color: var(--color-on-primary-variant);
        }
      }
    }

    &:checked {
      & ~ .df-radio__marker:after {
        opacity: 1;
      }
    }
  }

  &__marker {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid var(--color-primary);
    border-radius: 20px;
    @include size();

    &:after {
      content: "";
      opacity: 0;
      position: absolute;
      inset: 3px;
      border: 1px solid transparent;
      border-radius: 20px;
      background-color: var(--color-primary);
      transition: opacity .25s ease-in-out;
    }
  }
}
</style>
