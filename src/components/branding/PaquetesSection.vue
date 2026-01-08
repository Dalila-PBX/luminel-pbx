<script setup lang="ts">
import { brandingData } from '@/data/branding';
</script>

<template>
  <div class="container-fluid section-paquetes bg-light position-relative pt-5">
    <div
      class="paquetes-bg-layer position-absolute start-0 w-100 h-50"
      :style="{ backgroundImage: `url(${brandingData.paquetesBackground})` }"
    ></div>

    <div class="container-xxl">
      <div class="row justify-content-center position-relative content-layer">
        <div
          class="col-12 titulo_principal text-center mb-4"
          v-motion-slide-visible-top
          :delay="200"
          :duration="1200"
        >
          <h2 class="fw-bold text-uppercase">
            Paquetes Diseño <br />
            de Marca
          </h2>
        </div>

        <div class="col-12 col-xl-4 mb-4">
          <div class="card bg-transparent border-0 h-100">
            <img class="card-img-top" src="/img/branding/LOGO_EXPRESS.png" alt="Card image cap" />
            <div class="card-body text-center">
              <a
                href="https://wa.me/5215587894847"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-sm custom-btn fw-semibold text-light"
                style="--btn-color: #a8c738"
                >MÁS INFO</a
              >
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-4 mb-4">
          <div class="card bg-transparent border-0 h-100">
            <img class="card-img-top" src="/img/branding/DISENO-LUX.png" alt="Card image cap" />
            <div class="card-body text-center">
              <a
                href="https://wa.me/5215587894847"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-sm custom-btn fw-semibold text-light"
                style="--btn-color: #00b1bc"
                >MÁS INFO</a
              >
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-4 mb-4">
          <div class="card bg-transparent border-0 h-100">
            <img class="card-img-top" src="/img/branding/DISENO-NOVA.png" alt="Card image cap" />
            <div class="card-body text-center">
              <a
                href="https://wa.me/5215587894847"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-sm custom-btn fw-semibold text-light"
                style="--btn-color: #cf6b0d"
                >MÁS INFO</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-paquetes {
  padding-bottom: 15rem;
}

.titulo_principal h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(3rem, 1rem + 6vw, 4.5rem);
  color: #075854;
}

.custom-btn {
  width: 150px; /* largo del boton */
  font-family: 'Outfit', sans-serif;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  background-color: var(--btn-color);
  border-color: var(--btn-color);
  transition: filter 0.3s ease;
}

.custom-btn:hover {
  filter: brightness(1.1);
}

@media (max-width: 1199.98px) {
  .section-paquetes {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
  .paquetes-bg-layer {
    display: none;
  }
}

@media (min-width: 1200px) {
  .section-paquetes {
    padding-bottom: 0rem;
  }
}

.paquetes-bg-layer {
  background-size: 100% auto;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index: 0;
  bottom: -2rem;
}
.content-layer {
  z-index: 1;
}
</style>
