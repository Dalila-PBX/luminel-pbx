<script setup lang="ts">
import { marketingData } from '@/data/marketing';
</script>

<template>
  <section>
    <div
      class="section-meta position-relative pb-5"
      :style="{ backgroundImage: `url(${marketingData.planesBackground})` }"
    >
      <div class="container pt-xl-0 pt-lg-5 pt-0">
        <div class="row align-items-center position-relative m-0 pt-xl-0 pt-lg-5 pt-4">
          <div class="col-12 text-end img-top d-none d-xl-block">
            <img src="/img/marketing/google.png" alt="" class="img-fluid google-img" />
          </div>
          <div class="col-12 mb-lg-5 mt-5 mt-lg-0">
            <h1
              class="fw-bold titulo-principal text-center text-light text-uppercase mb-4 mb-lg-5"
              v-motion-slide-visible-top
              :delay="200"
              :duration="1200"
            >
              Planes de <br />
              <span style="color: #93d642">Posicionamiento</span>
            </h1>
            <p class="mx-auto planes-text text-white text-lg-center">
              En Luminel impulsamos tu marca con estrategias publicitarias efectivas en redes
              sociales y Google Ads. Creamos campañas diseñadas para conectar con tu audiencia
              ideal, aumentar tu visibilidad y convertir cada clic en una oportunidad real de
              crecimiento.
            </p>
          </div>

          <div class="container section-cards">
            <div class="row mt-5 justify-content-center">
              <div
                v-for="(card, index) in marketingData.cardsPlanes"
                :key="index"
                :class="[
                  'col-12 mb-4 mb-xl-0',
                  index === 0 ? 'col-md-6 col-xl-4' : 'col-md-6 col-xl-8',
                ]"
              >
                <div
                  class="card h-100 border-0 text-white"
                  :class="{ 'card-special': index === 1 }"
                  :style="
                    index === 1
                      ? {
                          '--bg-desktop': `url(${card.bgImg})`,
                          '--bg-mobile': `url(${card.bgImgMobile || card.bgImg})`,
                        }
                      : { backgroundImage: `url(${card.bgImg})` }
                  "
                >
                  <div
                    class="card-body d-flex flex-column justify-content-between"
                    :class="{ 'w-xl-50': index === 1 }"
                  >
                    <!-- Grupo superior: Título y lista -->
                    <div>
                      <h2 class="card-title fw-bold text-center text-uppercase mx-auto mb-0 lh-1">
                        {{ card.title }}
                      </h2>
                      <p class="text-light fw-bold fst-italic small text-center">
                        {{ card.publicaciones }}
                      </p>
                      <p
                        class="text-light costo-instalacion fst-italic fw-bold text-center"
                        style="margin-top: -16px"
                      >
                        Costo de instalaciòn: $1,500 MXN
                      </p>
                      <div class="row precio-content justify-content-center align-items-center">
                        <p class="col-auto precio fw-bold text-light mt-0 p-0">
                          {{ card.precio }}
                        </p>
                        <span
                          class="col-auto moneda fst-italic fw-bold text-start text-light ps-2 h6"
                          style="margin-bottom: 0.2rem"
                          >+IVA <br />MXN</span
                        >
                      </div>
                      <p
                        class="mensual-text small fst-italic text-white text-center fw-bold"
                        style="margin-top: -30px"
                      >
                        {{ card.nota }}
                      </p>

                      <ul
                        class="list-unstyled lista-planes small text-start text-dark fw-bold px-5"
                      >
                        <li v-for="(item, index) in card.lista" :key="index" class="mb-lg-4 mb-2">
                          <i class="bi bi-check-circle-fill me-2" style="color: #4b7a27"></i
                          >{{ item }}
                        </li>
                      </ul>
                    </div>
                    <!-- Grupo inferior: Subtítulo, precio y botón -->
                    <div>
                      <a
                        href="https://wa.me/5215587894847"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-sm custom-btn-despegar fw-semibold text-white mx-auto mt-4 mb-4 d-block p-2"
                        :style="{ '--btn-color': card.btnColor }"
                        >Despegar &#x1F680;</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p class="mx-auto term-condiciones small text-center text-white mb-1 mt-5 pt-5">
            *Utilizamos los contenidos generados por los mismos clientes. En caso de requerir que la
            agencia se encargue del diseño de estos materiales, se aplicará un costo adicional.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-meta {
  min-height: 80vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  z-index: 20;
  overflow-x: clip; /* Corta el desbordamiento horizontal (quita el scroll) */
  overflow-y: visible; /* Mantiene visible el desbordamiento vertical (la imagen saliendo por arriba) */
}

.titulo-principal {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(2rem, 8vw, 5rem);
  line-height: 1;
}

.planes-text {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  width: 70%;
}

.img-izq {
  min-height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.img-grande {
  transform: scale(1.2); /* Aumenta el tamaño un 20%. Cambia a 1.3 o más si la quieres más grande */
  transform-origin: center; /* La imagen crece desde el centro hacia afuera */
}

.google-img {
  width: 30%;
}

.contenido-text {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.1rem);
}

/*-----CARDS-----*/
.card {
  background-color: transparent;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px; /* Bordes redondeados */

  overflow: hidden; /* Asegura que la imagen de fondo respete los bordes redondeados */
}

/* Estilos específicos para la segunda tarjeta (index 1) */
.card-special {
  background-image: var(--bg-desktop);
  background-size: 100% 100%;
  background-position: center;
}

.w-xl-50 {
  width: 100%; /* Por defecto ocupa todo el ancho (móvil/tablet) */
}

.card-title {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(2.7rem, 4vw, 3.3rem);
  width: 85%;
  margin-top: 2rem;
}

.precio {
  font-size: clamp(3rem, 4vw, 3rem);
  text-shadow: 0px 6px 12px rgba(0, 0, 0, 0.8);
}
.moneda {
  text-shadow: 0px 6px 12px rgba(0, 0, 0, 0.8);
}

.costo-instalacion {
  font-size: clamp(0.7rem, 2vw, 0.75rem);
}
.mensual-text {
  margin-bottom: 8rem;
}

.term-condiciones {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  width: 75%;
}

@media (min-width: 1200px) {
  .img-top {
    margin-top: -200px;
  }
  .google-img {
    margin-right: -200px; /* Aplica el desplazamiento solo en pantallas grandes (Desktop) */
  }

  /* Solo en pantallas grandes aplicamos el ancho del 50% al texto */
  .w-xl-50 {
    width: 50% !important;
  }
}

@media (max-width: 1199.98px) {
  .card-special {
    background-image: var(--bg-mobile) !important; /* Cambia la imagen en pantallas < 1200px */
  }
}

@media (max-width: 992px) {
  .planes-text {
    width: 100%;
  }
  .lista-planes {
    line-height: 2;
  }
}
@media (max-width: 768px) {
  .custom-btn {
    width: 130px;
  }
  .card-title {
    width: 80%;
  }
  .term-condiciones {
    width: 100%;
  }
  .lista-planes {
    line-height: 2.7;
  }
}

@media (max-width: 576px) {
  .lista-planes {
    line-height: 2;
  }
}
.custom-btn-despegar {
  width: 60%; /* largo del boton */
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  border-radius: 25px;
  background-color: var(--btn-color);
  border-color: var(--btn-color);
  transition: filter 0.3s ease;
}

.custom-btn-despegar:hover {
  filter: brightness(1.1);

}
</style>
