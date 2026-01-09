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
          '¡Totalmente recomendados! Este es un testimonio increíble que demuestra lo genial que es trabajar con Luminel.',
        name: 'Mariana de la Torre',
        title: 'Directora de Marketing en Delika',
        personImage: '/img/inicio/pelada.png',
      },
      {
        id: 2,
        quote:
          'El mayor valor de Luminel es su capacidad para entender la vision de mi empresa y transformarla en algo visualmente poderoso. El logo que diseñaron nos dió una nueva identidad más fresca y tecnológica.',
        name: 'David Aldiano',
        title: 'Fundador & CEO',
        personImage: '/img/inicio/imagen2.png',
      },
      {
        id: 3,
        quote:
          'Buscábamos un sitio web que fuera funcional y estéticamente impecable. El equipo de Luminel superó nuestras expectativas con una plataforma rápida y optimizada. Su eficiencia en los tiempos de entrega es, sin duda, su mayor valor diferencial. ',
        name: 'Roberto Sánchez',
        title: 'Co-Fundador de Casa del Río ',
        personImage: '/img/inicio/imagen3.png',
      },
      {
        id: 4,
        quote:
          'Gracias a Luminel logramos renovar nuestra esencia. El logo que diseñaron capturó perfectamente la elegancia que queríamos transmitir. Son expertos en transformar conceptos abstractos en una identidad visual poderosa y moderna que conecta con el público. ',
        name: 'Elena Kostic ',
        title: 'CEO de Nova ',
        personImage: '/img/inicio/imagen4.png',
      },
      {
        id: 5,
        quote:
          'Trabajar con Luminel ha sido la mejor decisión para nuestra digitalización. Su servicio es impecable y la eficacia con la que resuelven cada detalle nos dio mucha confianza. Es una agencia creativa que realmente se compromete con el éxito de sus clientes.',
        name: 'Carlos Villarreal',
        title: 'Gerente General de JRH Transportes y Logística',
        personImage: '/img/inicio/pelon.png',
      },
    ],
  },

  //----Seccion Nuestros Clientes Dicen ----
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
        title: 'Implementacion',
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
