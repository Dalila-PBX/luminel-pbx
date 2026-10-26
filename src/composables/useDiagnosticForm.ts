import { reactive, ref, computed } from 'vue';

export interface DiagnosticFormData {
  general: {
    contactName: string;
    phone: string;
    email: string;
  };
  brandIdentity: {
    // 1. ¿Tu negocio cuenta con un logotipo y una imagen de marca definidos?
    logoDefined: 'si_definidos' | 'logo_mejorar' | 'no_crear' | '';
    // 2. ¿Tus publicaciones mantienen un estilo visual consistente?
    visualConsistency: 'si' | 'algunas' | 'no_mejorar' | '';
  };
  socialContent: {
    // 3. ¿Publicas contenido de manera constante en tus redes sociales?
    postingFrequency: 'si_constante' | 'de_vez_en_cuando' | 'no_publico' | '';
    // 4. ¿Tus publicaciones reflejan o ayudan a explicar tus servicios y atraer clientes?
    explainsServices: 'si' | 'algunas_veces' | 'no_seguro' | '';
  };
  website: {
    // 5. ¿Tu negocio cuenta con página web?
    hasWebsite: 'si' | 'no' | '';
    // 6. ¿Tu página se visualiza correctamente en celulares?
    mobileFriendly: 'si' | 'no' | 'revision' | '';
    // 7. ¿La página que tienes actualmente, esta alineada a tu marca?
    alignedWithBrand: 'si' | 'no' | 'actualizar' | '';
    // 8. ¿Necesitas vender productos en línea / tienda virtual?
    sellsOnline: 'si' | 'no' | '';
  };
  advertising: {
    // 8. ¿Actualmente inviertes en publicidad para promocionar tu negocio?
    investsInAds: 'no' | 'meta' | 'google' | 'ambas' | '';
    // 9. ¿Qué resultados estás obteniendo?
    results: 'recibo_clientes' | 'casi_no' | 'no_medir' | '';
  };
  businessGoal: {
    // 10. ¿Qué te gustaría mejorar primero?
    priorityGoal:
      | 'marca_profesional'
      | 'publicaciones_contenido'
      | 'pagina_web'
      | 'mas_clientes_pauta'
      | 'orientacion'
      | '';
    // 11. ¿Hay algo específico que te gustaría mejorar o resolver?
    specificDetail: string;
  };
}

export const LABELS = {
  logoDefined: {
    si_definidos: 'Sí, ambos están definidos',
    logo_mejorar: 'Tengo logotipo, pero necesito mejorar mi imagen',
    no_crear: 'No, necesito crear mi identidad de marca',
  },
  visualConsistency: {
    si: 'Sí',
    algunas: 'Algunas sí y otras no',
    no_mejorar: 'No, necesito mejorar su apariencia',
  },
  postingFrequency: {
    si_constante: 'Sí, de manera constante',
    de_vez_en_cuando: 'De vez en cuando',
    no_publico: 'Actualmente no publico',
  },
  explainsServices: {
    si: 'Sí',
    algunas_veces: 'Algunas veces',
    no_seguro: 'No estoy seguro(a) / necesito mejorar mi contenido',
  },
  hasWebsite: {
    si: 'Sí',
    no: 'No',
  },
  mobileFriendly: {
    si: 'Sí',
    no: 'No',
    revision: 'Necesita revisión',
  },
  alignedWithBrand: {
    si: 'Sí',
    no: 'No',
    actualizar: 'Solo requiere actualizarse',
  },
  sellsOnline: {
    si: 'Sí',
    no: 'No',
  },
  investsInAds: {
    no: 'No, todavía no',
    meta: 'Sí, en Facebook o Instagram',
    google: 'Sí, en Google',
    ambas: 'Sí, en ambas plataformas',
  },
  results: {
    recibo_clientes: 'Recibo consultas o clientes',
    casi_no: 'Invierto, pero casi no recibo resultados',
    no_medir: 'No sé cómo medir los resultados',
  },
  priorityGoal: {
    marca_profesional: 'Tener una imagen de marca más profesional',
    publicaciones_contenido: 'Mejorar mis publicaciones y contenido',
    pagina_web: 'Tener una página web o mejorar la que ya tengo',
    mas_clientes_pauta: 'Conseguir más clientes mediante publicidad',
    orientacion: 'No estoy seguro(a); necesito orientación',
  },
};

