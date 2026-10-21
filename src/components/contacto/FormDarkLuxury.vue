<script setup lang="ts">
import type { DiagnosticFormData } from '@/composables/useDiagnosticForm';

interface Props {
  formData: DiagnosticFormData;
  errors?: {
    contactName: boolean;
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
        
        <!-- ==============================================
             BLOQUE: DATOS GENERALES
             ============================================== -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-cyan">Paso 01</span>
              <h3 class="luxury-card-title m-0">DATOS GENERALES</h3>
            </div>
            <span class="luxury-mono-badge"><i class="bi bi-person-badge me-1"></i> Contacto</span>
          </div>

          <div class="row g-4">
            <!-- Nombre del contacto -->
            <div class="col-12 col-md-6">
              <div class="luxury-field">
                <label for="lux-name" class="luxury-label">
                  Nombre del contacto <span class="text-lime">*</span>
                </label>
                <input
                  id="lux-name"
                  v-model="formData.general.contactName"
                  type="text"
                  class="luxury-input"
                  :class="{ 'input-error': errors?.contactName }"
                  placeholder="Tu nombre completo o representante"
                  @input="errors && (errors.contactName = false)"
                />
                <span v-if="errors?.contactName" class="field-error-text">
                  <i class="bi bi-exclamation-circle-fill me-1"></i> Por favor ingresa tu nombre.
                </span>
              </div>
            </div>

            <!-- WhatsApp / teléfono -->
            <div class="col-12 col-md-6">
              <div class="luxury-field">
                <label for="lux-phone" class="luxury-label">
                  WhatsApp / teléfono <span class="text-lime">*</span>
                </label>
                <input
                  id="lux-phone"
                  v-model="formData.general.phone"
                  type="tel"
                  class="luxury-input"
                  :class="{ 'input-error': errors?.contact }"
                  placeholder="Ej. +52 55 1234 5678"
                  @input="errors && (errors.contact = false)"
                />
                <span v-if="errors?.contact" class="field-error-text">
                  <i class="bi bi-exclamation-circle-fill me-1"></i> Ingresa al menos un medio (WhatsApp o correo).
                </span>
              </div>
            </div>

            <!-- Correo electrónico -->
            <div class="col-12">
              <div class="luxury-field">
                <label for="lux-email" class="luxury-label">Correo electrónico</label>
                <input
                  id="lux-email"
                  v-model="formData.general.email"
                  type="email"
                  class="luxury-input"
                  :class="{ 'input-error': errors?.contact }"
                  placeholder="nombre@empresa.com"
                  @input="errors && (errors.contact = false)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- ==============================================
             BLOQUE 1: IDENTIDAD DE MARCA
             ============================================== -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-lime">Pilar Estratégico 01</span>
              <h3 class="luxury-card-title m-0">1. IDENTIDAD DE MARCA</h3>
            </div>
            <span class="luxury-mono-badge"><i class="bi bi-palette me-1"></i> Branding</span>
          </div>

          <div class="luxury-questions-stack">
            <!-- Pregunta 1 -->
            <div class="luxury-question-block py-3">
              <div class="q-header mb-3">
                <span class="q-number">1.</span>
                <span class="q-title text-white">¿Tu negocio cuenta con un logotipo y una imagen de marca definidos?</span>
              </div>
              <div class="luxury-options-grid">
                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.brandIdentity.logoDefined === 'si_definidos' }"
                  @click="formData.brandIdentity.logoDefined = 'si_definidos'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Sí, ambos están definidos</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.brandIdentity.logoDefined === 'logo_mejorar' }"
                  @click="formData.brandIdentity.logoDefined = 'logo_mejorar'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Tengo logotipo, pero necesito mejorar mi imagen</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.brandIdentity.logoDefined === 'no_crear' }"
                  @click="formData.brandIdentity.logoDefined = 'no_crear'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">No, necesito crear mi identidad de marca</span>
                </button>
              </div>
            </div>

