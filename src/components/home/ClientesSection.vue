<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { homeData } from '@/data/home';
import * as bootstrap from 'bootstrap';

const carouselRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (carouselRef.value) {
    new bootstrap.Carousel(carouselRef.value, {
      interval: 5000, // Opcional: Cambia de slide cada 5 segundos
      touch: true, // Opcional: Permite deslizar en móviles
    });
  }
});
</script>

<template>
  <section
    class="hero-main d-flex align-items-center"
    :style="{ backgroundImage: `url(${homeData.clientesBackground})` }"
  >
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12">
          <h2
            class="fw-bold display-text text-center mb-4 text-uppercase text-center"
            v-html="homeData.clientes.title"
            v-motion-slide-visible-bottom
            :delay="200"
            :duration="1200"

          ></h2>

          <div
            id="custCarousel"
            class="carousel slide text-center"
            ref="carouselRef"
            data-bs-ride="carousel"
          >
            <!-- slides -->
            <!-- Bucle para generar cada slide del carrusel dinámicamente -->
            <div class="carousel-inner">
              <div
                v-for="(testimonial, index) in homeData.clientes.testimonials"
                :key="testimonial.id"
                :class="['carousel-item', { active: index === 0 }]"
              >
                <!-- Contenedor de la tarjeta con la imagen de plantilla como fondo -->
                <div
                  class="testimonial-card mx-auto"
                  :style="{
                    '--bg-desktop': `url(${homeData.clientes.testimonialBg})`,
                    '--bg-mobile': `url(${homeData.clientes.testimonialBgMobile})`,
                  }"
                >
                  <!-- Contenido del testimonio que se superpone al fondo -->
                  <div class="carousel-caption d-block h-100">
                    <div class="testimonial">
                      <div class="user mb-4">
                        <img
                          class="user-image"
                          :src="testimonial.personImage"
                          :alt="`Foto de ${testimonial.name}`"
                        />
                        <div class="user-info">
                          <p class="user-name fw-bold">{{ testimonial.name }}</p>
                          <p class="user-category">{{ testimonial.title }}</p>
                        </div>
                      </div>
                      <p>{{ testimonial.quote }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Left right -->
            <!-- Los controles de flecha no necesitan cambios -->
            <!-- <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#custCarousel"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#custCarousel"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button> -->

            <!-- Thumbnails -->
            <!-- Bucle para generar las miniaturas (fotos de personas) dinámicamente -->
            <ol class="carousel-indicators list-inline">
              <li
                v-for="(testimonial, index) in homeData.clientes.testimonials"
                :key="testimonial.id"
                class="list-inline-item"
              >
                <a
                  :id="`carousel-selector-${index}`"
                  :class="{ active: index === 0 }"
                  :data-bs-slide-to="index"
                  data-bs-target="#custCarousel"
                >
                  <img
                    :src="testimonial.personImage"
                    class="img-fluid"
                    :alt="`Foto de ${testimonial.name}`"
                  />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-main {
  padding-bottom: 8rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.display-text {
  font-size: clamp(2.5rem, 3.5vw, 6.5rem);
  font-family: 'Work Sans', sans-serif;
  padding-top: 3rem;
  color: #075854;
}

/* --- NUEVOS ESTILOS PARA LA TARJETA DE TESTIMONIO --- */

.testimonial-card {
  width: 100%;
  max-width: 700px; /* Ancho máximo para la tarjeta */
  height: 388px; /* Altura fija para la tarjeta */
  background-image: var(--bg-desktop); /* Por defecto usa la de escritorio */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.carousel-caption {
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testimonial {
  position: relative;
  display: inline-block;
  width: 100%; /* Ocupa el ancho disponible */
  max-width: 600px; /* Pero no te pases de 600px */
  padding: 0;
  border-radius: 10px;
  color: hsl(0, 0%, 0%);
  background-color: transparent;
  text-align: left;
}
.user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.user-image {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
  padding: 3px;
  background-color: white;
  border: 3px solid #075854;
}

.user-name {
  color: #075854;
  font-size: 1.5rem;
  margin: 0em 0.5em;
}

.user-category {
  margin: 0.5em 1em;
  color: #075854;
  font-size: 0.8rem;
}

/*CARRUSEL CLASES*/
#custCarousel .carousel-indicators {
  position: static;
  margin-top: 0;
}

#custCarousel .carousel-indicators > li {
  width: 100px;
  height: 100px; /* contenedor sea cuadrado para un círculo perfecto */
  background-color: transparent; /* Quitamos fondos que pueda poner bootstrap */
  border: 0; /* Quitamos bordes que pueda poner bootstrap */
}

#custCarousel .carousel-indicators li img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  opacity: 0.6;
  padding: 3px; /* ESTE ES EL ESPACIO BLANCO que querías */
  background-color: white;
  border: 3px solid transparent;
  transition: all 0.3s ease-in-out;
}

#custCarousel .carousel-indicators li a.active img {
  opacity: 1;
  border-color: #075854;
  transform: scale(1.15);
}

#custCarousel .carousel-indicators li:hover img {
  opacity: 1;
}

.carousel-inner {
  padding: 20px 0 0 0;
}

/* --- MEDIA QUERIES PARA RESPONSIVE (Móviles y Tablets) --- */
@media (max-width: 768px) {
  .hero-main {
    padding-bottom: 4rem; /* Reducimos el espacio inferior en móviles */
  }

  .testimonial {
    width: 70%;
  }
  .testimonial-card {
    height: auto; /* Altura automática para que el texto crezca hacia abajo si es necesario */
    min-height: 500px; /* Mantenemos la altura mínima de la plantilla */
    padding: 1.5rem;
    background-image: var(--bg-mobile); 
    /* Hacemos que el fondo no se encoja, manteniendo el tamaño que tiene en 768px */
    /* El fondo se recortará en los lados en pantallas más pequeñas, pero no se hará más pequeño */
    background-size: 533px;
  }

  #custCarousel .carousel-indicators > li {
    width: 55px; /* Reducimos las miniaturas para que quepan las 5 en una fila */
    height: 55px;
  }

  .user-image {
    width: 60px; /* Ajustamos un poco la imagen principal */
    height: 60px;
  }

  .user-name {
    margin: -0.3em 0.5em;
    line-height: 1;
  }

  p {
    margin-top: -7px;
    margin-bottom: 7rem;
  }
}

@media (max-width: 470px) {
  .testimonial {
    width: 85%;
  }
}
</style>
