export interface GreenLineItem {
  id: number;
  img: string;
  alt: string;
  width: string; // string porque en el HTML está width="130"
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  bgDesktop: string;
  bgMobile: string;
}

//-----Seccion Servicios----
export interface IService {
  title: string;
  desc: string;
  img: string;
  bgColor: string;
  btnColor: string;
  link: string;
}

//---Seccion Nosotros-----
export interface NosotrosContent {
  title: string;
  subtitle: string;
  btnColor: string;
  btnText: string;
  btnLink: string;
}

//---Interfaz para cada Testimonio individual---
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  personImage: string;
}

//---Seccion Nuestros Clientes Dicen-----
export interface ClientesContent {
  title: string;
  testimonialBg: string;
  testimonialBgMobile: string; // <--- Nueva propiedad para el fondo móvil
  testimonials: Testimonial[];
}

//---Seccion Proyectos Section----
export interface ProyectsContent {
  title: string;
  imgRight: string;
  imgUp: string;
  imgDown: string;
}

//---Seccion Proceso Creativo Section----
export interface Tarjeta {
  id: number;
  circleImage: string;
  title?: string;
  text?: string;
}
export interface ProcesoContent {
  tarjetas: Tarjeta[];
}


//---Seccion Porque Luminel  Section----
export interface PorqueLuminelContent{
  imgLeft: string;
  cards: Cards[];
  btnColor: string;
  btnText: string;
  btnLink: string;
}

export interface Cards{
  id:number;
  titleButton: string;
  descButton:string;
}

// interfaz principal que agrupa todo
export interface HomeData {
  greenLineItems: GreenLineItem[];
  socialLinks: SocialLink[];
  hero: HeroContent;
  services: IService[];
  servicesBackground: string;
  nosotrosBackground: string;
  nosotros: NosotrosContent;
  nosotrosImg: string;
  clientesBackground: string;
  clientes: ClientesContent;
  proyectsBackground: string;
  proyects: ProyectsContent;
  procesoBackground: string;
  proceso: ProcesoContent;
  porque: PorqueLuminelContent;
}
