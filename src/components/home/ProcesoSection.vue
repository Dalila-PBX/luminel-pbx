<script setup lang="ts">
import { homeData } from '@/data/home';
</script>

<template>
  <div class="container-fluid proceso-section bg-light position-relative pt-5">
    <div
      class="proceso-bg-layer position-absolute bottom-0 start-0 w-100 h-50"
      :style="{ backgroundImage: `url(${homeData.procesoBackground})` }"
    ></div>

    <div class="row justify-content-center align-items-center position-relative content-layer">
      <div class="col-12 text-center mb-4">
        <h2
          class="fw-bold titulo-principal"
          v-motion-slide-visible-bottom
          :delay="200"
          :duration="1200"
        >
          PROCESO <br />
          CREATIVO
        </h2>
      </div>

      <!-- row-cols-lg-5 fuerza 5 columnas en pantallas grandes -->
      <!-- g-4 añade espacio (gutter) entre las imágenes -->
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xxl-5 justify-content-center align-items-center g-4 px-3"
      >
        <div v-for="tarjeta in homeData.proceso.tarjetas" :key="tarjeta.id" class="col text-center">
          <!-- Contenedor con posicionamiento relativo -->
          <div class="position-relative d-inline-block">
            <!-- Imagen de fondo -->
            <img
              :src="tarjeta.circleImage"
              class="img-fluid proceso-card-img"
              :alt="`Paso ${tarjeta.id}`"
            />

            <!-- Capa de texto superpuesta -->
            <div
              class="position-absolute title-text top-0 start-0 w-100 h-100 d-flex flex-column align-items-center"
              :class="{
                'justify-content-end text-align-bottom': [1, 3, 5].includes(tarjeta.id),
                'justify-content-start text-align-top': [2, 4].includes(tarjeta.id),
                'justify-content-center': ![1, 2, 3, 4, 5].includes(tarjeta.id),
              }"
            >
              <h4 class="fw-bold text-uppercase card-title mb-2" v-if="tarjeta.title">
                {{ tarjeta.title }}
              </h4>
              <p class="card-text masabajo" v-if="tarjeta.text">
                {{ tarjeta.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proceso-section {
  padding-bottom: 15rem;
}

.titulo-principal {
  font-family: 'Work Sans', sans-serif;
  color: #075854;
  font-size: clamp(2.5rem, 10vw, 4.5rem);
}

.card-title {
  color: #ffffff; /* Color blanco para el título */
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  width: 85%;
  padding: 0 5px;
  line-height: 1.1;
  overflow-wrap: break-word; /* Permite que palabras largas se dividan si no caben */
  hyphens: auto; /* Intenta dividir con guiones de forma inteligente (necesita lang="es" en HTML) */
}

.card-text {
  color: #ffffff;
  width: 80%;
  padding: 0 5px;
  line-height: 1.2;
  overflow-wrap: break-word;
  font-size: clamp(0.8rem, 2.5vw, 1.1rem);
}

.masabajo {
  margin-bottom: -3rem;
}

.text-align-bottom {
  /* Para tarjetas 1, 3, 5. Empuja el texto hacia arriba desde el borde inferior. */
  padding-bottom: 10rem;
}

.text-align-top {
  /* Para tarjetas 2, 4. Empuja el texto hacia abajo desde el borde superior. */
  padding-top: 4rem;
}

@media (max-width: 1199.98px) {
  .proceso-bg-layer {
    display: none;
  }
}

.content-layer {
  z-index: 1;
}

.proceso-card-img {
  max-width: 320px; /* Tamaño base para escritorio */
  width: 100%;
}

/* --- MEDIA QUERIES PARA CONTROLAR TAMAÑOS POR PANTALLA --- */

@media (max-width: 991.98px) {
  .proceso-section {
    padding-bottom: 5rem;
  }
  .proceso-card-img {
    max-width: 220px;
  }
}

@media (min-width: 992px) {
}
</style>
