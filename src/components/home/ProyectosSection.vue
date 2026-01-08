<script setup lang="ts">
import { homeData } from '@/data/home';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section
    class="hero-main d-flex align-items-center"
    :style="{ backgroundImage: `url(${homeData.proyectsBackground})` }"
  >
    <div class="container mb-5 mt-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h1
            class="display-text fw-bold text-white text-uppercase mb-4 text-center text-lg-start"
            v-html="homeData.proyects.title"
            v-motion-fade-visible
            :delay="200"
            :duration="1200"
          ></h1>
          <RouterLink to="/branding" class="d-block">
            <div
              class="img-debajo"
              :style="{ backgroundImage: `url(${homeData.proyects.imgRight})` }"
            ></div>
          </RouterLink>
        </div>
        <div class="col-lg-4 mt-5 mb-lg-4">

          <div class="d-flex flex-column justify-content-center align-items-center">
            <RouterLink to="/branding" class="d-block">
              <img
              :src="homeData.proyects.imgUp"
              alt="Proyectos Arriba"
              class="img-fluid img-up mb-4"
              />
            </RouterLink>

            <RouterLink to="/branding" class="d-block">
              <img
              :src="homeData.proyects.imgDown"
              alt="Proyectos Abajo"
              class="img-fluid img-down"
            />
            </RouterLink>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.display-text {
  font-size: clamp(3.3rem, 3.5vw, 6.5rem);
  font-family: 'WorkSans', sans-serif;
  padding-top: 3rem;
}

.img-debajo {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
}

@media (max-width: 575.98px) {
  .img-debajo {
    min-height: 215px;
  }

  .img-up {
    height: 230px;
    object-fit: contain; /* Evita que la imagen se deforme al forzar la altura */
  }
  .img-down {
    height: 230px;
    object-fit: contain; /* Evita que la imagen se deforme al forzar la altura */
  }
}
</style>
