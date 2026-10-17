<script setup lang="ts">
import type { DiagnosticFormData } from '@/composables/useDiagnosticForm';

interface Props {
  formData: DiagnosticFormData;
  errors?: {
    businessName: boolean;
    contact: boolean;
  };
}

defineProps<Props>();
</script>

<template>
  <div class="form-luxury-container">
    <div class="row justify-content-center">
      <!-- COLUMNA PRINCIPAL DE FORMULARIO -->
      <div class="col-12 col-xl-12">
        <!-- BLOQUE 1: DATOS GENERALES -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <!-- <span class="luxury-overline">Registro Corporativo</span> -->
              <h3 class="luxury-card-title m-0">DATOS GENERALES</h3>
            </div>
            <!-- <span class="luxury-mono-badge">01 // BASIC</span> -->
          </div>

          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="luxury-field">
                <label for="lux-name" class="luxury-label">
                  Nombre del negocio <span class="text-lime">*</span>
                </label>
                <input
                  id="lux-name"
                  v-model="formData.general.businessName"
                  type="text"
                  class="luxury-input"
                  :class="{ 'input-error': errors?.businessName }"
                  placeholder="Ej. Luminel Studio"
                  @input="errors && (errors.businessName = false)"
                />
                <span v-if="errors?.businessName" class="field-error-text">
                  <i class="bi bi-exclamation-circle-fill me-1"></i> Por favor ingresa el nombre de tu negocio.
                </span>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="luxury-field">
                <label for="lux-industry" class="luxury-label">Giro comercial</label>
                <input
                  id="lux-industry"
                  v-model="formData.general.industry"
                  type="text"
                  class="luxury-input"
                  placeholder="Sector o especialidad"
                />
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="luxury-field">
                <label for="lux-location" class="luxury-label">Ubicación</label>
                <input
                  id="lux-location"
                  v-model="formData.general.location"
                  type="text"
                  class="luxury-input"
                  placeholder="Ciudad, Región o Matriz"
                />
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="luxury-field">
                <label for="lux-contact" class="luxury-label">
                  WhatsApp <span class="text-lime">*</span>
                </label>
                <input
                  id="lux-contact"
                  v-model="formData.general.contactInfo"
                  type="text"
                  class="luxury-input"
                  :class="{ 'input-error': errors?.contact }"
                  placeholder="+52 1 234 5678"
                  @input="errors && (errors.contact = false)"
                />
                <span v-if="errors?.contact" class="field-error-text">
                  <i class="bi bi-exclamation-circle-fill me-1"></i> Ingresa al menos un contacto (WhatsApp o correo).
                </span>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="luxury-field">
                <label for="lux-email" class="luxury-label">Correo Electrónico</label>
                <input
                  id="lux-email"
                  v-model="formData.general.contactInfoDos"
                  type="text"
                  class="luxury-input"
                  :class="{ 'input-error': errors?.contact }"
                  placeholder="ejemplo@gmail.com"
                  @input="errors && (errors.contact = false)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- BLOQUE 2: EVALUACIÓN 1 - IDENTIDAD VISUAL -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-lime">Pilar Estratégico</span>
              <h3 class="luxury-card-title m-0">1. IDENTIDAD VISUAL</h3>
            </div>
            <!-- <span class="luxury-mono-badge">02 // BRAND</span> -->
          </div>

          <div class="luxury-questions-stack">
            <!-- 1.1 -->
            <div class="luxury-question-item py-3">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <div class="q-content">
                  <span class="q-index">1.1</span>
                  <span class="q-text text-white">¿Tu marca cuenta con una identidad visual definida?</span>
                </div>
                <div class="luxury-segmented-control">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.hasDefinedIdentity === 'si' }"
                    @click="formData.visualIdentity.hasDefinedIdentity = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.hasDefinedIdentity === 'parcialmente' }"
                    @click="formData.visualIdentity.hasDefinedIdentity = 'parcialmente'"
                  >
                    Parcialmente
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.visualIdentity.hasDefinedIdentity === 'no' }"
                    @click="formData.visualIdentity.hasDefinedIdentity = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>

            <!-- 1.2 -->
            <div class="luxury-question-item py-3">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <div class="q-content">
                  <span class="q-index">1.2</span>
                  <span class="q-text text-white">¿Tus redes cuentan con una línea gráfica consistente?</span>
                </div>
                <div class="luxury-segmented-control">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.consistentSocialMedia === 'si' }"
                    @click="formData.visualIdentity.consistentSocialMedia = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.consistentSocialMedia === 'parcialmente' }"
                    @click="formData.visualIdentity.consistentSocialMedia = 'parcialmente'"
                  >
                    Parcialmente
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.visualIdentity.consistentSocialMedia === 'no' }"
                    @click="formData.visualIdentity.consistentSocialMedia = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>

            <!-- 1.3 -->
            <div class="luxury-question-item py-3">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <div class="q-content">
                  <span class="q-index">1.3</span>
                  <span class="q-text text-white">¿La información de tu negocio está completa y actualizada?</span>
                </div>
                <div class="luxury-segmented-control">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.infoCompleteAndUpdated === 'si' }"
                    @click="formData.visualIdentity.infoCompleteAndUpdated = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.infoCompleteAndUpdated === 'parcialmente' }"
                    @click="formData.visualIdentity.infoCompleteAndUpdated = 'parcialmente'"
                  >
                    Parcialmente
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.visualIdentity.infoCompleteAndUpdated === 'no' }"
                    @click="formData.visualIdentity.infoCompleteAndUpdated = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>

            <!-- 1.4 -->
            <div class="luxury-question-item py-3">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <div class="q-content">
                  <span class="q-index">1.4</span>
                  <span class="q-text text-white">¿Tu contenido comunica claramente lo que ofrece tu negocio?</span>
                </div>
                <div class="luxury-segmented-control">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.contentCommunicatesClearly === 'si' }"
                    @click="formData.visualIdentity.contentCommunicatesClearly = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.visualIdentity.contentCommunicatesClearly === 'parcialmente' }"
                    @click="formData.visualIdentity.contentCommunicatesClearly = 'parcialmente'"
                  >
                    Parcialmente
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.visualIdentity.contentCommunicatesClearly === 'no' }"
                    @click="formData.visualIdentity.contentCommunicatesClearly = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BLOQUE 3: EVALUACIÓN 2 - SITIO WEB -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-cyan">Plataforma Digital</span>
              <h3 class="luxury-card-title m-0">2. SITIO WEB</h3>
            </div>
            <!-- <span class="luxury-mono-badge">03 // WEB</span> -->
          </div>

          <!-- Pregunta base -->
          <div class="luxury-question-item py-3">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
              <div class="q-content">
                <span class="q-index">2.0</span>
                <span class="q-text text-white fs-6">¿Cuenta con página web?</span>
              </div>
              <div class="luxury-segmented-control">
                <button
                  type="button"
                  class="seg-btn"
                  :class="{ active: formData.website.hasWebsite === 'si' }"
                  @click="formData.website.hasWebsite = 'si'"
                >
                  Sí
                </button>
                <button
                  type="button"
                  class="seg-btn seg-btn-no"
                  :class="{ active: formData.website.hasWebsite === 'no' }"
                  @click="formData.website.hasWebsite = 'no'"
                >
                  No
                </button>
              </div>
            </div>
          </div>

          <!-- Sub-preguntas condicionadas -->
          <div v-if="formData.website.hasWebsite === 'si'" class="luxury-subgroup mt-3 p-3 p-md-4 rounded-3">
            <div class="luxury-sub-header mb-3 pb-2 border-bottom-hairline">
              <span class="text-lime small fw-bold text-uppercase">
                <i class="bi bi-arrow-return-right me-1"></i> En caso afirmativo:
              </span>
            </div>

            <!-- 2.1 -->
            <div class="luxury-question-item py-2">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <span class="q-text text-white-50 small">¿La página funciona correctamente en dispositivos móviles?</span>
                <div class="luxury-segmented-control seg-sm">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.website.mobileFriendly === 'si' }"
                    @click="formData.website.mobileFriendly = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-rev"
                    :class="{ active: formData.website.mobileFriendly === 'revision' }"
                    @click="formData.website.mobileFriendly = 'revision'"
                  >
                    Req. revisión
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.website.mobileFriendly === 'no' }"
                    @click="formData.website.mobileFriendly = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>

            <!-- 2.2 -->
            <div class="luxury-question-item py-2">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <span class="q-text text-white-50 small">¿La información está actualizada?</span>
                <div class="luxury-segmented-control seg-sm">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.website.infoUpdated === 'si' }"
                    @click="formData.website.infoUpdated = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.website.infoUpdated === 'no' }"
                    @click="formData.website.infoUpdated = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>

            <!-- 2.3 -->
            <div class="luxury-question-item py-2">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <span class="q-text text-white-50 small">¿Facilita el contacto por WhatsApp, formulario, teléfono u otro medio?</span>
                <div class="luxury-segmented-control seg-sm">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.website.facilitatesContact === 'si' }"
                    @click="formData.website.facilitatesContact = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.website.facilitatesContact === 'no' }"
                    @click="formData.website.facilitatesContact = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BLOQUE 4: EVALUACIÓN 3 - PUBLICIDAD DIGITAL -->
        <div class="luxury-card p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-lime">Adquisición & Pauta</span>
              <h3 class="luxury-card-title m-0">3. PUBLICIDAD DIGITAL</h3>
            </div>
            <!-- <span class="luxury-mono-badge">04 // ADS</span> -->
          </div>

          <!-- Pregunta base -->
          <div class="luxury-question-item py-3">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
              <div class="q-content">
                <span class="q-index">3.0</span>
                <span class="q-text text-white fs-6">¿Actualmente realiza publicidad en línea?</span>
              </div>
              <div class="luxury-segmented-control">
                <button
                  type="button"
                  class="seg-btn"
                  :class="{ active: formData.digitalAdvertising.doesOnlineAds === 'si' }"
                  @click="formData.digitalAdvertising.doesOnlineAds = 'si'"
                >
                  Sí
                </button>
                <button
                  type="button"
                  class="seg-btn seg-btn-no"
                  :class="{ active: formData.digitalAdvertising.doesOnlineAds === 'no' }"
                  @click="formData.digitalAdvertising.doesOnlineAds = 'no'"
                >
                  No
                </button>
              </div>
            </div>
          </div>

          <!-- Sub-pregunta publicidad -->
          <div v-if="formData.digitalAdvertising.doesOnlineAds === 'si'" class="luxury-subgroup mt-3 p-3 p-md-4 rounded-3">
            <div class="luxury-sub-header mb-3 pb-2 border-bottom-hairline">
              <span class="text-cyan small fw-bold text-uppercase">
                <i class="bi bi-arrow-return-right me-1"></i> En caso afirmativo:
              </span>
            </div>

            <div class="luxury-question-item py-2">
              <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <span class="q-text text-white-50 small">¿Considera que le es efectiva?</span>
                <div class="luxury-segmented-control seg-sm">
                  <button
                    type="button"
                    class="seg-btn"
                    :class="{ active: formData.digitalAdvertising.isEffective === 'si' }"
                    @click="formData.digitalAdvertising.isEffective = 'si'"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-rev"
                    :class="{ active: formData.digitalAdvertising.isEffective === 'revision' }"
                    @click="formData.digitalAdvertising.isEffective = 'revision'"
                  >
                    Req. revisión
                  </button>
                  <button
                    type="button"
                    class="seg-btn seg-btn-no"
                    :class="{ active: formData.digitalAdvertising.isEffective === 'no' }"
                    @click="formData.digitalAdvertising.isEffective = 'no'"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.luxury-card {
  background: rgba(9, 35, 39, 0.75);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s ease;
}

