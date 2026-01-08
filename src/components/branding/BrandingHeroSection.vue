<script setup lang="ts">
import { brandingData } from '@/data/branding';
</script>

<template>
  <!-- SECCIÓN PARA ESCRITORIO (Visible en 'lg' y superior) -->
  <section
    class="container-fluid hero-main d-none d-xl-flex align-items-center position-relative"
    :style="{ backgroundImage: `url(${brandingData.brandingBackground})` }"
  >
    <div class="container-md-fluid container pt-5">
      <div class="row justify-content-center">
        <div class="col-lg-5" v-motion-slide-visible-left :delay="200" :duration="1200">
          <h1 class="display-text display-3 lh-1 fw-bold text-uppercase mb-4">
            <span style="color: white">BRANDING QUE</span
            ><span style="color: #a8c738"> ILUMINA</span>
            <span style="color: #00b1bc"> TU ESENCIA</span>
          </h1>
          <p class="text-white text mb-5" v-html="brandingData.hero.text"></p>
        </div>
        <div class="col-lg-7"></div>
      </div>
    </div>
    <!-- Título "Portafolio" posicionado en la parte inferior -->
    <div class="container position-absolute bottom-0 start-50 translate-middle-x pb-0 text-center">
      <h2 class="text-down text-white display-5 fw-bold text-uppercase">Portafolio</h2>
    </div>
  </section>

  <!-- SECCIÓN PARA TABLET (Visible desde 'md' hasta 'xl') -->
  <section
    class="container-fluid hero-main-responsive d-none d-md-flex d-xl-none align-items-center position-relative"
    :style="{ backgroundImage: `url(${brandingData.brandingBackgroundTablet})` }"
  >
    <div class="container-md-fluid container pt-0">
      <div class="row justify-content-center">
        <div class="col-12" v-motion-slide-visible-left :delay="200" :duration="1200">
          <h1 class="display-text display-3 lh-1 fw-bold text-uppercase mb-4">
            <span style="color: white">BRANDING QUE</span
            ><span style="color: #a8c738"> ILUMINA</span>
            <span style="color: #00b1bc"> TU ESENCIA</span>
          </h1>
          <p class="text-white text mb-5" v-html="brandingData.hero.text"></p>
        </div>
      </div>
    </div>
    <!-- Título "Portafolio" posicionado en la parte inferior -->
    <div class="container position-absolute bottom-0 start-50 translate-middle-x pb-0 text-center">
      <h2 class="text-down text-white display-5 fw-bold text-uppercase">Portafolio</h2>
    </div>
  </section>

  <!-- SECCIÓN PARA MÓVIL (Visible hasta 'md') -->
  <section
    class="container-fluid hero-main-responsive d-flex d-md-none align-items-start position-relative"
    :style="{ backgroundImage: `url(${brandingData.brandingBackgroundMobile})` }"
  >
    <div class="container-md-fluid container pt-3">
      <div
        class="row justify-content-center"
        v-motion-slide-visible-left
        :delay="200"
        :duration="1200"
      >
        <div class="col-12">
          <h1 class="display-text display-3 lh-1 fw-bold text-uppercase mb-4">
            <span style="color: white">BRANDING QUE</span
            ><span style="color: #a8c738"> ILUMINA</span>
            <span style="color: #00b1bc"> TU ESENCIA</span>
          </h1>
        </div>
      </div>
    </div>
    <!-- Título "Portafolio" posicionado en la parte inferior -->
    <div class="container position-absolute bottom-0 start-50 translate-middle-x pb-0 text-center">
      <h2 class="text-down text-white display-5 fw-bold text-uppercase">Portafolio</h2>
    </div>
  </section>
</template>

<style scoped>
.hero-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  /* Sube la sección para que quede detrás del header (ESCRITORIO) */
  margin-top: -148px !important;
  padding-top: 148px !important;
}

.hero-main-responsive {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 90vh;
  /* Sube la sección para que quede detrás del header (TABLET Y MÓVIL) */
  margin-top: -80px !important;
  padding-top: 80px !important;
}

/*
  Ajuste para el breakpoint 'lg' (tablets grandes, 992px a 1199px).
 */
@media (min-width: 768px) and (max-width: 1199.98px) {
  .hero-main-responsive {
    margin-top: -148px !important;
    padding-top: 148px !important;
  }
}

.display-text {
  /* font-size: clamp(3.5rem, 4.3vh, 6.5rem); */
  font-family: 'Work Sans', sans-serif;
}

.text {
  font-family: 'Open Sans', sans-serif;
}

.img-derecho {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* borde al texto */
@media (max-width: 767.98px) {
  .text-down {
    -webkit-text-stroke: 1px black; /* Ancho y color del borde para Webkit (Chrome, Safari) */
  }
}
</style>
