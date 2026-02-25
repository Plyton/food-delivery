<script setup lang="ts">
import { APP_TEL, SUPPORT_EMAIL } from '@/shared/config';
import { utils } from '@/shared/lib';

const telRaw: string = utils.formatPhoneToRaw(APP_TEL);
</script>

<template>
  <address class="app-menu-footer__contact gap-10 d-flex w-5 justify-end">
    <a
      :href="`tel:${telRaw}`"
      class="text-xl"
      aria-label="Позвонить по номеру"
    >
      {{ APP_TEL }}
    </a>
    <a
      :href="`mailto:${SUPPORT_EMAIL}`"
      class="text-sm"
      aria-label="Написать на email"
    >
      {{ SUPPORT_EMAIL }}
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