const createInitialState = (): DiagnosticFormData => ({
  general: {
    contactName: '',
    phone: '',
    email: '',
  },
  brandIdentity: {
    logoDefined: '',
    visualConsistency: '',
  },
  socialContent: {
    postingFrequency: '',
    explainsServices: '',
  },
  website: {
    hasWebsite: '',
    mobileFriendly: '',
    alignedWithBrand: '',
    sellsOnline: '',
  },
  advertising: {
    investsInAds: '',
    results: '',
  },
  businessGoal: {
    priorityGoal: '',
    specificDetail: '',
  },
});

export const useDiagnosticForm = () => {
  const formData = reactive<DiagnosticFormData>(createInitialState());

  const resetForm = () => {
    Object.assign(formData, createInitialState());
  };

  const fillSampleData = () => {
    formData.general.contactName = 'Valeria Méndez';
    formData.general.phone = '+52 55 8789 4847';
    formData.general.email = 'valeria.mendez@ejemplo.com';

    formData.brandIdentity.logoDefined = 'logo_mejorar';
    formData.brandIdentity.visualConsistency = 'algunas';

    formData.socialContent.postingFrequency = 'de_vez_en_cuando';
    formData.socialContent.explainsServices = 'algunas_veces';

    formData.website.hasWebsite = 'si';
    formData.website.mobileFriendly = 'revision';
    formData.website.alignedWithBrand = 'actualizar';

    formData.advertising.investsInAds = 'meta';
    formData.advertising.results = 'casi_no';

    formData.businessGoal.priorityGoal = 'mas_clientes_pauta';
    formData.businessGoal.specificDetail =
      'Queremos aumentar las ventas de nuestra nueva línea y unificar la imagen en redes y sitio web.';
  };

  // CÁLCULO DE RESULTADO INTERNO DE VENTAS — USO DE LUMINEL
  const salesDiagnosis = computed(() => {
    const d = formData;

    // 1. Necesidad prioritaria
    let necesidadPrioritaria = 'Evaluación integral de presencia digital';
    let servicioPrincipal = 'Diagnóstico y consultoría estratégica';

    switch (d.businessGoal.priorityGoal) {
      case 'marca_profesional':
        necesidadPrioritaria =
          'Necesita desarrollar o fortalecer la identidad visual de su negocio.';
        servicioPrincipal =
          d.brandIdentity.logoDefined === 'no_crear'
            ? 'Paquete Logo Lux como primera opción.'
            : 'Logo Express como primera opción.';
        break;
      case 'publicaciones_contenido':
        necesidadPrioritaria =
          'Requiere mejorar la calidad, organización o constancia de su contenido digital.';
        servicioPrincipal =
          'Paquetes de Marketing de Contenidos: Lumi, Luxen o Lumen, según el volumen y los recursos de contenido que necesite.';
        break;
      case 'pagina_web':
        necesidadPrioritaria =
          d.website.hasWebsite === 'no'
            ? 'Necesita crear su sitio web para presentar sus servicios, fortalecer su presencia digital o vender en línea'
            : 'Necesita renovar su sitio web para presentar sus servicios, fortalecer su presencia digital o vender en línea';
        servicioPrincipal =
          d.website.hasWebsite === 'no'
            ? 'Microsite Lite, Deluxe, Total o Advance, según el alcance.'
            : 'Evaluar un nuevo diseño web sin hosting, sujeto a la revisión del proyecto.';
        break;
      case 'mas_clientes_pauta':
        necesidadPrioritaria =
          'Busca generar prospectos, consultas o ventas mediante campañas publicitarias.';
        if (d.website.hasWebsite === 'si' && d.website.mobileFriendly === 'si') {
          servicioPrincipal = 'Plan Crece o Plan Crece Plus (Google Ads).';
        } else {
          servicioPrincipal = 'Posteo Inicio, Estándar o Avanzado (Meta Ads).';
        }
        break;
      case 'orientacion':
        necesidadPrioritaria =
          'Requiere orientación para identificar sus principales necesidades y definir una ruta de mejora.';
        servicioPrincipal =
          'Contacto de asesoría comercial Luminel, con base en las respuestas del diagnóstico. Identificar el servicio prioritario antes de recomendar un paquete.';
        break;
    }

    // 2. Recomendación de Branding
    let brandingStatus = 'Sin evaluar';
    let brandingOffer = 'No especificado';
    if (d.brandIdentity.logoDefined === 'no_crear') {
      brandingStatus = 'Urgente / Sin identidad';
      brandingOffer =
        'El negocio necesita establecer una identidad visual para presentar su marca de manera profesional.';
    } else if (
      d.brandIdentity.logoDefined === 'logo_mejorar' ||
      d.brandIdentity.visualConsistency === 'no_mejorar'
    ) {
      brandingStatus = 'Requiere uniformidad';
      brandingOffer =
        'Identidad visual por fortalecer. Ya cuenta con logotipo, pero identifica oportunidades de mejora en la presentación de su marca.';
    } else if (d.brandIdentity.visualConsistency === 'algunas') {
      brandingStatus = 'Parcialmente consistente';
      brandingOffer =
        'Identidad visual con aplicación inconsistente. La marca necesita mayor uniformidad en sus materiales gráficos.';
    } else if (
      d.brandIdentity.logoDefined === 'si_definidos' &&
      d.brandIdentity.visualConsistency === 'si'
    ) {
      brandingStatus = 'Sólido y consistente';
      brandingOffer =
        'Identidad visual establecida. No se identifica una necesidad prioritaria de desarrollo de marca a partir de las respuestas.';
    }

    // 2. Recomendación de Contenido Redes
    let redesStatus = 'Sin evaluar';
    let redesOffer = 'No especificado';
    if (d.socialContent.postingFrequency === 'no_publico') {
      redesStatus = 'Inactivo en redes';
      redesOffer =
        'Presencia de contenido por desarrollar. El negocio necesita comenzar a comunicar sus servicios mediante publicaciones planificadas.';
    } else if (
      d.socialContent.postingFrequency === 'de_vez_en_cuando' ||
      d.socialContent.explainsServices === 'no_seguro' ||
      d.socialContent.explainsServices === 'algunas_veces'
    ) {
      redesStatus = 'Intermitente o poco claro';
      redesOffer =
        'Publicación de contenido irregular. No mantiene una frecuencia constante de comunicación en sus redes sociales.';
    } else if (
      d.socialContent.postingFrequency === 'si_constante' &&
      d.socialContent.explainsServices === 'si'
    ) {
      redesStatus = 'Activo y consistente';
      redesOffer =
        'Contenido activo y estructurado. La presencia en redes presenta una base de comunicación establecida.';
    }

    // 3. Recomendación de Diseño Web
    let webStatus = 'Sin evaluar';
    let webOffer = 'No especificado';
    if (d.website.hasWebsite === 'no') {
      webStatus = 'Sin sitio web';
      webOffer =
        'Presencia web por desarrollar. El negocio no cuenta con un sitio propio para presentar sus servicios o facilitar el contacto con clientes potenciales.';
    } else if (d.website.hasWebsite === 'si') {
      const needsMobile =
        d.website.mobileFriendly === 'no' || d.website.mobileFriendly === 'revision';
      const needsUpdate =
        d.website.alignedWithBrand === 'no' || d.website.alignedWithBrand === 'actualizar';

      if (d.website.sellsOnline === 'si') {
        webStatus = 'Necesidad de comercio electrónico ';
        webOffer =
          'El negocio busca habilitar la presentación y venta de productos a través de internet.';
      } else if (needsMobile && needsUpdate) {
        webStatus = 'Desactualizada/ sin responsive';
        webOffer =
          'Sitio web por renovar. El sitio actual presenta oportunidades de mejora en experiencia móvil, presentación visual o funcionalidad.';
      } else if (needsMobile) {
        webStatus = 'Problemas en celulares';
        webOffer =
          'Sitio web con oportunidades de mejora. La estructura actual requiere ajustes para responder mejor a las necesidades del negocio.';
      } else if (needsUpdate) {
        webStatus = 'Desalineada de marca';
        webOffer = 'Actualización visual de sitio web para reflejar la imagen actual de la marca.';
      } else if (d.website.mobileFriendly === 'si' && d.website.alignedWithBrand === 'si') {
        webStatus = 'Web funcional y alineada';
        webOffer =
          'Presencia web establecida. No se identifica una necesidad prioritaria de renovación a partir de las respuestas.';
      }
    }

    // 5. Recomendación de Publicidad
    let adsStatus = 'Sin evaluar';
    let adsOffer = 'No especificado';
    if (d.advertising.investsInAds === 'no') {
      if (d.businessGoal.priorityGoal === 'mas_clientes_pauta') {
        if (d.website.hasWebsite === 'si' && d.website.mobileFriendly === 'si') {
          adsStatus = 'Listo para pauta Google & Meta';
          adsOffer =
            'Oportunidad de captación mediante Google. El negocio busca llegar a personas que buscan activamente sus productos o servicios';
        } else {
          adsStatus = 'Oportunidad Meta Ads / WhatsApp';
          adsOffer =
            'Oportunidad de captación mediante redes sociales. El negocio busca generar contactos y consultas a través de campañas en plataformas sociales.';
        }
      } else {
        adsStatus = 'Etapa previa a pauta';
        adsOffer =
          'Fortalecer bases (branding, contenido o web) antes de invertir en publicidad paga.';
      }
    } else if (d.advertising.investsInAds !== '') {
      if (d.advertising.results === 'casi_no') {
        adsStatus = 'Pauta ineficiente / Fuga de inversión';
        adsOffer =
          'Campañas publicitarias con resultados por mejorar. El prospecto reporta un rendimiento inferior al esperado. Se requiere revisar las campañas actuales antes de determinar la causa.';
      } else if (d.advertising.results === 'no_medir') {
        adsStatus = 'Sin métricas de retorno';
        adsOffer =
          'Medición de resultados por fortalecer. El prospecto no cuenta con claridad suficiente sobre el rendimiento de su inversión publicitaria.';
      } else if (d.advertising.results === 'recibo_clientes') {
        adsStatus = 'Campañas activas con retorno';
        adsOffer =
          'Actividad publicitaria con resultados reportados. Las campañas generan contactos o clientes';
      }
    }

    return {
      necesidadPrioritaria,
      servicioPrincipal,
      branding: { status: brandingStatus, offer: brandingOffer },
      web: { status: webStatus, offer: webOffer },
      redes: { status: redesStatus, offer: redesOffer },
      ads: { status: adsStatus, offer: adsOffer },
    };
  });

  const errors = reactive({
    contactName: false,
    contact: false,
  });

  const sendState = ref<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const validationMessage = ref('');
  const targetEmail = 'dalila191997@gmail.com';

  const sendViaEmail = async () => {
    // Resetear errores previos
    errors.contactName = false;
    errors.contact = false;
    validationMessage.value = '';

    const hasName = !!formData.general.contactName?.trim();
    const hasContact = !!formData.general.phone?.trim() || !!formData.general.email?.trim();

    if (!hasName || !hasContact) {
      if (!hasName) errors.contactName = true;
      if (!hasContact) errors.contact = true;

      sendState.value = 'error';
      validationMessage.value =
        'Por favor completa el nombre del contacto y al menos un dato (WhatsApp/teléfono o correo).';

      const targetId = !hasName ? 'lux-name' : 'lux-phone';
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
        if (
          typeof window !== 'undefined' &&
          (window as any).grecaptcha &&
          typeof (window as any).grecaptcha.execute === 'function'
        ) {
          const siteKey =
            (window as any).RECAPTCHA_SITE_KEY || '6LdET_otAAAAACVSHxGop0N7GyW5LZreMVtWfVs_';
          if (siteKey) {
            captchaToken = await (window as any).grecaptcha.execute(siteKey, {
              action: 'submit_diagnostico',
            });
          }
        }
      } catch (captchaErr) {
        console.warn('reCAPTCHA no inicializado aún:', captchaErr);
      }

      // 2. Construir FormData con todos los campos nuevos
      const d = formData;
      const diag = salesDiagnosis.value;
      const fd = new FormData();

      // Datos Generales
      fd.append('nombre_contacto', d.general.contactName);
      fd.append('telefono', d.general.phone || 'No especificado');
      fd.append('correo', d.general.email || 'No especificado');

      // 1. Identidad de marca
      fd.append(
        'logo_definido',
        LABELS.logoDefined[d.brandIdentity.logoDefined as keyof typeof LABELS.logoDefined] ||
          'No especificado',
      );
      fd.append(
        'estilo_visual',
        LABELS.visualConsistency[
          d.brandIdentity.visualConsistency as keyof typeof LABELS.visualConsistency
        ] || 'No especificado',
      );

      // 2. Contenido para redes sociales
      fd.append(
        'publica_constante',
        LABELS.postingFrequency[
          d.socialContent.postingFrequency as keyof typeof LABELS.postingFrequency
        ] || 'No especificado',
      );
      fd.append(
        'explica_servicios',
        LABELS.explainsServices[
          d.socialContent.explainsServices as keyof typeof LABELS.explainsServices
        ] || 'No especificado',
      );

      // 3. Página web
      fd.append(
        'cuenta_con_web',
        LABELS.hasWebsite[d.website.hasWebsite as keyof typeof LABELS.hasWebsite] ||
          'No especificado',
      );
      fd.append(
        'web_celulares',
        d.website.hasWebsite === 'si'
          ? LABELS.mobileFriendly[d.website.mobileFriendly as keyof typeof LABELS.mobileFriendly] ||
              'No especificado'
          : 'N/A',
      );
      fd.append(
        'web_alineada',
        d.website.hasWebsite === 'si'
          ? LABELS.alignedWithBrand[
              d.website.alignedWithBrand as keyof typeof LABELS.alignedWithBrand
            ] || 'No especificado'
          : 'N/A',
      );

      fd.append(
        'web_vende_en_linea',
        d.website.sellsOnline
          ? LABELS.sellsOnline[d.website.sellsOnline as keyof typeof LABELS.sellsOnline]
          : 'No especificado',
      );

      // 4. Publicidad digital
      fd.append(
        'invierte_publicidad',
        LABELS.investsInAds[d.advertising.investsInAds as keyof typeof LABELS.investsInAds] ||
          'No especificado',
      );
      fd.append(
        'resultados_publicidad',
        d.advertising.investsInAds !== 'no' && d.advertising.investsInAds !== ''
          ? LABELS.results[d.advertising.results as keyof typeof LABELS.results] ||
              'No especificado'
          : 'N/A',
      );

      // 5. Objetivo del negocio
      fd.append(
        'objetivo_prioritario',
        LABELS.priorityGoal[d.businessGoal.priorityGoal as keyof typeof LABELS.priorityGoal] ||
          'No especificado',
      );
      fd.append(
        'detalle_especifico',
        d.businessGoal.specificDetail?.trim() || 'Sin comentarios adicionales',
      );

      // Diagnóstico Interno de Ventas Luminel
      fd.append('necesidad_prioritaria', diag.necesidadPrioritaria);
      fd.append('servicio_principal', diag.servicioPrincipal);
      fd.append('diag_branding', `${diag.branding.status} — ${diag.branding.offer}`);
      fd.append('diag_redes', `${diag.redes.status} — ${diag.redes.offer}`);
      fd.append('diag_web', `${diag.web.status} — ${diag.web.offer}`);
      fd.append('diag_ads', `${diag.ads.status} — ${diag.ads.offer}`);

      if (captchaToken) {
        fd.append('g-recaptcha-response', captchaToken);
      }

      // 3. Enviar a enviar.php
      const respuesta = await fetch('/enviar.php', {
        method: 'POST',
        body: fd,
      });

      const contentType = respuesta.headers.get('content-type') || '';
      let resultado: { success: boolean; message: string };

      if (contentType.includes('application/json')) {
        resultado = await respuesta.json();
      } else {
        // Fallback para pruebas locales en Vite
        if (
          typeof window !== 'undefined' &&
          (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ) {
          resultado = {
            success: true,
            message:
              '¡Diagnóstico enviado con éxito! (En servidor de producción se despachará automáticamente a dalila191997@gmail.com vía PHP).',
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
        validationMessage.value =
          resultado.message || 'No se pudo enviar el diagnóstico. Intenta de nuevo.';
        return false;
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      if (
        typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ) {
        sendState.value = 'sent';
        validationMessage.value =
          '¡Diagnóstico procesado exitosamente! (En el hosting cPanel se enviará automáticamente a dalila191997@gmail.com vía PHP).';
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

  return {
    formData,
    resetForm,
    fillSampleData,
    salesDiagnosis,
    errors,
    sendState,
    validationMessage,
    targetEmail,
    sendViaEmail,
  };
};
