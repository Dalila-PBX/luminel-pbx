<script setup lang="ts">
  import { disenoData} from '@/data/diseno';

  import { ref } from 'vue';


  interface CardItem {
    id: number;
    title: string;
    content: string;
    isOpen: boolean;
    color: string;
  }

  const items = ref<CardItem[]>([
    {
      id: 1,
      title: 'Escuchamos tus ideas',
      content: '¿Qué necesitas realmente?',
      isOpen: false,
      color: '#2797ab' // Verde
    },
    {
      id: 2,
      title: 'Planeamos tu sitio',
      content: 'Wireframes, estructura, navegación.',
      isOpen: false,
      color: '#6ed624' // Azul
    },
    {
      id: 3,
      title: 'Diseñamos con pasión',
      content: 'UI que conecta y fluye.',
      isOpen: false,
      color: '#43bac4' // Naranja
    },
    {
      id: 4,
      title: 'Ejecutamos cada proyecto con rapidez y excelencia',
      content: 'Código limpio, optimizado, maquetado profesional.',
      isOpen: false,
      color: '#ed8c15' // Naranja
    },
    {
      id: 5,
      title: 'Lanzamos y evaluamos',
      content: 'Acompañamos y ajustamos.',
      isOpen: false,
      color: '#f5d62a' // Naranja
    },
  ]);

  // Función para alternar el estado de abierto/cerrado
  const toggleCard = (id: number) => {
    items.value.forEach((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
      } else {
        item.isOpen = false;
      }
    });
  };
</script>

<template>
  <section>
    <div
      class="section-hacemos position-relative d-flex justify-content-center align-items-center"
      :style="{backgroundImage: `url(${disenoData.hacemos.bgDesktop})`}">

      <div class="w-100">
        <div class="container mt-lg-5">
          <div class="row align-items-center">

            <div
                class="col-lg-6 col-12  img-izq"
                :style="{backgroundImage: `url(${disenoData.hacemos.imgIzq})`}"
                v-motion-fade-visible
                :delay="200"
                :duration="4000">

            </div>
            <div class="col-lg-6 col-12 position-relative d-flex justify-content-center align-items-center"
            >
              <div class="text-content  position-relative p-3 pt-5 pt-lg-0">
                <h1 class="fw-bold text-uppercase mb-lg-2 mb-0 hacemos-title pb-lg-3 pb-4 mt-lg-5 text-center text-lg-start">¿QUÉ HACEMOS?</h1>
                <p class="mx-auto  hacemos-text mb-1">
                  <ul class="text-light">
                    <li class="mb-3 mb-lg-3">UI/UX personalizado.</li>
                    <li class="mb-3 mb-lg-3">Desarrollo responsivo (móvil, tablet, desktop).</li>
                    <li class="mb-3 mb-lg-3">WordPress / CMS a medida.</li>
                    <li class="mb-3 mb-lg-3">Tiendas online (E-commerce).</li>
                    <li class="mb-3 mb-lg-3">Integraciones (formulario, chat, CRM).</li>
                    <li class="mb-3 mb-lg-3">SEO técnico y optimización de velocidad.</li>
                    <li class="mb-3 mb-lg-3">Diseño accesible y escalable.</li>
                  </ul>
                </p>
              </div>


            </div>
          </div>
        </div>

        <div class="container pt-5 mt-5"
            v-motion-slide-visible-top
            :delay="200"
            :duration="1200">
              <div class="row justify-content-center align-items-center">
                <div class="col-12 pb-0">
                  <h2
                    class="display-text-1 text-white text-center fw-semibold mb-0 mb-lg-4"
                  >El camino de tu <span class="display-text-2 text-uppercase fw-bold"> <br> Proyecto Web </span></h2>
                </div>
              </div>
        </div>
        <div class="container-fluid p-0 mt-5">
          <div class="row g-0">

            <div
              v-for="item in items"
              :key="item.id"
              class="col-12 col-md"
            >
              <div class="card border-0 shadow-sm rounded-0">


                <div class="card-body card-body-fixed-height d-flex flex-column justify-content-between align-items-center p-lg-4 pb-0" :style="{backgroundColor: item.color}" >

                  <div class="mb-3 w-100 text-end text-light">
                    <h2 class="number">{{ String(item.id).padStart(2, '0') }}</h2 >
                  </div>

                  <h5 class="card-title text-center text-light fw-bold mb-0">{{ item.title }}</h5>

                  <!-- Botón Toggle -->
                  <button
                    class="btn-toggle position-relative"
                    @click="toggleCard(item.id)"
                    :class="{ 'active': item.isOpen }"
                    aria-label="Toggle details"
                  ><i class="bi bi-arrow-down-circle-fill toggle-icon"></i>
                  </button>
                </div>


                <div class="smooth-collapse" :class="{ 'expanded': item.isOpen }">
                  <div class="smooth-collapse-content">
                    <div class="card-footer border-0 px-3 pt-3 pb-4 text-light" :style="{ backgroundColor: item.color }">
                      <p class="text-card m-0 text-center fw-bold" style="color: #075854">
                        {{ item.content }}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="container mt-lg-5 mt-4 mb-5">
          <div class="row align-items-start pt-lg-5 ">
            <div
                class="col-lg-8 col-12  img-izq2"
                :style="{backgroundImage: `url(${disenoData.hacemos.imgIzq2})`}"
                v-motion-slide-visible-left
                :delay="200"
                :duration="1200">

            </div>
            <div class="col-lg-4 col-12 mb-5 position-relative d-flex justify-content-center justify-content-lg-start align-items-start"
                v-motion-slide-visible-right
                :delay="200"
                :duration="1200">>
              <div class="sitio-info position-relative p-3 pt-5 pt-lg-0">
                <h1 class="fw-bold text-uppercase lh-1 mb-lg-2 mb-0 sitio-title pb-lg-0 pb-4 pt-0 pt-lg-5 text-lg-start text-start">SITIO RESPONSIVO</h1>
                <p class="sitio-text  text-light mb-1">Tu sitio se adapta a cualquier dispositivo, ofreciendo una experiencia fluida y atractiva en todas las pantallas.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Línea verde con texto en loop infinito -->
        <div class="container-fluid green-line">
          <div class="row align-items-center">
            <div class="container rounded overflow-hidden">
              <div class="slider">

                <div class="slide-track">
                  <p>Diseñamos experiencias que brillan en cualquier dispositivo</p>
                </div>
                <div class="slide-track">
                  <p>Diseñamos experiencias que brillan en cualquier dispositivo</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid green-line-2">
          <div class="row align-items-center">
            <div class="container rounded overflow-hidden">
              <div class="slider">

                <div class="slide-track">
                  <p>Diseñamos experiencias que brillan en cualquier dispositivo</p>
                </div>
                <div class="slide-track">
                  <p>Diseñamos experiencias que brillan en cualquier dispositivo</p>
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
  .section-hacemos{
    min-height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .img-izq{
    min-height: 600px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (max-width: 991.98px) {
    .img-izq {
      min-height: 300px; /* Reducimos la altura a la mitad en móviles */
    }
    /* Forzamos un padding menor en el texto para quitar la separación excesiva */
    .text-content {
      padding-top: 1rem !important;
    }
  }

  .hacemos-title{
    font-family: 'Work Sans', sans-serif;
    font-size: clamp(2rem, 4.5vw + 1rem, 5rem);
    color: #00b1bc;

  }

  .hacemos-text{
    font-family: 'Work Sans', sans-serif;
    font-size: clamp(0.8rem, 2vw, 1.1rem);

  }

  .display-text-1{
    font-family: 'Work Sans', sans-serif;
    font-size: clamp(1rem, 4vw + .7rem, 3rem);
    line-height: .9;
  }
  .display-text-2{
    font-family: 'Work Sans', sans-serif;
    font-size: clamp(2rem, 4.5vw + 1rem, 5rem);
    text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
  }

/* Estilos de la tarjeta */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
  overflow: hidden;
  background-color: transparent;
}

.card-body-fixed-height {
  min-height: 340px;
}



.card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.card-title {
  /* Evita que palabras muy largas rompan el layout de la tarjeta */
  overflow-wrap: break-word;
  font-size: clamp(1rem, 1vw + 0.75rem, 1.3rem);
}

.text-card{
  font-size: clamp(.8rem, 1vw + 0.75rem, 1rem);
}

.number{
  font-size: clamp(2rem, 2.5vw, 5rem);
}


.btn-toggle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}


