<script setup lang="ts">
import { homeData } from '@/data/home';
</script>

<template>
  <!-- SECCIÓN PARA ESCRITORIO (Visible en 'lg' y superior) -->
  <section
    class="hero-main d-none d-lg-flex align-items-center"
    :style="{ backgroundImage: `url(${homeData.hero.bgDesktop})` }"

  >
    <div class="container-fluid position-relative w-100">
      <div class="row justify-content-center">
        <!-- Se agrega padding-bottom grande (15rem) para empujar el contenido hacia arriba -->
        <div class="col-lg-8" style="padding-bottom: 15rem"
            v-motion-slide-visible-top
            :delay="200"
            :duration="1500">
          <!-- Usamos v-html para que interprete el <br /> que viene del TS -->
          <h1
            class="display-text fw-bold title-text text-center mb-5 text-uppercase"
            v-html="homeData.hero.title"
          ></h1>
          <h3
            class="display-6 subtitle-text fw-bold mb-5  text-end"
            style="padding-right: 3rem"
            v-html="homeData.hero.subtitle"
          ></h3>
        </div>
      </div>
      <div
        class="d-flex flex-column align-items-center gap-3 mb-4 position-absolute"
        style="bottom: 14rem; right: 3rem; z-index: 10"
      >
        <a
          v-for="social in homeData.socialLinks"
          :key="social.id"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.name"
        >
          <img :src="social.icon" :alt="social.name" class="social-icon" />
        </a>
      </div>
    </div>
  </section>

  <!-- SECCIÓN PARA MÓVIL (Visible hasta 'lg') -->
  <section
    class="hero-main-responsive d-flex d-lg-none align-items-center text-center"
    :style="{ backgroundImage: `url(${homeData.hero.bgMobile})` }"
  >
    <div class="container-fluid position-relative w-100">
      <div class="row justify-content-center">
        <div class="col-12 text-white" style="padding-bottom: 19rem">
          <h1 class="display-3 fw-bold title-text text-uppercase" v-html="homeData.hero.title"></h1>
          <h3 class="fs-2 fw-bold m-0" v-html="homeData.hero.subtitle"></h3>
        </div>
      </div>
      <div
        class="d-flex flex-column align-items-center gap-3 mb-4 position-absolute social-icons-mobile"
        style="bottom: 8rem; z-index: 10"
      >
        <a
          v-for="social in homeData.socialLinks"
          :key="social.id"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.name"
        >
          <img :src="social.icon" :alt="social.name" class="social-icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 110vh;
  color: white;
}
.hero-main-responsive {
  background-size: cover;
  background-position: center;
  min-height: 90vh; /* Un poco menos de altura en móvil se ve bien */
}

.subtitle-text {
  color: #ffffff;
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
}

.title-text {
  color: #ffffff;
  font-family: 'Work Sans', sans-serif;
}

.display-text {
  font-size: clamp(3.5rem, 4.3vw, 6.5rem);
  line-height: 1;
}
.social-icon {
  height: clamp(28px, 4vw, 40px);
  width: auto;
  transition: opacity 0.2s ease-in-out;
}

.social-icon:hover {
  opacity: 0.75;
}

.social-icons-mobile {
  right: 3rem;
}

@media (max-width: 576px) {
  .social-icons-mobile {
    right: 1rem; /* Más pegado a la derecha en pantallas pequeñas */
  }
}
</style>
