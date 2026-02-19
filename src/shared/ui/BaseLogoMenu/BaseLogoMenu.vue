<script lang="ts" setup>
import { BRAND_NAME } from '../../const';
</script>

<template>
  <router-link
    :to="{ name: 'Home' }"
    class="app-menu-logo text-4xl-bold cursor-pointer"
    aria-label="Главная страница"
  >
    {{ BRAND_NAME }}
  </router-link>
</template>

<style lang="scss" scoped>
  .app-menu-logo {
    color: var(--color-on-surface);
  }
</style>
