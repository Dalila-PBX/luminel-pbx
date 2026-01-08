//-----Seccion Principal----
export interface HeroContent{
  text: string;

}



export interface PortafolioData{
  id: number;
  title: string;
  category:string;
  imgSrc: string;
  link: string;
}




// interfaz principal que agrupa todo
export interface BrandingData{
  hero: HeroContent;
  brandingBackground: string;
  brandingBackgroundTablet:string;
  brandingBackgroundMobile: string;
  portafolio: PortafolioData[];
  paquetesBackground: string;
}

