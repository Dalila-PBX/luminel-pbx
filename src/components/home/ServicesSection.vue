<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { homeData } from '@/data/home';

// Duplica la lista 3 veces (9 items) para garantizar un scroll infinito fluido
// Esto evita que las tarjetas "crucen" la pantalla al reciclarse.
const carouselItems = ref([...homeData.services, ...homeData.services, ...homeData.services]);

onMounted(() => {
  const getElements = () => Array.from(document.querySelectorAll('#carousel > div'));

  const updateClasses = (items: Element[], selectedIndex: number) => {
    items.forEach((el) => (el.className = '')); // Limpiar clases anteriores

    const count = items.length;
    // Función auxiliar para obtener índice circular (wrap around)
    const getIndex = (i: number) => (i + count) % count;

    // Asignamos las clases a los vecinos inmediatos
    items[selectedIndex]?.classList.add('selected');
    items[getIndex(selectedIndex - 1)]?.classList.add('prev');
    items[getIndex(selectedIndex + 1)]?.classList.add('next');

    // Manejo de los elementos ocultos (para que no se amontonen)
    items.forEach((el, i) => {
      if (el.className === '') {
        // Calculamos la distancia más corta al seleccionado
        let dist = (i - selectedIndex + count) % count;
        if (dist > count / 2) dist -= count;

        // Si está a la izquierda (negativo), hideLeft. Si no, hideRight.
        if (dist < 0) el.classList.add('hideLeft');
        else el.classList.add('hideRight');
      }
    });
  };

  const moveToSelected = (target: string | number) => {
    const items = getElements();
    const selectedIndex = items.findIndex((el) => el.classList.contains('selected'));
    let newIndex = selectedIndex;

    if (target === 'next') {
      newIndex = (selectedIndex + 1) % items.length;
    } else if (target === 'prev') {
      newIndex = (selectedIndex - 1 + items.length) % items.length;
    } else if (typeof target === 'number') {
      newIndex = target;
    }

    updateClasses(items, newIndex);
  };

  // Inicialización
  const items = getElements();
  if (items.length > 0) {
    // Empezamos seleccionando el del medio para tener buffer a ambos lados
    updateClasses(items, Math.floor(items.length / 2));
  }

  // Eventos
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveToSelected('prev');
    if (e.key === 'ArrowRight') moveToSelected('next');
  });

  // Lógica de Swipe (Deslizar) para Mouse y Touch
  const carousel = document.getElementById('carousel');
  let touchStartX = 0;
  let touchEndX = 0;

  const handleSwipe = () => {
    if (touchEndX < touchStartX - 50) moveToSelected('next'); // Deslizar a la izquierda -> Siguiente
    if (touchEndX > touchStartX + 50) moveToSelected('prev'); // Deslizar a la derecha -> Anterior
  };

  if (carousel) {
    carousel.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0]?.screenX || 0;
      },
      { passive: true },
    );

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0]?.screenX || 0;
      handleSwipe();
    });

    carousel.addEventListener('mousedown', (e) => {
      touchStartX = e.screenX;
    });

    carousel.addEventListener('mouseup', (e) => {
      touchEndX = e.screenX;
      handleSwipe();
    });
  }

  // Botones
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn) prevBtn.addEventListener('click', () => moveToSelected('prev'));
  if (nextBtn) nextBtn.addEventListener('click', () => moveToSelected('next'));
});
</script>

<template>
  <div class="container-fluid section_services bg-light position-relative pt-5">
    <!-- Capa de imagen de fondo (El "jamón" del sándwich) -->
    <div
      class="services-bg-layer position-absolute bottom-0 start-0 w-100 h-50"
      :style="{ backgroundImage: `url(${homeData.servicesBackground})` }"
    ></div>

    <div class="row justify-content-center align-items-center position-relative content-layer">
      <div
        class="col-12 titulo_principal text-center mb-4"
        v-motion-slide-visible-top
        :delay="200"
        :duration="1500"
      >
        <h2 class="fw-bold">NUESTROS SERVICIOS</h2>
      </div>

      <!-- Botón Anterior (Izquierda) -->
      <div class="col-auto nav-btn-container">
        <button
          id="prevBtn"
          class="btn rounded-circle p-2 p-md-3 lh-1 custom-nav-btn bg-transparent border-0"
        >
          <i class="bi bi-chevron-double-left"></i>
        </button>
      </div>

      <div class="col">
        <!-- Contenedor del Carrusel -->
        <div id="carousel">
          <!-- Renderizado dinámico de las tarjetas -->
          <div v-for="(item, index) in carouselItems" :key="index">
            <!-- Tarjeta con fondo de color dinámico -->
            <div class="card h-100 border-0 text-white" :style="{ backgroundColor: item.bgColor }">
              <img class="card-img-top" :src="item.img" :alt="item.title" />
              <div class="card-body d-flex flex-column justify-content-center">
                <h2 class="card-title fw-bold text-center text-uppercase">{{ item.title }}</h2>
                <p class="card-text text-center small text-black fw-semibold px-3">
                  {{ item.desc }}
                </p>
                <RouterLink
                  :to="item.link"
                  class="btn mt-auto btn-sm align-self-center custom-btn fw-semibold text-white"
                  :style="{ '--btn-color': item.btnColor }"
                  >VER MÁS</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botón Siguiente (Derecha) -->
      <div class="col-auto nav-btn-container">
        <button
          id="nextBtn"
          class="btn rounded-circle p-2 p-md-3 lh-1 custom-nav-btn bg-transparent border-0"
        >
          <i class="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section_services {
  padding-bottom: 15rem;
}
.titulo_principal h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(3rem, 1rem + 6vw, 4.5rem);

  color: #008092;
}
/* Estilos personalizados para el efecto 3D */
#carousel {
  position: relative;
  left: 60px;
  height: 600px; /* Altura base */
  overflow: hidden;
  width: 90%;
}

