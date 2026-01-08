export interface DisenoContent{
  bgDesktop: string;
  imgRecuadro: string;
  imgDerecho:string;
}

export interface QueHacemosContent{
  bgDesktop: string;
  imgIzq:string;
  imgIzq2:string;
}


//Seccion Paginas
export interface IPaginas{
  title: string;
  color: string;
  lista: string[];
  subtitle:string;
  desc1: string;
  desc2: string;
  precio: string;
  bgImg: string;
}

// interfaz principal que agrupa todo
export interface DisenoData{
  diseno: DisenoContent;
  hacemos: QueHacemosContent;
  carruselBackground: string;
  paginaPymesBackground: string;
  paginasPymes: IPaginas[];
  paginaEmpresasBackground:string;
  paginasEmpresas: IPaginas[];
  paginaTiendaBackground:string;
  paginasTienda: IPaginas[];
}