.toggle-icon {
  font-size: 40px;
  color: #075854;
  line-height: 1;
}

.btn-toggle.active {
  transform: rotate(180deg);
}


.smooth-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s ease-out;
}

.smooth-collapse.expanded {
  grid-template-rows: 1fr;
}

.smooth-collapse-content {
  overflow: hidden;
}




 .sitio-title{
    font-family: 'Work Sans', sans-serif;
    font-size: clamp(2rem, 4.5vw + 1rem, 4rem);
    color: #67d81c

  }
  .sitio-text{
    font-family: 'Work Sans', sans-serif;
    font-size: clamp(0.8rem, 2vw, 1.1rem);
     width: 100%;
  }

  .img-izq2{
    min-height: 700px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

  }

  @media (max-width: 991.98px) {
    .img-izq2 {
      min-height: 250px; /* Reducimos la altura a la mitad en móviles */
    }
    /* Forzamos un padding menor en el texto para quitar la separación excesiva */
    .text-content {
      padding-top: 1rem !important;
    }
  }

  @media(max-width: 768px){
  .section-hacemos{
    min-height: 65vh;
    margin-top: -70px;
  }

  .card-body-fixed-height{
    min-height: 280px;
  }


}

@media (min-width: 992px) {
  .sitio-info {
    margin-left: -13rem; /* Mueve el texto hacia la izquierda para acercarlo a la imagen */
    z-index: 2; /* Asegura que el texto esté visible si se solapa */
  }
}



/*-----GREEN LINE----*/
.green-line{
  background-color: #00b1bc;
  padding: 1rem 0;
}

.green-line-2{
  background-color: #64b82c;
  padding: 1rem 0;
}

.slider {

  animation: slidein 25s linear infinite;
  white-space: nowrap;
}

.slide-track {

  width: 100%;
  display: inline-block;
}

.slide-track p {
  margin: 0;
  color: white;
  font-weight: 600;
  font-family: 'Work Sans', sans-serif;
  font-style: italic;
  font-size: clamp(0.66rem, 2.5vw, 2.6rem);
  text-transform: uppercase;
  text-align: center;
}

@keyframes slidein {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@media (max-width:400px){
  .slide-track p {
  font-size: clamp(0.6rem, 2.5vw, 2.6rem);

}
}
</style>
