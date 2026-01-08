<script setup lang="ts">
import { homeData } from '@/data/home';
</script>

<template>
  <div class="container-lg-fluid porque-section bg-light position-relative pt-5 pb-5">
    <div class="row align-items-center position-relative content-layer" style="margin-right: 0">
      <div class="col-12 text-center mb-5 mb-lg-4"
            v-motion-slide-visible-top
            :delay="200"
            :duration="1200">
        <h1 class="fw-bold titulo-principal">¿PORQUÉ LUMINEL?</h1>
      </div>

      <div class="col-xl-6 col-lg-6 p-0 d-none d-lg-block">
        <img :src="homeData.porque.imgLeft" class="img-fluid w-100 img-debajo" />
      </div>

      <div class="col-xl-4 col-lg-4 mx-lg-5 col-md-8 offset-md-2 col-10 offset-1">
        <div class="accordion accordion-flush mb-5" id="accordionFlushExample">
          <div v-for="card in homeData.porque.cards" :key="card.id" class="accordion-item">
            <h2 class="accordion-header" :id="'flush-heading' + card.id">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapse' + card.id"
                aria-expanded="false"
                :aria-controls="'flush-collapse' + card.id"
              >
                {{ card.titleButton }}
              </button>
            </h2>
            <div
              :id="'flush-collapse' + card.id"
              class="accordion-collapse collapse"
              :aria-labelledby="'flush-heading' + card.id"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {{ card.descButton }}
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <a
            :href="homeData.porque.btnLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg custom-btn fw-semibold text-white"
            :style="{ '--btn-color': homeData.porque.btnColor }"
            >{{ homeData.porque.btnText }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.porque-section {
  padding-bottom: 15rem;
}

.titulo-principal {
  font-family: 'Work Sans', sans-serif;
  color: #075854;
  font-size: clamp(2.4rem, 9vw, 4.5rem);
}

.img-debajo {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

/* --- Estilos para el Acordeón --- */
/* Estilo general para cada item del acordeón */
.accordion-item {
  background-color: #004964;
  border: none;
  color: white;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}

/* Estilos para el botón del acordeón (abierto y cerrado) */
#accordionFlushExample .accordion-button {
  background-color: #004964;
  color: white;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  border-radius: 10px;
  font-size: clamp(1rem, 1vw, 1.3rem);
}

#accordionFlushExample .accordion-button:not(.collapsed) {
  background-color: #004964;
  color: white;
}

/* Quitar la sombra azul de focus de Bootstrap */
#accordionFlushExample .accordion-button:focus {
  box-shadow: none;
}

#accordionFlushExample .accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3ccircle cx='8' cy='8' r='8' fill='%2353e02f'/%3e%3cpath fill='white' d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/%3e%3c/svg%3e");
}

.accordion-body {
  text-align: left;
  font-size: clamp(0.9rem, 1vw, 0.8rem);
}

.custom-btn {
  width: clamp(280px, 50vw, 320px); /* Ancho dinámico: mín 250px, ideal 50vw, máx 350px */
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.3rem, 1vw, 1.5rem);
  background-color: var(--btn-color);
  border-color: var(--btn-color);
  transition: filter 0.3s ease;
}

.custom-btn:hover {
  filter: brightness(1.1);

}
</style>
