<script lang="ts" setup>
import { APP_NAME } from '../../config';
</script>

<template>
  <router-link
    :to="{ name: 'Home' }"
    class="app-menu-logo text-4xl-bold cursor-pointer"
    aria-label="Главная страница"
  >
    {{ APP_NAME }}
  </router-link>
</template>

<style lang="scss" scoped>
  .app-menu-logo {
    color: var(--color-on-surface);
  }
</style>
