<template>
  <router-link
    :to="{ name: 'Home' }"
    class="app-menu-logo text-4xl-bold cursor-pointer"
    aria-label="Go to homepage"
  >
    FORBAS
  </router-link>
</template>

<style lang="scss" scoped>
  .app-menu-logo {
    color: var(--color-on-surface);
  }
</style>
