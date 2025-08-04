<script setup lang="ts">
import { computed, type Component } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import MainLayout from '@/app/layouts/MainLayout.vue';

const layouts: Record<string, Component> = {
  main: MainLayout,
};

const route = useRoute();

const layout = computed<Component>(() => {
  const name = route.meta.layout as string;
  return layouts[name] || layouts.main;
});
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{ Component: RouteComponent }">
      <keep-alive>
        <component :is="RouteComponent" />
      </keep-alive>
    </router-view>
  </component>
</template>

<style lang="scss">
@use './styles/index.scss';
</style>
