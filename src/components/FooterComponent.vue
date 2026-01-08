<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { isLoading } from '@/composables/useGlobalLoader';
import WhatsappChatComponent from './WhatsappChatComponent.vue';

const currentYear = new Date().getFullYear();

// Referencias a elementos del DOM
const footerRef = ref<HTMLElement | null>(null);
const spacerRef = ref<HTMLElement | null>(null);
const cascadeTextRef = ref<HTMLElement | null>(null);
const footerDetailsRef = ref<HTMLElement | null>(null);

// Estado para la animación
let lastScroll = 0;
let isScrollingDown = true;
let isFooterVisible = false;
let observer: IntersectionObserver | null = null;
let resizeObserver: ResizeObserver | null = null;

// Función que gestiona las clases de animación
const updateAnimations = () => {
  if (!isFooterVisible || !cascadeTextRef.value || !footerDetailsRef.value) return;

  const cascadeText = cascadeTextRef.value;
  const footerDetails = footerDetailsRef.value;

  if (isScrollingDown) {
    // Bajando -> animación de entrada (aparece)
    if (cascadeText.classList.contains('animate-down')) return;

    // Reiniciar animación
    cascadeText.classList.remove('animate-up');
    void cascadeText.offsetWidth; // Trigger reflow para reiniciar CSS animation
    cascadeText.classList.add('animate-down');

    footerDetails.classList.remove('animate-up');
    footerDetails.classList.add('animate-down');
  } else {
    // Subiendo -> animación de salida (desaparece hacia arriba)
    if (cascadeText.classList.contains('animate-up')) return;

    cascadeText.classList.remove('animate-down');
    void cascadeText.offsetWidth;
    cascadeText.classList.add('animate-up');

    footerDetails.classList.remove('animate-down');
    footerDetails.classList.add('animate-up');
  }
};

// Detectar dirección del scroll
const handleScroll = () => {
  const currentScroll = window.scrollY;
  if (Math.abs(currentScroll - lastScroll) > 0) {
    isScrollingDown = currentScroll > lastScroll;
    updateAnimations();
  }
  lastScroll = currentScroll;
};

const isScrolled = ref(false);
const isMenuOpen = ref(false);

// Clases dinámicas para el contenedor del header
const headerClasses = computed(() => {
  return {
    'header-scrolled': isScrolled.value || isMenuOpen.value,
  };
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (footerRef.value && spacerRef.value) {
    // 1. Sincronizar la altura del espaciador con la altura real del footer
    // Esto asegura que el scroll de la página tenga el espacio correcto para revelar el footer
    resizeObserver = new ResizeObserver(() => {
      if (footerRef.value && spacerRef.value) {
        spacerRef.value.style.height = `${footerRef.value.offsetHeight}px`;
      }
    });
    resizeObserver.observe(footerRef.value);

    // 2. Detectar cuando el espaciador entra en pantalla para activar animaciones
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isFooterVisible = entry.isIntersecting;
        updateAnimations();
      });
    });
    observer.observe(spacerRef.value);
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) observer.disconnect();
  if (resizeObserver) resizeObserver.disconnect();
});
</script>

