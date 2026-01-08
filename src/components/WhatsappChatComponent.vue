<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isActive = ref(false);
const message = ref('');

const togglePopup = () => {
  isActive.value = !isActive.value;
};

const sendMessage = () => {
  if (message.value.trim()) {
    const encodedMsg = encodeURIComponent(message.value);
    window.open(`https://wa.me/5215587894847?text=${encodedMsg}`, '_blank');
    message.value = '';
    isActive.value = false;
  }
};

onMounted(() => {
  setTimeout(() => {
    isActive.value = true;
  }, 3000);
});
</script>

<template>
  <!-- Contenedor principal fijo abajo a la izquierda -->
  <div class="position-fixed bottom-0 start-0 p-2 z-3 d-flex align-items-end">
    <!-- Popup de WhatsApp -->
    <div
      class="popup-whatsapp position-absolute bg-white rounded-3 shadow p-2 flex-column"
      :class="isActive ? 'd-flex is-active-whatsapp-popup' : 'd-none'"
    >
      <!-- Cabecera -->
      <div class="d-flex flex-column">
        <button
          class="btn btn-sm rounded-circle border-0 d-flex justify-content-center align-items-center ms-auto mb-3 shadow-sm closePopup"
          @click="togglePopup"
        >
          <i class="bi bi-x-lg text-white"></i>
        </button>
        <div class="d-flex align-items-center gap-2 mb-3">
          <img
            src="/img/LOGO-ISO1.png"
            alt="WhatsApp"
            class="rounded-circle shadow-sm"
            width="50"
            height="50"
          />
          <p class="m-0 text-secondary small" style="font-family: 'Montserrat', sans-serif">
            Hola, ¿en qué podemos ayudarle?
          </p>
        </div>
      </div>

      <!-- Input y botón enviar -->
      <div class="d-flex align-items-center">
        <input
          type="text"
          class="form-control rounded-pill border-0 shadow-none bg-light"
          placeholder="Enviar mensaje..."
          v-model="message"
          @keyup.enter="sendMessage"
          style="width: 250px"
        />
        <button
          class="btn rounded-circle bg-white border-0 shadow-sm d-flex justify-content-center align-items-center ms-2 send-msPopup"
          @click="sendMessage"
        >
          <i class="bi bi-send-fill text-dark"></i>
        </button>
      </div>
    </div>

    <!-- Botón flotante -->
    <button
      class="float btn rounded-circle text-white d-flex justify-content-center align-items-center shadow-none border-0"
      @click="togglePopup"
    >
      <i class="bi bi-whatsapp fs-3 mt-1"></i>
    </button>

    <!-- Círculo animado -->
    <div class="circle-anime"></div>
  </div>
</template>

<style scoped>
/* Botón flotante */
.float {
  width: 60px;
  height: 60px;
  background-color: #4cc370;
  z-index: 1000;
  margin-left: 10px;
  margin-bottom: 10px;
}
.float:hover {
  background-color: #3d9e5a;
}

/* Popup */
.popup-whatsapp {
  bottom: 85px;
  left: 6px;
  width: auto;
  transition: 0.5s;
}

.is-active-whatsapp-popup {
  animation: slideInLeft 0.6s 0s both;
  background-color: #fafafa !important;
}

/* Botón cerrar */
.closePopup {
  width: 28px;
  height: 28px;
  background-color: #4cc370;
}
.closePopup:hover {
  background-color: #3d9e5a;
  transition: 0.3s;
}

/* Botón enviar */
.send-msPopup {
  width: 40px;
  height: 40px;
}
.send-msPopup:hover {
  background-color: #f8f8f8;
  transition: 0.3s;
}

/* Animaciones */
.circle-anime {
  display: none; /* Se mantiene igual que el original */
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: 25px;
  left: 25px;
  border-radius: 50%;
  background-color: #77bb4a;
  animation: pulse 1.2s 4s ease 4;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: scale(1, 1);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: scale(1.45);
    opacity: 0;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Media queries para input */
@media (max-width: 420px) {
  input[type='text'] {
    width: 225px !important;
  }
}
</style>
