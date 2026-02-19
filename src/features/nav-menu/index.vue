<script setup lang="ts">
import type { MenuItem } from './model/types.ts';
import { useMenu } from './hook/useMenu.ts';
import NavMenuItem from './ui/NavMenuItem.vue';

defineOptions({
  name: 'NavMenu',
});

const props = withDefaults(defineProps<{
  menu: MenuItem[];
  appearance?: 'default' | 'footer';
  areaLabel?: string;
}>(), {
  appearance: 'default',
  areaLabel: '',
  }
);

const { menuRef, toggle, isOpen } = useMenu<HTMLElement>();
</script>

<template>
  <nav
    ref="menuRef"
    class="app-menu-item text-sm"
    :class="{ 'app-menu-item--footer': appearance === 'footer' }"
    :aria-label="areaLabel"
  >
    <ul class="app-menu-item__list">
      <NavMenuItem
        v-for="item in props.menu"
        :key="item.id"
        :item="item"
        :is-open="isOpen(item.id)"
        @toggle="toggle"
      />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.app-menu-item {
  position: relative;

  &__list {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &--footer {
    .app-menu-item__list {
      gap: 30px;
    }
  }
}
</style>
