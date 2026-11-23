// Funções que montam o HTML que os componentes do PrimeNG 17 geram na tela.
// O catálogo usa esse HTML estático nos exemplos: o CSS só enxerga as classes
// do DOM, então o efeito visual é o mesmo do componente de verdade.

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export interface OpcoesBotao {
  icone?: string;
  /** Classe no elemento <p-button> (onde a classe de contexto costuma ir). */
  host?: string;
  /** Classe extra no próprio <button class="p-button"> (styleClass). */
  classe?: string;
  outlined?: boolean;
  text?: boolean;
  desabilitado?: boolean;
  severidade?: 'secondary' | 'success' | 'danger' | 'warning' | 'help' | 'info';
}

export function botao(rotulo: string | null, o: OpcoesBotao = {}): string {
  const classes = ['p-ripple', 'p-element', 'p-button', 'p-component'];
  if (!rotulo) classes.push('p-button-icon-only');
  if (o.outlined) classes.push('p-button-outlined');
  if (o.text) classes.push('p-button-text');
  if (o.severidade) classes.push('p-button-' + o.severidade);
  if (o.desabilitado) classes.push('p-disabled');
  if (o.classe) classes.push(o.classe);
  const icone = o.icone ? `<span class="p-button-icon${rotulo ? ' p-button-icon-left' : ''} pi ${o.icone}"></span>` : '';
  const texto = rotulo ? `<span class="p-button-label">${rotulo}</span>` : '';
  const btn = `<button type="button" class="${classes.join(' ')}"${o.desabilitado ? ' disabled' : ''}>${icone}${texto}</button>`;
  return o.host === undefined ? `<p-button class="p-element">${btn}</p-button>` : `<p-button class="p-element ${o.host}">${btn}</p-button>`;
}

/** Botão com a diretiva pButton: as classes ficam direto no <button>. */
export function botaoDireto(rotulo: string, classeExtra: string, icone?: string): string {
  const ic = icone ? `<span class="p-button-icon p-button-icon-left pi ${icone}"></span>` : '';
  return `<button type="button" class="p-element p-button p-component ${classeExtra}">${ic}<span class="p-button-label">${rotulo}</span></button>`;
}

export function dropdown(valor: string, o: { placeholder?: boolean; desabilitado?: boolean; host?: string; largura?: string } = {}): string {
  const host = `p-element p-inputwrapper${o.host ? ' ' + o.host : ''}`;
  const estilo = o.largura ? ` style="display:block; width:${o.largura}"` : ' style="display:block"';
  return `<p-dropdown class="${host}"${estilo}><div class="p-dropdown p-component p-inputwrapper${o.desabilitado ? ' p-disabled' : ''}">`
    + `<span class="p-element p-dropdown-label p-inputtext${o.placeholder ? ' p-placeholder' : ''}">${valor}</span>`
    + `<div class="p-dropdown-trigger"><span class="p-dropdown-trigger-icon pi pi-chevron-down"></span></div></div></p-dropdown>`;
}

export function painelDropdown(itens: string[], selecionado: number, classePainel = ''): string {
  return `<div class="p-dropdown-panel p-component ${classePainel}" style="position:static; width:220px"><div class="p-dropdown-items-wrapper"><ul class="p-dropdown-items">`
    + itens.map((t, i) => `<li class="p-dropdown-item${i === selecionado ? ' p-highlight' : ''}">${t}</li>`).join('')
    + `</ul></div></div>`;
}

export function multiselect(texto: string): string {
  return `<div class="p-multiselect p-component p-inputwrapper" style="width:100%"><div class="p-multiselect-label-container"><div class="p-multiselect-label p-placeholder">${texto}</div></div>`
    + `<div class="p-multiselect-trigger"><span class="p-multiselect-trigger-icon pi pi-chevron-down"></span></div></div>`;
}

export function calendario(valor: string): string {
  return `<span class="p-calendar p-calendar-w-btn" style="display:inline-flex; width:100%"><input type="text" class="p-inputtext p-component" value="${esc(valor)}">`
    + `<button type="button" class="p-datepicker-trigger p-button p-component p-button-icon-only"><span class="p-button-icon pi pi-calendar"></span></button></span>`;
}

export function campo(valor: string, o: { placeholder?: string; classe?: string } = {}): string {
  return `<input type="text" class="p-inputtext p-component p-element${o.classe ? ' ' + o.classe : ''}" value="${esc(valor)}"${o.placeholder ? ` placeholder="${esc(o.placeholder)}"` : ''}>`;
}

