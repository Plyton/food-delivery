<script setup lang="ts">
  withDefaults(
    defineProps<{
      title: string;
      description?: string;
    }>(),
    {
      description: undefined,
    },
  );
</script>

<template>
  <section class="checkout-step d-flex flex-column gap-16">
    <header class="checkout-step__header d-flex justify-between items-start gap-12">
      <div class="checkout-step__heading d-flex flex-column gap-4">
        <h2 class="checkout-step__title">
          {{ title }}
        </h2>

        <p
          v-if="description"
          class="checkout-step__description"
        >
          {{ description }}
        </p>
      </div>

      <slot name="header" />
    </header>

    <div class="checkout-step__body d-flex flex-column gap-12">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .checkout-step {
    &__title {
      margin: 0;
    }

    &__description {
      margin: 0;
      color: var(--color-on-surface-variant);
    }
  }
</style>
