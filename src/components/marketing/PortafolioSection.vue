<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { marketingData } from '@/data/marketing';

// Datos de ejemplo para el portafolio (imágenes de Pexels como en tu ejemplo)
const portfolioItems = ref([
  {
    id: 1,
    image: '/img/marketing/img-posts/post-1.png',
    title: 'Proyecto 1',
  },
  {
    id: 2,
    image: '/img/marketing/img-posts/post-2.jpg',
    title: 'Proyecto 2',
  },
  {
    id: 3,
    image: '/img/marketing/img-posts/post-3.jpg',
    title: 'Proyecto 3',
  },
  {
    id: 4,
    image: '/img/marketing/img-posts/post-4.jpg',
    title: 'Proyecto 4',
  },
  {
    id: 5,
    image: '/img/marketing/img-posts/post-5.jpg',
    title: 'Proyecto 5',
  },
  {
    id: 6,
    image: '/img/marketing/img-posts/post-6.jpg',
    title: 'Proyecto 6',
  },
  {
    id: 7,
    image: '/img/marketing/img-posts/post-7.jpg',
    title: 'Proyecto 7',
  },
  {
    id: 8,
    image: '/img/marketing/img-posts/post-8.png',
    title: 'Proyecto 8',
  },
  {
    id: 9,
    image: '/img/marketing/img-posts/post-9.png',
    title: 'Proyecto 9',
  },
  {
    id: 10,
    image: '/img/marketing/img-posts/post-10.png',
    title: 'Proyecto 10',
  },
  {
    id: 11,
    image: '/img/marketing/img-posts/post-11.png',
    title: 'Proyecto 11',
  },
  {
    id: 12,
    image: '/img/marketing/img-posts/post-12.png',
    title: 'Proyecto 12',
  },
  {
    id: 13,
    image: '/img/marketing/img-posts/post-13.jpg',
    title: 'Proyecto 13',
  },
  {
    id: 14,
    image: '/img/marketing/img-posts/post-14.png',
    title: 'Proyecto 14',
  },
  {
    id: 15,
    image: '/img/marketing/img-posts/post-15.png',
    title: 'Proyecto 15',
  },
  {
    id: 16,
    image: '/img/marketing/img-posts/post-16.png',
    title: 'Proyecto 16',
  },
  {
    id: 17,
    image: '/img/marketing/img-posts/post-17.png',
    title: 'Proyecto 17',
  },
  {
    id: 18,
    image: '/img/marketing/img-posts/post-18.png',
    title: 'Proyecto 18',
  },
  {
    id: 19,
    image: '/img/marketing/img-posts/post-19.png',
    title: 'Proyecto 19',
  },
]);

const currentIndex = ref(0);
const isAnimating = ref(false);

// Función para determinar la clase de posición de cada tarjeta (Lógica 3D)
const getCardClass = (index: number) => {
  const length = portfolioItems.value.length;
  // Calculamos la distancia relativa circular
  const offset = (index - currentIndex.value + length) % length;

  if (offset === 0) return 'center';
  if (offset === 1) return 'right-1';
  if (offset === 2) return 'right-2';
  if (offset === length - 1) return 'left-1';
  if (offset === length - 2) return 'left-2';
  return 'hidden';
};

const nextSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentIndex.value = (currentIndex.value + 1) % portfolioItems.value.length;
  setTimeout(() => (isAnimating.value = false), 700); // 700ms coincide con la transición CSS
};

const prevSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentIndex.value =
    (currentIndex.value - 1 + portfolioItems.value.length) % portfolioItems.value.length;
  setTimeout(() => (isAnimating.value = false), 700);
};

const goToSlide = (index: number) => {
  if (isAnimating.value || index === currentIndex.value) return;
  isAnimating.value = true;
  currentIndex.value = index;
  setTimeout(() => (isAnimating.value = false), 700);
};

// Soporte para teclado
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
};

