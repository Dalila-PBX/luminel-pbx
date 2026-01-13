<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { isLoading } from '@/composables/useGlobalLoader';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

// Detectar scroll para cambiar estilos
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Clases dinámicas para el contenedor del header
const headerClasses = computed(() => {
  return {
    'header-scrolled py-0 shadow': isScrolled.value || isMenuOpen.value,
  };
});

const toggleMenu = async () => {
  const { Collapse } = await import('bootstrap');
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  if (navbarCollapse) {
    const bsCollapse = Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
    bsCollapse.toggle();
  }
};

const closeMenu = async () => {
  const { Collapse } = await import('bootstrap');
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    // Usamos getOrCreateInstance para garantizar que obtenemos la instancia de Bootstrap
    // Esto soluciona el problema si la instancia no fue creada previamente por JS
    const bsCollapse = Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
    bsCollapse.hide();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Lógica para detectar si el menú móvil está abierto (opcional, como en Inbtel)
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  if (navbarCollapse) {
    navbarCollapse.addEventListener('shown.bs.collapse', () => (isMenuOpen.value = true));
    navbarCollapse.addEventListener('hidden.bs.collapse', () => (isMenuOpen.value = false));
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Ocultamos el header si isLoading es true usando la clase d-none de Bootstrap -->
  <header
    class="fixed-top transition-header bg-transparent"
    :class="[headerClasses, { 'd-none': isLoading }]"
  >
    <!-- Barra de Navegacion -->
    <nav class="navbar navbar-expand-lg border-bottom border-nav">
      <div class="container-fluid">
        <!-- Logo visible en movil (d-xl-none) -->
        <RouterLink to="/" class="navbar-brand d-block d-lg-none logo-left">
          <img class="logo-header" src="/img/header-footer/LOGOLUMINEL.png" alt="logo-luminel" />
        </RouterLink>

        <!-- Boton Hamburguesa -->
        <button
          class="navbar-toggler toggle-color"
          type="button"
          aria-controls="navbarSupportedContent"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Contenido Colapsable -->
        <div class="collapse navbar-collapse m-0" id="navbarSupportedContent">
          <div class="d-lg-flex flex-column align-items-center m-lg-auto pt-0">
            <!-- Logo visible en escritorio (d-xl-block) -->
            <RouterLink to="/" class="navbar-brand d-none d-lg-block logo-header mb-0">
              <img
                class="logo-header"
                src="/img/header-footer/LOGOLUMINEL.png"
                alt="logo-luminel"
              />
            </RouterLink>
            <!-- Links de Navegación -->
            <ul class="navbar-nav d-inline-flex pt-1 pt-md-3 pt-lg-0 mt-2 fw-bold text-uppercase">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link mx-2 mx-lg-3 text-white" @click="closeMenu">
                  Inicio
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/nosotros"
                  class="nav-link mx-2 mx-lg-3 text-white"
                  @click="closeMenu"
                >
                  Nosotros
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/branding"
                  class="nav-link mx-2 mx-lg-3 text-white"
                  @click="closeMenu"
                >
                  Branding
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/diseno"
                  class="nav-link mx-2 mx-lg-3 text-white"
                  @click="closeMenu"
                >
                  Diseño web
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/marketing"
                  class="nav-link mx-2 mx-lg-3 text-white"
                  @click="closeMenu"
                >
                  Marketing
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.transition-header {
  transition:
    background-color 0.4s ease,
    box-shadow 0.4s ease,
    padding 0.4s ease;
}

/* Estado cuando se hace scroll. Se añade esta clase dinámicamente. */
.header-scrolled {
  background-color: #092327 !important; /* Color de fondo al hacer scroll */
}

.logo-header {
  height: 80px; /* Tamaño original */
  width: auto;
  transition: height 0.3s ease; /* Transición suave para el logo */
}

/* Opcional: Reducir el logo ligeramente al hacer scroll para dar efecto elegante */
.header-scrolled .logo-header {
  height: 60px;
}

@media (max-width: 768px) {
  .logo-header {
    height: 50px;
  }
  .header-scrolled .logo-header {
    height: 45px;
  }
}

.border-nav {
  border-color: transparent !important;
  transition: border-color 0.3s ease;
}

.header-scrolled .border-nav {
  border-color: rgba(
    255,
    255,
    255,
    0.1
  ) !important; /* Opcional: mostrar un borde al hacer scroll */
}

/* Para asegurar que los links se vean blancos si el fondo es oscuro */
.nav-link {
  transition: color 0.3s ease;
  font-size: 18px;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #a8c738 !important; /* Color al pasar el mouse y link activo */
}

/* Ajuste para el botón hamburguesa en fondo oscuro */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
