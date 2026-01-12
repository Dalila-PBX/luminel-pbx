<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import GreenLineSection from '@/components/home/GreenLineSection.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
import NosotrosSection from '@/components/home/NosotrosSection.vue';
import ClientesSection from '@/components/home/ClientesSection.vue';
import ProyectosSection from '@/components/home/ProyectosSection.vue';
import ProcesoSection from '@/components/home/ProcesoSection.vue';
import PorqueLuminel from '@/components/home/PorqueLuminel.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import { isLoading } from '@/composables/useGlobalLoader';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Luminel | Inicio',
  meta: [
    {
      name: 'description',
      content: 'Agencia creativa especializada en branding, diseño web y marketing digital. Iluminamos tu creatividad y potenciamos tu comunicación.',
    },
  ],
});

onMounted(() => {
  isLoading.value = true; // Aseguramos que empiece cargando
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    isLoading.value = false;
    document.body.style.overflow = '';
  }, 3000);
});

onUnmounted(() => {
  isLoading.value = true; // Al salir, activamos carga para la siguiente página
});
</script>

<template>
  <LoaderComponent v-if="isLoading" />
  <div v-if="!isLoading">
    <HeroSection />
    <GreenLineSection />
    <ServicesSection />
    <NosotrosSection />
    <ClientesSection />
    <ProyectosSection />
    <ProcesoSection />
    <PorqueLuminel />
  </div>
</template>

<style scoped></style>
