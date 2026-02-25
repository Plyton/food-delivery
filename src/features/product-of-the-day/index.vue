<script setup lang="ts">
import { ProductCard } from '@/entities';
import { BaseButton, IconCard } from '@/shared/ui';
import { useProductOfTheDay } from './model/useProductOfTheDay.ts';

defineOptions({
  name: 'ProductOfTheDay',
});

const {productMock} = useProductOfTheDay();
</script>

<template>
  <section>
    <ProductCard
      :product="productMock"
      variant="hero"
    >
      <template #action>
        <BaseButton type="icon-fill">
          <IconCard />
        </BaseButton>
      </template>
    </ProductCard>
  </section>
</template>

<style scoped lang="scss">

</style>
