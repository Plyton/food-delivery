import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import type { Ref } from 'vue';

export interface UseMenuReturn<T extends HTMLElement = HTMLElement> {
  openMenuId: Ref<string | null>;
  menuRef: Ref<T | null>;
  toggle: (id: string) => void;
  isOpen: (id: string) => boolean;
}

export function useMenu<T extends HTMLElement = HTMLElement>(): UseMenuReturn<T> {
  const openMenuId = ref<string | null>(null);
  const menuRef: Ref<T | null> = ref(null);

  function toggle(id: string) {
    openMenuId.value = openMenuId.value === id ? null : id;
  }

  function isOpen(id: string) {
    return openMenuId.value === id;
  }

  onClickOutside(menuRef, () => {
    openMenuId.value = null;
  });

  return {
    openMenuId,
    menuRef,
    toggle,
    isOpen,
  };
}
