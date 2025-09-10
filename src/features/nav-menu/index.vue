<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';
import type { MenuItem } from '@/features';
import { IconArrow } from '@/shared/ui';

defineOptions({
  name: "NavMenu",
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

const openMenuId = ref<string | null>(null);
const menuRef = useTemplateRef<HTMLElement>('menu');

function toggle(id: string) {
  openMenuId.value = openMenuId.value === id ? null : id;
}

function isOpen(id: string) {
  return openMenuId.value === id;
}

onClickOutside(menuRef, () => {
  openMenuId.value = null;
});
</script>

<template>
  <nav
    ref="menu"
    class="app-menu-item text-sm"
    :class="{'app-menu-item--footer': appearance === 'footer'}"
    :aria-label="areaLabel"
  >
    <ul class="app-menu-item__list">
      <li
        v-for="item in props.menu"
        :key="item.id"
        class="position-relative"
      >
        <!-- Элемент без подменю -->
        <RouterLink
          v-if="!item.submenu"
          :to="item.to"
          class="app-menu-item__link app-menu-item__link--uppercase;"
        >
          {{ item.label }}
        </RouterLink>
        <!-- Элемент с подменю -->
        <div
          v-else
          class="app-menu-item__link"
          aria-haspopup="true"
          :aria-expanded="isOpen(item.id)"
          @click="toggle(item.id)"
        >
          <span>{{ item.label }}</span>
          <IconArrow
            class="app-menu-item__arrow"
            :class="{ 'app-menu-item__arrow--open': isOpen(item.id) }"
          />
        </div>

        <transition name="fade">
          <div
            v-if="isOpen(item.id) && item.submenu"
            class="app-menu-item__submenu"
          >
            <ul
              class="app-menu-item__submenu-list"
              :aria-label="`${item.label} подменю`"
            >
              <li
                v-for="sub in item.submenu"
                :key="sub.id"
              >
                <RouterLink
                  :to="sub.to"
                  class="app-menu-item__link"
                  @click="toggle(item.id)"
                >
                  {{ sub.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.app-menu-item {
  position: relative;

  &__list {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__link {
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

  &__arrow {
    fill: var(--color-on-surface);
    transition: transform 0.3s ease, fill 0.3s ease;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__submenu {
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
  }
  // --- FOOTER VARIANT ---
  &--footer {
    .app-menu-item__list {
      gap: 30px;
    }

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
}
</style>
