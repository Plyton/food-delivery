<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      Пустая страница
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/test">
          Test
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@use './styles/index.scss';
</style>
