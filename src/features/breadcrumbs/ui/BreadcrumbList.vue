<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { BreadcrumbItem } from '../model/types';

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>

<template>
  <ul class="breadcrumbs__list d-flex gap-2">
    <li
      v-for="(item, index) in items"
      :key="item.path ?? item.name"
      class="breadcrumbs__item"
    >
      <RouterLink
        v-if="item.path && index !== items.length - 1"
        :to="item.path"
        class="breadcrumbs__link"
      >
        {{ item.name }}
      </RouterLink>

      <span
        v-else
        aria-current="page"
      >
        {{ item.name }}
      </span>

      <span
        v-if="index !== items.length - 1"
        class="breadcrumbs__separator"
        aria-hidden="true"
      >
        /
      </span>
    </li>
  </ul>
</template>
