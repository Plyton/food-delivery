<script setup lang="ts">
const telRaw: string = '+79991234567';
const tel: string = '+7 (999) 123-45-67';
const email: string = 'info@example.com';
</script>

<template>
  <address class="app-menu-footer__contact gap-10 d-flex w-5 justify-end">
    <a
      :href="`tel:${telRaw}`"
      class="text-xl"
      aria-label="Позвонить по номеру"
    >
      {{ tel }}
    </a>
    <a
      :href="`mailto:${email}`"
      class="text-sm"
      aria-label="Написать на email"
    >
      {{ email }}
    </a>
  </address>
</template>

<style scoped lang="scss">
 .app-menu-footer__contact {
   & > a {
     color: var(--color-on-surface);
   }
 }
</style>