// Soporte para gestos táctiles (Swipe)
let touchStartX = 0;
const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0]?.screenX || 0;
};
const handleTouchEnd = (e: TouchEvent) => {
  const touchEndX = e.changedTouches[0]?.screenX || 0;
  if (Math.abs(touchStartX - touchEndX) > 50) {
    if (touchEndX < touchStartX) nextSlide();
    else prevSlide();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <section
    class="portafolio-section py-5   position-relative overflow-hidden"
    :style="{ backgroundImage: `url(${marketingData.portafolioBackground})` }"
  >
    <div class="container ">
      <div class="row justify-content-center mb-5 ">
        <div class="col-12 text-center pt-lg-5 pt-5 ">
          <h2
            class="title-portafolio display-1 fw-bold text-uppercase text-light"
            v-motion-fade-visible:
            :delay="200"
            :duration="1200"
          >
            Nuestro <br /><span class="text-capitalize display-3 fw-bold" style="color: #f2ebb8"
              >Portafolio</span
            >
          </h2>
        </div>
      </div>

      <div
        class="carousel-container position-relative mx-auto "
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Botón Izquierda (Bootstrap classes) -->
        <button class="btn nav-arrow left d-none d-md-flex" @click="prevSlide">
          <i class="bi bi-chevron-left"></i>
        </button>

        <!-- Track del Carrusel -->
        <div class="carousel-track " >
          <div
            v-for="(item, index) in portfolioItems"
            :key="item.id"
            class="card-3d"
            :class="getCardClass(index)"
            @click="goToSlide(index)"
          >
            <img :src="item.image" :alt="item.title" class="card-img" />
          </div>
        </div>

        <!-- Botón Derecha (Bootstrap classes) -->
        <button class="btn nav-arrow right d-none d-md-flex" @click="nextSlide">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>

      <!-- Puntos de navegación -->
      <div class="dots d-flex justify-content-center mt-5 gap-2">
        <div
          v-for="(item, index) in portfolioItems"
          :key="'dot-' + item.id"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portafolio-section {
  min-height: 90vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title-portafolio {
  font-family: 'Work Sans', sans-serif;
  line-height: 0.7;
}

/* Contenedor principal del carrusel */
.carousel-container {
  width: 100%;
  max-width: 1000px;
  height: 400px;
  perspective: 2000px; /* Clave para el efecto 3D */
  z-index: 2;
}

.carousel-track {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-style: preserve-3d;
}

/* Tarjeta 3D Base */
.card-3d {
  position: absolute;
  width: 350px; /* Aumentamos el tamaño base para que la escala 1 sea grande */
  height: 350px;
  background: #1f1f1f;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  will-change: transform; /* Optimiza el renderizado */
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.7s;
  filter: brightness(0.6); /* Oscurecer las inactivas */
  image-rendering: -webkit-optimize-contrast; /* Mejora la nitidez en Chrome/Safari */
}

/* --- Estados de Posición 3D --- */
.card-3d.center {
  z-index: 10;
  transform: scale(1) translateZ(0); /* Escala 1 para evitar interpolación borrosa */
  box-shadow: 0 30px 60px -10px rgba(0, 177, 188, 0.3); /* Sombra cyan */
  border-color: #00b1bc;
}

.card-3d.center .card-img {
  filter: brightness(1);
}

.card-3d.left-1 {
  z-index: 5;
  transform: translateX(-240px) scale(0.8) translateZ(-50px) rotateY(8deg);
  opacity: 0.8;
}
.card-3d.left-2 {
  z-index: 1;
  transform: translateX(-450px) scale(0.6) translateZ(-200px) rotateY(15deg);
  opacity: 0.5;
}
.card-3d.right-1 {
  z-index: 5;
  transform: translateX(240px) scale(0.8) translateZ(-50px) rotateY(-8deg);
  opacity: 0.8;
}
.card-3d.right-2 {
  z-index: 1;
  transform: translateX(450px) scale(0.6) translateZ(-200px) rotateY(-15deg);
  opacity: 0.5;
}
.card-3d.hidden {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
}

/* Botones de navegación personalizados */
.nav-arrow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #00b1bc;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  transition:
    transform 0.3s,
    background-color 0.3s;
}

.nav-arrow:hover {
  transform: translateY(-50%) scale(1.1);
  background-color: #008f96;
}

.nav-arrow.left {
  left: -20px;
}
.nav-arrow.right {
  right: -20px;
}

/* Puntos */
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: #00b1bc;
  transform: scale(1.3);
}

/* Responsive */
@media (max-width: 992px) {
  .card-3d {
    width: 280px;
    height: 280px;
  }
  .card-3d.left-1 {
    transform: translateX(-180px) scale(0.85) translateZ(-50px) rotateY(8deg);
  }
  .card-3d.right-1 {
    transform: translateX(180px) scale(0.85) translateZ(-50px) rotateY(-8deg);
  }
  .card-3d.left-2 {
    transform: translateX(-320px) scale(0.7) translateZ(-200px) rotateY(15deg);
  }
  .card-3d.right-2 {
    transform: translateX(320px) scale(0.7) translateZ(-200px) rotateY(-15deg);
  }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 300px;
  }
  .card-3d {
    width: 220px;
    height: 220px;
  }
  .nav-arrow {
    width: 40px;
    height: 40px;
  }
  /* En móviles ocultamos las tarjetas lejanas para evitar scroll horizontal */
  .card-3d.left-2,
  .card-3d.right-2 {
    opacity: 0;
    pointer-events: none;
  }
  .card-3d.left-1 {
    transform: translateX(-120px) scale(0.85) translateZ(-50px) rotateY(5deg);
  }
  .card-3d.right-1 {
    transform: translateX(120px) scale(0.85) translateZ(-50px) rotateY(-5deg);
  }
}
</style>
