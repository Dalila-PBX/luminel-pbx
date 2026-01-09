<script setup lang="ts">
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    loading.value = false;
    document.body.style.overflow = '';
  }, 3000);
});
</script>

<template>
  <div v-if="loading" class="loading-overlay">
    <div class="spinner-container">
      <div class="mb-2">
        <img src="/img/LOGOLUMINEL.png" alt="Logo-pbx" class="img-fluid" width="250" />
      </div>
      <img src="/img/header-footer/estrella2.png" alt="Cargando..." class="rotating-star" />
    </div>
  </div>
</template>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #092327;
  z-index: 9999;
}

.spinner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.rotating-star {
  width: 70px; /* Ajusta este tamaño si la estrella se ve muy grande o chica */
  height: auto;
  animation: spin 1.4s linear infinite; /* 1.5s es la velocidad, bájalo para que gire más rápido */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