.luxury-card:hover {
  border-color: rgba(168, 199, 56, 0.25);
}

.border-bottom-hairline {
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.luxury-overline {
  font-family: 'Outfit', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2px;
}

.luxury-card-title {
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.luxury-mono-badge {
  font-family: monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.04);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.luxury-field {
  position: relative;
}

.luxury-label {
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

.luxury-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #ffffff;
  padding: 10px 14px;
  font-size: 0.92rem;
  font-family: 'Open Sans', sans-serif;
  transition: all 0.25s ease;
}

.luxury-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.06);
  border-color: #a8c738;
  box-shadow: 0 0 15px rgba(168, 199, 56, 0.2);
  color: #ffffff;
}

.luxury-input.input-error {
  border-color: #ef4444 !important;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.3) !important;
  background: rgba(239, 68, 68, 0.06) !important;
}

.field-error-text {
  color: #f87171;
  font-size: 0.78rem;
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-family: 'Outfit', sans-serif;
  animation: fadeInError 0.3s ease;
}

@keyframes fadeInError {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.luxury-date::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

.luxury-question-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.luxury-question-item:last-child {
  border-bottom: none;
}

.q-index {
  font-family: monospace;
  font-size: 0.92rem;
  color: #a8c738;
  margin-right: 8px;
  font-weight: 700;
}

.q-text {
  font-family: 'Outfit', sans-serif;
  font-size: 1.02rem;
  font-weight: 300;
}

/* SEGMENTED CONTROL */
.luxury-segmented-control {
  display: flex;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 3px;
  gap: 3px;
  min-width: 250px;
}

.seg-sm {
  min-width: 200px;
}

.seg-btn {
  flex: 1;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Outfit', sans-serif;
  font-size: 0.86rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-align: center;
}

.seg-btn:hover {
  color: #ffffff;
}

.seg-btn.active {
  background: #a8c738;
  color: #061e22;
  box-shadow: 0 2px 10px rgba(168, 199, 56, 0.35);
  font-weight: 700;
}

.seg-btn-no.active {
  background: #ef4444;
  color: #ffffff;
  box-shadow: 0 2px 10px rgba(239, 68, 68, 0.35);
}

.seg-btn-rev.active {
  background: #f59e0b;
  color: #ffffff;
  box-shadow: 0 2px 10px rgba(245, 158, 11, 0.35);
}

.luxury-subgroup {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid #a8c738;
}

/* SIDEBAR AUDIT */
.scorecard-number {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
}

.scorecard-caption {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Outfit', sans-serif;
}

.luxury-status-chip {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Outfit', sans-serif;
}

.btn-luxury-action {
  background: #a8c738;
  color: #061e22;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  font-family: 'Outfit', sans-serif;
  transition: all 0.25s ease;
}

.btn-luxury-action:hover {
  background: #bce13f;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(168, 199, 56, 0.3);
}

.btn-luxury-outline {
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-weight: 600;
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 0.88rem;
  transition: all 0.25s ease;
}

.btn-luxury-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.luxury-brand-card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px dashed rgba(255, 255, 255, 0.1);
}

.bg-lime-subtle {
  background: rgba(168, 199, 56, 0.15);
  color: #a8c738;
  border: 1px solid rgba(168, 199, 56, 0.3);
}

.text-lime {
  color: #a8c738 !important;
}

.text-cyan {
  color: #00b1bc !important;
}

@media (max-width: 767.98px) {
  .luxury-segmented-control {
    width: 100% !important;
    min-width: 100% !important;
  }
  .q-content {
    width: 100%;
  }
  .scorecard-number {
    font-size: 3rem;
  }
}
</style>
