<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useHead } from '@unhead/vue';
import { isLoading } from '@/composables/useGlobalLoader';
import { useDiagnosticForm } from '@/composables/useDiagnosticForm';

import FormDarkLuxury from '@/components/contacto/FormDarkLuxury.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';

useHead({
  title: 'Luminel | Diagnóstico Digital',
  meta: [
    {
      name: 'description',
      content:
        'Diagnóstico digital de Luminel Agencia Creativa. Evalúa en minutos la identidad visual, plataforma web y publicidad de tu negocio con nuestra herramienta estratégica.',
    },
  ],
});

const {
  formData,
  errors,
  sendState,
  validationMessage,
  targetEmail,
  sendViaEmail,
} = useDiagnosticForm();

onMounted(() => {
  isLoading.value = true;
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    isLoading.value = false;
    document.body.style.overflow = '';
  }, 3000);
});

onUnmounted(() => {
  isLoading.value = true;
});
</script>

<template>
  <LoaderComponent v-if="isLoading" />

  <div v-if="!isLoading" class="contacto-view-wrapper position-relative overflow-hidden">
    <!-- Ambient Background Lighting (2026 Glow Orbs) -->
    <div class="ambient-glow orb-teal"></div>
    <div class="ambient-glow orb-lime"></div>
    <div class="ambient-grid-overlay"></div>

    <div class="container position-relative z-1 py-5">
      <!-- HERO HEADER -->
      <section class="contacto-hero text-center mb-4 mb-lg-5 pt-3 pt-md-4">
        <div class="d-inline-flex align-items-center gap-2 hero-badge mb-3">
          <span class="badge-dot"></span>
          <span>DIAGNÓSTICO DIGITAL • 100% GRATUITO</span>
        </div>

        <h1 class="hero-title fw-bold text-uppercase mb-3">
          DESCUBRE EL POTENCIAL DE <br><span class="text-lime-gradient">TU MARCA</span>
        </h1>
      </section>

      <!-- FORMULARIO MINIMAL DARK LUXURY (Diseño Seleccionado) -->
      <FormDarkLuxury :form-data="formData" :errors="errors" />

      <!-- BANNER INFERIOR DE ASESORÍA ESTRATÉGICA Y ENVÍO -->
      <section class="mt-5 p-4 p-md-5 rounded-4 footer-banner-card text-center text-md-start position-relative overflow-hidden">
        <div class="row align-items-center g-4 position-relative z-1">
          <div class="col-12 col-md-7 col-lg-8">
            <h3 class="text-white fw-bold mb-2">Solicitar Diagnóstico Digital gratuito</h3>
            <p class="text-white-50 m-0">
              Nuestro equipo comercial se contactará contigo lo antes posible.
            </p>

            <!-- Mensaje de confirmación cuando se abre el cliente de correo -->
            <transition name="fade">
              <div
                v-if="sendState === 'sent'"
                class="status-alert alert-success-custom mt-3 p-3 rounded-3 d-flex align-items-center gap-2"
              >
                <i class="bi bi-check-circle-fill fs-5 text-lime"></i>
                <div class="small">
                  <strong class="d-block text-white">¡Diagnóstico enviado con éxito!</strong>
                  <span class="text-white-50">Hemos recibido tus respuestas. Nuestro equipo comercial analizará tu información y se pondrá en contacto contigo a la brevedad.</span>
                </div>
              </div>

              <!-- Mensaje de error de validación -->
              <div
                v-else-if="sendState === 'error'"
                class="status-alert alert-error-custom mt-3 p-3 rounded-3 d-flex align-items-center gap-2"
              >
                <i class="bi bi-exclamation-triangle-fill fs-5 text-danger"></i>
                <div class="small text-danger-emphasis">
                  <strong class="d-block text-white">{{ validationMessage }}</strong>
                  <span class="text-white-50">Hemos resaltado en rojo los campos requeridos arriba.</span>
                </div>
              </div>
            </transition>
          </div>

          <div class="col-12 col-md-5 col-lg-4 text-md-end">
            <button
              type="button"
              class="btn btn-luxury-action btn-lg px-4 py-3 d-inline-flex align-items-center gap-2"
              :class="{
                'btn-sent': sendState === 'sent',
                'btn-error': sendState === 'error'
              }"
              :disabled="sendState === 'sending'"
              @click="sendViaEmail"
            >
              <template v-if="sendState === 'idle'">
                <span>Enviar Diagnóstico</span>
              </template>
              <template v-else-if="sendState === 'sending'">
                <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                <span>Enviando diagnóstico...</span>
              </template>
              <template v-else-if="sendState === 'sent'">
                <i class="bi bi-check-lg fs-5"></i>
                <span>¡Diagnóstico Enviado!</span>
              </template>
              <template v-else-if="sendState === 'error'">
                <i class="bi bi-arrow-repeat fs-5"></i>
                <span>Reintentar Envío</span>
              </template>
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contacto-view-wrapper {
  background-color: #000000;
  min-height: 100vh;
  color: #ffffff;
  padding-bottom: 6rem;
}

