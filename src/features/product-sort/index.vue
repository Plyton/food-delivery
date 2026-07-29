<script setup lang="ts">
  import type { ProductSortT } from './model/types';
  import type { Option } from '@/shared/types';
  import { BaseSelectField } from '@/shared/ui';

  defineOptions({
    name: 'ProductSort',
  });

  const modelValue = defineModel<ProductSortT>();

  const options: Option[] = [
    { id: 'default', name: 'По умолчанию' },
    { id: 'price-asc', name: 'По возрастанию цены' },
    { id: 'price-desc', name: 'По убыванию цены' },
    { id: 'name-asc', name: 'По алфавиту A–Я' },
    { id: 'name-desc', name: 'По алфавиту Я–A' },
  ];
</script>

<template>
  <BaseSelectField
    v-model="modelValue"
    :options="options"
    readonly
    label="Сортировать:"
    return-value="id"
    class="product-sort self-end"
  />
</template>

<style lang="scss" scoped>
  .product-sort {
    min-width: 320px;

    :deep(.df-field__input) {
      text-transform: uppercase;
      background-color: transparent;
      cursor: pointer;
      color: var(--color-on-surface);
    }

    :deep(.df-field__content) {
      padding: 0;
    }

    :deep(.df-field-wrap) {
      background-color: transparent;
      border: none;

      &:hover {
        border: none !important;
      }
    }

    :deep(.df-select__icon) {
      fill: var(--color-on-surface);
      &:hover {
        fill: var(--color-on-surface) !important;
      }
    }
  }
</style>
