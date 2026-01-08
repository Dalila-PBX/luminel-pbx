<script setup lang="ts">
import { disenoData } from '@/data/diseno';
</script>

<template>
  <section>
    <div
      class="container-fluid section-diseno position-relative d-flex justify-content-center align-items-center"
      :style="{ backgroundImage: `url(${disenoData.diseno.bgDesktop})` }"
    >
      <div class="container">
        <div class="row align-items-center">
          <!-- Columna Izquierda: Recuadro + Texto -->
          <div
            class="col-lg-6 col-12 position-relative d-flex justify-content-center align-items-center"
            v-motion-slide-visible-left
            :delay="200"
            :duration="1200"
          >
            <div
              class="content-layer position-absolute"
              :style="{ backgroundImage: `url(${disenoData.diseno.imgRecuadro})` }"
            ></div>
            <div class="text-content text-center position-relative p-4">
              <h1 class="fw-bold text-uppercase mb-lg-2 mb-0 diseno-title pb-lg-3 pb-0">
                DISEÑO <span style="color: #67d81c">WEB</span>
              </h1>
              <p class="mx-auto diseno-text mb-1">
                Convertimos ideas en experiencias digitales impactantes. Diseñamos sitios web
                innovadores y funcionales que combinan estética, usabilidad y rendimiento. Con
                Luminel,no solo tienes un sitio web; tienes una herramienta estratégica que impulsa
                tu marca hacia adelante.
              </p>
            </div>
          </div>

          <!-- Columna Derecha: Imagen -->
          <div
            class="col-lg-6 col-12 d-none d-lg-block img-derecho"
            :style="{ backgroundImage: `url(${disenoData.diseno.imgDerecho})` }"
            v-motion-slide-visible-right
            :delay="200"
            :duration="1200"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-diseno {
  min-height: 96vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  /* Sube la sección para que quede detrás del header (ESCRITORIO) */
  margin-top: -148px !important;
  padding-top: 148px !important;
}

.content-layer {
  z-index: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: clamp(300px, 90%, 650px); /* Mínimo 300px, ideal 90%, Máximo 650px */
  height: 100%;
  pointer-events: none;
  transform: scale(1.3); /* Escala el recuadro al 130% de su tamaño original */
}

.text-content {
  z-index: 2;
  color: white;
}

.diseno-title {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw + 1rem, 4.5rem);
}

.diseno-text {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1.1rem);
  width: clamp(300px, 80%, 600px); /* El texto nunca será más ancho de 600px ni menos de 300px */
}

.img-derecho {
  min-height: 500px; /* Altura necesaria para que la imagen de fondo se vea */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 991.98px) {
  .section-diseno {
    min-height: 90vh;
    margin-top: -100px !important; /* Ajuste para el header más pequeño en móvil/tablet */
    padding-top: 50px !important;
  }
  .content-layer {
    width: 100%; /* En móvil ocupa el ancho disponible, el scale(1.3) lo hace resaltar */
    height: 85%;
  }
}

@media (max-width: 393px) {
  .diseno-text {
    width: 90%;
  }
}
</style>
