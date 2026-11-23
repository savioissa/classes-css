import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

import { CATEGORIAS, Categoria, IdCategoria, INFO, InfoClasse } from './dados/descricoes';
import { Atributo, Aviso, EntradaCss, SeletorCss, TipoAviso, TipoEntrada } from './dados/modelo';
import { ARQUIVO_CSS } from './dados/regras.gerado';
import { EstilosPrimengComponent } from './estilos-primeng.component';

type Filtro = 'todas' | 'problemas' | 'repeticoes';

interface ParteDoValor {
  texto: string;
  cor?: string;
}

interface AtributoVisivel extends Atributo {
  partes: ParteDoValor[];
}

interface SeletorVisivel extends Omit<SeletorCss, 'atributos'> {
  /** Identificador para o @for (o Angular 17 não aceita "??" dentro do track). */
  id: string;
  atributos: AtributoVisivel[];
}

interface ItemCatalogo {
  chave: string;
  tipo: TipoEntrada;
  linha: number;
  categoria: IdCategoria;
  info: InfoClasse;
  seletores: SeletorVisivel[];
  avisos: Aviso[];
  problemas: number;
  repeticoes: number;
  html: SafeHtml | null;
  classeDoFundo: string;
  codigoExemplo: string;
  css: string;
  textoDeBusca: string;
}

/** Avisos que indicam efeito inesperado na tela. Os outros são só organização do arquivo. */
const AVISOS_DE_PROBLEMA: TipoAviso[] = ['fonte-invalida', 'global-escondido', 'sem-efeito', 'imagem-ausente', 'duplicada'];

const NOMES_DOS_TIPOS: Record<TipoEntrada, string> = {
  propria: 'Classe',
  global: 'Ajuste global',
  externa: 'Biblioteca externa',
};

const COR_NO_VALOR = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\b(?:white|red|transparent)\b/g;

function partesDoValor(valor: string): ParteDoValor[] {
  const partes: ParteDoValor[] = [];
  let ultimo = 0;
  for (const m of valor.matchAll(COR_NO_VALOR)) {
    if (m.index! > ultimo) partes.push({ texto: valor.slice(ultimo, m.index) });
    partes.push({ texto: m[0], cor: m[0] });
    ultimo = m.index! + m[0].length;
  }
  if (ultimo < valor.length) partes.push({ texto: valor.slice(ultimo) });
  return partes;
}

function exemploPadrao(entrada: EntradaCss, info: InfoClasse): string {
  const classe = entrada.chave.replace(/^\./, '');
  if (info.categoria === 'escala' || info.categoria === 'textos') {
    return `<span class="${classe}">${info.texto ?? 'Texto de exemplo'}</span>`;
  }
  return `<div class="${classe}">Elemento com ${entrada.chave}</div>`;
}

function cssDaEntrada(entrada: EntradaCss): string {
  return entrada.seletores
    .map((s) => {
      const corpo = s.atributos.map((a) => `  ${a.prop}: ${a.valor}${a.importante ? ' !important' : ''};`).join('\n');
      const bloco = `${s.seletor} {\n${corpo}\n}`;
      return s.media ? `${s.media} {\n${bloco.replace(/^/gm, '  ')}\n}` : bloco;
    })
    .join('\n\n');
}

/** Deixa o HTML do exemplo legível na caixa "HTML do exemplo". */
function formatarHtml(html: string): string {
  return html.replace(/\n\s*/g, '\n').replace(/>\s*</g, '>\n<').trim();
}

@Component({
  selector: 'app-catalogo-css',
  standalone: true,
  imports: [EstilosPrimengComponent],
  templateUrl: './catalogo-css.component.html',
  styleUrl: './catalogo-css.component.css',
})
export class CatalogoCssComponent {
  private readonly sanitizador = inject(DomSanitizer);
  private readonly mensagens = inject(MessageService);

  readonly arquivo = ARQUIVO_CSS;
  readonly nomesDosTipos = NOMES_DOS_TIPOS;

  readonly itens: ItemCatalogo[] = ARQUIVO_CSS.entradas.map((entrada) => this.montarItem(entrada));

  /** Aceita ?busca=... no endereço, para compartilhar um link já filtrado. */
  readonly busca = signal(new URLSearchParams(location.search).get('busca') ?? '');
  readonly filtro = signal<Filtro>('todas');
  readonly tipo = signal<TipoEntrada | 'todos'>('todos');
  readonly menuAberto = signal(false);

