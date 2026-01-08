<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import PortafolioSection from '@/components/marketing/PortafolioSection.vue';
import QueHacemosSection from '@/components/marketing/QueHacemosSection.vue';
import MarketingContenidoSection from '@/components/marketing/MarketingContenidoSection.vue';
import MarketingHeroSection from '@/components/marketing/MarketingHeroSection.vue';
import MetaAdsSection from '@/components/marketing/MetaAdsSection.vue';
import PosicionamientoSection from '@/components/marketing/PosicionamientoSection.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import { isLoading } from '@/composables/useGlobalLoader';

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
    <MarketingHeroSection />
    <QueHacemosSection />
    <MarketingContenidoSection />
    <MetaAdsSection />
    <PosicionamientoSection />
    <PortafolioSection />
  </div>
</template>

<style scoped></style>