#carousel > div {
  position: absolute;
  transition:
    transform 1s ease-in-out,
    left 1s ease-in-out,
    top 1s ease-in-out,
    opacity 1s ease-in-out,
    width 1s ease-in-out;
  opacity: 1;
  top: 50%;
  transform: translateY(-50%);
  cursor: grab; /*permite arrastrar*/
}

/* Estilos para la tarjeta interna */
#carousel > div .card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.5rem, 1rem + 2.5vw, 2.3rem);
}

.custom-btn {
  width: 100px; /*largo del boton*/
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  background-color: var(--btn-color);
  border-color: var(--btn-color);
  transition: filter 0.3s ease;
}

.custom-btn:hover {
  filter: brightness(1.5); /* Aumenta el brillo un 20% al pasar el mouse */
}

.custom-nav-btn {
  color: #00b1bc;
}

.custom-nav-btn:hover {
  background-color: transparent;
  color: #008f96;
}

/* --- LÓGICA DE POSICIONES Y TAMAÑOS (RESPONSIVO) --- */

/* Elemento Oculto Izquierda */
#carousel > div.hideLeft {
  left: 0%;
  opacity: 0;
  transform: translateY(-50%) translateX(-50%);
  width: 25%;
  z-index: 0; /* Detrás de todo */
}

/* Elemento Oculto Derecha */
#carousel > div.hideRight {
  left: 100%;
  opacity: 0;
  transform: translateY(-50%) translateX(-50%);
  width: 25%;
  z-index: 0; /* Detrás de todo */
}

/* Previo (Inmediato izquierda) */
#carousel > div.prev {
  z-index: 5;
  left: 25%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0.85;
  width: 25%;
}

/* SELECCIONADO (Centro) */
#carousel > div.selected {
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 1;
  width: 25%;
}

/* Siguiente (Inmediato derecha) */
#carousel > div.next {
  z-index: 5;
  left: 75%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0.85;
  width: 25%;
}

.card-img-top {
  height: 200px;
  object-fit: contain;
  width: 100%;
  /* padding: 10px; */
}

/* --- MEDIA QUERIES PARA VISTA DE UNA TARJETA (hasta 1200px) --- */
@media (max-width: 1199.98px) {
  .section_services {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
  #carousel {
    height: 500px;
    width: 100%;
    left: 0px;
  }

  /* En móvil quitamos la transición de 'top' para evitar cualquier movimiento vertical visual */
  #carousel > div {
    transition:
      transform 1s ease-in-out,
      left 1s ease-in-out,
      opacity 1s ease-in-out,
      width 1s ease-in-out;
  }

  /*
    Forzamos que TODAS las tarjetas tengan el mismo ancho en móvil.
    Esto evita que se "deformen" (cambien de ancho) al transicionar de .prev/.next a .selected.
  */
  #carousel > div.selected,
  #carousel > div.prev,
  #carousel > div.next,
  #carousel > div.hideLeft,
  #carousel > div.hideRight {
    width: 320px; /* Ancho fijo de 500px */
    max-width: 90%;
  }

  #carousel > div.selected {
    left: 50%;
    top: 50% !important;
  }

  #carousel > div.prev {
    left: -50%;
    opacity: 0;
  }
  #carousel > div.next {
    left: 150%;
    opacity: 0;
  }

  /* Aseguramos que los elementos ocultos estén lejos y no estorben */
  #carousel > div.hideLeft {
    left: -150%;
    opacity: 0;
  }
  #carousel > div.hideRight {
    left: 250%;
    opacity: 0;
  }

  /* Ocultar el fondo en pantallas menores a 1200px */
  .services-bg-layer {
    display: none;
  }
}

/* --- MEDIA QUERY PARA MÓVILES PEQUEÑOS (ej. 360px) --- */
@media (max-width: 380px) {
  /* Ocultamos los botones y su contenedor para dar todo el ancho al carrusel */
  .nav-btn-container {
    display: none;
  }

  /* Ajustamos el ancho de la tarjeta para aprovechar el espacio liberado */
  #carousel > div.selected,
  #carousel > div.prev,
  #carousel > div.next,
  #carousel > div.hideLeft,
  #carousel > div.hideRight {
    width: 290px;
    max-width: 100%;
  }
}

/* --- MEDIA QUERY PARA ESCRITORIO (1200px+) --- */
@media (min-width: 1200px) {
  .section_services {
    padding-bottom: 0rem;
  }

  .custom-nav-btn {
    font-size: 2.5rem;
  }

  #prevBtn {
    position: relative;
    transform: translateX(60px);
    z-index: 20;
  }

  #nextBtn {
    position: relative;
    transform: translateX(-60px);
    z-index: 20;
  }

  #carousel > div.selected {
    top: 40%;
  }
}

/* --- CAPA DE FONDO (IMAGEN) --- */
.services-bg-layer {
  background-size: 100% auto;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index: 0;
}

.content-layer {
  z-index: 1;
}
</style>
