<script setup lang="ts">
import { NavMenu } from '@/features';
import LogoMenu from './ui/LogoMenu.vue';
import UserMenu from './ui/UserMenu.vue';

defineOptions({
  name: 'MainMenu',
});
</script>

<template>
  <header class="app-menu d-flex justify-between items-center">
    <LogoMenu />
    <NavMenu />
    <UserMenu />
  </header>
</template>

<style scoped lang="scss">
.app-menu {
  padding: 40px;
  color: var(--color-on-surface);
}
</style>
