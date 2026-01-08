<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const route = useRoute();
</script>

<template>
  <!-- Estructura para "sticky footer" y para que el contenido fluya bajo el header */ -->
  <div class="d-flex flex-column min-vh-100">
    <HeaderComponent />

    <!-- Usamos una clase condicional: si NO es home, aplica 'main-padding' -->
    <main class="flex-grow-1 content-wrapper" :class="{ 'main-padding': route.path !== '/' }">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #000;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  background-color: #000; /* Fondo necesario para cubrir el footer fijo */
}

/* Estilo base para escritorio (lo que tenías antes) */
.main-padding {
  padding-top: 138px;
}

@media(max-width: 992px){
  .main-padding {
    padding-top: 100px;
  }
}


/* Media Query: Para pantallas de 768px o menos */
@media (max-width: 768px) {
  .main-padding {
    padding-top: 60px; /* Aquí puedes poner el valor menor que desees */
  }
}
</style>
