<script setup lang="ts">
import { nosotrosData } from '@/data/nosotros';
</script>

<template>
  <section class="hero-main" :style="{ backgroundImage: `url(${nosotrosData.secondBackground})` }">
    <div class="container-md-fluid container">
      <div class="row justify-content-center">
        <div class="col-lg-4" v-motion-slide-visible-left :delay="200" :duration="1200">
          <p class="text-white text" v-html="nosotrosData.second.textone"></p>
          <h3 class="subtitle-text" v-html="nosotrosData.second.subtitle"></h3>
          <p class="text-white text-two mb-5" v-html="nosotrosData.second.texttwo"></p>
        </div>

        <div
          class="col-lg-8 img-derecho d-none d-lg-block"
          :style="{ backgroundImage: `url(${nosotrosData.nosotrosDerecho})` }"
        ></div>
      </div>
    </div>


  </section>

  <section class="hero-main-2 hero-diferencia"
    :style="{
      '--bg-desktop': `url(${nosotrosData.secondBackground})`,
      '--bg-mobile': `url(${nosotrosData.secondBackgroundMobile})`
    } as any">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 pb-0">
          <h2
            class="fw-bold display-text text-white text-center mb-4 text-uppercase"
            v-html="nosotrosData.diferencia.title"
            v-motion-fade-visible
            :delay="200"
            :duration="1200"
          ></h2>
        </div>
        <!-- Contenedor relativo para superponer la imagen y las tarjetas -->
        <div class="col-12 position-relative">
          <!-- Capa 1: Imagen de fondo (se saca del flujo normal) -->
          <div
            class="img-fondo d-none d-lg-block position-absolute top-0 start-0 w-100 h-100"
            :style="{ backgroundImage: `url(${nosotrosData.diferencia.imgFondo})` }"
          ></div>

          <!-- Capa 2: Tarjetas (se renderizan encima de la imagen) -->
          <div
            class="cards-container d-flex justify-content-center align-items-center"
            v-motion-fade-visible
            :delay="200"
            :duration="1200"
          >
            <!-- Usamos align-items-stretch para igualar alturas y gap-4 para juntarlas -->
            <div class="row justify-content-center align-items-stretch gap-4">
              <div
                v-for="card in nosotrosData.diferencia.cards"
                :key="card.id"
                class="col-12 col-lg-auto d-flex justify-content-center"
              >
                <div class="card cards-one h-100 p-4">
                  <div class="card-body text-center d-flex flex-column justify-content-center">
                    <h5 class="card-title text-white fw-bold pb-3 mx-auto">{{ card.title }}</h5>
                    <p class="card-text text-white mx-auto">{{ card.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-main {
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  padding: 5rem 0;
  margin-bottom: -1px; /* Elimina la línea blanca entre el componente y el footer */
}
.hero-main-2 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 5rem 0;
  margin-bottom: -1px; /* Elimina la línea blanca entre el componente y el footer */
}

.title-text {
  font-family: 'Work Sans', sans-serif;
  padding-top: 10rem;
}

.text {
  font-family: 'Open Sans', sans-serif;
  padding-top: 7rem;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}
.subtitle-text {
  font-family: 'Open Sans', sans-serif;
  color: #a8c738;
  font-size: clamp(1.2rem, 2.5vw, 1rem);
}
.text-two {
  font-family: 'Open Sans', sans-serif;
  padding-top: 1rem;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}

.img-derecho {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 1199.98px) {
  .text {
    padding-top: 4rem;
  }
}

/*SECCION QUE DIFERENCIA*/
.display-text {
  font-size: clamp(2.5rem, 3.5vw, 6.5rem);
  font-family: 'Work Sans', sans-serif;
  padding-top: 3rem;
}
.img-fondo {
  background-size: contain;
  background-position: top center; /* Ancla la imagen arriba para que no se separe del título */
  background-repeat: no-repeat;
  z-index: 1; /* Capa de fondo */
}

.cards-container {
  position: relative; /* Necesario para que z-index funcione */
  z-index: 2;
  /* En móviles, quitamos el padding gigante y la altura mínima */
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Solo en pantallas grandes (Escritorio) aplicamos el espacio para la imagen */
@media (min-width: 992px) {
  .cards-container {
    min-height: 80vh;
    padding-top: 0rem;
  }
}

@media (min-width: 1400px) {
  .cards-container {
    min-height: 80vh;
    padding-top: 30rem;
  }
  .img-fondo {
    background-size: 80%; /* Ajusta este porcentaje para hacer la imagen más chica */
  }
}

.cards-one {
  background-color: #00b1bc;
  width: 100%; /* Fluido en móviles para que no se salga */
  max-width: 22rem; /* Tope de ancho para que no se vea gigante */

  border-radius: 25px;
}

.card-title {
  width: 80%;
}

.card-text {
  width: 90%;
}

/* Estilos específicos para la sección de Diferencia con fondo responsivo */
.hero-diferencia {
  background-image: var(--bg-desktop);
}

@media (max-width: 991.98px) {
  .hero-main-2{
    padding-top: 40px;
  }
  .hero-diferencia {
    background-image: var(--bg-mobile);
  }

  .display-text{
    padding-top: 0rem;
  }

  .cards-container{
    padding-top: 0rem;
  }
}

@media (max-width: 991.98px) {
  .hero-diferencia {
    background-image: var(--bg-mobile);
  }

  .display-text{
    padding-top: 0rem;
  }
}
@media (max-width: 400px){
  .card-title {
  width: 90%;
}
}
</style>
