// Formato dos dados gerados por scripts/gerar-catalogo-css.mjs.

export type TipoEntrada = 'propria' | 'global' | 'externa';

export type TipoAviso =
  | 'duplicada'
  | 'duplicada-identica'
  | 'duplicada-complementar'
  | 'fonte-invalida'
  | 'imagem-ausente'
  | 'global-escondido'
  | 'sem-efeito';

export interface Aviso {
  tipo: TipoAviso;
  titulo: string;
  texto: string;
  detalhes?: string[];
  linhas: number[];
}

export interface ValorAnterior {
  valor: string;
  linha: number;
  importante?: boolean;
  /** true quando o valor veio depois, mas perdeu para um !important anterior. */
  ignorado?: boolean;
}

export interface Atributo {
  prop: string;
  /** Valor que de fato vale na tela. */
  valor: string;
  importante?: boolean;
  linha: number;
  /** Valores sobrescritos pela declaração que vale. */
  anteriores?: ValorAnterior[];
}

export interface SeletorCss {
  seletor: string;
  media?: string;
  /** 'proprio': estiliza o elemento que recebe a classe; 'interno': estiliza algo dentro dele. */
  alvo: 'proprio' | 'interno';
  linhas: number[];
  atributos: Atributo[];
}

export interface EntradaCss {
  chave: string;
  tipo: TipoEntrada;
  linha: number;
  seletores: SeletorCss[];
  avisos: Aviso[];
}

export interface ImportCss {
  texto: string;
  linha: number;
}

export interface ArquivoCss {
  totalRegras: number;
  totalLinhas: number;
  imports: ImportCss[];
  avisos: Aviso[];
  entradas: EntradaCss[];
}
