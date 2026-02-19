<script setup lang="ts">
import type { ChipEmits, ChipProps } from './types.ts';
defineProps<ChipProps>();
defineEmits<ChipEmits>();
</script>

<template>
  <div
    class="df-chip text-sm d-flex items-center"
    :class="{ active: isActive, disabled }"
  >
    {{ text }}
    <button
      v-if="closable"
      type="button"
      :disabled="disabled"
      class="df-chip__close"
      @click.stop.prevent="$emit('update:close', value)"
    >
      <span>×</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.df-chip {
  padding: 4px 10px;
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  border-radius: 100px;
  //white-space: nowrap;
  cursor: pointer;

  &.active {
    background-color: var(--color-on-primary-variant);
  }
  &.disabled {
    color: var(--color-on-primary-disadled);
    cursor: not-allowed;
  }

  &__close {
    position: relative;
    border-radius: 100%;
    padding: 0 5px;
    color: var(--color-text);
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:not(:disabled):hover {
      transform: scale(1.1);
    }
    &:disabled {
      cursor: not-allowed;
    }
    & > span {
      position: absolute;
      top: -10px;
    }
  }
}
</style>
