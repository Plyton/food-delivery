<script setup lang="ts">
  import { useBreadcrumbs } from './model/useBreadcrumbs';
  import BreadcrumbList from './ui/BreadcrumbList.vue';

  defineOptions({
    name: 'NavigationBreadcrumbs',
  });

  const { breadcrumbs, visible, title } = useBreadcrumbs();
</script>

<template>
  <div
    v-if="title"
    class="breadcrumbs__header mb-4 pt-8 pb-8 text-7xl"
  >
    <h1 class="d-inline items-start gap-4">
      {{ title.text }}
      <span
        v-if="title.count"
        class="breadcrumbs__count text-3xl"
      >
        {{ title.count }} шт
      </span>
    </h1>
  </div>

  <nav
    v-if="visible"
    class="mb-6 text-sm"
    aria-label="Хлебные крошки"
  >
    <BreadcrumbList :items="breadcrumbs" />
  </nav>
</template>

<style lang="scss">
  .breadcrumbs {
    &__count {
      transform: translateY(-0.4em);
      white-space: nowrap;
      color: var(--color-primary);
    }

    &__header,
    &__link,
    &__separator {
      color: var(--color-on-surface);
    }
  }
</style>
