<script setup lang="ts">
import { brandingData } from '@/data/branding';


</script>

<template>
  <section class="portfolio-section bg-white py-0">
    <div class="container-fluid m-0 p-0">
      <div class="row g-0">
        <div v-for="item in brandingData.portafolio" :key="item.id" class="col-12 col-md-6">
          <a  class="portfolio-card position-relative overflow-hidden d-block">
            <div
              class="card-content position-absolute w-100 d-flex flex-column align-items-center justify-content-center p-4"
            >
              <span class="fs-6 text-white  fw-bold mb-2 text-center">{{
                item.title
              }}</span>
              <span class="category-text small fw-bold text-center">{{ item.category }}</span>
            </div>
            <!-- Imagen de fondo de la tarjeta -->
            <div class="card-image h-100">
              <img :src="item.imgSrc" :alt="item.title" class="w-100 h-100" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-card {
  height: 600px;
}
.card-content {
  z-index: 2;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Fondo semi-transparente que cubre todo */
  opacity: 0; /* Oculto por defecto */
  transition: opacity 0.5s ease-in-out;
}
.portfolio-card:hover .card-content {
  opacity: 1;
}
.card-image img {
  object-fit: cover;
  transform: scale(1.2);
  transition: transform 0.5s ease-in-out;
}
.portfolio-card:hover .card-image img {
  transform: scale(1);
}
.category-text {
  color: #18cfab;
}


@media (max-width: 992px) {
  .portfolio-card {
    height: 400px;
  }
  .card-content {
    opacity: 1; /* Siempre visible en móvil */
    top: auto;
    bottom: 0;
    height: 30%; /* Solo ocupa el 30% de la altura */
  }
  .portfolio-card:hover .card-image img {
    transform: scale(1.2); /* Desactiva el zoom-out en móvil */
  }
}
</style>
