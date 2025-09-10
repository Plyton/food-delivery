<script setup lang="ts">
import { MainMenu, FooterMenu } from '@/widget';

defineOptions({
  name: 'MainLayout'
});
</script>

<template>
  <MainMenu />
  <slot />
  <FooterMenu />
</template>
