<script setup lang="ts">
import { marketingData } from '@/data/marketing';
</script>

<template>
  <section>
    <div
      class="section-marketing position-relative py-5"
      :style="{ backgroundImage: `url(${marketingData.marketingBackground})` }"
    >
      <div class="container">
        <div class="row align-items-center position-relative m-0 p-lg-5">
          <div class="col-12 text-center mb-5 mb-lg-5">
            <h1
              class="fw-bold titulo-principal text-light text-uppercase mb-lg-5"
              v-motion-slide-visible-top
              :delay="200"
              :duration="1200"
            >
              marketing de <br />
              <span style="color: #00b1bc">contenido</span>
            </h1>
          </div>

          <div class="col-12 row align-items-center m-0 p-0">
            <div class="col-lg-6 col-12 d-none d-lg-block img-izq">
              <img
                src="/img/marketing/MANEJODEREDES.png"
                class="img-fluid w-100 img-grande"
                alt=""
              />
            </div>

            <div
              class="col-lg-6 col-12 position-relative d-flex justify-content-center align-items-center"
            >
              <div class="text-content position-relative p-lg-5 pt-0 pt-lg-5">
                <p class="mx-auto contenido-text text-white mb-1">
                  En Luminel transformamos ideas en estrategias que comunican, inspiran y generan
                  conexión real. Creemos que cada marca tiene una historia única, y el contenido
                  correcto puede iluminarla frente a su audiencia, creando vínculos auténticos y
                  memorables. <br /><br />
                  Creamos contenido que combina creatividad y estrategia. Cada publicación, texto o
                  visual está pensado para reflejar la esencia de tu marca, captar atención y
                  convertir seguidores en comunidad. No es solo contenido: es una experiencia que
                  impulsa tu presencia digital y hace que tu marca brille con propósito.
                </p>
              </div>
            </div>
          </div>

          <div class="container mt-5 mb-xl-5">
            <div class="row mt-lg-5 mt-5 justify-content-center card-stack-row">
              <div
                v-for="card in marketingData.cardsLumi"
                :key="card.title"
                class="col-12 col-md-6 col-xl-4 mb-4 mb-xl-0"
              >
                <div
                  class="card h-100 border-0 text-white"
                  :style="{ backgroundImage: `url(${card.bgImg})` }"
                >
                  <div class="card-body d-flex flex-column justify-content-between">
                    <!-- Grupo superior: Título y lista -->
                    <div>
                      <h2 class="card-title fw-bold text-center text-uppercase mx-auto mb-0 lh-1">
                        {{ card.title }}
                      </h2>
                      <p class="text-light fw-bold small text-center" style="margin-top: -5px">
                        {{ card.publicaciones }}
                      </p>
                      <div class="row precio-content justify-content-center align-items-center">
                        <p class="col-auto precio fw-bold text-light mt-2 p-0">
                          {{ card.precio }}
                        </p>
                        <span
                          class="col-auto moneda fst-italic fw-bold text-start text-light ps-2 h6"
                          style="margin-bottom: 0.2rem"
                          >+IVA <br />MXN</span
                        >
                      </div>
                      <p
                        class="mensual-text small fst-italic text-white text-center text-uppercase fw-bold"
                        style="margin-top: -30px"
                      >
                        {{ card.nota }}
                      </p>

                      <ul class="list-unstyled  small text-start text-dark fw-bold px-5">
                        <li v-for="(item, index) in card.lista" :key="index" class="mb-lg-3  lista-cards">
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

          <p class="mx-auto term-condiciones text-center text-white mb-1 mt-5 pt-5">
            *Nosotros, como agencia, trabajamos con las redes sociales previamente creadas y
            proporcionadas por el cliente. Nos reservamos el derecho de crear nuevas cuentas, como
            medida de protección a su privacidad
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-marketing {
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.titulo-principal {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(3rem, 9vw, 5rem);
  line-height: 1;
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
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* Sombra */
  overflow: hidden; /* Asegura que la imagen de fondo respete los bordes redondeados */
}

.card-title {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(3rem, 4.5vw, 3.5rem);
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
.mensual-text {
  margin-bottom: 10rem;
}

.term-condiciones {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  width: 75%;
}

@media (min-width: 1200px) {
  .card-stack-row > .col-xl-4 {
    position: relative;
    transition: transform 0.3s ease-in-out;
  }

  .card-stack-row > .col-xl-4:nth-child(2) {
    z-index: 2;
    transform: scale(1.05);
  }

  .card-stack-row > .col-xl-4:nth-child(1) {
    z-index: 1;
    transform: translateX(50px) scale(0.95);
  }

  .card-stack-row > .col-xl-4:nth-child(3) {
    z-index: 1;
    transform: translateX(-50px) scale(0.95);
  }
}
@media (max-width: 768px) {
  .custom-btn {
    width: 130px;
  }
  .card-title {
    width: 60%;
  }
  .term-condiciones {
    width: 100%;
  }
  .lista-cards{
    margin-bottom: .5rem;
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

@media (max-width: 400px){
  .card-title {
    width: 70%;
  }

  .small {
  font-size: 0.850em;
  }
  }

  .lista-cards{
    margin-bottom: 1rem;
  }
</style>
