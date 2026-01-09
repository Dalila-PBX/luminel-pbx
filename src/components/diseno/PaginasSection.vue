<script setup lang="ts">
import { disenoData } from '@/data/diseno';
</script>

<template>
  <!----------- PYMES------------ -->
  <section>
    <div
      class="section-pagina position-relative d-flex"
      :style="{ backgroundImage: `url(${disenoData.paginaPymesBackground})` }"
      id="pymes-section"
    >
      <div class="container mt-4 mb-xl-5">
        <div class="row">
          <div
            class="col-12 col-xl-4 position-relative d-flex justify-content-center align-items-start mb-5 mb-xl-0"
          >
            <div
              class="text-content position-relative p-2 pt-0 pt-xl-5"
              v-motion-slide-visible-left
              :delay="200"
              :duration="1200"
            >
              <h1
                class="fw-bold text-light display-2 text-uppercase mb-lg-2 mb-0 paginas-title pb-lg-3 pb-0 text-center text-xl-start"
                style="margin-top: 3rem"
              >
                PÁGINAS WEB PARA <span style="color: #74a352">PYMES</span>
              </h1>
              <!-- Contenedor para alinear el botón igual que el título -->
              <!-- <div class="text-center text-xl-start">
                <a
                  href="#"
                  class="btn btn-sm custom-btn text-uppercase fw-semibold text-light"
                  style="background-color: #416624"
                  >ver ejemplo</a
                >
              </div> -->
            </div>
          </div>
          <div
            v-for="plan in disenoData.paginasPymes"
            :key="plan.title"
            class="col-12 col-md-6 col-xl-4 mb-4 mb-xl-0"
          >
            <div
              class="card h-100 border-0 text-white"
              :style="{ backgroundImage: `url(${plan.bgImg})` }"
            >
              <div class="card-body d-flex flex-column justify-content-between">
                <!-- Grupo superior: Título y lista -->
                <div>
                  <h2
                    class="card-title display-4  text-center text-uppercase mx-auto"
                    :style="{ color: plan.color }"
                  >
                    {{ plan.title }}
                  </h2>
                  <ul class="list-unstyled small text-start px-5">
                    <li v-for="(item, index) in plan.lista" :key="index" class="mb-lg-3 mb-3">
                      <i class="bi bi-check-circle-fill me-2" style="color: #4b7a27"></i>{{ item }}
                    </li>
                  </ul>
                </div>
                <!-- Grupo inferior: Subtítulo, precio y botón -->
                <div class="grupo-inferior">
                  <h4 class="card-subtitle mb-0 text-center fw-bold">{{ plan.subtitle }}</h4>
                  <p class="text-center small fw-bold m-0">{{ plan.desc1 }}</p>
                  <p class="text-center small fw-bold">{{ plan.desc2 }}</p>
                  <p class="h3 precio fw-bold text-center text-light mt-2">
                    {{ plan.precio }}
                    <span class="moneda fw-bold text-center text-light h6">MXN+IVA</span>
                  </p>
                  <a
                    href="https://wa.me/5215587894847"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-sm custom-btn-despegar fw-semibold mx-auto mt-3 d-block"
                    >Despegar &#x1F680;</a
                  >
                  <p class="condicion text-center fst-italic mt-3">
                    *Siempre y cuando renueve año tras año el Plan de Diseño
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!----------- EMPRESAS ------------ -->
  <section>
    <div
      class="section-pagina position-relative d-flex"
      :style="{ backgroundImage: `url(${disenoData.paginaEmpresasBackground})` }"
    >
      <div class="container mt-4 mb-xl-5">
        <div class="row">
          <div
            v-for="plan in disenoData.paginasEmpresas"
            :key="plan.title"
            class="col-12 col-md-6 col-xl-4 mb-4 mb-xl-0"
          >
            <div
              class="card h-100 border-0 text-white"
              :style="{ backgroundImage: `url(${plan.bgImg})` }"
            >
              <div class="card-body d-flex flex-column justify-content-between">
                <!-- Grupo superior: Título y lista -->
                <div>
                  <h2
                    class="card-title display-4  text-center text-uppercase mx-auto"
                    :style="{ color: plan.color }"
                  >
                    {{ plan.title }}
                  </h2>
                  <ul class="list-unstyled small text-start px-5 pt-4">
                    <li v-for="(item, index) in plan.lista" :key="index" class="mb-lg-3 mb-3">
                      <i class="bi bi-check-circle-fill me-2" style="color: #4b7a27"></i>{{ item }}
                    </li>
                  </ul>
                </div>
                <!-- Grupo inferior: Subtítulo, precio y botón -->
                <div class="grupo-inferior">
                  <h4 class="card-subtitle mb-0 text-center fw-bold">{{ plan.subtitle }}</h4>
                  <p class="text-center small fw-bold m-0">{{ plan.desc1 }}</p>
                  <p class="text-center small fw-bold">{{ plan.desc2 }}</p>
                  <p class="h3 precio fw-bold text-center text-light mt-2">
                    {{ plan.precio }}
                    <span class="moneda fw-bold text-center text-light h6">MXN+IVA</span>
                  </p>
                  <a
                    href="https://wa.me/5215587894847"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-sm custom-btn-despegar fw-semibold mx-auto mt-3 d-block"
                    >Despegar &#x1F680;</a
                  >
                  <p class="condicion text-center fst-italic mt-3">
                    *Siempre y cuando renueve año tras año el Plan de Diseño
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-xl-4 position-relative d-flex justify-content-center align-items-start mb-5 mb-xl-0 order-first order-xl-last"
            v-motion-slide-visible-right
            :delay="200"
            :duration="1200"
          >
            <div class="text-content position-relative p-2 pt-0 pt-xl-5">
              <h1
                class="fw-bold text-light display-2 text-uppercase mb-lg-2 mb-0 paginas-title-second pb-lg-3 pb-0 text-center text-xl-start"
              >
                PÁGINAS WEB PARA <span style="color: #00b1bc">EMPRESAS</span>
              </h1>
              <!-- Contenedor para alinear el botón igual que el título -->
              <!-- <div class="text-center text-xl-start">
                <a
                  href="#"
                  class="btn btn-sm custom-btn text-uppercase fw-semibold text-light"
                  style="background-color: #00b1bc"
                  >ver ejemplo</a
                >
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!----------- TIENDAS EN LINEA ------------ -->
  <section>
    <div
      class="section-pagina position-relative d-flex"
      :style="{ backgroundImage: `url(${disenoData.paginaTiendaBackground})` }"
    >
      <div class="container mt-4 mb-xl-5">
        <div class="row">
          <div
            class="col-12 col-xl-4 position-relative d-flex justify-content-center align-items-start mb-5 mb-xl-0"
          >
            <div
              class="text-content position-relative p-2 pt-0 pt-xl-5"
              v-motion-slide-visible-left
              :delay="200"
              :duration="1200"
            >
              <h1
                class="fw-bold text-light display-2 text-uppercase mb-lg-2 mb-0 paginas-title-third pb-lg-3 pb-0 text-center text-xl-start"
              >
                PÁGINAS WEB PARA
                <span class="shadow-title" style="color: #a0d435">TIENDAS EN LÍNEA</span>
              </h1>
              <!-- Contenedor para alinear el botón igual que el título -->
              <!-- <div class="text-center text-xl-start">
                <a
                  href="#"
                  class="btn btn-sm custom-btn text-uppercase fw-semibold text-light"
                  style="background-color: #084542"
                  >ver ejemplo</a
                >
              </div> -->
            </div>
          </div>
          <div
            v-for="plan in disenoData.paginasTienda"
            :key="plan.title"
            class="col-12 col-md-6 col-xl-4 mb-4 mb-xl-0"
          >
            <div
              class="card h-100 border-0 text-white"
              :style="{ backgroundImage: `url(${plan.bgImg})` }"

            >
              <div class="card-body  d-flex flex-column justify-content-between">
                <!-- Grupo superior: Título y lista -->
                <div >
                  <h2
                    class="card-title display-5 text-center text-uppercase mx-auto"
                    :style="{ color: plan.color }"
                  >
                    {{ plan.title }}
                  </h2>
                  <ul class="list-unstyled small text-start px-5 ">
                    <li v-for="(item, index) in plan.lista" :key="index" class="mb-lg-2  mb-2">
                      <i class="bi bi-check-circle-fill me-2" style="color: #4b7a27"></i>{{ item }}
                    </li>
                  </ul>
                </div>
                <!-- Grupo inferior: Subtítulo, precio y botón -->
                <div class="grupo-inferior">
                  <h4 class="card-subtitle mb-0 text-center fw-bold">{{ plan.subtitle }}</h4>
                  <p class="text-center small fw-bold m-0">{{ plan.desc1 }}</p>
                  <p class="text-center small fw-bold">{{ plan.desc2 }}</p>
                  <p class="h3 precio fw-bold text-center text-light mt-2">
                    {{ plan.precio }}
                    <span class="moneda fw-bold text-center text-light h6">MXN+IVA</span>
                  </p>
                  <a
                    href="https://wa.me/5215587894847"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-sm custom-btn-despegar fw-semibold mx-auto mt-3 d-block"
                    >Despegar &#x1F680;</a
                  >
                  <p class="condicion text-center fst-italic mt-3">
                    *Siempre y cuando renueve año tras año el Plan de Diseño
                  </p>
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
.section-pagina {
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding-bottom: 8rem;
}
/*cambios*/
.paginas-title {
  font-family: 'Work Sans', sans-serif;
  text-shadow: 0px 10px 18px rgba(0, 0, 0, 0.3);
}

