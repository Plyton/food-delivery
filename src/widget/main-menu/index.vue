<script setup lang="ts">
import { NavMenu, mainMenu } from '@/features';
import { BaseLogoMenu } from '@/shared/ui';
import MainMenuUser from './ui/MainMenuUser.vue';

defineOptions({
  name: 'MainMenu',
});
</script>

<template>
  <header class="app-menu d-flex justify-between items-center">
    <BaseLogoMenu />
    <NavMenu
      :menu="mainMenu"
      area-label="Главное меню"
    />
    <MainMenuUser />
  </header>
</template>

<style scoped lang="scss">
.app-menu {
  padding: 20px 40px;
  color: var(--color-on-surface);
  z-index: var(--index-6) !important;
}
</style>
