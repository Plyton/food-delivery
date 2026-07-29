<script setup lang="ts">
  import { Breadcrumbs } from '@/features';
  import { MainMenu, FooterMenu } from '@/widget';

  defineOptions({
    name: 'MainLayout',
  });
</script>

<template>
  <MainMenu />
  <main class="pa-10">
    <Breadcrumbs />
    <slot />
  </main>
  <FooterMenu />
</template>
