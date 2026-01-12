<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import NosotrosHeroSection from '@/components/nosotros/NosotrosHeroSection.vue';
import SecondSection from '@/components/nosotros/SecondSection.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import { isLoading } from '@/composables/useGlobalLoader';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Luminel | Nosotros',
  meta: [
    {
      name: 'description',
      content: 'Conoce a Luminel, agencia creativa con raíces tecnológicas. Transformamos marcas con estrategia, diseño y tecnología.',
    },
  ],
});

onMounted(() => {
  isLoading.value = true;
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    isLoading.value = false;
    document.body.style.overflow = '';
  }, 3000);
});

onUnmounted(() => {
  isLoading.value = true;
});
</script>

<template>
  <LoaderComponent v-if="isLoading" />
  <div v-if="!isLoading">
    <NosotrosHeroSection />
    <SecondSection />
  </div>
</template>

<style scoped></style>