            <!-- Pregunta 2 -->
            <div class="luxury-question-block py-3 border-top-hairline">
              <div class="q-header mb-3">
                <span class="q-number">2.</span>
                <span class="q-title text-white">¿Tus publicaciones mantienen un estilo visual consistente?</span>
              </div>
              <div class="luxury-options-grid">
                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.brandIdentity.visualConsistency === 'si' }"
                  @click="formData.brandIdentity.visualConsistency = 'si'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Sí</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.brandIdentity.visualConsistency === 'algunas' }"
                  @click="formData.brandIdentity.visualConsistency = 'algunas'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Algunas sí y otras no</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.brandIdentity.visualConsistency === 'no_mejorar' }"
                  @click="formData.brandIdentity.visualConsistency = 'no_mejorar'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">No, necesito mejorar su apariencia</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ==============================================
             BLOQUE 2: CONTENIDO PARA REDES SOCIALES
             ============================================== -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-cyan">Pilar Estratégico 02</span>
              <h3 class="luxury-card-title m-0">2. CONTENIDO PARA REDES SOCIALES</h3>
            </div>
            <span class="luxury-mono-badge"><i class="bi bi-instagram me-1"></i> Social Media</span>
          </div>

          <div class="luxury-questions-stack">
            <!-- Pregunta 3 -->
            <div class="luxury-question-block py-3">
              <div class="q-header mb-3">
                <span class="q-number">3.</span>
                <span class="q-title text-white">¿Publicas contenido de manera constante en tus redes sociales?</span>
              </div>
              <div class="luxury-options-grid">
                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.socialContent.postingFrequency === 'si_constante' }"
                  @click="formData.socialContent.postingFrequency = 'si_constante'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Sí, de manera constante</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.socialContent.postingFrequency === 'de_vez_en_cuando' }"
                  @click="formData.socialContent.postingFrequency = 'de_vez_en_cuando'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">De vez en cuando</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.socialContent.postingFrequency === 'no_publico' }"
                  @click="formData.socialContent.postingFrequency = 'no_publico'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Actualmente no publico</span>
                </button>
              </div>
            </div>

            <!-- Pregunta 4 -->
            <div class="luxury-question-block py-3 border-top-hairline">
              <div class="q-header mb-3">
                <span class="q-number">4.</span>
                <span class="q-title text-white">¿Tus publicaciones reflejan o ayudan a explicar tus servicios y atraer clientes?</span>
              </div>
              <div class="luxury-options-grid">
                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.socialContent.explainsServices === 'si' }"
                  @click="formData.socialContent.explainsServices = 'si'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Sí</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.socialContent.explainsServices === 'algunas_veces' }"
                  @click="formData.socialContent.explainsServices = 'algunas_veces'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Algunas veces</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.socialContent.explainsServices === 'no_seguro' }"
                  @click="formData.socialContent.explainsServices = 'no_seguro'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">No estoy seguro(a) / necesito mejorar mi contenido</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ==============================================
             BLOQUE 3: PÁGINA WEB
             ============================================== -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-lime">Pilar Estratégico 03</span>
              <h3 class="luxury-card-title m-0">3. PÁGINA WEB</h3>
            </div>
            <span class="luxury-mono-badge"><i class="bi bi-globe2 me-1"></i> Website</span>
          </div>

          <div class="luxury-questions-stack">
            <!-- Pregunta 5 (Base) -->
            <div class="luxury-question-block py-3">
              <div class="q-header mb-3">
                <span class="q-number">5.</span>
                <span class="q-title text-white">¿Tu negocio cuenta con página web?</span>
              </div>
              <div class="d-flex gap-3">
                <button
                  type="button"
                  class="luxury-option-pill flex-fill"
                  :class="{ active: formData.website.hasWebsite === 'si' }"
                  @click="formData.website.hasWebsite = 'si'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text fw-semibold">Sí</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill flex-fill"
                  :class="{ active: formData.website.hasWebsite === 'no' }"
                  @click="formData.website.hasWebsite = 'no'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text fw-semibold">No</span>
                </button>
              </div>
            </div>

            <!-- Condicionales si tiene web -->
            <transition name="fade-slide">
              <div v-if="formData.website.hasWebsite === 'si'" class="luxury-subgroup mt-3 p-3 p-md-4 rounded-3 border-top-hairline">
                <div class="luxury-sub-header mb-3 pb-2 border-bottom-hairline">
                  <span class="text-lime small fw-bold text-uppercase">
                    <i class="bi bi-arrow-return-right me-1"></i> Si respondiste que sí:
                  </span>
                </div>

                <!-- Pregunta 6 -->
                <div class="luxury-question-block py-3">
                  <div class="q-header mb-3">
                    <span class="q-number">6.</span>
                    <span class="q-title text-white">¿Tu página se visualiza correctamente en celulares?</span>
                  </div>
                  <div class="luxury-options-grid">
                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.website.mobileFriendly === 'si' }"
                      @click="formData.website.mobileFriendly = 'si'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">Sí</span>
                    </button>

                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.website.mobileFriendly === 'no' }"
                      @click="formData.website.mobileFriendly = 'no'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">No</span>
                    </button>

                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.website.mobileFriendly === 'revision' }"
                      @click="formData.website.mobileFriendly = 'revision'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">Necesita revisión</span>
                    </button>
                  </div>
                </div>

                <!-- Pregunta 7 -->
                <div class="luxury-question-block py-3 border-top-hairline">
                  <div class="q-header mb-3">
                    <span class="q-number">7.</span>
                    <span class="q-title text-white">¿La página que tienes actualmente, está alineada a tu marca?</span>
                  </div>
                  <div class="luxury-options-grid">
                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.website.alignedWithBrand === 'si' }"
                      @click="formData.website.alignedWithBrand = 'si'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">Sí</span>
                    </button>

                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.website.alignedWithBrand === 'no' }"
                      @click="formData.website.alignedWithBrand = 'no'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">No</span>
                    </button>

                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.website.alignedWithBrand === 'actualizar' }"
                      @click="formData.website.alignedWithBrand = 'actualizar'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">Solo requiere actualizarse</span>
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- ==============================================
             BLOQUE 4: PUBLICIDAD DIGITAL
             ============================================== -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-cyan">Pilar Estratégico 04</span>
              <h3 class="luxury-card-title m-0">4. PUBLICIDAD DIGITAL</h3>
            </div>
            <span class="luxury-mono-badge"><i class="bi bi-megaphone me-1"></i> Ads</span>
          </div>

          <div class="luxury-questions-stack">
            <!-- Pregunta 8 (Base) -->
            <div class="luxury-question-block py-3">
              <div class="q-header mb-3">
                <span class="q-number">8.</span>
                <span class="q-title text-white">¿Actualmente inviertes en publicidad para promocionar tu negocio?</span>
              </div>
              <div class="luxury-options-grid">
                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.advertising.investsInAds === 'no' }"
                  @click="formData.advertising.investsInAds = 'no'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">No, todavía no</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.advertising.investsInAds === 'meta' }"
                  @click="formData.advertising.investsInAds = 'meta'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Sí, en Facebook o Instagram</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.advertising.investsInAds === 'google' }"
                  @click="formData.advertising.investsInAds = 'google'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Sí, en Google</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.advertising.investsInAds === 'ambas' }"
                  @click="formData.advertising.investsInAds = 'ambas'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Sí, en ambas plataformas</span>
                </button>
              </div>
            </div>

            <!-- Condicional si ya invierte -->
            <transition name="fade-slide">
              <div
                v-if="formData.advertising.investsInAds !== 'no' && formData.advertising.investsInAds !== ''"
                class="luxury-subgroup mt-3 p-3 p-md-4 rounded-3 border-top-hairline"
              >
                <div class="luxury-sub-header mb-3 pb-2 border-bottom-hairline">
                  <span class="text-cyan small fw-bold text-uppercase">
                    <i class="bi bi-arrow-return-right me-1"></i> Si ya inviertes en publicidad:
                  </span>
                </div>

                <!-- Pregunta 9 -->
                <div class="luxury-question-block py-2">
                  <div class="q-header mb-3">
                    <span class="q-number">9.</span>
                    <span class="q-title text-white">¿Qué resultados estás obteniendo?</span>
                  </div>
                  <div class="luxury-options-grid">
                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.advertising.results === 'recibo_clientes' }"
                      @click="formData.advertising.results = 'recibo_clientes'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">Recibo consultas o clientes</span>
                    </button>

                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.advertising.results === 'casi_no' }"
                      @click="formData.advertising.results = 'casi_no'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">Invierto, pero casi no recibo resultados</span>
                    </button>

                    <button
                      type="button"
                      class="luxury-option-pill"
                      :class="{ active: formData.advertising.results === 'no_medir' }"
                      @click="formData.advertising.results = 'no_medir'"
                    >
                      <span class="pill-check"><i class="bi bi-check2"></i></span>
                      <span class="pill-text">No sé cómo medir los resultados</span>
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- ==============================================
             BLOQUE 5: OBJETIVO DEL NEGOCIO
             ============================================== -->
        <div class="luxury-card mb-4 p-4 p-md-5 rounded-4">
          <div class="d-flex align-items-center justify-content-between mb-4 border-bottom-hairline pb-3">
            <div>
              <span class="luxury-overline text-lime">Pilar Estratégico 05</span>
              <h3 class="luxury-card-title m-0">5. OBJETIVO DEL NEGOCIO</h3>
            </div>
            <span class="luxury-mono-badge"><i class="bi bi-bullseye me-1"></i> Meta Principal</span>
          </div>

          <div class="luxury-questions-stack">
            <!-- Pregunta 10 -->
            <div class="luxury-question-block py-3">
              <div class="q-header mb-3">
                <span class="q-number">10.</span>
                <span class="q-title text-white">¿Qué te gustaría mejorar primero?</span>
              </div>
              <div class="luxury-options-grid">
                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.businessGoal.priorityGoal === 'marca_profesional' }"
                  @click="formData.businessGoal.priorityGoal = 'marca_profesional'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Tener una imagen de marca más profesional</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.businessGoal.priorityGoal === 'publicaciones_contenido' }"
                  @click="formData.businessGoal.priorityGoal = 'publicaciones_contenido'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Mejorar mis publicaciones y contenido</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.businessGoal.priorityGoal === 'pagina_web' }"
                  @click="formData.businessGoal.priorityGoal = 'pagina_web'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Tener una página web o mejorar la que ya tengo</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.businessGoal.priorityGoal === 'mas_clientes_pauta' }"
                  @click="formData.businessGoal.priorityGoal = 'mas_clientes_pauta'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">Conseguir más clientes mediante publicidad</span>
                </button>

                <button
                  type="button"
                  class="luxury-option-pill"
                  :class="{ active: formData.businessGoal.priorityGoal === 'orientacion' }"
                  @click="formData.businessGoal.priorityGoal = 'orientacion'"
                >
                  <span class="pill-check"><i class="bi bi-check2"></i></span>
                  <span class="pill-text">No estoy seguro(a); necesito orientación</span>
                </button>
              </div>
            </div>

            <!-- Pregunta 11 (Respuesta abierta) -->
            <div class="luxury-question-block py-3 border-top-hairline">
              <div class="q-header mb-3">
                <span class="q-number">11.</span>
                <span class="q-title text-white">¿Hay algo específico que te gustaría mejorar o resolver?</span>
              </div>
              <div class="luxury-field">
                <textarea
                  id="lux-detail"
                  v-model="formData.businessGoal.specificDetail"
                  rows="4"
                  class="luxury-textarea"
                  placeholder="Cuéntanos brevemente sobre tus retos actuales, dudas o lo que esperas lograr con tu marca..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.form-luxury-container {
  font-family: 'Outfit', sans-serif;
  color: #e6f1f2;
}

