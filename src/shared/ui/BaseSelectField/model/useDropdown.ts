import { onClickOutside } from '@vueuse/core';
import { type ComponentPublicInstance, ref, type Ref } from 'vue';
import type { DropdownSelectI } from './types.ts';

export function useDropdown(
  refEl: Ref<ComponentPublicInstance | null>,
  disabled?: Ref<boolean> | boolean,
  onClose?: () => void,
): DropdownSelectI {
  const isOpen = ref(false);

  function open() {
    if (disabled) return;
    isOpen.value = true;
  }

  function toggle() {
    if (disabled) return;
    isOpen.value = !isOpen.value;
  }

  function close() {
    isOpen.value = false;
    onClose?.();
  }

  onClickOutside(refEl, close);

  return {
    isOpen,
    open,
    toggle,
  };
}