.custom-btn {
  width: 60%; /* largo del boton */
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  border-radius: 25px;
}

.card {
  background-color: transparent;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.card-title {
  font-family: 'Work Sans', sans-serif;
  width: 85%;
  margin-bottom: 13rem;
  margin-top: 3rem;
  font-weight: 800;
}

.grupo-inferior{
  padding-right: 15px;
}
.card-subtitle {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1rem, 1vw + 0.75rem, 1.3rem);
  color: #00b1bc;
  width: 90%;
  margin: auto;
}

.custom-btn-despegar {
  width: 60%; /* largo del boton */
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  border-radius: 25px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  transition: all 0.3s ease;
}

.custom-btn-despegar:hover {
  background-color: white;
  color: #000; /* Texto negro para contrastar con el fondo blanco */
  transform: scale(1.05); /* Pequeño zoom al pasar el mouse */
}

.condicion {
  font-size: 0.7rem;
}

.paginas-title-second {
  font-family: 'Work Sans', sans-serif;
  text-shadow: 0px 10px 18px rgba(0, 0, 0, 0.3);
  margin-top: 3rem;
}

.paginas-title-third {
  font-family: 'Work Sans', sans-serif;
  text-shadow: 0px 10px 18px rgba(0, 0, 0, 0.3);
  margin-top: 3rem;
}

.shadow-title {
  text-shadow: 6px 10px 13px rgba(0, 0, 0, 3);
}



@media (max-width: 991.98px) {
  .condicion {
    width: 70%;
    margin: auto;
  }
}

@media (max-width: 768px) {
  .custom-btn {
    width: 130px;
  }
  .card-title {
    width: 60%;
  }
}

@media (min-width: 1200px) {
  .paginas-title-second {
    margin-top: 0rem;
  }
  .paginas-title-third {
    margin-top: 0rem;
  }
}

@media (max-width: 400px){
  .card-title {
    width: 70%;
  }
}
</style>
