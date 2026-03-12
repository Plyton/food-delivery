<script setup lang="ts">
import { utils } from '@/shared/lib';

defineOptions({
  name: 'FeedbackPage',
});
</script>

<template>
  <section class="d-flex justify-center">
    <img
      :src="utils.getImage('img/tool.png')"
      alt="Tool"
    >
  </section>
</template>
