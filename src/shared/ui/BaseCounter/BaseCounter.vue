<script setup lang="ts">
import { watch } from 'vue';
import type { CounterProps } from './types.ts';
import { BaseButton, IconMinus, IconPlus } from '@/shared/ui';

const props = defineProps<CounterProps>();
const modelValue = defineModel<number>({default: 0});

watch(modelValue, (newVal) => {
  if (newVal < 0) modelValue.value = 0;
},{ immediate: true, once: true });

function increment(): void {
  if(!props.max || modelValue.value < props.max) ++modelValue.value;
}

function decrement(): void {
  if (modelValue.value > (props.min ?? 0)) --modelValue.value;
}
</script>

<template>
  <div class="df-counter">
    <div class="df-counter__box-top">
      <BaseButton
        type="icon"
        :disabled="!!props.max && modelValue >= props.max"
        class="df-counter__box-top-icon"
        @click="increment"
      >
        <IconPlus />
      </BaseButton>
    </div>

    <div class="df-counter__count text-sm">
      {{ modelValue }} шт
    </div>

    <div class="df-counter__box-bottom">
      <BaseButton
        type="icon"
        :disabled="modelValue <= (props.min ?? 0)"
        class="df-counter__box-bottom-icon"
        @click="decrement"
      >
        <IconMinus />
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin counter-box($border-width) {
  height: 10px;
  border: solid var(--color-on-surface-dim);
  border-width: $border-width;
}

@mixin counter-icon($top, $horizontal-pos, $horizontal-value) {
  position: absolute;
  top: $top;
  #{$horizontal-pos}: $horizontal-value;
  transition: transform 0.2s;
  cursor: pointer;
}

.df-counter {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 20px;

  &__box-top {
    @include counter-box(1px 1px 0 1px);

    &-icon {
      @include counter-icon(13px, left, -5px);
    }
  }

  &__box-bottom {
    @include counter-box(0 1px 1px 1px);

    &-icon {
      @include counter-icon(9px, right, -5px);
    }
  }

  &__count {
    align-self: center;
    color: var(--color-on-surface);
  }
}
</style>
