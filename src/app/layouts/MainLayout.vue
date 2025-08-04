<script setup lang="ts">
import { MainMenu } from '@/widget';

defineOptions({
  name: 'MainLayout'
});
</script>

<template>
  <MainMenu />
  <main><slot /></main>
  <footer>Футер</footer>
</template>

<style scoped lang="scss">

</style>
