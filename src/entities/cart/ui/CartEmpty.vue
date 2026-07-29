<template>
  <div class="cart-empty">
    <div class="cart-empty__icon">
      🛒
    </div>

    <h3 class="cart-empty__title">
      Корзина пуста
    </h3>

    <p class="cart-empty__description">
      Добавьте товары, чтобы оформить заказ
    </p>
  </div>
</template>

<style scoped lang="scss">
  .cart-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 300px;
    padding: 40px;

    color: var(--color-on-surface);
    text-align: center;

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 64px;
      height: 64px;
      margin-bottom: 20px;

      font-size: 32px;

      background-color: var(--color-surface-variant);
      border-radius: 50%;
    }

    &__title {
      margin: 0 0 10px;

      color: var(--color-on-surface);
      font-size: 24px;
      font-weight: 700;
    }

    &__description {
      max-width: 320px;
      margin: 0;

      color: var(--color-on-surface-dim);
      font-size: 16px;
      line-height: 1.5;
    }
  }
</style>
