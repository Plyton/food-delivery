<script setup lang="ts">
import { NavMenu, footerMenu } from '@/features';
import { BaseLogoMenu } from '@/shared/ui';
</script>

<template>
  <section class="d-flex justify-between w-5">
    <BaseLogoMenu />
    <NavMenu
      :menu="footerMenu"
      appearance="footer"
      area-label="Дополнительная информация"
    />
  </section>
</template>
