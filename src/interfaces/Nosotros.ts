export interface NosotrosContent{
  bgDesktop:string;
  imgRecuadro:string;
}

export interface SecondNosotros{
  textone:string;
  subtitle: string;
  texttwo: string;
}

export interface NosDiferencia{
  title: string;
  imgFondo: string;
  cards: Cards[];
}

export interface Cards{
  id:number;
  title: string;
  desc:string;

}


// }
// interfaz principal que agrupa todo
export interface NosotrosData{
  nosotros: NosotrosContent;
  nosotrosBackground: string;
  secondBackground: string;
  second: SecondNosotros;
  nosotrosDerecho:string;
  diferencia: NosDiferencia;
}

