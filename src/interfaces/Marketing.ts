export interface MarketingContent{
  bgDesktop: string;

}

//section que hacemos
export interface QueHacemosContent{
  imgLeft: string;
}

//Seccion Cards
export interface ICards{
  title: string;
  publicaciones?: string;
  precio: string;
  nota?: string;
  lista: string[];
  bgImg: string;
  btnColor: string;
  bgImgMobile?: string;
}

// interfaz principal que agrupa todo
export interface MarketingData{
  marketing: MarketingContent;
  hacemosBackground: string;
  hacemos: QueHacemosContent;
  presenciaBackground: string;
  marketingBackground: string;
  cardsLumi: ICards[];
  cardsMeta: ICards[];
  cardsPlanes: ICards[];
  metaBackground: string;
  planesBackground: string;
  portafolioBackground: string;
}


