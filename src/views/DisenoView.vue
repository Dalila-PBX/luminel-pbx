<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import DisenoHeroSection from '@/components/diseno/DisenoHeroSection.vue';
import QueHacemosSection from '@/components/diseno/QueHacemosSection.vue';
import CarruselSection from '@/components/diseno/CarruselSection.vue';
import PaginasSection from '@/components/diseno/PaginasSection.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import { isLoading } from '@/composables/useGlobalLoader';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Luminel | Diseño Web',
  meta: [
    {
      name: 'description',
      content: 'Diseño y desarrollo web a medida. Sitios responsivos, optimizados y enfocados en la experiencia de usuario (UI/UX).',
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
    <DisenoHeroSection />
    <QueHacemosSection />
    <CarruselSection />
    <PaginasSection />
  </div>
</template>

<style scoped></style>
