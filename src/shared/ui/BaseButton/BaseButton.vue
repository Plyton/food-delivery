<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonEmits, ButtonProps } from './types.ts';
import { IconArrowLeft, IconArrowRight } from '../Icons';

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
});
const emit = defineEmits<ButtonEmits>();

const buttonClass = computed<Record<string, boolean>>(() => ({
  default: props.type === 'default',
  outline: props.type === 'outline',
  icon: props.type === 'icon',
  arrow: ['arrow-left', 'arrow-right'].includes(props.type),
  'icon-fill': props.type === 'icon-fill',
}));

function handleClick(evt: Event): void {
  emit('click', evt);
}
</script>

<template>
  <button
    class="df-button"
    :class="buttonClass"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <span class="df-button__content d-flex items-center">
      <slot name="prepend" />
      <IconArrowLeft v-if="type === 'arrow-left'" />
      <span
        v-if="$slots.default && !(type === 'arrow-right' || type === 'arrow-left')"
        class="df-button__text text-sm-bold w-full"
      >
        <slot />
      </span>
      <slot name="append" />
      <IconArrowRight v-if="type === 'arrow-right'" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/shared/assets/styles/buttons/_mixins.scss' as buttons;

.df-button {
  padding: 10px 18px;
  box-shadow: 0 10px 31px 0 rgba(15, 15, 17, 0.2);
  transition: 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &__text {
    text-transform: uppercase;
  }

  &.icon {
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: transparent;
    &:hover {
      :deep(svg) {
        transition: fill 0.2s;
        fill: var(--color-on-primary-variant);
      }
    }
  }

  &.arrow {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    @include buttons.setButtonValue(button_arrow);

    &:hover {
      :deep(svg) {
        transition: fill 0.2s;
        fill: var(--color-on-surface);
      }
    }
  }

  &.default {
    @include buttons.setButtonValue(button_default);
  }

  &.outline {
    @include buttons.setButtonValue(button_outline);
  }

  &.icon-fill {
    @include buttons.setButtonValue(button_icon-fill);
  }
}
</style>