<template>
  <!-- Espaciador invisible: Ocupa espacio en el flujo normal para permitir el scroll -->
  <div ref="spacerRef" class="position-relative z-1 bg-transparent pe-none"></div>

  <!-- Footer Fijo: Se queda quieto al fondo y es revelado por el scroll -->
  <footer
    ref="footerRef"
    class="footer-color text-white text-center position-fixed bottom-0 start-0 w-100 z-0 overflow-hidden py-5 d-flex align-items-center min-vh-50"
    :class="[headerClasses, { 'd-none': isLoading }]"
  >
    <div class="container h-100 d-flex flex-column justify-content-center">
      <!-- Texto en Cascada (Reemplaza al Logo) -->
      <div class="row justify-content-center mb-4">
        <div class="col-12">
          <!-- Usamos LUMINEL para la animación, separado en spans para el efecto cascada -->
          <h2
            ref="cascadeTextRef"
            class="cascade-text m-0 fw-bold lh-1 text-white d-flex justify-content-center overflow-hidden"
          >
            <span>L</span><span>u</span><span>m</span><span>i</span><span>n</span><span>e</span
            ><span>l</span>
          </h2>
        </div>
      </div>

      <!-- Contenedor animado con el contenido del footer -->
      <div ref="footerDetailsRef" class="footer-details">
        <div class="row justify-content-center">
          <div class="col-12">
            <h2 class="footer-subtitle m-0 mb-4 lh-1 text-white">AGENCIA CREATIVA</h2>
            <!-- Links de Navegación -->
            <ul class="nav justify-content-center flex-wrap fw-bold text-uppercase mb-4">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link mx-2 mx-md-3">Inicio</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/nosotros" class="nav-link mx-2 mx-md-3">Nosotros</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/branding" class="nav-link mx-2 mx-md-3">Branding</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/diseno" class="nav-link mx-2 mx-md-3">Diseño web</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/marketing" class="nav-link mx-2 mx-md-3">Marketing</RouterLink>
              </li>
            </ul>

            <!-- Iconos Sociales -->
            <div class="d-flex justify-content-center align-items-center gap-3 mb-4">
              <a
                href="https://www.facebook.com/luminelagenciacreativa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/img/header-footer/icono_fb.png" alt="Facebook" class="social-icon" />
              </a>
              <a
                href="https://wa.me/5215587894847"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img
                  src="/img/header-footer/icono_whatsapp.png"
                  alt="WhatsApp"
                  class="social-icon"
                />
              </a>
              <a
                href="https://www.tiktok.com/@luminel_agencia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <img src="/img/header-footer/icono_tiktok.png" alt="TikTok" class="social-icon" />
              </a>
            </div>

            <!-- Política y Copyright -->
            <div class="footer-bottom">
              <RouterLink
                to="/politica-privacidad"
                class="nav-link d-inline-block mb-2 text-uppercase"
              >
                Política de Privacidad
              </RouterLink>
              <p class="mb-0 small text-white-50">
                &copy; {{ currentYear }} Luminel Agencia Creativa by PBXHosting. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Componente de WhatsApp (Descomentar si se tiene el archivo) -->
    <!-- <WhatsappChatComponent /> -->
  </footer>
  <WhatsappChatComponent v-if="!isLoading" />
</template>

<style scoped>
.footer-color {
  background: url('/img/header-footer/FOOTER.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #092327;
}

/* --- Estilos Texto Cascada --- */
.cascade-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 10vw; /* Tamaño grande responsivo */
}

.cascade-text span {
  display: inline-block;
  opacity: 0;
  transform: translateY(-100%);
}

/* --- Estilos Subtítulo (Agencia Creativa) --- */
.footer-subtitle {
  font-family: 'Outfit', sans-serif;
  font-size: 4vw; /* Más pequeño que el título principal */
  letter-spacing: 6px;
  font-weight: 200;
}

/* Animaciones Texto */
.cascade-text.animate-down span {
  animation: cascadeDown 2.4s forwards;
}

.cascade-text.animate-up span {
  animation: cascadeUp 1.2s forwards;
}

/* Delays para LUMINEL (7 letras) */
/* Bajada: Izquierda a Derecha */
.cascade-text.animate-down span:nth-child(1) {
  animation-delay: 0.1s;
}
.cascade-text.animate-down span:nth-child(2) {
  animation-delay: 0.2s;
}
.cascade-text.animate-down span:nth-child(3) {
  animation-delay: 0.3s;
}
.cascade-text.animate-down span:nth-child(4) {
  animation-delay: 0.4s;
}
.cascade-text.animate-down span:nth-child(5) {
  animation-delay: 0.5s;
}
.cascade-text.animate-down span:nth-child(6) {
  animation-delay: 0.6s;
}
.cascade-text.animate-down span:nth-child(7) {
  animation-delay: 0.7s;
}

/* Subida: Derecha a Izquierda */
.cascade-text.animate-up span:nth-child(7) {
  animation-delay: 0.1s;
}
.cascade-text.animate-up span:nth-child(6) {
  animation-delay: 0.2s;
}
.cascade-text.animate-up span:nth-child(5) {
  animation-delay: 0.3s;
}
.cascade-text.animate-up span:nth-child(4) {
  animation-delay: 0.4s;
}
.cascade-text.animate-up span:nth-child(3) {
  animation-delay: 0.5s;
}
.cascade-text.animate-up span:nth-child(2) {
  animation-delay: 0.6s;
}
.cascade-text.animate-up span:nth-child(1) {
  animation-delay: 0.7s;
}

@keyframes cascadeDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cascadeUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}

/* --- Animación Detalles Footer (Links, Iconos) --- */
.footer-details {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.footer-details.animate-down {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.5s; /* Espera a que bajen las letras un poco */
}

.footer-details.animate-up {
  opacity: 0;
  transform: translateY(-100px);
  transition-duration: 0.6s;
  transition-delay: 0s;
}

/* --- Estilos Generales Footer --- */
.social-icon {
  height: 28px;
  width: auto;
  transition: opacity 0.2s ease-in-out;
}

.social-icon:hover {
  opacity: 0.75;
}

.nav-link {
  color: white !important;
  padding: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #a8c738 !important;
}
</style>
