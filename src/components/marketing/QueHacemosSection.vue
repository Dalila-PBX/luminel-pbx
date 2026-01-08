<script setup lang="ts">
import { marketingData } from '@/data/marketing';
</script>

<template>
  <section>
    <div
      class="section-hacemos position-relative"
      :style="{ backgroundImage: `url(${marketingData.hacemosBackground})` }"
    >
      <div class="container-fluid ps-0 pt-5 pb-5 pe-0">
        <div class="row align-items-center position-relative m-0">
          <div class="col-6 img-top ps-0">
            <img :src="marketingData.hacemos.imgLeft" class="img-fluid w-100 img-izq" />
          </div>

          <div class="col-6 pe-0">
            <div
              class="reales-box text-light text-uppercase text-start py-2"
              v-motion-slide-visible-left
              :delay="200"
              :duration="1200"
            >
              QUÉ<br />
              HACEMOS
            </div>
          </div>
        </div>
      </div>

      <div class="section-cards container">
        <div class="row justify-content-center position-relative content-layer">
          <div class="col-12 col-lg-4 mb-4 mb-lg-0 text-center">
            <img
              src="/img/marketing/RECUADRO.png"
              class="img-fluid custom-card-img"
              alt="Recuadro servicio"
            />
          </div>
          <div class="col-12 col-lg-4 mb-4 mb-lg-0 text-center card-desplazada">
            <img
              src="/img/marketing/RECUADRO2.png"
              class="img-fluid custom-card-img"
              alt="Recuadro servicio"
            />
          </div>
          <div class="col-12 col-lg-4 mb-4 mb-lg-0 text-center">
            <img
              src="/img/marketing/RECUADRO3.png"
              class="img-fluid custom-card-img"
              alt="Recuadro servicio"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="section-presencia position-relative"
      :style="{ backgroundImage: `url(${marketingData.presenciaBackground})` }"
    >
      <div class="row justify-content-center position-relative m-0">
        <div class="col-6 d-none p-0 d-lg-block">
          <img class="img-compu" src="/img/marketing/escribiendo_en_compu.png" alt="" />
        </div>

        <div
          class="col-12 col-lg-6 mb-4 mb-lg-0 d-flex align-items-center p-5 card-presencia-container"
        >
          <div
            class="card border-0 text-dark bg-white mt-5 mt-lg-0"
            v-motion-slide-visible-right
            :delay="200"
            :duration="1200"
          >
            <div class="card-body d-flex flex-column justify-content-center">
              <h2 class="card-title fw-bold text-start pb-3">
                Creamos <span style="color: #357372">presencia, <br /> </span>no solo publicaciones
              </h2>
              <p class="card-text text-start text-black fw-semibold">
                En Luminel transformamos tu marca en una conversación constante con su audiencia.
                Creamos planes que unen estrategia, diseño y datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-hacemos {
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible; /*permite que los elem hijos se vean incliso si se sale de la seccion*/
  z-index: 10;
}

.img-izq {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* Para controlar el apilamiento */
  z-index: 2;
}

.reales-box {
  background-color: #a8c738;
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;
  line-height: 1;
  font-size: clamp(1.5rem, 8vw, 5rem); /* Tamaño de fuente responsivo */
  margin-top: -15rem;
  width: 130%;
  margin-left: -30%;
  position: relative;
  z-index: 1;
  padding-left: 25%;
  box-sizing: border-box; /* Asegura que el padding NO aumente el tamaño total del rectángulo */
}

.section-presencia {
  min-height: 100vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;
}

.card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.5rem, 1rem + 2.5vw, 2.3rem);
}
.card-text {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
}
.img-compu {
  width: 80%;
}

@media (min-width: 1200px) {
  .img-top {
    margin-top: -400px;
  }
  .card-desplazada {
    margin-top: 35rem;
  }

  .section-presencia {
    padding-bottom: 8rem;
  }
}
@media (min-width: 992px) {
  .section-cards {
    padding-bottom: 15rem;
  }
  .reales-box {
    padding-left: 35%;
  }

  .section-presencia {
    padding-top: 8rem;
  }
  .card-body {
    padding: 5rem;
  }

  .card-presencia-container {
    transform: translateX(
      -10rem
    ); /* Usamos transform para no afectar el layout de otros elementos */
    position: relative;
    z-index: 2;
  }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .card-body {
    padding: 5rem;
  }
}

@media (max-width: 1199.98px) {
  .img-top {
    margin-top: -270px;
  }

  .reales-box {
    margin-top: -5rem;
  }
}

@media (max-width: 991.98px) {
  .img-top {
    margin-top: -270px;
  }

  .custom-card-img {
    width: 70%;
  }

  .section-presencia {
    min-height: 50vh;
  }
}

@media (max-width: 767.98px) {
  .img-top {
    margin-top: -200px;
  }
}

@media (max-width: 575.98px) {
  .img-top {
    margin-top: -120px;
  }
}
</style>
