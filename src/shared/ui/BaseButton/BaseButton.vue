<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from './types.ts';

withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
});
const emit = defineEmits<ButtonEmits>();

function handleClick(evt: Event): void {
  emit('click', evt);
}
</script>

<template>
  <button
    class="df-button"
    :class="{
      default: type === 'default',
      outline: type === 'outline',
      icon: type === 'icon',
      'icon-fill': type === 'icon-fill',
    }"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <span class="df-button__content d-flex items-center">
      <slot name="prepend" />
      <span
        v-if="$slots.default"
        class="df-button__text text-sm-bold w-full"
      >
        <slot />
      </span>
      <slot name="append" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use 'sass:map';
$button_configuration: (
  // default
  button_default--background-color_normal: var(--color-primary),
  button_default--color_normal: var(--color-on-primary),
  button_default--background-color_hover: var(--color-on-primary-variant),
  button_default--color_hover: var(--color-on-primary),
  button_default--background-color_active: var(--color-on-primary),
  button_default--color_active: var(--color-primary),
  // outline
  button_outline--color_normal: var(--color-primary),
  button_outline--border_normal: 1px solid var(--color-primary),
  button_outline--color_hover: var(--color-on-primary-variant),
  button_outline--border_hover: 1px solid var(--color-on-primary-variant),
  button_outline--background-color_active: var(--color-primary),
  button_outline--color_active: var(--color-on-primary),
  // icon-fill
  button_icon-fill--background-color_normal: var(--color-primary),
  button_icon-fill--background-color_hover: var(--color-on-primary-variant),
  button_icon-fill--background-color_active: var(--color-on-primary)
);

@mixin setButtonValue($key) {
  @if map.has-key($button_configuration, #{$key}--background-color_normal) {
    background-color: map.get($button_configuration, #{$key}--background-color_normal);
  }
  @if map.has-key($button_configuration, #{$key}--color_normal) {
    color: map.get($button_configuration, #{$key}--color_normal);
  }
  @if map.has-key($button_configuration, #{$key}--border_normal) {
    border: map.get($button_configuration, #{$key}--border_normal);
  } @else {
    border: 1px solid transparent;
  }
  @if #{$key} == 'button_icon-fill' {
    padding: 8px;
    &:deep(svg) {
      fill: var(--color-on-primary);
    }
  }

  &:not(:disabled, .icon):hover {
    @if map.has-key($button_configuration, #{$key}--background-color_hover) {
      background-color: map.get($button_configuration, #{$key}--background-color_hover);
    }
    @if map.has-key($button_configuration, #{$key}--color_hover) {
      color: map.get($button_configuration, #{$key}--color_hover);
    }
    @if map.has-key($button_configuration, #{$key}--border_hover) {
      border: map.get($button_configuration, #{$key}--border_hover);
    }
  }

  &:not(:disabled, .icon):active {
    @if map.has-key($button_configuration, #{$key}--background-color_active) {
      background: map.get($button_configuration, #{$key}--background-color_active);
    }
    @if map.has-key($button_configuration, #{$key}--color_active) {
      color: map.get($button_configuration, #{$key}--color_active);
    }
    @if #{$key} == 'button_icon-fill' {
      &:deep(svg) {
        fill: var(--color-primary);
      }
    }
  }
}

.df-button {
  padding: 10px 18px;
  box-shadow: 0 10px 31px 0 rgba(15, 15, 17, 0.2);
  transition: 0.2s ease-in-out;

  &__text {
    text-transform: uppercase;
  }

  &[disabled] {
    color: var(--color-on-primary-disadled) !important;
    border: 1px solid var(--color-primary-disadled);
    opacity: 0.7;
    background-color: transparent;
    cursor: not-allowed;
  }

  &.icon {
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: transparent;
    &:deep(svg) {
      transition: filter 0.2s;
      &:hover {
        filter: brightness(150%);
        -webkit-filter: brightness(150%);
        -moz-filter: brightness(150%);
      }
    }
  }

  &.default {
    @include setButtonValue(button_default);
  }

  &.outline {
    @include setButtonValue(button_outline);
  }

  &.icon-fill {
    @include setButtonValue(button_icon-fill);
  }
}
</style>
