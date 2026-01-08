<script setup lang="ts">
import { marketingData } from '@/data/marketing';
</script>

<template>
  <section>
    <div
      class="container-fluid marketing-section position-relative d-flex justify-content-center align-items-start"
      :style="{ backgroundImage: `url(${marketingData.marketing.bgDesktop})` }"
    >
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12" v-motion-fade-visible :delay="200" :duration="1800">
            <h2
              class="fw-bold display-text text-center mt-5 mb-4 text-uppercase"
              style="color: #a8c738"
            >
              Conectamos marcas<br />
              <span class="text-light">con</span> <br /><span
                class="text-light"
                style="font-size: clamp(2.5rem, 5vw, 7.5rem)"
                >audiencias</span
              >
            </h2>
            <!-- Rectángulo "reales" -->
            <div class="d-flex justify-content-end pe-lg-5 me-lg-5 mt-2">
              <div
                class="reales-box text-light text-uppercase"
                style="font-size: clamp(2.5rem, 4.5vw, 7rem); margin-top: -1rem"
              >
                reales
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  </section>
</template>

<style scoped>
.marketing-section {
  min-height: 100vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-top: -148px;
  padding-top: 148px;
}
.display-text {
  font-size: clamp(2rem, 4.5vw, 6.5rem);
  font-family: 'Work Sans', sans-serif;
  line-height: 1;
}
.reales-box {
  background-color: #00b1bc;
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;
  padding: 0px 100px;
  transform: rotate(-5deg);
  line-height: 1;
}

@media (max-width: 1199.98px) {
  .marketing-section {
    min-height: 80vh;
  }
}

@media (max-width: 991.98px) {
  /* Usamos el breakpoint LG de Bootstrap */
  .marketing-section {
    min-height: 70vh;
    margin-top: -100px; /* Ajuste para el header más pequeño en móvil */
    padding-top: 80px;
  }

  .reales-box {
    padding: 0px 50px;
  }
}

@media (max-width: 767.98px) {
  .marketing-section {
    min-height: 60vh;
  }
}

@media (max-width: 575.98px) {
  .marketing-section {
    min-height: 50vh;
  }
}
</style>
