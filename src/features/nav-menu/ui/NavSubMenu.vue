<script setup lang="ts">
import type { MenuItem } from '../model/types.ts';

defineProps<{
  submenu: MenuItem[];
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="app-menu-item__submenu"
    >
      <ul
        class="app-menu-item__submenu-list"
        :aria-label="'Подменю'"
      >
        <li
          v-for="sub in submenu"
          :key="sub.id"
        >
          <RouterLink
            :to="sub.to"
            class="app-menu-item__submenu-link"
            @click="emit('close')"
          >
            {{ sub.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.app-menu-item__submenu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  padding: 8px 0;
  background-color: var(--color-surface-container-low);
  border-radius: 6px;
  z-index: var(--index-4);
  max-width: 90vw;
  overflow-x: auto;

  @media (max-width: 600px) {
    left: auto;
    right: 0;
  }

  &-list {
    display: flex;
    flex-direction: column;
  }

  &-link {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 8px 12px;
    color: var(--color-on-surface);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