export function areaDeTexto(valor: string): string {
  return `<textarea rows="3" class="p-inputtextarea p-inputtext p-component p-element" style="width:100%">${esc(valor)}</textarea>`;
}

export function chip(rotulo: string): string {
  return `<p-chip class="p-element"><div class="p-chip p-component"><div class="p-chip-text">${rotulo}</div></div></p-chip>`;
}

export function card(conteudo: string, o: { cabecalho?: string; titulo?: string; host?: string } = {}): string {
  return `<p-card class="p-element${o.host ? ' ' + o.host : ''}"><div class="p-card p-component">`
    + (o.cabecalho ? `<div class="p-card-header">${o.cabecalho}</div>` : '')
    + `<div class="p-card-body">${o.titulo ? `<div class="p-card-title">${o.titulo}</div>` : ''}<div class="p-card-content">${conteudo}</div></div></div></p-card>`;
}

export function tabela(cabecalhos: string[], linhas: string[][]): string {
  return `<div class="p-datatable p-component"><div class="p-datatable-wrapper"><table class="p-datatable-table" role="table" style="width:100%">`
    + `<thead class="p-datatable-thead"><tr>${cabecalhos.map((c) => `<th>${c}</th>`).join('')}</tr></thead>`
    + `<tbody class="p-datatable-tbody">${linhas.map((l) => `<tr>${l.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>`
    + `</table></div></div>`;
}

export function paginador(classeHost = ''): string {
  const b = (cls: string, icone: string, desab = false) => `<button type="button" class="${cls} p-paginator-element p-link${desab ? ' p-disabled' : ''}"><span class="p-paginator-icon pi ${icone}"></span></button>`;
  const pag = (n: number, ativo = false) => `<button type="button" class="p-paginator-page p-paginator-element p-link${ativo ? ' p-highlight' : ''}">${n}</button>`;
  return `<div class="${classeHost}"><div class="p-paginator p-component">${b('p-paginator-first', 'pi-angle-double-left', true)}${b('p-paginator-prev', 'pi-angle-left', true)}`
    + `<span class="p-paginator-pages">${pag(1, true)}${pag(2)}${pag(3)}</span>${b('p-paginator-next', 'pi-angle-right')}${b('p-paginator-last', 'pi-angle-double-right')}</div></div>`;
}

export function caixaDeSelecao(marcado: boolean, o: { classeCaixa?: string; icone?: string } = {}): string {
  const icone = marcado ? `<span class="p-checkbox-icon pi ${o.icone ?? 'pi-check'}"></span>` : '';
  return `<div class="p-checkbox p-component"><div class="p-checkbox-box${marcado ? ' p-highlight' : ''}${o.classeCaixa ? ' ' + o.classeCaixa : ''}">${icone}</div></div>`;
}

export function radio(marcado: boolean): string {
  return `<div class="p-radiobutton p-component"><div class="p-radiobutton-box${marcado ? ' p-highlight' : ''}"><span class="p-radiobutton-icon"></span></div></div>`;
}

export interface NoArvore {
  rotulo: string;
  filhos?: NoArvore[];
  classeConteudo?: string;
  classeNo?: string;
  checkbox?: boolean | 'parcial';
  selecionavel?: boolean;
}

export function arvore(nos: NoArvore[], classeHost = ''): string {
  const no = (n: NoArvore): string => {
    const temFilhos = !!n.filhos?.length;
    const toggler = `<button type="button" class="p-tree-toggler p-link"${temFilhos ? '' : ' style="visibility:hidden"'}><span class="p-tree-toggler-icon pi pi-chevron-down"></span></button>`;
    const check = n.checkbox === undefined ? '' : caixaDeSelecao(n.checkbox !== false, { icone: n.checkbox === 'parcial' ? 'pi-minus' : 'pi-check' });
    const conteudo = `<div class="p-treenode-content${n.selecionavel !== false ? ' p-treenode-selectable' : ''}${n.classeConteudo ? ' ' + n.classeConteudo : ''}">${toggler}${check}<span class="p-treenode-label">${n.rotulo}</span></div>`;
    const filhos = temFilhos ? `<ul class="p-treenode-children">${n.filhos!.map(no).join('')}</ul>` : '';
    return `<li class="p-treenode${n.classeNo ? ' ' + n.classeNo : ''}">${conteudo}${filhos}</li>`;
  };
  return `<div class="${classeHost}"><div class="p-tree p-component"><div class="p-tree-wrapper"><ul class="p-tree-container" role="tree">${nos.map(no).join('')}</ul></div></div></div>`;
}

export function abas(titulos: string[], conteudo: string, classeHost = ''): string {
  return `<div class="${classeHost}"><div class="p-tabview p-component"><div class="p-tabview-nav-container"><div class="p-tabview-nav-content"><ul class="p-tabview-nav" role="tablist">`
    + titulos.map((t, i) => `<li${i === 0 ? ' class="p-highlight"' : ''}><a class="p-tabview-nav-link" role="tab"><span class="p-tabview-title">${t}</span></a></li>`).join('')
    + `</ul></div></div><div class="p-tabview-panels"><div class="p-tabview-panel">${conteudo}</div></div></div></div>`;
}

export function acordeao(titulo: string, conteudo: string, classeHost = ''): string {
  return `<div class="${classeHost}"><div class="p-accordion p-component"><div class="p-accordion-tab p-accordion-tab-active">`
    + `<div class="p-accordion-header p-highlight"><a class="p-accordion-header-link" role="button"><span class="p-accordion-toggle-icon pi pi-chevron-down"></span><span class="p-accordion-header-text">${titulo}</span></a></div>`
    + `<div class="p-toggleable-content"><div class="p-accordion-content">${conteudo}</div></div></div></div></div>`;
}

export function dialogo(titulo: string, conteudo: string, rodape: string, classeDialogo = ''): string {
  return `<div class="p-dialog p-component ${classeDialogo}" style="position:relative; width:100%; max-width:440px; display:flex; flex-direction:column">`
    + `<div class="p-dialog-header"><span class="p-dialog-title">${titulo}</span><div class="p-dialog-header-icons"><button type="button" class="p-dialog-header-icon p-dialog-header-close p-link"><span class="pi pi-times"></span></button></div></div>`
    + `<div class="p-dialog-content">${conteudo}</div><div class="p-dialog-footer">${rodape}</div></div>`;
}

export function dica(texto: string, classeTooltip = ''): string {
  return `<div class="p-tooltip p-component p-tooltip-right ${classeTooltip}" style="position:relative; display:inline-block"><div class="p-tooltip-arrow"></div><div class="p-tooltip-text">${texto}</div></div>`;
}

export function spinner(tamanho = 28): string {
  return `<div class="p-progress-spinner" style="width:${tamanho}px; height:${tamanho}px"><svg class="p-progress-spinner-svg" viewBox="25 25 50 50"><circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle></svg></div>`;
}

export function barraDeProgresso(pct: number): string {
  return `<div class="p-progressbar p-component p-progressbar-determinate"><div class="p-progressbar-value p-progressbar-value-animate" style="width:${pct}%; display:flex"></div></div>`;
}

export function divisorVertical(): string {
  return `<div class="p-divider p-component p-divider-vertical p-divider-solid p-divider-left"><div class="p-divider-content"></div></div>`;
}

export function toastErro(resumo: string, detalhe: string): string {
  return `<div class="p-toast p-component" style="position:static; width:22rem; max-width:100%"><div class="p-toast-message p-toast-message-error"><div class="p-toast-message-content">`
    + `<span class="p-toast-message-icon pi pi-times-circle"></span><div class="p-toast-message-text"><div class="p-toast-summary">${resumo}</div><div class="p-toast-detail">${detalhe}</div></div></div></div></div>`;
}

export function passos(titulos: string[]): string {
  return `<div class="p-steps p-component"><ul role="tablist">`
    + titulos.map((t, i) => `<li class="p-steps-item${i === 0 ? ' p-highlight p-steps-current' : ''}"><a class="p-menuitem-link"><span class="p-steps-number">${i + 1}</span><span class="p-steps-title">${t}</span></a></li>`).join('')
    + `</ul></div>`;
}

export function escolherArquivo(rotulo: string | null, icone = 'pi-plus'): string {
  return `<span class="p-button p-component p-fileupload-choose${rotulo ? '' : ' p-button-icon-only'}"><span class="p-button-icon${rotulo ? ' p-button-icon-left' : ''} pi ${icone}"></span>${rotulo ? `<span class="p-button-label">${rotulo}</span>` : ''}</span>`;
}

/** Imagem de exemplo embutida (SVG), para não depender de arquivos. */
export function imagemExemplo(largura = 480, altura = 160, texto = 'imagem 480 × 160'): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${largura}" height="${altura}"><rect width="100%" height="100%" fill="#DBEAFE"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1D4ED8">${texto}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
