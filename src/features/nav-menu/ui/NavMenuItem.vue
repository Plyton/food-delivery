<script setup lang="ts">
import type { MenuItem } from '../model/types.ts';
import { IconArrow } from '@/shared/ui';
import NavSubMenu from './NavSubMenu.vue';

const props = defineProps<{
  item: MenuItem;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle', id: string): void;
}>();

function handleToggle() {
  emit('toggle', props.item.id);
}
</script>

<template>
  <li class="position-relative">
    <!-- Элемент без подменю -->
    <RouterLink
      v-if="!item.submenu"
      :to="item.to"
      class="app-menu-item__link app-menu-item__link--uppercase"
    >
      {{ item.label }}
    </RouterLink>
    <!-- Элемент с подменю -->
    <div
      v-else
      class="app-menu-item__link"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      @click="handleToggle"
    >
      <span>{{ item.label }}</span>
      <IconArrow
        class="app-menu-item__arrow"
        :class="{ 'app-menu-item__arrow--open': isOpen }"
      />
    </div>
    <!-- Подменю -->
    <NavSubMenu
      v-if="item.submenu"
      :submenu="item.submenu"
      :is-open="isOpen"
      @close="handleToggle"
    />
  </li>
</template>

<style lang="scss" scoped>
.app-menu-item__link {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 8px 12px;
  color: var(--color-on-surface);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);

    .app-menu-item__arrow {
      fill: var(--color-primary);
    }
  }
}

.app-menu-item__arrow {
  fill: var(--color-on-surface);
  transition: transform 0.3s ease, fill 0.3s ease;

  &--open {
    transform: rotate(180deg);
  }
}

.app-menu-item--footer {
  .app-menu-item__link {
    position: relative;
    padding: 0;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-color: var(--color-on-surface);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s ease;
    }

    &:hover {
      color: var(--color-on-surface);
      &::after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
