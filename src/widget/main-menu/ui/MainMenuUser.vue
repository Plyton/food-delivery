<script setup lang="ts">
  import { shallowRef } from 'vue';
  import type { MenuIcon } from '../model/types';
  import { CartButton } from '@/features';
  import { IconSearch, IconUser, BaseButton } from '@/shared/ui';

  const menuIcons = shallowRef<MenuIcon[]>([
    { component: IconSearch, name: 'search' },
    { component: IconUser, name: 'user' },
  ]);
</script>

<template>
  <nav class="app-menu-user d-flex gap-20">
    <BaseButton
      v-for="icon of menuIcons"
      :key="icon.name"
      type="icon"
    >
      <template #prepend>
        <component :is="icon.component" />
      </template>
    </BaseButton>

    <CartButton />
  </nav>
</template>
