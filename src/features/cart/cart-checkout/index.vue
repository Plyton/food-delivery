<script setup lang="ts">
  import { ref } from 'vue';
  import { useCartStore } from '@/entities';
  import { BaseButton, BaseInputField } from '@/shared/ui';

  defineOptions({
    name: 'CartCheckout',
  });

  const cart = useCartStore();

  const promo = ref('');
</script>

<template>
  <section class="cart-checkout d-flex justify-end w-full">
    <div class="d-flex flex-column items-start gap-14 w-3">
      <div class="d-flex flex-column">
        <div
          class="text-sm mb-3"
          style="color: var(--color-on-surface-dim)"
        >
          Применить промокод:
        </div>
        <div class="d-flex gap-10">
          <div style="width: 190px">
            <BaseInputField
              v-model="promo"
              class="w-full"
            />
          </div>

          <BaseButton type="outline">
            Применить
          </BaseButton>
        </div>
      </div>

      <div class="d-flex flex-column gap-10">
        <div class="d-flex items-baseline gap-2">
          <span
            class="text-sm mb-2"
            style="color: var(--color-on-surface-dim)"
          >
            Итого к оплате:
          </span>

          <span class="text-2xl-bold">
            {{ cart.totalPrice }} ₽
          </span>
        </div>

        <div style="width: 190px">
          <BaseButton class="w-full">
            Оформить заказ
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
