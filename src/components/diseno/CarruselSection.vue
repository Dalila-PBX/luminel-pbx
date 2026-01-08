<script setup lang="ts">
import { disenoData } from '@/data/diseno';
import { ref, computed } from 'vue';

interface Slide {
  id: number;
  image: string;
}

const slides = ref<Slide[]>([
  {
    id: 1,
    image: '/img/diseno/Website-01.png',
  },
  {
    id: 2,
    image: '/img/diseno/Website-02.png',
  },
  {
    id: 3,
    image: '/img/diseno/Website-03.png',
  },
  {
    id: 4,
    image: '/img/diseno/Website-04.png',
  },
  {
    id: 5,
    image: '/img/diseno/Website-05.png',
  },
]);

const slideIndex = ref(0);

const handlePrevSlide = () => {
  slideIndex.value--;
};

const handleNextSlide = () => {
  slideIndex.value++;
};

const displaySlides = computed(() => {
  const len = slides.value.length;
  if (len === 0) return [];

  const range = 3;
  const result = [];

  for (let i = -range; i <= range; i++) {
    const realIndex = slideIndex.value + i;
    const contentIndex = ((realIndex % len) + len) % len;
    const slide = slides.value[contentIndex];
    const offset = i;
    const dir = offset === 0 ? 0 : offset > 0 ? 1 : -1;

    result.push({
      ...slide,
      uniqueKey: `slide-${realIndex}`, // Clave única basada en la posición histórica
      offset,
      dir,
      active: offset === 0,
    });
  }
  return result;
});

// Lógica para Swipe/Drag (Mouse y Touch)
const dragStartX = ref(0);
const isDragging = ref(false);

const onDragStart = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true;
  dragStartX.value = 'touches' in e ? (e.touches[0]?.clientX ?? 0) : (e as MouseEvent).clientX;
};

const onDragEnd = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  isDragging.value = false;

  const dragEndX =
    'changedTouches' in e ? (e.changedTouches[0]?.clientX ?? 0) : (e as MouseEvent).clientX;
  const threshold = 50;

  if (dragEndX < dragStartX.value - threshold) {
    handleNextSlide();
  } else if (dragEndX > dragStartX.value + threshold) {
    handlePrevSlide();
  }
};
</script>

<template>
  <!-- Contenedor principal para el fondo y el carrusel -->

  <div
    class="carrusel-container hero-main position-relative"
    :style="{
      backgroundImage: `url(${disenoData.carruselBackground})
    `,
    }"
    style="padding-top: 130px"
  >
    <!-- Título posicionado absolutamente para no afectar el flujo del carrusel -->
    <div
      class="container position-absolute top-0 start-50 translate-middle-x pt-5 mt-5"
      style="z-index: 20"
    >
      <div
        class="row justify-content-center align-items-center"
        v-motion-slide-visible-bottom
        :delay="200"
        :duration="1200"
      >
        <div class="col-12 pb-0">
          <h2 class="text-center display-4 fw-bold display-text-1 text-uppercase">
            más de <span class="display-text-2"> 50 sitios web </span> creados
          </h2>
        </div>
      </div>
    </div>

    <section
      class="slides-wrapper d-flex align-items-center justify-content-center"
      @mousedown="onDragStart"
      @touchstart="onDragStart"
      @mouseup="onDragEnd"
      @touchend="onDragEnd"
      @mouseleave="onDragEnd"
    >
      <div class="slides">
        <!-- Botón Anterior -->
        <button class="prev-slide-btn" @click="handlePrevSlide">
          <i class="bi bi-chevron-double-left"></i>
        </button>

        <!-- Bucle de Slides -->
        <div
          v-for="slide in displaySlides"
          :key="slide.uniqueKey"
          class="slide"
          :data-active="slide.active"
          :style="{
            '--offset': slide.offset,
            '--dir': slide.dir,
          }"
        >
          <div
            class="slide-content"
            :style="{
              backgroundImage: `url('${slide.image}')`,
              opacity: Math.abs(slide.offset) > 2 ? 0 : slide.active ? 1 : 0.7,
            }"
          >
            <div class="slide-content-inner"></div>
          </div>
        </div>

        <!-- Botón Siguiente -->
        <button class="next-slide-btn" @click="handleNextSlide">
          <i class="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-main {
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding: 5rem 0;
}

.display-text-1 {
  font-family: 'Work Sans', sans-serif;
  line-height: 0.9;
  color: #075854;
}
.display-text-2 {
  font-family: 'Work Sans', sans-serif;
  color: #00b1bc;
}
.carrusel-container {
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slides-wrapper {
  min-height: 500px;
  width: 100%;
  overflow: hidden;
  user-select: none;
}

@media (min-width: 768px) {
  .slides-wrapper {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .slides-wrapper {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .slides-wrapper {
    width: 1170px;
  }
}

.slides {
  display: grid;
  position: relative;
}

.slides > .slide {
  grid-area: 1 / -1;
}

.slide-content {
  width: 250px;
  height: 370px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  display: grid;
  align-content: center;
  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(100% * var(--offset)))
    rotateY(calc(-45deg * var(--dir)));
  border-radius: 1px;
}

.slide-content-inner {
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  opacity: 0;
  padding: 1rem;
  text-align: center;
}

.slide-description {
  margin: 1rem 0 0;
  font-size: 0.8rem;
  letter-spacing: 0.2ch;
}

.slide[data-active='true'] .slide-content-inner {
  opacity: 1;
}

.slide[data-active='true'] .slide-content {
  opacity: 1;
  transform: perspective(1000px);
}

.prev-slide-btn,
.next-slide-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  color: #00b1bc;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  position: absolute;
  font-size: 2.5rem;
  width: 5rem;
  height: 5rem;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
  opacity: 0.7;
  z-index: 5;
  cursor: pointer;
}

.prev-slide-btn:hover,
.next-slide-btn:hover {
  opacity: 1;
}

.prev-slide-btn {
  left: -190%;
}

.next-slide-btn {
  right: -190%;
}

@media (max-width: 1199.98px) {
  .prev-slide-btn {
    left: -150%;
  }
  .next-slide-btn {
    right: -150%;
  }
}

@media (max-width: 991.98px) {
  .prev-slide-btn {
    left: -106%;
  }
  .next-slide-btn {
    right: -106%;
  }
}

@media (max-width: 767.98px) {
  .prev-slide-btn {
    left: -50%;
  }
  .next-slide-btn {
    right: -50%;
  }
  .slide-content {
    width: 200px;
    height: 300px;
  }
}
</style>