  readonly totais = {
    classes: this.itens.length,
    problemas: this.itens.filter((i) => i.problemas > 0).length,
    repeticoes: this.itens.filter((i) => i.repeticoes > 0).length,
    avisos: this.itens.reduce((s, i) => s + i.avisos.length, 0) + ARQUIVO_CSS.avisos.length,
    porTipo: {
      propria: this.itens.filter((i) => i.tipo === 'propria').length,
      global: this.itens.filter((i) => i.tipo === 'global').length,
      externa: this.itens.filter((i) => i.tipo === 'externa').length,
    } as Record<TipoEntrada, number>,
  };

  readonly filtrados = computed(() => {
    const termos = this.busca().trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtro = this.filtro();
    const tipo = this.tipo();
    return this.itens.filter((i) => {
      if (tipo !== 'todos' && i.tipo !== tipo) return false;
      if (filtro === 'problemas' && !i.problemas) return false;
      if (filtro === 'repeticoes' && !i.repeticoes) return false;
      return termos.every((t) => i.textoDeBusca.includes(t));
    });
  });

  readonly secoes = computed(() => {
    const itens = this.filtrados();
    return CATEGORIAS
      .map((categoria) => ({ categoria, itens: itens.filter((i) => i.categoria === categoria.id) }))
      .filter((s) => s.itens.length > 0);
  });

  private montarItem(entrada: EntradaCss): ItemCatalogo {
    const info: InfoClasse = INFO[entrada.chave] ?? {
      categoria: 'sem-descricao',
      descricao: 'Esta classe ainda não tem descrição no catálogo. Adicione em src/app/telas/catalogo-css/dados/descricoes.ts.',
    };
    const htmlExemplo = info.semExemplo ? '' : (info.exemplo ?? exemploPadrao(entrada, info));
    const seletores: SeletorVisivel[] = entrada.seletores.map((s) => ({
      ...s,
      id: (s.media ? s.media + ' ' : '') + s.seletor,
      atributos: s.atributos.map((a) => ({ ...a, partes: partesDoValor(a.valor) })),
    }));
    const textoDeBusca = [
      entrada.chave,
      info.descricao,
      ...entrada.seletores.map((s) => s.seletor),
      ...entrada.seletores.flatMap((s) => s.atributos.map((a) => `${a.prop}: ${a.valor}`)),
    ].join(' ').toLowerCase();

    return {
      chave: entrada.chave,
      tipo: entrada.tipo,
      linha: entrada.linha,
      categoria: info.categoria,
      info,
      seletores,
      avisos: entrada.avisos,
      problemas: entrada.avisos.filter((a) => AVISOS_DE_PROBLEMA.includes(a.tipo)).length,
      repeticoes: entrada.avisos.filter((a) => a.tipo.startsWith('duplicada')).length,
      html: htmlExemplo ? this.sanitizador.bypassSecurityTrustHtml(htmlExemplo) : null,
      classeDoFundo: 'cat-exemplo--' + (info.fundo ?? 'cinza'),
      codigoExemplo: htmlExemplo ? formatarHtml(htmlExemplo) : '',
      css: cssDaEntrada(entrada),
      textoDeBusca,
    };
  }

  totalNaCategoria(categoria: Categoria): number {
    return this.secoes().find((s) => s.categoria.id === categoria.id)?.itens.length ?? 0;
  }

  problemasNaCategoria(categoria: Categoria): number {
    return this.secoes().find((s) => s.categoria.id === categoria.id)?.itens.filter((i) => i.problemas).length ?? 0;
  }

  ehProblema(aviso: Aviso): boolean {
    return AVISOS_DE_PROBLEMA.includes(aviso.tipo);
  }

  irPara(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuAberto.set(false);
  }

  limparFiltros(): void {
    this.busca.set('');
    this.filtro.set('todas');
    this.tipo.set('todos');
  }

  async copiar(texto: string, oQue: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(texto);
      this.mensagens.add({ severity: 'success', summary: 'Copiado', detail: oQue, life: 1800 });
    } catch {
      this.mensagens.add({ severity: 'warn', summary: 'Não foi possível copiar', detail: 'O navegador bloqueou a área de transferência.' });
    }
  }
}
