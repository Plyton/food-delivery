<script setup lang="ts">
function enter(element: Element) {
  const el = element as HTMLElement;
  el.style.height = 'auto';
  const height = el.offsetHeight;
  el.style.height = '0';
  el.getBoundingClientRect(); // Force reflow
  el.style.height = `${height}px`;
}
function leave(element: Element) {
  const el = element as HTMLElement;
  el.style.height = `${el.offsetHeight}px`;
  el.getBoundingClientRect(); // Force reflow
  el.style.height = '0';
}
</script>

<template>
  <transition
    name="expand"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>
