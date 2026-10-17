import { reactive, computed, ref } from 'vue';

export type TriState = 'si' | 'parcialmente' | 'no' | '';
export type BinaryState = 'si' | 'no' | '';
export type TriStateWithRevision = 'si' | 'no' | 'revision' | '';

export interface DiagnosticFormData {
  general: {
    businessName: string;
    industry: string;
    location: string;
    contactInfo: string;
    contactInfoDos: string;
    
  };
  visualIdentity: {
    hasDefinedIdentity: TriState;
    consistentSocialMedia: TriState;
    infoCompleteAndUpdated: TriState;
    contentCommunicatesClearly: TriState;
  };
  website: {
    hasWebsite: BinaryState;
    mobileFriendly: TriStateWithRevision;
    infoUpdated: BinaryState;
    facilitatesContact: BinaryState;
  };
  digitalAdvertising: {
    doesOnlineAds: BinaryState;
    isEffective: TriStateWithRevision;
  };
}

const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const createInitialState = (): DiagnosticFormData => ({
  general: {
    businessName: '',
    industry: '',
    location: '',
    contactInfo: '',
    contactInfoDos: '',
    
  },
  visualIdentity: {
    hasDefinedIdentity: '',
    consistentSocialMedia: '',
    infoCompleteAndUpdated: '',
    contentCommunicatesClearly: '',
  },
  website: {
    hasWebsite: '',
    mobileFriendly: '',
    infoUpdated: '',
    facilitatesContact: '',
  },
  digitalAdvertising: {
    doesOnlineAds: '',
    isEffective: '',
  },
});

