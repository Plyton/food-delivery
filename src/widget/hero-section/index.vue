<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from './model/types';
import { BaseButton, IconCard } from '@/shared/ui';
import { heroProductMock } from './model/mockData';

defineOptions({
  name: 'HeroSection',
});

const product = ref<Product>(heroProductMock);

function addToCart(product: Product) {
  // Здесь логика добавления в корзину
  console.log(`Добавлено в корзину: ${product.title}`);
}

</script>

<template>
  <section class="app-hero-section">
    <!-- Фоновое фото -->
    <img
      :src="product.image"
      :alt="product.title"
      class="app-hero-section__image"
    >
    <!-- Контент -->
    <div class="app-hero-section__container">
      <!-- Красный ценник -->
      <h2 class="app-hero-section__title text-2xl">
        {{ product.title }}
      </h2>
      <span class="app-hero-section__weight text-sm pa-2">
        {{ product.weight }}
      </span>
      <div class="app-hero-section__description text-md">
        {{ product.des }}
      </div>

      <div class="d-flex items-center gap-10">
        <div class="text-lg-bold">
          {{ product.price }}
        </div>
        <BaseButton
          class="app-hero-section__btn"
          type="icon-fill"
          @click="addToCart(product)"
        >
          <template #append>
            <IconCard />
          </template>
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.app-hero-section {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  &__image {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    position: absolute;
    top: 70%;
    left: 5%;
    background-image: url("./assets/hero-container-product.png");
    padding: 20px 24px;
    color: var(--color-on-surface);
    max-width: 355px;
    min-height: 357px;
  }

  &__weight {
    background: var(--color-on-surface-dim);
    color: var(--color-on-surface);
    border-radius: 3px;
    width: fit-content;;
  }

  &__description {
    opacity: 0.8;
  }

  &__btn {
    width: 15%;
  }
}
</style>
