<script setup lang="ts">
import { NavMenu, legalMenu } from '@/features';
import { BRAND_NAME } from '@/shared/const';
import FooterMenuContacts from './ui/FooterMenuContacts.vue';
import FooterMenuMain from './ui/FooterMenuMain.vue';

defineOptions({
  name: 'FooterMenu',
});
</script>

<template>
  <footer class="app-menu-footer d-flex flex-column gap-10">
    <div class="d-flex">
      <FooterMenuMain />
      <FooterMenuContacts />
    </div>

    <hr class="app-menu-footer__separator w-10">

    <div class="d-flex justify-between">
      <small class="text-sm">© 2020–2025, ООО «{{ BRAND_NAME }}», официальный сайт</small>
      <NavMenu
        :menu="legalMenu"
        appearance="footer"
        area-label="Юридическая информация"
      />
    </div>
  </footer>
</template>

<style scoped lang="scss">
 .app-menu-footer {
   padding: 40px 20px 20px;
   background-color: var(--color-on-primary);
   color: var(--color-on-surface);
   &__separator {
     height: 1px;
     background-color: var(--color-on-surface);
     opacity: 0.3;
   }
 }
</style>
