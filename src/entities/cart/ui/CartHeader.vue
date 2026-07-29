<script setup lang="ts">
  const columns = [
    { key: 'image', label: '' },
    { key: 'title', label: 'Блюдо' },
    { key: 'price', label: 'Цена' },
    { key: 'quantity', label: 'Кол-во' },
    { key: 'total', label: 'Сумма' },
  ] as const;
</script>

<template>
  <div
    class="cart-header text-sm"
    aria-hidden="true"
  >
    <div
      v-for="column in columns"
      :key="column.key"
    >
      {{ column.label }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cart-header {
    display: grid;
    grid-template:  40px / minmax(180px, 180px) 3fr repeat(4, 1fr);
    grid-column-gap: 70px;
    align-items: center;
    color: var(--color-on-surface-dim);
  }
</style>
