<script setup lang="ts">
// todo в будущем сделать feature
import { shallowRef } from 'vue';
import type { MenuIcon } from '../model/types.ts';
import { IconSearch, IconUser, IconCard, BaseButton } from '@/shared/ui';

const menuIcons = shallowRef<MenuIcon[]>([
  { component: IconSearch, name: 'search' },
  { component: IconUser, name: 'user' },
  { component: IconCard, name: 'card' },
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
  </nav>
</template>
