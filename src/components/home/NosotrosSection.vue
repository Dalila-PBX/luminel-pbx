<script setup lang="ts">
import { homeData } from '@/data/home';
import { RouterLink } from 'vue-router';
</script>
<template>
  <section
    class="hero-main d-flex align-items-center"
    :style="{ backgroundImage: `url(${homeData.nosotrosBackground})` }"
  >
    <div class="container-md-fluid container">
      <div class="row justify-content-center">
        <div class="col-lg-4"
            v-motion-slide-visible-left
              :delay="200"
              :duration="1200">
          <h1
            class="display-text lh-1 fw-bold text-white title-text text-uppercase mb-4 text-center text-lg-start"
            v-html="homeData.nosotros.title"
          ></h1>
          <p class="text-white subtitle-text mb-5" v-html="homeData.nosotros.subtitle"></p>
          <RouterLink
            :to="homeData.nosotros.btnLink"
            class="btn mt-auto btn-sm align-self-center custom-btn fw-semibold text-white mb-5"
            :style="{ '--btn-color': homeData.nosotros.btnColor }"
            >{{ homeData.nosotros.btnText }}</RouterLink
          >
        </div>
        <div
          class="col-lg-8 img-derecho d-none d-lg-block"
          :style="{ backgroundImage: `url(${homeData.nosotrosImg})` }"
        ></div>
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
  font-size: clamp(3.5rem, 4.3vh, 6.5rem);

}

.title-text {
  font-family: 'Work Sans', sans-serif;
  padding-top: 10rem;
}

.subtitle-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
}

.custom-btn {
  width: 130px; /*largo del boton*/
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  background-color: var(--btn-color);
  border-color: var(--btn-color);
  transition: filter 0.3s ease;
}

.custom-btn:hover {
  filter: brightness(1.1);
}

.img-derecho {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 1199.98px) {
  .title-text {
    padding-top: 4rem;
  }
}
</style>