export const useDiagnosticForm = () => {
  const formData = reactive<DiagnosticFormData>(createInitialState());
  const selectedStyle = ref<'bento' | 'wizard' | 'luxury'>('bento');

  const resetForm = () => {
    Object.assign(formData, createInitialState());
  };

  const fillSampleData = () => {
    formData.general.businessName = 'Café & Co. Luminaria';
    formData.general.industry = 'Restaurante / Cafetería de Especialidad';
    formData.general.location = 'Ciudad de México, Roma Norte';
    formData.general.contactInfo = '+52 55 1234 5678';
    formData.general.contactInfoDos = 'contacto@luminaria.mx';
    

    formData.visualIdentity.hasDefinedIdentity = 'parcialmente';
    formData.visualIdentity.consistentSocialMedia = 'si';
    formData.visualIdentity.infoCompleteAndUpdated = 'si';
    formData.visualIdentity.contentCommunicatesClearly = 'parcialmente';

    formData.website.hasWebsite = 'si';
    formData.website.mobileFriendly = 'revision';
    formData.website.infoUpdated = 'si';
    formData.website.facilitatesContact = 'si';

    formData.digitalAdvertising.doesOnlineAds = 'si';
    formData.digitalAdvertising.isEffective = 'revision';
  };

  // Calcular score por categorías y global
  const scores = computed(() => {
    // 1. Identidad Visual (4 preguntas, max 400 pts)
    const idMap: Record<string, number> = { si: 100, parcialmente: 50, no: 0, '': 0 };
    const idQuestions = [
      formData.visualIdentity.hasDefinedIdentity,
      formData.visualIdentity.consistentSocialMedia,
      formData.visualIdentity.infoCompleteAndUpdated,
      formData.visualIdentity.contentCommunicatesClearly,
    ];
    const idAnswered = idQuestions.filter((q) => q !== '').length;
    const idTotal = idQuestions.reduce((acc, q) => acc + (idMap[q] ?? 0), 0);
    const idScore = idAnswered > 0 ? Math.round(idTotal / 4) : 0;

    // 2. Sitio Web
    let webScore = 0;
    let webAnswered = 0;
    if (formData.website.hasWebsite === 'no') {
      webScore = 10; // Tiene noción pero no web
      webAnswered = 1;
    } else if (formData.website.hasWebsite === 'si') {
      const subMap: Record<string, number> = { si: 100, revision: 50, no: 0, '': 0 };
      const sub = [
        formData.website.mobileFriendly,
        formData.website.infoUpdated,
        formData.website.facilitatesContact,
      ];
      const answeredSub = sub.filter((q) => q !== '').length;
      const totalSub = sub.reduce((acc, q) => acc + (subMap[q] ?? 0), 0);
      webAnswered = 1 + answeredSub;
      webScore = answeredSub > 0 ? Math.round((totalSub + 100) / 4) : 25;
    }

    // 3. Publicidad Digital
    let adsScore = 0;
    let adsAnswered = 0;
    if (formData.digitalAdvertising.doesOnlineAds === 'no') {
      adsScore = 15;
      adsAnswered = 1;
    } else if (formData.digitalAdvertising.doesOnlineAds === 'si') {
      const effMap: Record<string, number> = { si: 100, revision: 50, no: 20, '': 0 };
      adsAnswered = formData.digitalAdvertising.isEffective ? 2 : 1;
      adsScore = formData.digitalAdvertising.isEffective
        ? Math.round((100 + (effMap[formData.digitalAdvertising.isEffective] ?? 0)) / 2)
        : 50;
    }

    // Total general ponderado
    const totalAnsweredQuestions = idAnswered + webAnswered + adsAnswered;
    const maxExpectedQuestions = 4 + (formData.website.hasWebsite === 'si' ? 4 : 1) + (formData.digitalAdvertising.doesOnlineAds === 'si' ? 2 : 1);
    const completionPercentage = Math.round((totalAnsweredQuestions / maxExpectedQuestions) * 100);

    const overallScore = Math.round((idScore * 0.4) + (webScore * 0.35) + (adsScore * 0.25));

    let maturityLevel = 'Sin Evaluar';
    let maturityColor = '#6c757d';
    let maturityAdvice = 'Completa las preguntas para descubrir el índice digital de tu marca.';

    if (totalAnsweredQuestions >= 3) {
      if (overallScore < 45) {
        maturityLevel = 'Nivel Emergente / Vulnerable';
        maturityColor = '#f59e0b';
        maturityAdvice = 'Tu negocio tiene un alto potencial de crecimiento desaprovechado. Con una estrategia de branding y sitio web optimizado duplicarás tu impacto.';
      } else if (overallScore < 75) {
        maturityLevel = 'Nivel En Crecimiento';
        maturityColor = '#00B1BC';
        maturityAdvice = 'Cuentas con bases valiosas, pero existen fugas en comunicación y conversión. Pulir tu diseño web y redes proyectará una imagen de alto nivel.';
      } else {
        maturityLevel = 'Nivel Consolidado / Avanzado';
        maturityColor = '#A8C738';
        maturityAdvice = '¡Excelente presencia digital! Es momento de acelerar con campañas de pauta publicitaria ultra dirigidas y experiencias de usuario premium.';
      }
    }

    return {
      visualIdentity: idScore,
      website: webScore,
      ads: adsScore,
      overall: overallScore,
      completion: Math.min(100, completionPercentage),
      maturityLevel,
      maturityColor,
      maturityAdvice,
      totalAnswered: totalAnsweredQuestions,
      maxExpected: maxExpectedQuestions,
    };
  });

  // Generar mensaje estructurado de WhatsApp
  const generateWhatsAppMessage = () => {
    const d = formData;
    const s = scores.value;

    const text = `*DIAGNÓSTICO DIGITAL - LUMINEL* 🚀
----------------------------------------
*DATOS GENERALES*
• *Negocio:* ${d.general.businessName || 'No especificado'}
• *Giro:* ${d.general.industry || 'No especificado'}
• *Ubicación:* ${d.general.location || 'No especificada'}
• *WhatsApp:* ${d.general.contactInfo || 'No especificado'}
• *Correo:* ${d.general.contactInfoDos || 'No especificado'}


*EVALUACIÓN Y RESPUESTAS*
1. *Identidad Visual:*
   - Identidad definida: ${d.visualIdentity.hasDefinedIdentity || 'N/A'}
   - Línea gráfica consistente: ${d.visualIdentity.consistentSocialMedia || 'N/A'}
   - Información completa y actualizada: ${d.visualIdentity.infoCompleteAndUpdated || 'N/A'}
   - Contenido comunica claramente: ${d.visualIdentity.contentCommunicatesClearly || 'N/A'}

2. *Sitio Web:*
   - ¿Cuenta con página web?: ${d.website.hasWebsite || 'N/A'}
   ${
     d.website.hasWebsite === 'si'
       ? `  * Móviles: ${d.website.mobileFriendly || 'N/A'}
  * Info actualizada: ${d.website.infoUpdated || 'N/A'}
  * Facilita contacto: ${d.website.facilitatesContact || 'N/A'}`
       : ''
   }

3. *Publicidad Digital:*
   - ¿Realiza publicidad en línea?: ${d.digitalAdvertising.doesOnlineAds || 'N/A'}
   ${
     d.digitalAdvertising.doesOnlineAds === 'si'
       ? `  * ¿Es efectiva?: ${d.digitalAdvertising.isEffective || 'N/A'}`
       : ''
   }

*RESULTADO ESTIMADO:*
*Índice Digital:* ${s.overall}/100
*Diagnóstico:* ${s.maturityLevel}
*Recomendación:* ${s.maturityAdvice}

_Enviado desde el formulario interactivo de Luminel Agencia Creativa_`;

    return encodeURIComponent(text);
  };

  const targetEmail = 'dalila191997@gmail.com';

  const generateEmailContent = () => {
    const d = formData;
    const s = scores.value;

    const subject = `Diagnóstico Digital - ${d.general.businessName || 'Nuevo Negocio'}`;
    const body = `DIAGNÓSTICO DIGITAL - LUMINEL AGENCIA CREATIVA
--------------------------------------------------
DATOS GENERALES:
• Negocio: ${d.general.businessName || 'No especificado'}
• Giro: ${d.general.industry || 'No especificado'}
• Ubicación: ${d.general.location || 'No especificada'}
• WhatsApp: ${d.general.contactInfo || 'No especificado'}
• Correo del cliente: ${d.general.contactInfoDos || 'No especificado'}

EVALUACIÓN Y RESPUESTAS:
1. IDENTIDAD VISUAL:
- Identidad definida: ${d.visualIdentity.hasDefinedIdentity || 'N/A'}
- Línea gráfica en redes: ${d.visualIdentity.consistentSocialMedia || 'N/A'}
- Información completa y actualizada: ${d.visualIdentity.infoCompleteAndUpdated || 'N/A'}
- Contenido comunica claramente: ${d.visualIdentity.contentCommunicatesClearly || 'N/A'}

2. SITIO WEB:
- ¿Cuenta con página web?: ${d.website.hasWebsite || 'N/A'}
${
  d.website.hasWebsite === 'si'
    ? `  * Móviles: ${d.website.mobileFriendly || 'N/A'}
  * Info actualizada: ${d.website.infoUpdated || 'N/A'}
  * Facilita contacto: ${d.website.facilitatesContact || 'N/A'}`
    : ''
}

3. PUBLICIDAD DIGITAL:
- ¿Realiza publicidad en línea?: ${d.digitalAdvertising.doesOnlineAds || 'N/A'}
${
  d.digitalAdvertising.doesOnlineAds === 'si'
    ? `  * ¿Es efectiva?: ${d.digitalAdvertising.isEffective || 'N/A'}`
    : ''
}

RESULTADO ESTIMADO:
• Índice Digital: ${s.overall}/100
• Diagnóstico: ${s.maturityLevel}
• Recomendación: ${s.maturityAdvice}

--------------------------------------------------
Enviado desde el formulario interactivo de Luminel Agencia Creativa`;

    return { subject, body };
  };

  const errors = reactive({
    businessName: false,
    contact: false,
  });

  const sendState = ref<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const validationMessage = ref('');

  const sendViaEmail = async () => {
    // Resetear errores previos
    errors.businessName = false;
    errors.contact = false;
    validationMessage.value = '';

    const hasBusinessName = !!formData.general.businessName?.trim();
    const hasContact = !!formData.general.contactInfo?.trim() || !!formData.general.contactInfoDos?.trim();

    if (!hasBusinessName || !hasContact) {
      if (!hasBusinessName) errors.businessName = true;
      if (!hasContact) errors.contact = true;

      sendState.value = 'error';
      validationMessage.value = 'Por favor completa el nombre del negocio y al menos un dato de contacto (WhatsApp o correo).';

      // Scroll suave hacia el primer campo faltante
      const targetId = !hasBusinessName ? 'lux-name' : 'lux-contact';
      if (typeof document !== 'undefined') {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.focus();
        }
      }
      return false;
    }

    sendState.value = 'sending';

    try {
      // 1. Obtener token de reCAPTCHA si está activo en la página
      let captchaToken = '';
      try {
        if (typeof window !== 'undefined' && (window as any).grecaptcha && typeof (window as any).grecaptcha.execute === 'function') {
          captchaToken = await (window as any).grecaptcha.execute('', { action: 'submit_diagnostico' });
        }
      } catch (captchaErr) {
        console.warn('reCAPTCHA no inicializado aún:', captchaErr);
      }

      // 2. Construir FormData con todos los campos
      const fd = new FormData();
      fd.append('nombre_negocio', formData.general.businessName);
      fd.append('giro', formData.general.industry || 'No especificado');
      fd.append('ubicacion', formData.general.location || 'No especificada');
      fd.append('whatsapp', formData.general.contactInfo || 'No especificado');
      fd.append('correo', formData.general.contactInfoDos || 'No especificado');

      fd.append('identidad_definida', formData.visualIdentity.hasDefinedIdentity || 'N/A');
      fd.append('redes_consistentes', formData.visualIdentity.consistentSocialMedia || 'N/A');
      fd.append('info_completa', formData.visualIdentity.infoCompleteAndUpdated || 'N/A');
      fd.append('comunica_claramente', formData.visualIdentity.contentCommunicatesClearly || 'N/A');

      fd.append('cuenta_con_web', formData.website.hasWebsite || 'N/A');
      fd.append('web_moviles', formData.website.mobileFriendly || 'N/A');
      fd.append('web_actualizada', formData.website.infoUpdated || 'N/A');
      fd.append('web_contacto', formData.website.facilitatesContact || 'N/A');

      fd.append('hace_publicidad', formData.digitalAdvertising.doesOnlineAds || 'N/A');
      fd.append('publicidad_efectiva', formData.digitalAdvertising.isEffective || 'N/A');

      fd.append('indice_digital', scores.value.overall.toString());
      fd.append('nivel_madurez', scores.value.maturityLevel);
      fd.append('recomendacion', scores.value.maturityAdvice);

      if (captchaToken) {
        fd.append('g-recaptcha-response', captchaToken);
      }

      // 3. Enviar al backend PHP
      const respuesta = await fetch('/enviar.php', {
        method: 'POST',
        body: fd,
      });

      const contentType = respuesta.headers.get('content-type') || '';
      let resultado: { success: boolean; message: string };

      if (contentType.includes('application/json')) {
        resultado = await respuesta.json();
      } else {
        // Fallback para pruebas locales en Vite (donde Vite no ejecuta PHP pero el archivo existe)
        if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
          resultado = {
            success: true,
            message: '¡Diagnóstico enviado con éxito! (En servidor de producción se enviará automáticamente a dalila191997@gmail.com vía PHP).'
          };
        } else {
          throw new Error('Respuesta del servidor no válida');
        }
      }

      if (resultado.success) {
        sendState.value = 'sent';
        validationMessage.value = resultado.message;

        setTimeout(() => {
          if (sendState.value === 'sent') {
            sendState.value = 'idle';
          }
        }, 9000);

        return true;
      } else {
        sendState.value = 'error';
        validationMessage.value = resultado.message || 'No se pudo enviar el diagnóstico. Intenta de nuevo.';
        return false;
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      // Si estamos en localhost, simulamos éxito para que el usuario pueda probar el flujo visual
      if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        sendState.value = 'sent';
        validationMessage.value = '¡Diagnóstico procesado exitosamente! (En el hosting cPanel se enviará automáticamente a dalila191997@gmail.com vía PHP).';
        setTimeout(() => {
          if (sendState.value === 'sent') sendState.value = 'idle';
        }, 9000);
        return true;
      }

      sendState.value = 'error';
      validationMessage.value = 'Hubo un error de conexión con el servidor. Intenta nuevamente.';
      return false;
    }
  };

  const sendViaWhatsApp = () => {
    // Mantenemos soporte a WhatsApp si se requiere
    errors.businessName = false;
    errors.contact = false;
    validationMessage.value = '';

    const hasBusinessName = !!formData.general.businessName?.trim();
    const hasContact = !!formData.general.contactInfo?.trim() || !!formData.general.contactInfoDos?.trim();

    if (!hasBusinessName || !hasContact) {
      if (!hasBusinessName) errors.businessName = true;
      if (!hasContact) errors.contact = true;

      sendState.value = 'error';
      validationMessage.value = 'Por favor completa el nombre del negocio y al menos un dato de contacto.';
      return false;
    }

    sendState.value = 'sending';
    const encoded = generateWhatsAppMessage();
    const phone = '5218334610202';
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    sendState.value = 'sent';

    setTimeout(() => {
      if (sendState.value === 'sent') {
        sendState.value = 'idle';
      }
    }, 7000);

    return true;
  };

  return {
    formData,
    selectedStyle,
    scores,
    errors,
    sendState,
    validationMessage,
    targetEmail,
    resetForm,
    fillSampleData,
    generateWhatsAppMessage,
    generateEmailContent,
    sendViaEmail,
    sendViaWhatsApp,
  };
};