/* Ambient glow orbs */
.ambient-glow {
  position: absolute;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  opacity: 0.16;
  z-index: 0;
}

.orb-teal {
  top: -100px;
  right: -100px;
  background: radial-gradient(circle, #00b1bc 0%, transparent 70%);
}

.orb-lime {
  top: 40%;
  left: -150px;
  background: radial-gradient(circle, #a8c738 0%, transparent 70%);
}

.ambient-grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.35;
  pointer-events: none;
  z-index: 0;
}

/* Hero */
.hero-badge {
  background: rgba(9, 35, 39, 0.85);
  border: 1px solid rgba(168, 199, 56, 0.35);
  padding: 6px 16px;
  border-radius: 30px;
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #a8c738;
  letter-spacing: 1px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #a8c738;
  box-shadow: 0 0 10px #a8c738;
  animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.6;
  }
}

.hero-title {
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(2.2rem, 1.5rem + 3.5vw, 4rem);
  letter-spacing: -0.5px;
  line-height: 1.1;
  color: #ffffff;
}

.text-lime-gradient {
  background: linear-gradient(135deg, #a8c738, #00c8bb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.value-pills-row {
  margin-top: 1rem;
}

.value-pill {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  font-family: 'Outfit', sans-serif;
}



/* Banner inferior */
.footer-banner-card {
  background: linear-gradient(135deg, rgba(9, 35, 39, 0.9), rgba(0, 74, 89, 0.65));
  border: 1px solid rgba(168, 199, 56, 0.3);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 199, 56, 0.1);
}

.bg-lime-subtle {
  background: rgba(168, 199, 56, 0.2);
  color: #a8c738;
}

.btn-luxury-action {
  background: #a8c738;
  color: #061e22;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  font-family: 'Outfit', sans-serif;
  transition: all 0.25s ease;
}

.btn-luxury-action:hover {
  background: #bce13f;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(168, 199, 56, 0.4);
  color: #061e22;
}

.btn-luxury-action:disabled {
  opacity: 0.75;
  cursor: not-allowed;
  transform: none;
}

.btn-luxury-action.btn-sent {
  background: #25d366 !important;
  color: #ffffff !important;
  box-shadow: 0 0 25px rgba(37, 211, 102, 0.45) !important;
}

.btn-luxury-action.btn-error {
  background: #f59e0b !important;
  color: #061e22 !important;
}

.alert-success-custom {
  background: rgba(168, 199, 56, 0.08);
  border: 1px solid rgba(168, 199, 56, 0.35);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.alert-error-custom {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.35);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.text-lime {
  color: #a8c738 !important;
}

.text-cyan {
  color: #00b1bc !important;
}
</style>