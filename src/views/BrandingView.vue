<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import BrandingHeroSection from '@/components/branding/BrandingHeroSection.vue';
import PortafolioSection from '@/components/branding/PortafolioSection.vue';
import GreenLineSection from '@/components/branding/GreenLineSection.vue';
import PaquetesSection from '@/components/branding/PaquetesSection.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import { isLoading } from '@/composables/useGlobalLoader';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Luminel | Branding',
  meta: [
    {
      name: 'description',
      content: 'Servicios de branding y diseño de identidad visual. Creamos marcas memorables que conectan con tu audiencia.',
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
    <BrandingHeroSection />
    <PortafolioSection />
    <GreenLineSection />
    <PaquetesSection />
  </div>
</template>

<style scoped></style>
