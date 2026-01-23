import type { HomeData } from '@/interfaces/Home';

export const homeData: HomeData = {
  greenLineItems: [
    {
      id: 1,
      img: '/img/inicio/branding_texto.png',
      alt: 'branding',
      width: '150',
    },
    {
      id: 2,
      img: '/img/inicio/texto_diseno.png',
      alt: 'diseno',
      width: '300',
    },
    {
      id: 3,
      img: '/img/inicio/marketing_texto.png',
      alt: 'marketing',
      width: '170',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: 'Facebook',
      url: 'https://www.facebook.com/luminelagenciacreativa/',
      icon: '/img/header-footer/icono_fb.png',
    },
    {
      id: 2,
      name: 'WhatsApp',
      url: 'https://wa.me/5215587894847',
      icon: '/img/header-footer/icono_whatsapp.png',
    },
    {
      id: 3,
      name: 'TikTok',
      url: 'https://www.tiktok.com/@luminel_agencia',
      icon: '/img/header-footer/icono_tiktok.png',
    },
  ],

  hero: {
    title: 'ILUMINAMOS TU <br /> CREATIVIDAD',
    subtitle: 'Potenciamos tu <br />comunicación',
    bgDesktop: '/img/inicio/1920x1080.png',
    bgMobile: '/img/inicio/720x1024.png',
  },

  //----Seccion Servicios----
  services: [
    {
      title: 'Branding',
      desc: 'Desde la creación de logotipos hasta el desarrollo de una paleta de colores cohesiva, nuestro enfoque fortalece la presencia visual de tu marca.',
      img: '/img/inicio/branding.png',
      bgColor: '#00B1BC',
      btnColor: '#004A59',
      link: '/branding',
    },
    {
      title: 'Diseño Web',
      desc: 'Desde interfaces intuitivas hasta contenido persuasivo, creamos experiencias impactantes adaptadas a cada cliente.',
      img: '/img/inicio/diseno_web.png',
      bgColor: '#A8C738',
      btnColor: '#212C00',
      link: '/diseno',
    },
    {
      title: 'Marketing',
      desc: 'Creación de post creativo y cautivador, con estrategia para asegurar que tu marca se destaque en las diversas redes sociales.',
      img: '/img/inicio/marketing.png',
      bgColor: '#00C8BB',
      btnColor: '#004A59',
      link: '/marketing',
    },
  ],

  servicesBackground: '/img/inicio/fondo_nuestrosservicios.png',

  //----Seccion Nosotros----
  nosotrosBackground: '/img/inicio/fondo_nosotros.png',

  nosotrosImg: '/img/inicio/nosotros_hombre.png',

  nosotros: {
    title: 'Nosotros',
    subtitle:
      'Luminel Agencia Creativa, está especializada en el diseño estratégico de identidad visual, la gestión de redes sociales, la publicidad digital (Ads) y el desarrollo de soluciones web. Nuestra razón de ser se fundamenta en la convicción de que toda marca debe proyectarse con claridad, propósito y coherencia visual en todos sus canales. <br /> <br /> <br />Como iniciativa derivada de la empresa INBTEL, especializada en soluciones de telecomunicaciones y conectividad, Luminel hereda una cultura de innovación tecnológica y visión sistémica, para llevarla al terreno del diseño. Así, funcionamos como el brazo creativo de un grupo que entiende la comunicación desde múltiples dimensiones: técnica, estética y funcionalidad.',
    btnColor: '#a8c738',
    btnText: 'VER MÁS',
    btnLink: '/nosotros',
  },

  //----Seccion Nuestros Clientes Dicen ----

  clientesBackground: '/img/inicio/fondo_hoja_loque.png',

  clientes: {
    title: 'Lo que nuestros <br />clientes dicen',
    testimonialBg: '/img/inicio/comentario_recuadro_pelon.png',
    testimonialBgMobile: '/img/inicio/recuadro-responsive.png', // <--- CAMBIA ESTA RUTA por tu imagen vertical/móvil
    testimonials: [
      {
        id: 1,
        quote:
          'Al contratar mi página web con Luminel Agencia Creativa, recibí una atención personalizada, y mis dudas fueron resueltas. Consultaron en cada momento los detalles de diseño e información. ¡Terminé contento con mi proyecto!',
        name: 'Carlos Villareal',
        title: 'Gerente de Operaciones de JRH Transportes y Logística.',
        personImage: '/img/inicio/p1.png',
      },
      {
        id: 2,
        quote:
          'Muchísimas gracias, son un equipo creativo lleno de personas muy profesionales. Quedé encantada con la página web.',
        name: 'Elena Kostic ',
        title: 'Coordinadora de Capital Humano.',
        personImage: '/img/inicio/p2.png',
      },
      {
        id: 3,
        quote:
          'Me encuentro satisfecho con la creación de mi sitio web, su propuesta de concepto, y maqueta de diseño me pareció adecuada para lo que buscaba. Muchas gracias. ',
        name: 'Mariana de la Torre ',
        title: 'Administradora de Marketing Delika.',
        personImage: '/img/inicio/p4.png',
      },
      {
        id: 4,
        quote:
          'Posterior a la entrega de mi proyecto de página web, de la cual obtuve grandes resultados, pensé en la evolución de mi marca. Ellos me orientaron, y decidí iniciar un nuevo plan, pero ahora de Marketing. Se encargaron de el diseño, y programación de esta increíble publicidad.',
        name: 'David Aldiano',
        title: 'Asistente de Dirección.',
        personImage: '/img/inicio/p1.png',
      },
      {
        id: 5,
        quote:
          'Decidí brindarle un giro distinto a la imagen corporativa de mi empresa. Y como anteriormente había quedado encantado con mi página web, decidí renovar nuestras charlas. Me ofrecieron una página fresca, y mejorada. Los resultados se ven.',
        name: 'Roberto sanchez ',
        title: 'Socio de Casa del Río.',
        personImage: '/img/inicio/p3.png',
      },
    ],
  },

  //----Seccion Proyetos ----
  proyectsBackground: '/img/inicio/fondo_proyectos.png',

  proyects: {
    title: 'Proyectos',
    imgRight: '/img/inicio/carpeta_1.png',
    imgUp: '/img/inicio/carpeta_2.png',
    imgDown: '/img/inicio/carpeta_3.png',
  },

  //----Seccion Proceso Creativo  ----

  procesoBackground: '/img/inicio/procesocreativo_fondo.png',

  proceso: {
    tarjetas: [
      {
        id: 1,
        circleImage: '/img/inicio/brief_1.png',
        title: 'Brief',
        text: 'Escuchamos y atendemos las necesidades del cliente.',
      },
      {
        id: 2,
        circleImage: '/img/inicio/investigacion_2.png',
        title: 'Investigación',
        text: 'Realizamos análisis de lo que el cliente requiere.',
      },
      {
        id: 3,
        circleImage: '/img/inicio/concepto_3.png',
        title: 'Concepto',
        text: 'Creamos ideas y definimos la dirección creativa.',
      },
      {
        id: 4,
        circleImage: '/img/inicio/diseno_4.png',
        title: 'Diseño',
        text: 'Damos forma visual y estratégica a la propuesta.',
      },
      {
        id: 5,
        circleImage: '/img/inicio/implementacion_5.png',
        title: 'Implementación',
        text: 'Implementamos las soluciones creativas en los distintos canales.',
      },
    ],
  },

   //----Seccion Porque Luminel  ----
  porque: {
    imgLeft: '/img/inicio/mano_luminel.png',
    cards: [
      {
        id:1,
        titleButton:'¿Por qué es importante el branding para mi negocio?',
        descButton:'Porque construye la identidad visual y emocional de tu marca, logrando que tus clientes te reconozcan y te recuerden. En Luminel te ayudamos a crear una identidad única que comunique quién eres y hacia dónde vas.',

      },
      {
        id:2,
        titleButton:'¿Qué gano al dejar mis redes sociales en manos de una agencia?',
        descButton:'Obtienes estrategia, constancia y contenido atractivo que conecta con tu audiencia y genera resultados reales. En Luminel gestionamos tus redes para que tu marca crezca con impacto.',

      },
      {
        id:3,
        titleButton:'¿Por qué necesito una página web profesional si ya tengo redes sociales?',
        descButton:'Porque tu web es tu carta de presentación digital: da confianza, genera ventas y centraliza toda la información de tu negocio. En Luminel diseñamos páginas modernas, funcionales y alineadas a tu marca.',

      },
    ],
    btnColor: '#a8c738',
    btnText: 'IMPULSA TU MARCA HOY',
    btnLink: 'https://wa.me/5215587894847',
  }
};