/* CARDS LUXURY */
.luxury-card {
  background: rgba(9, 35, 39, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.luxury-card:hover {
  border-color: rgba(168, 199, 56, 0.25);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
}

.luxury-overline {
  font-size: 0.72rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  margin-bottom: 2px;
}

.text-lime {
  color: #A8C738 !important;
}

.text-cyan {
  color: #00B1BC !important;
}

.luxury-card-title {
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #ffffff;
}

.luxury-mono-badge {
  font-family: 'SF Mono', Monaco, Consolas, monospace;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #88a0a3;
}

.border-bottom-hairline {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.border-top-hairline {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* INPUTS */
.luxury-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.luxury-label {
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  color: #c4d9db;
  text-transform: uppercase;
}

.luxury-input {
  background: rgba(4, 13, 14, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.25s ease;
  outline: none;
}

.luxury-input:focus {
  border-color: #A8C738;
  background: rgba(4, 13, 14, 0.85);
  box-shadow: 0 0 0 3px rgba(168, 199, 56, 0.15);
}

.luxury-input.input-error {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2) !important;
}

.field-error-text {
  font-size: 0.78rem;
  color: #f87171;
  display: flex;
  align-items: center;
}

.luxury-textarea {
  background: rgba(4, 13, 14, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 14px 16px;
  color: #ffffff;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: all 0.25s ease;
  outline: none;
  resize: vertical;
}

.luxury-textarea:focus {
  border-color: #A8C738;
  background: rgba(4, 13, 14, 0.85);
  box-shadow: 0 0 0 3px rgba(168, 199, 56, 0.15);
}

/* PREGUNTAS Y OPCIONES */
.luxury-question-block {
  display: flex;
  flex-direction: column;
}

.q-header {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.q-number {
  font-family: 'SF Mono', monospace;
  font-size: 0.9rem;
  color: #A8C738;
  font-weight: 700;
  margin-top: 1px;
}

.q-title {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.45;
}

/* OPCIONES INTERACTIVAS */
.luxury-options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.75rem;
}

.luxury-option-pill {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #c4d9db;
  text-align: left;
  cursor: pointer;
  transition: all 0.22s ease-in-out;
  outline: none;
  position: relative;
}

.luxury-option-pill:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(168, 199, 56, 0.35);
  color: #ffffff;
  transform: translateY(-2px);
}

.pill-check {
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: transparent;
  transition: all 0.2s ease;
}

.pill-text {
  font-size: 0.92rem;
  line-height: 1.35;
}

/* ACTIVO / SELECCIONADO */
.luxury-option-pill.active {
  background: rgba(168, 199, 56, 0.12);
  border-color: #A8C738;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(168, 199, 56, 0.15);
}

.luxury-option-pill.active .pill-check {
  background: #A8C738;
  border-color: #A8C738;
  color: #040d0e;
  font-weight: bold;
}

/* SUBGRUPOS CONDICIONALES */
.luxury-subgroup {
  background: rgba(0, 0, 0, 0.25);
  border: 1px dashed rgba(168, 199, 56, 0.3);
}

/* ANIMACIONES TRANSICIONES */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .luxury-options-grid {
    grid-template-columns: 1fr;
  }
}
</style>
