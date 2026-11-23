// Categoria, descrição ("o que faz na tela") e exemplo de cada classe do styles.css.
// A chave é o nome exibido no catálogo (com o ponto). Classes que não estão aqui
// aparecem em "Sem descrição" com um exemplo genérico, então nada some do catálogo.

import {
  abas, acordeao, areaDeTexto, arvore, barraDeProgresso, botao, botaoDireto, caixaDeSelecao, calendario, campo, card,
  chip, dialogo, dica, divisorVertical, dropdown, escolherArquivo, imagemExemplo, multiselect, paginador, painelDropdown,
  passos, radio, spinner, tabela, toastErro,
} from './markup';

export type IdCategoria =
  | 'escala' | 'textos' | 'botoes' | 'tags' | 'cards' | 'layout' | 'formularios'
  | 'arvore' | 'tabelas' | 'estados' | 'utilitarios' | 'primeng' | 'externas' | 'sem-descricao';

export interface Categoria {
  id: IdCategoria;
  nome: string;
  icone: string;
  resumo: string;
}

export const CATEGORIAS: Categoria[] = [
  { id: 'escala', nome: 'Escala tipográfica', icone: 'pi-sort-amount-down', resumo: 'A família heading / body / small / mini: tamanhos e pesos de texto padronizados.' },
  { id: 'textos', nome: 'Textos, rótulos e valores', icone: 'pi-align-left', resumo: 'Títulos de tela e de seção, rótulos de campo, valores, legendas e descrições.' },
  { id: 'botoes', nome: 'Botões', icone: 'pi-stop', resumo: 'Classes que mudam cor, tamanho e comportamento de botões (PrimeNG e HTML).' },
  { id: 'tags', nome: 'Tags, chips e status', icone: 'pi-tag', resumo: 'Etiquetas coloridas de status, chips e marcadores.' },
  { id: 'cards', nome: 'Cards, painéis e contêineres', icone: 'pi-clone', resumo: 'Caixas, cards, painéis e blocos compostos (lista expansível, movimentações, confirmação).' },
  { id: 'layout', nome: 'Layout da página', icone: 'pi-th-large', resumo: 'Cabeçalhos, áreas de conteúdo, linhas de lista, divisores e espaçamentos.' },
  { id: 'formularios', nome: 'Formulários, campos e filtros', icone: 'pi-pencil', resumo: 'Dropdowns, inputs, checkboxes, painéis de filtro e marcação de campo obrigatório ou inválido.' },
  { id: 'arvore', nome: 'Árvores (p-tree)', icone: 'pi-sitemap', resumo: 'Árvore de equipamentos, árvore de modelos e árvore do plano contratado.' },
  { id: 'tabelas', nome: 'Tabelas, abas e paginação', icone: 'pi-table', resumo: 'Tabelas compactas, paginadores, abas e acordeões.' },
  { id: 'estados', nome: 'Estados: vazio, carregando, erro', icone: 'pi-info-circle', resumo: 'Mensagens de lista vazia, sem resultados, carregando, erro e aviso.' },
  { id: 'utilitarios', nome: 'Utilitários', icone: 'pi-wrench', resumo: 'Classes pequenas de uso geral: reticências, quebra de texto, destaque, cursor, opacidade.' },
  { id: 'primeng', nome: 'Ajustes globais do PrimeNG', icone: 'pi-globe', resumo: 'Regras sem classe própria: mudam componentes do PrimeNG (ou elementos HTML) no sistema inteiro.' },
  { id: 'externas', nome: 'Bibliotecas externas', icone: 'pi-calendar', resumo: 'Ajustes em componentes de outras bibliotecas (Toast UI Calendar).' },
  { id: 'sem-descricao', nome: 'Sem descrição', icone: 'pi-question-circle', resumo: 'Classes novas do styles.css que ainda não têm descrição neste catálogo.' },
];

export interface InfoClasse {
  categoria: IdCategoria;
  descricao: string;
  /** HTML do exemplo. Sem ele, o catálogo mostra um texto com a classe aplicada. */
  exemplo?: string;
  /** Texto usado no exemplo automático (tipografia). */
  texto?: string;
  /** Quando não dá para mostrar ao vivo: explica o porquê. */
  semExemplo?: string;
  /** Instrução para ver o efeito (hover, redimensionar...). */
  dica?: string;
  /** Fundo da área de exemplo. Padrão: cinza claro. */
  fundo?: 'branco' | 'escuro';
}

// ---------- blocos reutilizados nos exemplos ----------

const grade = (...itens: string[]) => `<div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center">${itens.join('')}</div>`;
const coluna = (...itens: string[]) => `<div style="display:flex; flex-direction:column; gap:10px">${itens.join('')}</div>`;
const largura = (px: number, html: string) => `<div style="width:${px}px; max-width:100%">${html}</div>`;
const sotag = (cor: string, texto: string) => `<span class="status-so-tag ${cor}">${texto}</span>`;
const opStatus = (variante: string, texto: string) => `<span class="tag-operation-status ${variante}">${texto}</span>`;

const listaExpansivel = `
<div class="expandable-list-border" style="max-width:560px">
  <div class="expandable-list-header">
    <div class="expandable-list-header-title"><i class="pi pi-box"></i> Equipamentos vinculados <span style="color:#6b7280">(2)</span></div>
    ${botao(null, { icone: 'pi-filter', host: 'expandable-list-header-button' })}
    <i class="pi pi-chevron-down expandable-list-header-chevron expandable-list-header-chevron-open"></i>
  </div>
  <div class="expandable-list-filters-border">
    <div class="expandable-list-filters-field grid">
      <div class="field col-12 md:col-6"><label class="expandable-list-filters-field-label">Código</label>${campo('', { placeholder: 'Ex.: EQ-1020' })}</div>
      <div class="field col-12 md:col-6"><label class="expandable-list-filters-field-label">Situação</label>${dropdown('Todas')}</div>
    </div>
  </div>
  <div class="expandable-list-body">
    <div class="expandable-list-card-border" style="display:flex; align-items:center; gap:12px">
      <div style="flex:1; display:grid; grid-template-columns:1fr 1fr; gap:8px">
        <div><div class="expandable-list-card-label">Código</div><div class="expandable-list-card-value">EQ-1020</div></div>
        <div><div class="expandable-list-card-label">Modelo</div><div class="expandable-list-card-value">ONU Huawei HG8245</div></div>
        <div style="grid-column:1 / -1" class="expandable-list-card-address"><span class="expandable-list-card-address-label">Endereço:</span> Rua das Flores, 120 - Centro</div>
      </div>
      <div class="expandable-list-card-navigation-handler"><i class="pi pi-chevron-right"></i></div>
    </div>
  </div>
  <div style="height:12px"></div>
</div>`;

const movimentacao = (mod: string, tipo: string) => `
<div class="move-left-border ${mod}" style="margin-bottom:10px">
  <div class="move-type-label">${tipo}</div>
  <div class="move-quantity-label">2 unidades</div>
  <div class="move-date-label">19/11/2026 às 14:32</div>
</div>`;

const objetoMovido = `
<fieldset class="move-object-border" style="max-width:420px">
  <legend class="move-object-legend"><i class="pi pi-box move-object-legend-icon"></i> Equipamento</legend>
  <div class="move-object-main-label">ONU Huawei HG8245</div>
  <div class="move-object-aux-label">Série 48575443A1B2 · Patrimônio 00231</div>
</fieldset>`;

const confirmarAnexo = `
<div class="confirm-attachment" style="max-width:460px; box-shadow:0 4px 16px rgba(0,0,0,.12); border-radius:8px">
  <div class="confirm-attachment__body">
    <i class="pi pi-exclamation-triangle confirm-attachment__icon"></i>
    <div class="confirm-attachment__text">
      <span class="confirm-attachment__title">Remover anexo?</span>
      <span class="confirm-attachment__message">O arquivo contrato.pdf será removido desta requisição.</span>
      <div class="confirm-attachment__actions">
        ${botaoDireto('Cancelar', 'confirm-attachment__cancel')}
        ${botaoDireto('Remover', 'confirm-attachment__accept')}
      </div>
    </div>
  </div>
</div>`;

const cabecalhoPagina = `
<div style="height:150px; overflow:auto; border:1px solid #e5e7eb; background:#fff">
  <div class="page-header">
    <h1 class="page-header__title">Requisições</h1>
    <div class="page-header__actions">
      ${botao(null, { icone: 'pi-filter', outlined: true, host: 'header-btn is-active' })}
      ${botao('Nova requisição', { icone: 'pi-plus' })}
    </div>
  </div>
  <div style="padding:16px 32px; color:#6b7280">Role esta caixa: o cabeçalho fica grudado no topo.<br><br>Linha 1<br>Linha 2<br>Linha 3<br>Linha 4<br>Linha 5</div>
</div>`;

const filtroAvancado = `
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:12px; align-items:end; max-width:620px">
  <div><div class="filter-panel__label">Campo</div>${dropdown('Data de criação')}</div>
  <div class="filter-panel__operator"><div class="filter-panel__label">Operador</div>${dropdown('é maior que')}</div>
  <div><div class="filter-panel__label">Valor</div><input type="text" class="filter-panel__input" value="01/11/2026" style="width:100%; padding:0 8px"></div>
</div>
<div style="margin-top:12px">${painelDropdown(['é igual a', 'é maior que', 'é menor que'], 1, 'filter-panel__operator-panel')}</div>`;

const restricoes = `
<div class="restrictions-container" style="max-width:600px">
  <div class="restrictions-header" style="display:flex; align-items:center; gap:12px; padding:8px 12px">
    <span class="label-restrictions">3 restrições</span>
    ${divisorVertical()}
    <span class="restriction-header-items" style="padding:2px 8px">Velocidade · Franquia</span>
    ${divisorVertical()}
    ${botao('Aplicar', { desabilitado: true, text: true })}
  </div>
  <div style="padding:12px">Conteúdo das restrições</div>
</div>`;

const listaDeGrupos = `
<div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; max-width:420px; overflow:hidden">
  <div class="group-row" style="display:flex; cursor:pointer"><span class="group">Técnicos de campo</span><span style="color:#6b7280">12 usuários</span></div>
  <div class="group-row selected-group" style="display:flex; cursor:pointer"><span class="group">Administradores</span><span style="color:#6b7280">selecionado</span></div>
  <div class="group-row disabled-group" style="display:flex"><span class="group">Financeiro</span><span>desabilitado</span></div>
</div>`;

// ---------- as classes ----------

export const INFO: Record<string, InfoClasse> = {
  // ===== Ajustes globais =====
  'body': {
    categoria: 'primeng',
    descricao: 'Tira a margem padrão de 8px que o navegador coloca no <body>, para a página encostar nas bordas da janela.',
    semExemplo: 'Vale para a página inteira (esta página também usa). Não há o que mostrar isolado.',
  },
  '.p-sidebar': {
    categoria: 'primeng',
    descricao: 'Todo p-sidebar (painel lateral) passa a ter a largura do próprio conteúdo, em vez da largura fixa do tema (20rem).',
    exemplo: `<div class="p-sidebar p-component p-sidebar-right" style="position:relative; display:inline-flex; flex-direction:column; height:auto; border:1px solid #e5e7eb">
      <div class="p-sidebar-header"><button type="button" class="p-sidebar-close p-sidebar-icon p-link"><span class="pi pi-times"></span></button></div>
      <div class="p-sidebar-content">Conteúdo curto = painel estreito</div></div>`,
  },
  '.p-card': {
    categoria: 'primeng',
    descricao: 'Muda todos os p-card: o cabeçalho ganha 1.25rem de recuo à esquerda e no topo; o corpo perde o padding vertical (fica só 1.25rem nas laterais) e ganha 20px de margem embaixo.',
    exemplo: largura(420, card('Conteúdo do card com o corpo sem padding em cima e embaixo.', { cabecalho: '<strong>Cabeçalho do card</strong>', titulo: 'Título' })),
  },
  '.p-dropdown': {
    categoria: 'primeng',
    descricao: 'Todo p-dropdown ocupa 100% da largura do contêiner. Quando está desabilitado, a setinha da direita some.',
    exemplo: largura(360, coluna(dropdown('Opção selecionada'), dropdown('Desabilitado: sem seta', { desabilitado: true }))),
  },
  '.p-steps': {
    categoria: 'primeng',
    descricao: 'Em telas de até 576px de largura, os passos do p-steps deixam de ficar lado a lado e passam a ser empilhados.',
    exemplo: passos(['Dados', 'Endereço', 'Agendamento', 'Resumo']),
    dica: 'Diminua a janela para menos de 576px de largura para ver os passos empilharem.',
  },
  '.p-button': {
    categoria: 'primeng',
    descricao: 'Dois ajustes em todos os botões: o botão "escolher arquivo" do p-fileUpload fica com 2rem × 2rem; e qualquer botão habilitado perde o anel de foco (contorno e sombra). Sem o anel, quem navega pelo teclado não vê qual botão está selecionado.',
    exemplo: grade(escolherArquivo(null), botao('Clique: sem anel de foco')),
    dica: 'Clique no botão ou use Tab: nenhum contorno aparece.',
  },
  '.p-image-preview-icon': {
    categoria: 'primeng',
    descricao: 'Mantém o ícone de "olho" do preview do p-image no tamanho normal (scale: 1).',
    exemplo: `<span class="p-image p-component p-image-preview-container" style="display:inline-block; position:relative"><img src="${imagemExemplo(240, 120, 'p-image')}" width="240" alt="">
      <div class="p-image-preview-indicator"><svg class="p-icon p-image-preview-icon" width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 3C3.5 3 1 7 1 7s2.5 4 6 4 6-4 6-4-2.5-4-6-4Zm0 6.5A2.5 2.5 0 1 1 7 4.5a2.5 2.5 0 0 1 0 5Z"/></svg></div></span>`,
    dica: 'Passe o mouse sobre a imagem.',
  },
  '.p-dataview': {
    categoria: 'primeng',
    descricao: 'O conteúdo de todo p-dataView fica sem fundo (transparente) e sem margem no topo.',
    exemplo: `<div class="p-dataview p-component"><div class="p-dataview-content"><div style="padding:12px; border:1px dashed #94a3b8">Item 1 (o fundo cinza da área aparece por trás)</div></div></div>`,
  },
  '.p-toast': {
    categoria: 'primeng',
    descricao: 'Mensagens de erro do p-toast quebram textos longos sem espaços (URLs, códigos) para não vazarem da caixa.',
    exemplo: toastErro('Erro ao salvar', 'Falha em https://api.exemplo.com.br/v1/requisicoes/00000000-0000-0000-0000-000000000000/anexos'),
  },
  '.p-tree': {
    categoria: 'primeng',
    descricao: 'Todas as árvores perdem o padding interno; os nós perdem padding, anel de foco e o fundo cinza ao passar o mouse.',
    exemplo: largura(360, arvore([{ rotulo: 'POP Centro', filhos: [{ rotulo: 'Armário 01' }, { rotulo: 'Armário 02' }] }])),
    dica: 'Passe o mouse nos nós: não aparece fundo.',
  },
  '.pi-ellipsis-v': {
    categoria: 'primeng',
    descricao: 'Todo ícone de três pontinhos verticais (menu de ações) fica azul e menor (0.8rem).',
    exemplo: grade('<i class="pi pi-ellipsis-v"></i>', '<span style="color:#6b7280">← ícone pi-ellipsis-v</span>'),
  },
  '.p-button-label': {
    categoria: 'primeng',
    descricao: 'O texto de todos os botões PrimeNG fica com peso normal. O tema Lara usa negrito (700).',
    exemplo: grade(botao('Salvar'), botao('Cancelar', { outlined: true })),
  },

  // ===== Externas =====
  '.toastui-calendar-allday': {
    categoria: 'externas',
    descricao: 'No calendário Toast UI, a faixa de eventos de "dia inteiro" fica fixa em 30px de altura.',
    semExemplo: 'O calendário Toast UI é montado por JavaScript; o efeito só aparece numa tela com o calendário.',
  },
  '.toastui-calendar-template-alldayTitle': {
    categoria: 'externas',
    descricao: 'Dá 7px de margem ao título da faixa "dia inteiro" do calendário Toast UI.',
    semExemplo: 'O calendário Toast UI é montado por JavaScript; o efeito só aparece numa tela com o calendário.',
  },

  // ===== Portal do cliente: textos =====
  '.portal-cliente-título-etapa': { categoria: 'textos', descricao: 'Título de cada etapa do formulário do portal do cliente: Inter 20px seminegrito, azul.', texto: 'Dados do atendimento' },
  '.portal-cliente-subtítulo-etapa': { categoria: 'textos', descricao: 'Subtítulo com a explicação da etapa, abaixo do título: Inter 14px médio, cinza.', texto: 'Informe o tipo de serviço e o endereço' },
  '.portal-cliente-rótulo': { categoria: 'textos', descricao: 'Rótulo de campo no portal do cliente: Inter 16px médio, cinza-escuro.', texto: 'Tipo de serviço' },
  '.portal-cliente-descricao-anexo': { categoria: 'textos', descricao: 'Texto de ajuda da área de anexos (formatos e tamanho aceitos): Inter 12px, cinza.', texto: 'PDF, JPG ou PNG de até 10 MB' },
  '.portal-cliente-resumo-titulo': { categoria: 'textos', descricao: 'Título da tela de resumo antes de enviar: Inter 16px seminegrito.', texto: 'Resumo da solicitação' },
  '.portal-cliente-resumo-etapa': { categoria: 'textos', descricao: 'Nome de cada etapa dentro do resumo: Inter 14px médio.', texto: '1. Dados do atendimento' },
  '.portal-cliente-resumo-botao-alterar': {
    categoria: 'textos',
    descricao: 'Link "Alterar" ao lado de cada etapa do resumo: Inter 11px. Precisa ir num elemento de texto simples; num <p-button> o botão usa a própria fonte e ignora esta.',
    exemplo: `<a class="portal-cliente-resumo-botao-alterar" style="cursor:pointer; text-decoration:underline">Alterar</a>`,
  },
  '.portal-cliente-resumo-atributo': {
    categoria: 'textos', descricao: 'Valor de um campo na tela de resumo: Inter 12px seminegrito.',
    exemplo: coluna('<span class="portal-cliente-resumo-rotulo">Tipo de serviço</span>', '<span class="portal-cliente-resumo-atributo">Instalação de internet</span>'),
  },
  '.portal-cliente-resumo-rotulo': {
    categoria: 'textos', descricao: 'Nome do campo na tela de resumo: Inter 12px regular (o valor usa .portal-cliente-resumo-atributo).',
    exemplo: coluna('<span class="portal-cliente-resumo-rotulo">Tipo de serviço</span>', '<span class="portal-cliente-resumo-atributo">Instalação de internet</span>'),
  },
  '.portal-cliente-título-atendimento-criado': { categoria: 'textos', descricao: 'Título grande da tela de sucesso: 32px negrito, azul.', texto: 'Atendimento criado!' },
  '.portal-cliente-subtitulo-codigo-os': { categoria: 'textos', descricao: 'Linha com o código da OS na tela de sucesso: 20px regular, cinza-escuro.', texto: 'Código da OS: 2026-004512' },
  '.portal-cliente-label-titulo': { categoria: 'textos', descricao: 'Título de seção do portal do cliente: 18px seminegrito, azul.', texto: 'Minhas ordens de serviço' },

  // ===== Escala tipográfica =====
  '.heading-1': { categoria: 'escala', descricao: 'Título nível 1: 48px negrito, Inter.', texto: 'Heading 1' },
  '.heading-1-regular-gray': { categoria: 'escala', descricao: 'Título nível 1 em cinza-escuro (#303030): 48px negrito.', texto: 'Heading 1 cinza' },
  '.heading-2': { categoria: 'escala', descricao: 'Título nível 2: 36px negrito.', texto: 'Heading 2' },
  '.heading-2-regular-gray': { categoria: 'escala', descricao: 'Título nível 2 em cinza-escuro: 36px negrito.', texto: 'Heading 2 cinza' },
  '.heading-3': { categoria: 'escala', descricao: 'Título nível 3: 24px negrito.', texto: 'Heading 3' },
  '.heading-3-regular-grey': { categoria: 'escala', descricao: 'Título nível 3 em cinza-escuro: 24px negrito. O nome usa "grey" (as outras usam "gray").', texto: 'Heading 3 cinza' },
  '.heading-4': { categoria: 'escala', descricao: 'Título nível 4: 24px regular.', texto: 'Heading 4' },
  '.heading-4-regular-gray': { categoria: 'escala', descricao: 'Título nível 4 em cinza-escuro: 24px regular.', texto: 'Heading 4 cinza' },
  '.heading-5': { categoria: 'escala', descricao: 'Título nível 5: 20px regular.', texto: 'Heading 5' },
  '.heading-5-regular-gray': { categoria: 'escala', descricao: 'Título nível 5 em cinza-escuro: 20px regular.', texto: 'Heading 5 cinza' },
  '.heading-5-bold-gray': { categoria: 'escala', descricao: 'Título nível 5 negrito em cinza-escuro. Foi declarada 3 vezes: a primeira com 20px, as seguintes com 24px. Vale 24px, o mesmo tamanho do heading-3.', texto: 'Heading 5 negrito cinza' },
  '.heading-6': { categoria: 'escala', descricao: 'Título nível 6: 20px negrito.', texto: 'Heading 6' },
  '.heading-6-primary-blue': { categoria: 'escala', descricao: 'Título nível 6 em azul primário: 20px negrito.', texto: 'Heading 6 azul' },
  '.heading-6-regular-gray': { categoria: 'escala', descricao: 'Título nível 6 em cinza-escuro: 20px negrito.', texto: 'Heading 6 cinza' },
  '.heading-7': { categoria: 'escala', descricao: 'Título nível 7: 20px médio (500).', texto: 'Heading 7' },
  '.heading-7-regular-gray': { categoria: 'escala', descricao: 'Título nível 7 em cinza-escuro: 20px médio.', texto: 'Heading 7 cinza' },
  '.heading-8-regular-gray': { categoria: 'escala', descricao: 'Título nível 8 em cinza-escuro: 18px regular.', texto: 'Heading 8 cinza' },
  '.heading-8-bold-regular-gray': { categoria: 'escala', descricao: 'Título nível 8 negrito em cinza-escuro: 18px, com 10px de espaço à direita.', texto: 'Heading 8 negrito cinza' },
  '.body': { categoria: 'escala', descricao: 'Pelo nome parece o texto padrão (16px), mas foi declarada duas vezes e a segunda vence: o texto fica com 10px, seminegrito e cinza-azulado.', texto: 'Texto com .body' },
  '.body-regular-gray': { categoria: 'escala', descricao: 'Texto de corpo cinza-escuro: 16px seminegrito (600), entrelinha 160%.', texto: 'Body regular gray — texto de corpo com entrelinha maior para parágrafos.' },
  '.body-regular-gray-lighter': { categoria: 'escala', descricao: 'Texto de corpo cinza-escuro um pouco mais leve: 16px médio (500).', texto: 'Body regular gray lighter' },
  '.body-light-gray': { categoria: 'escala', descricao: 'Texto de corpo cinza-claro (#767676): 16px regular.', texto: 'Body light gray' },
  '.body-bold': { categoria: 'escala', descricao: 'Texto de corpo negrito: 16px.', texto: 'Body bold' },
  '.body-bold-regular-gray': { categoria: 'escala', descricao: 'Texto de corpo negrito em cinza-escuro: 16px.', texto: 'Body bold gray' },
  '.body-bold-light-gray': { categoria: 'escala', descricao: 'Texto de corpo negrito em cinza-claro: 16px.', texto: 'Body bold light gray' },
  '.small': { categoria: 'escala', descricao: 'Texto pequeno: 14px regular.', texto: 'Small' },
  '.small-regular-gray': { categoria: 'escala', descricao: 'Texto pequeno cinza-escuro: 14px. A primeira declaração usa peso 500; as cópias seguintes trocam para normal (400), que é o que vale.', texto: 'Small regular gray' },
  '.small-light-gray': { categoria: 'escala', descricao: 'Texto pequeno cinza-claro: 14px regular.', texto: 'Small light gray' },
  '.small-bold': { categoria: 'escala', descricao: 'Texto pequeno negrito: 14px.', texto: 'Small bold' },
  '.small-bold-regular-gray': { categoria: 'escala', descricao: 'Texto pequeno negrito cinza-escuro: 14px.', texto: 'Small bold gray' },
  '.small-bold-light-gray': { categoria: 'escala', descricao: 'Texto pequeno negrito cinza-claro: 14px.', texto: 'Small bold light gray' },
  '.mini': { categoria: 'escala', descricao: 'Texto mini: 12px médio.', texto: 'Mini' },
  '.mini-regular-gray': { categoria: 'escala', descricao: 'Texto mini cinza-escuro: 12px médio.', texto: 'Mini regular gray' },
  '.mini-light-gray': { categoria: 'escala', descricao: 'Texto mini cinza-claro: 12px médio.', texto: 'Mini light gray' },
  '.mini-bold': { categoria: 'escala', descricao: 'Texto mini negrito: 12px.', texto: 'Mini bold' },
  '.mini-bold-regular-gray': { categoria: 'escala', descricao: 'Texto mini negrito cinza-escuro: 12px.', texto: 'Mini bold gray' },
  '.mini-bold-light-gray': { categoria: 'escala', descricao: 'Texto mini negrito cinza-claro: 12px.', texto: 'Mini bold light gray' },
  '.mini-bold-primary-blue': { categoria: 'escala', descricao: 'Texto mini negrito azul: 12px.', texto: 'Mini bold azul' },

  // ===== Textos gerais =====
  '.title': { categoria: 'textos', descricao: 'Título de seção ou card: Inter 16px seminegrito, cinza (#525050).', texto: 'Dados gerais' },
  '.description': { categoria: 'textos', descricao: 'Texto descritivo: Inter 16px médio, cinza.', texto: 'Descrição do item cadastrado' },
  '.sub-title': { categoria: 'textos', descricao: 'Subtítulo: Inter 14px médio, cinza.', texto: 'Informações complementares' },
  '.highlighted-large-inputs': { categoria: 'textos', descricao: 'Valor de campo em destaque: Inter 14px seminegrito, cinza.', texto: 'R$ 1.250,00' },
  '.highlighted-extra-large-inputs': { categoria: 'textos', descricao: 'Valor de campo em destaque maior: Inter 16px seminegrito, cinza.', texto: 'R$ 1.250,00' },
  '.large-inputs': { categoria: 'textos', descricao: 'Valor de campo: Inter 14px médio, cinza.', texto: 'Instalação residencial' },
  '.label': { categoria: 'textos', descricao: 'Rótulo de campo: Inter 12px seminegrito, cinza (#4b5563).', texto: 'Nome do cliente' },
  '.label-filter': { categoria: 'textos', descricao: 'Título do painel de filtros: Geist 20px médio, quase preto. Não tem fonte de reserva: sem a Geist carregada, usa a fonte padrão do navegador.', texto: 'Filtros' },
  '.input': { categoria: 'textos', descricao: 'Texto de valor pequeno: Inter 12px médio, cinza. Foi declarada duas vezes com o mesmo conteúdo.', texto: 'EQ-1020 · ONU Huawei' },
  '.label-form': { categoria: 'textos', descricao: 'Rótulo de formulário: Geist 14px regular, azul-acinzentado escuro (#314158).', texto: 'Data de início' },
  '.details': { categoria: 'textos', descricao: 'Detalhe ou observação: Inter 12px médio, itálico.', texto: 'Atualizado há 5 minutos' },
  '.description-small': { categoria: 'textos', descricao: 'Descrição pequena: 12px médio, cinza-azulado (#64748b).', texto: 'Este campo é preenchido automaticamente' },
  '.description-large': { categoria: 'textos', descricao: 'Descrição grande em itálico: 16px médio, cinza-azulado.', texto: 'Nenhum equipamento vinculado' },
  '.description-medium': { categoria: 'textos', descricao: 'Descrição média: 14px médio, cinza-azulado.', texto: 'Selecione um item para ver os detalhes' },
  '.input-italic': { categoria: 'textos', descricao: 'Texto em itálico, 12px, cinza-azulado (ex.: "sem valor").', texto: 'Não informado' },
  '.info-medium': { categoria: 'textos', descricao: 'Informação em destaque: 14px médio, azul.', texto: '3 itens selecionados' },
  '.caption': { categoria: 'textos', descricao: 'Legenda: 11px regular, cinza-escuro.', texto: 'Última sincronização: 19/11/2026 10:42' },
  '.link-xs-strong': { categoria: 'textos', descricao: 'Link extra pequeno: 11px médio, azul.', texto: 'Ver histórico' },
  '.medium': { categoria: 'textos', descricao: 'Texto Geist 14px médio, quase preto.', texto: 'Texto médio' },
  '.ext-large': { categoria: 'textos', descricao: 'Texto Geist 18px médio, quase preto.', texto: 'Texto extra grande' },
  '.card-input': { categoria: 'textos', descricao: 'Valor dentro de cards: Geist 12px regular, quase preto.', exemplo: coluna('<span class="card-label">Modelo</span>', '<span class="card-input">ONU Huawei HG8245</span>') },
  '.card-label': { categoria: 'textos', descricao: 'Rótulo dentro de cards: Geist 12px regular, cinza.', exemplo: coluna('<span class="card-label">Modelo</span>', '<span class="card-input">ONU Huawei HG8245</span>') },
  '.equipment-event-label': { categoria: 'textos', descricao: 'Rótulo de evento de equipamento: 12px médio, cinza-azulado, em bloco, com 2px abaixo.', exemplo: '<span class="equipment-event-label">Tipo de evento</span><span class="equipment-event-input">Manutenção preventiva</span>' },
  '.equipment-event-input': { categoria: 'textos', descricao: 'Valor de evento de equipamento: Geist 12px, quase preto.', exemplo: '<span class="equipment-event-label">Tipo de evento</span><span class="equipment-event-input">Manutenção preventiva</span>' },
  '.model-type-input': { categoria: 'textos', descricao: 'Valor do tipo de modelo: Geist 12px, quase preto. Foi declarada duas vezes com o mesmo conteúdo.', texto: 'Roteador' },
  '.equipment-event-warning-text': { categoria: 'estados', descricao: 'Texto de aviso discreto: Inter 12px médio, cinza.', exemplo: grade('<i class="pi pi-info-circle equipment-event-warning-icon"></i>', '<span class="equipment-event-warning-text">Este evento ainda não foi sincronizado</span>') },
  '.equipment-event-warning-icon': { categoria: 'estados', descricao: 'Ícone que acompanha o aviso discreto: cinza, 1rem.', exemplo: grade('<i class="pi pi-info-circle equipment-event-warning-icon"></i>', '<span class="equipment-event-warning-text">Este evento ainda não foi sincronizado</span>') },
  '.main-label': { categoria: 'textos', descricao: 'Rótulo principal (plano contratado): Geist 14px médio, cinza-escuro, 8px à esquerda.', exemplo: grade('<span class="type-label">Serviço</span>', '<span class="main-label">Internet 500 Mega</span>', '<span class="second-label">Plano residencial</span>', '<span class="third-label">desde 01/2026</span>', '<span class="fourth-label">ID 7781</span>') },
  '.second-label': { categoria: 'textos', descricao: 'Rótulo secundário: Geist 14px regular, cinza.', exemplo: grade('<span class="main-label">Internet 500 Mega</span>', '<span class="second-label">Plano residencial</span>') },
  '.third-label': { categoria: 'textos', descricao: 'Rótulo terciário: Geist 12px regular, cinza-claro.', exemplo: grade('<span class="main-label">Internet 500 Mega</span>', '<span class="third-label">desde 01/2026</span>') },
  '.fourth-label': { categoria: 'textos', descricao: 'Rótulo quaternário: Geist 12px médio, cinza-claro.', exemplo: grade('<span class="main-label">Internet 500 Mega</span>', '<span class="fourth-label">ID 7781</span>') },
  '.label-items': { categoria: 'textos', descricao: 'Título da lista de itens: Geist 18px, 6px abaixo. Tenta engrossar a borda de baixo para 6px, mas sem border-style a borda não aparece.', texto: 'Itens do plano' },
  '.label-alterations': { categoria: 'textos', descricao: 'Título da seção de alterações: Geist 16px médio.', texto: 'Alterações pendentes' },
  '.label-restrictions': { categoria: 'textos', descricao: 'Texto das restrições: Geist 12px, azul.', texto: '3 restrições aplicadas' },
  '.label-type': { categoria: 'textos', descricao: 'Rótulo de tipo com padding (lista de opções): Geist 12px, quase preto.', texto: 'Tipo de restrição' },
  '.label-options': { categoria: 'textos', descricao: 'Texto de opção com padding: Geist 12px, cinza-escuro.', texto: 'Limitar velocidade' },
  '.batch-action': { categoria: 'textos', descricao: 'Texto da ação em lote: Geist 16px, quase preto.', texto: 'Alterar situação de 12 itens' },
  '.filter-label': { categoria: 'textos', descricao: 'Rótulo de filtro: Geist 12px, azul-acinzentado.', texto: 'Período' },
  '.ui-title': { categoria: 'textos', descricao: 'Título pequeno de bloco: Inter 13px médio, cinza-azulado.', texto: 'Dados da requisição' },
  '.ui-label': { categoria: 'textos', descricao: 'Rótulo pequeno: Inter 11px médio, cinza-azulado.', exemplo: coluna('<span class="ui-label">Solicitante</span>', '<span class="ui-value">Maria Souza</span>') },
  '.ui-value': { categoria: 'textos', descricao: 'Valor: Inter 13.5px médio, azul-escuro quase preto.', exemplo: coluna('<span class="ui-label">Solicitante</span>', '<span class="ui-value">Maria Souza</span>') },
  '.t-title-lg': { categoria: 'textos', descricao: 'Título grande: Geist 24px médio, entrelinha 32px.', texto: 'Nova requisição' },
  '.t-title-sm': { categoria: 'textos', descricao: 'Título pequeno: Geist 16px seminegrito, entrelinha 24px.', texto: 'Insumos' },
  '.t-label-field': { categoria: 'textos', descricao: 'Rótulo de campo: Geist 13px médio, entrelinha 20px.', texto: 'Centro de custo' },
  '.ui-input': { categoria: 'textos', descricao: 'Texto de campo: Geist 14px regular, entrelinha 21px. Aplique no input.', exemplo: largura(300, campo('Texto digitado', { classe: 'ui-input' })) },
  '.kv': { categoria: 'textos', descricao: 'Par chave-valor empilhado (chave em cima, valor embaixo) com 2px entre eles.', exemplo: '<div class="kv"><span class="kv-k">Solicitante</span><span class="kv-v">Maria Souza</span></div>' },
  '.kv-k': { categoria: 'textos', descricao: 'Chave do par chave-valor: Geist 13px, cinza-claro.', exemplo: '<div class="kv"><span class="kv-k">Solicitante</span><span class="kv-v">Maria Souza</span></div>' },
  '.kv-v': { categoria: 'textos', descricao: 'Valor do par chave-valor: Geist 13px, quase preto; texto longo é cortado com reticências.', exemplo: largura(180, '<div class="kv"><span class="kv-k">Observação</span><span class="kv-v">Texto bem comprido que não cabe na largura</span></div>') },

  // ===== Botões =====
  '.card-button-map': { categoria: 'botoes', descricao: 'Num contêiner .card-button-map, botões outlined ficam com Inter 14px regular. É o botão de mapa dos cards.', exemplo: `<div class="card-button-map">${botao('Ver no mapa', { icone: 'pi-map-marker', outlined: true })}</div>` },
  '.portal-cliente-botao-voltar': { categoria: 'botoes', descricao: 'Botão "Voltar" do passo a passo do portal: texto azul Inter 15px seminegrito. Funciona com botão outlined ou text.', exemplo: botao('Voltar', { icone: 'pi-arrow-left', outlined: true, host: 'portal-cliente-botao-voltar' }) },
  '.portal-cliente-botao-proximo': { categoria: 'botoes', descricao: 'Botão "Próximo" do passo a passo: texto branco Inter 15px seminegrito sobre o fundo azul do botão.', exemplo: botao('Próximo', { host: 'portal-cliente-botao-proximo' }) },
  '.portal-cliente-botao-remover-anexo': { categoria: 'botoes', descricao: 'Botão "Remover" de um anexo: texto 12px médio, cinza-claro.', exemplo: botao('Remover', { icone: 'pi-trash', text: true, host: 'portal-cliente-botao-remover-anexo' }) },
  '.portal-cliente-botao-tentar-novamente': { categoria: 'botoes', descricao: 'Botão "Tentar novamente" quando o upload falha: 12px médio, azul, sem padding (parece um link).', exemplo: botao('Tentar novamente', { text: true, host: 'portal-cliente-botao-tentar-novamente' }) },
  '.portal-cliente-botao-cancelar-os': { categoria: 'botoes', descricao: 'Botão "Cancelar OS": texto vermelho 14px médio. Use com botão outlined ou text.', exemplo: botao('Cancelar OS', { outlined: true, host: 'portal-cliente-botao-cancelar-os' }) },
  '.portal-cliente-botao-reagendar-os': { categoria: 'botoes', descricao: 'Botão "Reagendar": fundo azul, texto branco 14px médio.', exemplo: botao('Reagendar', { host: 'portal-cliente-botao-reagendar-os' }) },
  '.portal-cliente-botao-agendar-os': { categoria: 'botoes', descricao: 'Botão "Agendar": fundo azul, texto branco 14px seminegrito.', exemplo: botao('Agendar', { host: 'portal-cliente-botao-agendar-os' }) },
  '.portal-cliente-botao-ver-mais-info': { categoria: 'botoes', descricao: 'Botão "Ver mais informações": texto azul 11px seminegrito.', exemplo: botao('Ver mais informações', { text: true, host: 'portal-cliente-botao-ver-mais-info' }) },
  '.portal-cliente-botao-ligar': { categoria: 'botoes', descricao: 'Botão "Ligar": texto 12px médio e largura total do contêiner.', exemplo: largura(280, botao('Ligar para o técnico', { icone: 'pi-phone', host: 'portal-cliente-botao-ligar' })) },
  '.cancel-button': { categoria: 'botoes', descricao: 'Deixa o texto do botão cinza-escuro (#494F61), para ações de cancelar.', exemplo: botao('Cancelar', { text: true, host: 'cancel-button' }) },
  '.cto-card-location-btn': { categoria: 'botoes', descricao: 'Dentro dele, o botão .customer-portal-button-positive-no-color perde o padding lateral e fica colado ao texto (botão de localização do card de CTO).', exemplo: `<div class="cto-card-location-btn">${botao('Ver localização', { icone: 'pi-map-marker', text: true, host: 'customer-portal-button-positive-no-color' })}</div>` },
  '.customer-portal-button-positive-no-color': { categoria: 'botoes', descricao: 'Botão do portal do cliente com texto 14px seminegrito e 30px de altura, sem mudar as cores do tema. Pode ir no próprio botão ou num contêiner em volta.', exemplo: grade(botao('Confirmar', { host: 'customer-portal-button-positive-no-color' }), botao('Ver detalhes', { text: true, host: 'customer-portal-button-positive-no-color' })) },
  '.customer-portal-button-positive-color': { categoria: 'botoes', descricao: 'Botão branco com texto azul (14px seminegrito, 30px): ação positiva secundária.', exemplo: botao('Ver detalhes', { outlined: true, host: 'customer-portal-button-positive-color' }) },
  '.customer-portal-button-positive': { categoria: 'botoes', descricao: 'Botão azul com texto branco (14px seminegrito, 30px): ação positiva principal.', exemplo: botao('Confirmar', { host: 'customer-portal-button-positive' }) },
  '.customer-portal-button-negative': { categoria: 'botoes', descricao: 'Botão sem fundo e sem borda, texto vermelho (14px seminegrito, 30px), para ações destrutivas. A classe vai no próprio botão (.p-button).', exemplo: botaoDireto('Excluir', 'customer-portal-button-negative', 'pi-trash') },
  '.customer-portal-button-cancel': { categoria: 'botoes', descricao: 'Botão sem fundo nem borda, texto cinza (14px seminegrito, 30px): ação de cancelar.', exemplo: botao('Cancelar', { host: 'customer-portal-button-cancel' }) },
  '.unfocusable': { categoria: 'botoes', descricao: 'Desativa o botão só na aparência, sem o atributo disabled: fica 70% opaco, com cursor normal, e ignora cliques.', exemplo: grade(botao('Normal'), botao('Com .unfocusable', { host: 'unfocusable' })), dica: 'Tente clicar ou passar o mouse no segundo botão.' },
  '.button-neutral': { categoria: 'botoes', descricao: 'Botão neutro: texto cinza-escuro Inter seminegrito, borda cinza-clara e 40px de altura. Não define fundo; use com botão outlined.', exemplo: botao('Exportar', { icone: 'pi-download', outlined: true, host: 'button-neutral' }) },
  '.btn': { categoria: 'botoes', descricao: 'Base para botões HTML simples: padding de 2px, sem borda, cantos de 5px e cursor de mãozinha. Combine com .btn-positive, .btn-negative ou .btn-neutral.', exemplo: grade('<button class="btn">.btn</button>', '<button class="btn btn-positive">.btn .btn-positive</button>', '<button class="btn btn-negative">.btn .btn-negative</button>', '<button class="btn btn-neutral">.btn .btn-neutral</button>') },
  '.btn-positive': { categoria: 'botoes', descricao: 'Fundo azul e texto branco. Para botão HTML simples, junto com .btn.', exemplo: '<button class="btn btn-positive">Salvar</button>' },
  '.btn-negative': { categoria: 'botoes', descricao: 'Texto e cor de borda vermelhos. A borda só aparece se o botão tiver estilo de borda; com .btn (border: none) ela não aparece.', exemplo: grade('<button class="btn btn-negative">Com .btn</button>', '<button class="btn-negative" style="border-style:solid; padding:4px 8px">Com borda sólida</button>') },
  '.btn-neutral': { categoria: 'botoes', descricao: 'Texto cinza (#7A7A7A). Para botão HTML simples, junto com .btn.', exemplo: '<button class="btn btn-neutral">Cancelar</button>' },
  '.card-medium': { categoria: 'botoes', descricao: 'Card médio: ícones <i> mostram mãozinha e botões ficam menores (12px, padding 5px 15px).', exemplo: `<div class="card-medium" style="display:flex; gap:12px; align-items:center"><i class="pi pi-pencil"></i>${botao('Detalhes')}</div>` },
  '.underline-button': { categoria: 'botoes', descricao: 'Sublinha o texto do botão, deixando-o com cara de link.', exemplo: botao('Ver todos', { text: true, host: 'underline-button' }) },
  '.clearButton': { categoria: 'botoes', descricao: 'O texto do botão nunca quebra linha, mesmo em espaço apertado (ex.: "Limpar filtros").', exemplo: largura(90, botao('Limpar filtros', { text: true, host: 'clearButton' })) },
  '.icon-button': { categoria: 'botoes', descricao: 'Botão só de ícone compacto: sem padding, 18px de altura e largura do conteúdo.', exemplo: botao(null, { icone: 'pi-times', text: true, host: 'icon-button' }) },
  '.counter': { categoria: 'botoes', descricao: 'Contador com botões de ícone (+/−): botões cinza, 2rem de largura e sem sombra.', exemplo: `<div class="counter" style="display:inline-flex; align-items:center; gap:4px">${botao(null, { icone: 'pi-minus', text: true })}<span style="min-width:24px; text-align:center">3</span>${botao(null, { icone: 'pi-plus', text: true })}</div>` },
  '.equipment-tree-header': { categoria: 'botoes', descricao: 'No cabeçalho da árvore de equipamentos, botões text ficam cinza-azulado em vez de azul.', exemplo: `<div class="equipment-tree-header">${botao('Expandir tudo', { icone: 'pi-angle-double-down', text: true })}</div>` },
  '.model-tree-header': { categoria: 'botoes', descricao: 'No cabeçalho da árvore de modelos, botões text ficam cinza-azulado em vez de azul.', exemplo: `<div class="model-tree-header">${botao('Recolher tudo', { icone: 'pi-angle-double-up', text: true })}</div>` },
  '.btn-icon': { categoria: 'botoes', descricao: 'Botão quadrado só de ícone, 45×45px, borda cinza-clara, ícone cinza-azulado e sombra leve. Não define fundo; use com botão outlined.', exemplo: botao(null, { icone: 'pi-sliders-h', outlined: true, host: 'btn-icon' }) },
  '.btn-search': { categoria: 'botoes', descricao: 'Botão de buscar: 45px de altura, texto azul 14px médio, borda azul-clara e sombra leve. Não define fundo; use com botão outlined.', exemplo: botao('Buscar', { icone: 'pi-search', outlined: true, host: 'btn-search' }) },
  '.btn-cancel-active': { categoria: 'botoes', descricao: 'Botão de cancelar com texto cinza-escuro Geist 14px médio, que escurece um pouco no hover.', exemplo: botao('Cancelar', { text: true, host: 'btn-cancel-active' }), dica: 'Passe o mouse.' },
  '.btn-apply-changes': { categoria: 'botoes', descricao: 'Botão "Aplicar alterações": azul, texto branco Geist 14px médio, 30px de altura.', exemplo: botao('Aplicar alterações', { host: 'btn-apply-changes' }) },
  '.btn-add-restrictions': { categoria: 'botoes', descricao: 'Tira o anel de foco do botão de adicionar restrições. A mesma regra também tira o foco de todos os botões do sistema (veja o aviso).', exemplo: botao('Adicionar restrição', { icone: 'pi-plus', outlined: true, host: 'btn-add-restrictions' }) },
  '.request-approve-btn': { categoria: 'botoes', descricao: 'Botão "Aprovar" da requisição: verde, texto branco Inter seminegrito, 40px de altura; escurece no hover. O texto fica com 13px, porque um font-size posterior sobrescreve os 14px do "font".', exemplo: botao('Aprovar', { icone: 'pi-check', host: 'request-approve-btn' }), dica: 'Passe o mouse.' },
  '.request-cancel-btn': { categoria: 'botoes', descricao: 'Botão "Reprovar/Cancelar" da requisição: branco com borda e texto vermelhos, 40px; fundo rosado no hover. Texto final de 13px.', exemplo: botao('Reprovar', { icone: 'pi-times', host: 'request-cancel-btn' }), dica: 'Passe o mouse.' },
  '.filter-toggle-active': { categoria: 'botoes', descricao: 'Botão de filtro ligado: borda azul, fundo azul-claro e ícone azul. As duas regras aparecem duplicadas no arquivo.', exemplo: grade(botao(null, { icone: 'pi-filter', outlined: true }), botao(null, { icone: 'pi-filter', outlined: true, host: 'filter-toggle-active' })) },
  '.btn-neutral-s': { categoria: 'botoes', descricao: 'Botão neutro pequeno: branco, borda cinza, cantos de 8px, Inter 14px seminegrito.', exemplo: botao('Exportar', { icone: 'pi-download', host: 'btn-neutral-s' }) },
  '.new-btn-border-blue': { categoria: 'botoes', descricao: 'Botão "Novo": fundo azul bem claro, borda azul, texto azul-escuro 14px seminegrito, 30px. A regra aparece duplicada no arquivo.', exemplo: botao('Novo item', { icone: 'pi-plus', host: 'new-btn-border-blue' }) },
  '.header-btn': { categoria: 'botoes', descricao: 'Botões do cabeçalho da página: ícone de 16px; ativo (.is-active), ganham fundo azul-claro e texto azul.', exemplo: grade(botao(null, { icone: 'pi-filter', text: true, host: 'header-btn' }), botao(null, { icone: 'pi-filter', text: true, host: 'header-btn is-active' })) },
  '.btn--md': { categoria: 'botoes', descricao: 'Modificador de tamanho médio: 32px de altura e cantos de 4px.', exemplo: grade('<button class="btn--md btn--primary" style="padding:0 14px">Médio</button>', '<button class="btn--lg btn--primary" style="padding:0 14px">Grande</button>') },
  '.btn--lg': { categoria: 'botoes', descricao: 'Modificador de tamanho grande: 40px de altura e cantos de 6px.', exemplo: grade('<button class="btn--md btn--primary" style="padding:0 14px">Médio</button>', '<button class="btn--lg btn--primary" style="padding:0 14px">Grande</button>') },
  '.btn--primary': { categoria: 'botoes', descricao: 'Variante primária: fundo azul, texto branco, sem borda.', exemplo: '<button class="btn--md btn--primary" style="padding:0 14px">Salvar</button>' },
  '.btn--secondary': { categoria: 'botoes', descricao: 'Variante secundária: fundo branco, texto escuro, borda cinza.', exemplo: '<button class="btn--md btn--secondary" style="padding:0 14px">Cancelar</button>' },
  '.btn--neutral': { categoria: 'botoes', descricao: 'Variante neutra: transparente, texto cinza; ativo (.is-active), fundo azul-claro e texto azul.', exemplo: grade('<button class="btn--md btn--neutral" style="padding:0 14px">Neutro</button>', '<button class="btn--md btn--neutral is-active" style="padding:0 14px">Neutro ativo</button>') },
  '.btn--text': { categoria: 'botoes', descricao: 'Variante texto: sem fundo e sem borda.', exemplo: '<button class="btn--md btn--text" style="padding:0 14px; color:#3B82F6">Ver mais</button>' },
  '.btn--danger': { categoria: 'botoes', descricao: 'Variante de perigo: fundo vermelho, texto branco, sem borda.', exemplo: '<button class="btn--md btn--danger" style="padding:0 14px">Excluir</button>' },
  '.uploadButton': { categoria: 'botoes', descricao: 'Transforma o botão de escolher arquivo num quadrado grande de 10rem: branco, sem borda, com ícone azul. É a área clicável de upload.', exemplo: `<div class="uploadButton">${escolherArquivo('Adicionar arquivo', 'pi-cloud-upload')}</div>` },

  // ===== Tags e status =====
  '.positive-tags': { categoria: 'tags', descricao: 'Etiqueta com contorno azul, texto 12px e fundo branco, para indicar algo positivo. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<span class="positive-tags">Ativo</span>' },
  '.negative-tags': { categoria: 'tags', descricao: 'Etiqueta com contorno vermelho, texto 12px e fundo branco, para indicar algo negativo. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<span class="negative-tags">Inativo</span>' },
  '.status-so-tag': { categoria: 'tags', descricao: 'Base das etiquetas de status de OS: pílula com fonte Geist 12px, 25px de altura e largura do texto. Junte com uma .serviceorder-status-tag-* para a cor.', exemplo: grade(sotag('serviceorder-status-tag-opened', 'Aberta'), sotag('serviceorder-status-tag-scheduled', 'Agendada'), sotag('serviceorder-status-tag-on-the-go', 'A caminho'), sotag('serviceorder-status-tag-in-execution', 'Em execução'), sotag('serviceorder-status-tag-pending-closure', 'Pendente de fechamento'), sotag('serviceorder-status-tag-closed', 'Fechada'), sotag('serviceorder-status-tag-not-found', 'Não encontrada')) },
  '.status-so-tag-minified': { categoria: 'tags', descricao: 'Versão mínima do status de OS: só uma barrinha colorida de 40px, sem texto. Junte com uma .serviceorder-status-tag-* para a cor.', exemplo: grade(...['opened', 'scheduled', 'on-the-go', 'in-execution', 'pending-closure', 'closed', 'not-found'].map((s) => `<span class="status-so-tag-minified serviceorder-status-tag-${s}" style="display:inline-block"></span>`)) },
  '.serviceorder-status-tag-not-found': { categoria: 'tags', descricao: 'Cor do status "não encontrado": fundo cinza, texto branco.', exemplo: sotag('serviceorder-status-tag-not-found', 'Não encontrada') },
  '.serviceorder-status-tag-opened': { categoria: 'tags', descricao: 'Cor do status "aberta": fundo azul-claro, texto azul.', exemplo: sotag('serviceorder-status-tag-opened', 'Aberta') },
  '.serviceorder-status-tag-scheduled': { categoria: 'tags', descricao: 'Cor do status "agendada": fundo verde-claro, texto verde.', exemplo: sotag('serviceorder-status-tag-scheduled', 'Agendada') },
  '.serviceorder-status-tag-on-the-go': { categoria: 'tags', descricao: 'Cor do status "a caminho": fundo amarelo-claro, texto laranja.', exemplo: sotag('serviceorder-status-tag-on-the-go', 'A caminho') },
  '.serviceorder-status-tag-in-execution': { categoria: 'tags', descricao: 'Cor do status "em execução": fundo lilás, texto roxo.', exemplo: sotag('serviceorder-status-tag-in-execution', 'Em execução') },
  '.serviceorder-status-tag-pending-closure': { categoria: 'tags', descricao: 'Cor do status "pendente de fechamento": fundo vermelho-claro, texto vermelho.', exemplo: sotag('serviceorder-status-tag-pending-closure', 'Pendente de fechamento') },
  '.serviceorder-status-tag-closed': { categoria: 'tags', descricao: 'Cor do status "fechada": fundo cinza-claro, texto cinza.', exemplo: sotag('serviceorder-status-tag-closed', 'Fechada') },
  '.tag-status-in-operation': { categoria: 'tags', descricao: 'Etiqueta "Em operação": fundo verde, texto branco Inter 17px seminegrito.', exemplo: '<span class="tag-status-in-operation">Em operação</span>' },
  '.tag-status-downtime': { categoria: 'tags', descricao: 'Etiqueta "Parado": fundo vermelho-escuro, texto branco Inter 17px seminegrito.', exemplo: '<span class="tag-status-downtime">Parado</span>' },
  '.tag-operation-status': {
    categoria: 'tags',
    descricao: 'Etiqueta de situação de operação do equipamento: texto branco 14px seminegrito, cantos de 5px, fundo cinza por padrão. A cor muda com uma classe extra: .operation, .operation-event, .unscheduled-stop, .out-of-operation, .schedule-stop, .active, .inactive, .pending e .undefined (só contorno). Dentro de .undefined, .newInput e .modelDescriptionsLabelColor ficam cinza.',
    exemplo: grade(opStatus('', 'Padrão'), opStatus('operation', 'Em operação'), opStatus('operation-event', 'Evento'), opStatus('unscheduled-stop', 'Parada não programada'), opStatus('out-of-operation', 'Fora de operação'), opStatus('schedule-stop', 'Parada programada'), opStatus('active', 'Ativo'), opStatus('inactive', 'Inativo'), opStatus('pending', 'Pendente'), opStatus('undefined', 'Indefinido')),
  },
  '.miniCardWidth': { categoria: 'tags', descricao: 'Em cards pequenos, a etiqueta .tag-operation-status.undefined fica com a borda mais clara (30% de opacidade).', exemplo: grade(opStatus('undefined', 'Normal'), `<span class="miniCardWidth">${opStatus('undefined', 'Dentro de .miniCardWidth')}</span>`) },
  '.chips-container': { categoria: 'tags', descricao: 'Chips (p-chip) com texto 12px azul-escuro sobre fundo azul bem claro.', exemplo: `<div class="chips-container" style="display:flex; gap:6px">${chip('Fibra')}${chip('Residencial')}</div>` },
  '.chips-container-items': { categoria: 'tags', descricao: 'Chips brancos com borda e texto azuis, 12px.', exemplo: `<div class="chips-container-items" style="display:flex; gap:6px">${chip('Item A')}${chip('Item B')}</div>` },
  '.chips-container-red': { categoria: 'tags', descricao: 'Chips vermelho-claro com texto vermelho-escuro, 12px.', exemplo: `<div class="chips-container-red" style="display:flex; gap:6px">${chip('Bloqueado')}</div>` },
  '.chips-container-gray': { categoria: 'tags', descricao: 'Chips cinza-claro com texto cinza-escuro, 12px.', exemplo: `<div class="chips-container-gray" style="display:flex; gap:6px">${chip('Arquivado')}</div>` },
  '.type-label': { categoria: 'tags', descricao: 'Etiqueta de tipo do plano contratado: texto azul 13px médio, borda azul-clara fina, fundo azulado translúcido, 25px de altura.', exemplo: grade('<span class="type-label">Serviço</span>', '<span class="type-label">Produto</span>') },
  '.selected-filter-badge': { categoria: 'tags', descricao: 'Bolinha (badge dot) que indica filtro ativo, fixa em 10×10px.', exemplo: `<span class="selected-filter-badge" style="position:relative; display:inline-block; font-size:1.5rem"><i class="pi pi-filter"></i><span class="p-badge p-component p-badge-dot" style="position:absolute; top:0; right:-4px"></span></span>` },

  // ===== Cards e contêineres =====
  '.card': { categoria: 'cards', descricao: 'Cartão genérico: fundo da cor de superfície do tema (branco), cantos de 10px e 16px de espaço abaixo. Não tem padding (o padding original está comentado).', exemplo: '<div class="card"><div style="padding:16px">Conteúdo do card (o padding está no div de dentro)</div></div><div class="card"><div style="padding:16px">Outro card: repare nos 16px entre eles</div></div>' },
  '.osCard': { categoria: 'cards', descricao: 'Card de ordem de serviço: o p-card ocupa a largura toda, com cantos de 10px e margem embaixo, e o conteúdo fica em linha (flex).', exemplo: `<div class="osCard">${card(`<div style="flex:1">${sotag('serviceorder-status-tag-scheduled', 'Agendada')}<div style="margin-top:8px">OS 2026-004512 · Instalação</div></div><div style="flex:1; text-align:right">20/11/2026 · 08:00</div>`)}</div>` },
  '.bordered-card': { categoria: 'cards', descricao: 'Era para colocar uma borda grossa à esquerda de um elemento dentro de p-card, mas não tem efeito: "border-left: 3rem" não diz o estilo da borda.', exemplo: largura(420, card('<div class="bordered-card" style="padding:8px">Elemento com .bordered-card: nenhuma borda aparece</div>')) },
  '.portal-cliente-agendamento-card': { categoria: 'cards', descricao: 'Caixa de horário disponível no agendamento: borda cinza-clara, texto azul 14px negrito centralizado, 50px de altura e 90% da largura.', exemplo: `<div style="display:grid; grid-template-columns:repeat(3, 1fr); max-width:480px">${['08:00 - 10:00', '10:00 - 12:00', '13:00 - 15:00'].map((h) => `<div class="portal-cliente-agendamento-card">${h}</div>`).join('')}</div>` },
  '.iam-panel': {
    categoria: 'cards',
    descricao: 'Painel de gestão de acessos (IAM). Dentro dele: campos com rótulo e valor empilhados (.field, .field-value), texto azul (.body-primary-blue), botão outlined azul (.btn-outlined-blue), botões salvar/cancelar mais finos, botões de adicionar/fechar grupo sem padding e sem fundo no foco, filtro e cabeçalho de filtro de 200px, modal de adicionar com rolagem (40rem) e barra de rolagem cinza personalizada.',
    exemplo: `<div class="iam-panel" style="background:#fff; padding:16px; border-radius:8px; max-width:520px">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px">
        <div class="field"><label>Nome</label><span class="field-value">Maria Souza</span></div>
        <div class="field"><label>Perfil</label><span class="field-value">Administrador</span></div>
      </div>
      <p class="body-primary-blue">3 grupos vinculados</p>
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap">
        <span class="btn-outlined-blue"><button>Adicionar grupo</button></span>
        <span class="save">${botao('Salvar')}</span>
        <span class="cancel">${botao('Cancelar', { outlined: true })}</span>
        <span class="add-group-button">${botao('+ grupo', { text: true })}</span>
      </div>
      <div style="height:70px; overflow-y:scroll; margin-top:12px; border:1px solid #eee; padding:4px">Área com barra de rolagem personalizada<br>linha<br>linha<br>linha<br>linha<br>linha</div>
    </div>`,
  },
  '.selected-card': { categoria: 'cards', descricao: 'Card selecionado: fundo cinza-azulado bem claro, borda clara, cantos de 6px e position relative (para posicionar elementos dentro).', exemplo: '<div class="selected-card" style="padding:12px; max-width:360px"><span class="card-label">Equipamento</span><br><span class="card-input">ONU Huawei HG8245</span></div>' },
  '.section-alterations': { categoria: 'cards', descricao: 'Faixa de alterações: fundo azul bem claro, borda azul-clara, cantos de 4px e sombra leve. Os checkboxes dentro ficam centralizados e o rótulo usa Inter 14px cinza.', exemplo: `<div class="section-alterations" style="padding:10px 12px; display:flex; align-items:center; gap:6px; max-width:420px">${caixaDeSelecao(true)}<label class="p-checkbox-label">Aplicar a todos os contratos</label></div>` },
  '.restrictions-container': { categoria: 'cards', descricao: 'Caixa das restrições: borda azul bem clara e cantos de 6px.', exemplo: restricoes },
  '.restrictions-header': { categoria: 'cards', descricao: 'Cabeçalho das restrições: fundo azul-claro e texto azul médio. Os divisores verticais ficam compactos e os botões desabilitados ficam cinza, mas sem transparência.', exemplo: restricoes },
  '.restriction-header-items': { categoria: 'cards', descricao: 'Grupo de itens dentro do cabeçalho das restrições, com borda azul-clara fina.', exemplo: restricoes },
  '.total-box': { categoria: 'cards', descricao: 'Caixa de total ou resumo: fundo lavanda-claro, borda, cantos de 10px e 16px acima. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<div class="total-box" style="max-width:360px; display:flex; justify-content:space-between"><span>Total</span><strong>R$ 1.250,00</strong></div>' },
  '.card-container-default-basic-layout': { categoria: 'cards', descricao: 'Card branco com borda cinza-clara e cantos de 8px.', exemplo: '<div class="card-container-default-basic-layout" style="padding:16px; max-width:420px">Conteúdo do card</div>' },
  '.reg-card': { categoria: 'cards', descricao: 'Card de registro: branco, borda clara, cantos de 10px e sombra; 16px entre colunas quando usado como grid.', exemplo: '<div class="reg-card" style="display:grid; grid-template-columns:repeat(3, 1fr); padding:12px; max-width:520px"><div class="kv"><span class="kv-k">Código</span><span class="kv-v">REQ-0091</span></div><div class="kv"><span class="kv-k">Data</span><span class="kv-v">19/11/2026</span></div><div class="kv"><span class="kv-k">Status</span><span class="kv-v">Aberta</span></div></div>' },
  '.insumo-layer': { categoria: 'cards', descricao: 'Camada de insumos: caixa cinza com borda, cantos de 10px e itens em coluna. O paginador dentro dela fica branco com os cantos de baixo arredondados.', exemplo: `<div class="insumo-layer" style="max-width:520px"><span class="t-title-sm">Insumos</span><div class="reg-card" style="padding:10px">Cabo drop 1 fibra · 120 m</div>${paginador()}</div>` },
  '.expandable-list-border': { categoria: 'cards', descricao: 'Contêiner da lista expansível: branco, borda clara, cantos de 12px, fonte Geist.', exemplo: listaExpansivel },
  '.expandable-list-header': { categoria: 'cards', descricao: 'Cabeçalho da lista expansível: itens em linha, 12px entre eles, padding 12px 20px.', exemplo: listaExpansivel },
  '.expandable-list-header-title': { categoria: 'cards', descricao: 'Título do cabeçalho: ocupa o espaço livre, 15px, cinza-escuro, com ícone ao lado.', exemplo: listaExpansivel },
  '.expandable-list-header-chevron': { categoria: 'cards', descricao: 'Seta de abrir/fechar a lista: 14px, clicável, gira com animação.', exemplo: listaExpansivel },
  '.expandable-list-header-chevron-open': { categoria: 'cards', descricao: 'Estado aberto da seta: girada 180° (apontando para cima).', exemplo: grade('<i class="pi pi-chevron-down expandable-list-header-chevron"></i> fechada', '<i class="pi pi-chevron-down expandable-list-header-chevron expandable-list-header-chevron-open"></i> aberta') },
  '.expandable-list-header-button': { categoria: 'cards', descricao: 'Botão pequeno do cabeçalho (ex.: filtro): 36×32px, branco, borda cinza, cantos de 9px.', exemplo: botao(null, { icone: 'pi-filter', host: 'expandable-list-header-button' }) },
  '.expandable-list-body': { categoria: 'cards', descricao: 'Corpo da lista expansível: itens em coluna com 14px entre eles.', exemplo: listaExpansivel },
  '.expandable-list-filters-border': { categoria: 'cards', descricao: 'Caixa de filtros da lista: fundo cinza-claro, borda, cantos de 10px.', exemplo: listaExpansivel },
  '.expandable-list-filters-field': { categoria: 'formularios', descricao: 'Campos dos filtros da lista: inputs, dropdowns, multiselects e calendários com 38px de altura e 16px entre linhas.', exemplo: `<div class="expandable-list-filters-field grid" style="max-width:560px"><div class="field col-12 md:col-6">${campo('EQ-1020')}</div><div class="field col-12 md:col-6">${dropdown('Todas')}</div><div class="field col-12 md:col-6">${multiselect('Modelos')}</div><div class="field col-12 md:col-6">${calendario('19/11/2026')}</div></div>` },
  '.expandable-list-filters-field-label': { categoria: 'formularios', descricao: 'Rótulo dos filtros da lista: 12px cinza, em bloco, com 6px abaixo.', exemplo: listaExpansivel },
  '.expandable-list-card-border': { categoria: 'cards', descricao: 'Card de item da lista: branco, borda clara, cantos de 11px, sombra muito leve.', exemplo: listaExpansivel },
  '.expandable-list-card-label': { categoria: 'cards', descricao: 'Rótulo dentro do card do item: 13px cinza.', exemplo: listaExpansivel },
  '.expandable-list-card-value': { categoria: 'cards', descricao: 'Valor dentro do card do item: 15px cinza-escuro.', exemplo: listaExpansivel },
  '.expandable-list-card-navigation-handler': { categoria: 'cards', descricao: 'Área clicável de navegar (seta à direita do card): 34×30px, centralizada, fica cinza no hover.', exemplo: listaExpansivel, dica: 'Passe o mouse na seta à direita do card.' },
  '.expandable-list-card-address': { categoria: 'cards', descricao: 'Faixa de endereço dentro do card: fundo cinza-claro, borda, cantos de 8px, 12px.', exemplo: listaExpansivel },
  '.expandable-list-card-address-label': { categoria: 'cards', descricao: 'Rótulo "Endereço:" dentro da faixa: cinza-claro.', exemplo: listaExpansivel },
  '.move-left-border': { categoria: 'cards', descricao: 'Bloco de movimentação com barra cinza de 3px à esquerda e 12px de recuo. A cor da barra muda com os modificadores --instalacao, --desinstalacao e --transferencia.', exemplo: movimentacao('', 'Movimentação') },
  '.move-type-label': { categoria: 'cards', descricao: 'Tipo da movimentação: 15px médio, cinza-escuro (fica colorido conforme o modificador).', exemplo: movimentacao('', 'Movimentação') },
  '.move-quantity-label': { categoria: 'cards', descricao: 'Quantidade movimentada: 15px, cinza-escuro.', exemplo: movimentacao('', 'Movimentação') },
  '.move-date-label': { categoria: 'cards', descricao: 'Data da movimentação: 13px, cinza.', exemplo: movimentacao('', 'Movimentação') },
  '.move-left-border--instalacao': { categoria: 'cards', descricao: 'Movimentação de instalação: barra e tipo em verde.', exemplo: movimentacao('move-left-border--instalacao', 'Instalação') },
  '.move-left-border--desinstalacao': { categoria: 'cards', descricao: 'Movimentação de desinstalação: barra e tipo em vermelho.', exemplo: movimentacao('move-left-border--desinstalacao', 'Desinstalação') },
  '.move-left-border--transferencia': { categoria: 'cards', descricao: 'Movimentação de transferência: barra e tipo em azul.', exemplo: movimentacao('move-left-border--transferencia', 'Transferência') },
  '.move-left-border--material': { categoria: 'cards', descricao: 'Movimentação de material: barra mais fina (2px), cinza-azulada, com cantos arredondados.', exemplo: movimentacao('move-left-border--material', 'Material') },
  '.move-object-border': { categoria: 'cards', descricao: 'Caixa (fieldset) do objeto movimentado: borda clara, cantos de 9px.', exemplo: objetoMovido },
  '.move-object-legend': { categoria: 'cards', descricao: 'Legenda da caixa do objeto (texto na borda): 12.5px cinza, com ícone.', exemplo: objetoMovido },
  '.move-object-legend-icon': { categoria: 'cards', descricao: 'Ícone da legenda do objeto: 11px, cinza-claro.', exemplo: objetoMovido },
  '.move-object-main-label': { categoria: 'cards', descricao: 'Nome principal do objeto movimentado: 14.5px, cinza-escuro.', exemplo: objetoMovido },
  '.move-object-aux-label': { categoria: 'cards', descricao: 'Informação auxiliar do objeto (série, patrimônio): 13px, cinza.', exemplo: objetoMovido },
  '.confirm-attachment': { categoria: 'cards', descricao: 'Caixa de confirmação de remover anexo: ícone de alerta amarelo, título, mensagem e os botões Cancelar (branco) e Remover (vermelho) alinhados à direita.', exemplo: confirmarAnexo },
  '.leave-dialog': { categoria: 'cards', descricao: 'Diálogo de "sair sem salvar": esconde o cabeçalho do p-dialog e dá 24px de espaço no topo do conteúdo. A classe vai no styleClass do diálogo.', exemplo: dialogo('Este título fica escondido', '<strong>Sair sem salvar?</strong><p style="margin:8px 0 0">As alterações feitas serão perdidas.</p>', `<div style="display:flex; gap:8px; justify-content:flex-end">${botao('Continuar editando', { outlined: true })}${botao('Sair', { severidade: 'danger' })}</div>`, 'leave-dialog') },
  '.masterplan-ordering': { categoria: 'formularios', descricao: 'Ordenação do plano diretor: dentro dele, .input usa Geist 12px escuro e .ordering é uma caixa branca de 30px com borda e sombra leve.', exemplo: '<div class="masterplan-ordering" style="max-width:300px"><span class="input">Ordenar por</span><div class="ordering" style="display:flex; align-items:center; padding:0 8px">Data de criação <i class="pi pi-sort-alt" style="margin-left:auto"></i></div></div>' },

  // ===== Layout =====
  '.page-header': { categoria: 'layout', descricao: 'Cabeçalho da página que gruda no topo ao rolar (sticky): título Geist 24px à esquerda, ações à direita, fundo cinza-claro e linha embaixo.', exemplo: cabecalhoPagina, fundo: 'branco' },
  '.page-content': { categoria: 'layout', descricao: 'Área de conteúdo da página: blocos em coluna com 16px entre eles e 32px de padding lateral.', exemplo: '<div class="page-content" style="background:#fff; border:1px dashed #cbd5e1"><div class="card-container-default-basic-layout" style="padding:12px">Bloco 1</div><div class="card-container-default-basic-layout" style="padding:12px">Bloco 2</div></div>' },
  '.list-stack': { categoria: 'layout', descricao: 'Pilha vertical com 10px entre os itens.', exemplo: '<div class="list-stack" style="max-width:360px"><div class="reg-card" style="padding:10px">Item 1</div><div class="reg-card" style="padding:10px">Item 2</div><div class="reg-card" style="padding:10px">Item 3</div></div>' },
  '.state-fill': { categoria: 'layout', descricao: 'Ocupa o espaço que sobra no contêiner (flex: 1) e centraliza o conteúdo. Usado em estados vazios ou de carregamento.', exemplo: '<div style="display:flex; flex-direction:column; height:140px; border:1px dashed #cbd5e1; background:#fff"><div style="padding:8px; border-bottom:1px solid #eee">Cabeçalho</div><div class="state-fill">Conteúdo centralizado no espaço restante</div></div>' },
  '.header-container-default-basic-layout': { categoria: 'layout', descricao: 'Cabeçalho que gruda no topo ao rolar (sticky): branco, com linha e sombra embaixo. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<div style="height:130px; overflow:auto; border:1px solid #e5e7eb"><div class="header-container-default-basic-layout" style="padding:12px 16px"><strong>Cabeçalho</strong></div><div style="padding:16px">Role esta caixa<br><br>linha<br>linha<br>linha<br>linha<br>linha</div></div>', fundo: 'branco' },
  '.card-title': { categoria: 'layout', descricao: 'Título de card com padding 16px 20px e linha embaixo. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<div class="card-container-default-basic-layout" style="max-width:420px"><div class="card-title"><strong>Dados da requisição</strong></div><div style="padding:16px 20px">Conteúdo</div></div>' },
  '.group-header': { categoria: 'layout', descricao: 'Cabeçalho de grupo numa lista: faixa cinza bem clara com bordas em cima e embaixo, Inter 14px negrito cinza. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<div class="card-container-default-basic-layout" style="max-width:480px; overflow:hidden"><div class="group-header">Novembro de 2026</div><div class="list-row"><div><div class="list-row-title">Requisição de cabos</div><div class="list-row-code">REQ-0091</div></div><span class="status-so-tag serviceorder-status-tag-opened">Aberta</span></div></div>', fundo: 'branco' },
  '.list-row': { categoria: 'layout', descricao: 'Linha de lista: conteúdo em linha com espaço entre os lados, padding e linha divisória embaixo. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<div class="card-container-default-basic-layout" style="max-width:480px"><div class="list-row"><div><div class="list-row-title">Requisição de cabos</div><div class="list-row-code">REQ-0091</div></div><strong>R$ 320,00</strong></div><div class="list-row"><div><div class="list-row-title">Requisição de conectores</div><div class="list-row-code">REQ-0092</div></div><strong>R$ 80,00</strong></div></div>' },
  '.list-row-title': { categoria: 'layout', descricao: 'Título da linha de lista: Inter 14px seminegrito, numa linha só, com reticências se não couber. Aparece duplicada no arquivo (cópias iguais).', exemplo: largura(220, '<div class="list-row-title">Requisição de cabos e conectores para a obra</div><div class="list-row-code">REQ-0091</div>') },
  '.list-row-code': { categoria: 'layout', descricao: 'Código abaixo do título da linha: Inter 12px cinza, 6px acima. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<div class="list-row-title">Requisição de cabos</div><div class="list-row-code">REQ-0091</div>' },
  '.summary-divider': { categoria: 'layout', descricao: 'Divisor do resumo: linha cinza-clara de 1px com 18px de espaço em cima e embaixo. Aparece duplicada no arquivo (cópias iguais).', exemplo: '<div>Subtotal</div><div class="summary-divider"></div><div>Total</div>' },
  '.custom-divider': { categoria: 'layout', descricao: 'Linha divisória horizontal cinza, com 12px de espaço em cima e embaixo.', exemplo: '<div>Bloco de cima</div><div class="custom-divider"></div><div>Bloco de baixo</div>' },
  '.backgroundColor': { categoria: 'layout', descricao: 'Fundo cinza bem claro (#F9FAFC), usado como fundo de página.', exemplo: '<div class="backgroundColor" style="padding:24px; border:1px solid #e5e7eb">Área com .backgroundColor</div>', fundo: 'branco' },
  '.border-gray': { categoria: 'layout', descricao: 'Caixa com borda cinza-clara, cantos do tema e 0.5rem de margem e de padding.', exemplo: '<div class="border-gray">Conteúdo com .border-gray</div>', fundo: 'branco' },
  '.cardColumn': { categoria: 'utilitarios', descricao: 'Ícones <i> dentro dele mostram a mãozinha, indicando que são clicáveis.', exemplo: '<div class="cardColumn" style="display:flex; gap:12px; font-size:1.2rem"><i class="pi pi-pencil"></i><i class="pi pi-trash"></i></div>', dica: 'Passe o mouse nos ícones.' },

  // ===== Formulários =====
  '.portal-cliente-atributo': { categoria: 'formularios', descricao: 'Num dropdown dentro de .portal-cliente-atributo, o valor escolhido aparece em Inter 16px preto.', exemplo: largura(320, `<div class="portal-cliente-atributo">${dropdown('Instalação de internet')}</div>`) },
  '.portal-cliente-placeholder-atributo': { categoria: 'formularios', descricao: 'Num dropdown dentro dele, o placeholder (quando nada foi escolhido) fica em Inter 16px cinza-azulado.', exemplo: largura(320, `<div class="portal-cliente-placeholder-atributo">${dropdown('Selecione o tipo de serviço', { placeholder: true })}</div>`) },
  '.portal-cliente-observacoes': { categoria: 'formularios', descricao: 'No campo de observações, o textarea só pode ser redimensionado na vertical.', exemplo: largura(360, `<div class="portal-cliente-observacoes">${areaDeTexto('Arraste o canto inferior direito: só aumenta para baixo.')}</div>`), dica: 'Arraste o canto inferior direito do campo.' },
  '.ability-dropdown': { categoria: 'formularios', descricao: 'Dropdown de habilidades: altura mínima de 36px e texto de 0.875rem.', exemplo: largura(300, dropdown('Instalação de fibra', { host: 'ability-dropdown' })) },
  '.field-invalid': { categoria: 'formularios', descricao: 'Dropdown inválido: borda e texto vermelhos. A classe vai na própria tag <p-dropdown>.', exemplo: largura(300, dropdown('Valor inválido', { host: 'field-invalid' })) },
  '.custom-dropdown': { categoria: 'formularios', descricao: 'Dropdown compacto: 25px de altura, texto 12px, cantos de 5px e borda azul-clara.', exemplo: largura(200, `<div class="custom-dropdown">${dropdown('10 por página')}</div>`) },
  '.batch-dropdown': { categoria: 'formularios', descricao: 'Dropdown da ação em lote: 35px de altura, 6px abaixo, texto centralizado na vertical.', exemplo: largura(300, `<div class="batch-dropdown">${dropdown('Alterar situação')}</div>`) },
  '.batch-dropdown-unselected': { categoria: 'formularios', descricao: 'Ação em lote ainda não escolhida: borda vermelha translúcida e asterisco vermelho depois do texto.', exemplo: largura(300, `<div class="batch-dropdown batch-dropdown-unselected">${dropdown('Selecione a ação', { placeholder: true })}</div>`) },
  '.filter-panel': { categoria: 'formularios', descricao: 'Painel de filtro avançado: rótulos em caixa alta 11px; operador (dropdown) e campo de valor com 32px, borda cinza e anel azul no hover/foco; o item escolhido na lista de operadores fica azul-claro.', exemplo: filtroAvancado, dica: 'Passe o mouse ou clique no campo "Valor".' },
  '.div-filter': { categoria: 'formularios', descricao: 'Caixa de filtro: fundo cinza-claro, borda clara, cantos de 10px e padding.', exemplo: `<div class="div-filter" style="max-width:360px"><span class="filter-label">Período</span>${calendario('01/11/2026 - 19/11/2026')}</div>` },
  '.filters-input-height': { categoria: 'formularios', descricao: 'Campo de filtro compacto: 2rem de altura com padding vertical reduzido. Aplique no input.', exemplo: largura(260, coluna(campo('Normal'), campo('Com .filters-input-height', { classe: 'filters-input-height' }))) },
  '.filters-input-height-calendar': { categoria: 'formularios', descricao: 'Calendário de filtro compacto: input e botão com 2rem de altura.', exemplo: largura(260, `<div class="filters-input-height-calendar">${calendario('19/11/2026')}</div>`) },
  '.add-equipment-tree-input': { categoria: 'formularios', descricao: 'Inputs dentro dele ficam compactos: texto 12px e padding 8px.', exemplo: largura(260, `<div class="add-equipment-tree-input">${campo('Buscar equipamento')}</div>`) },
  '.equipment-tree': { categoria: 'formularios', descricao: 'Inputs dentro da árvore de equipamentos ocupam a largura toda.', exemplo: `<div class="equipment-tree" style="max-width:360px">${campo('Buscar na árvore')}</div>` },
  '.model-tree': { categoria: 'formularios', descricao: 'Inputs dentro da árvore de modelos ocupam a largura toda.', exemplo: `<div class="model-tree" style="max-width:360px">${campo('Buscar modelo')}</div>` },
  '.equipment-list-input': { categoria: 'formularios', descricao: 'Inputs da lista de equipamentos ocupam a largura toda.', exemplo: `<div class="equipment-list-input" style="max-width:360px">${campo('Número de série')}</div>` },
  '.user-group': { categoria: 'formularios', descricao: 'Lista de grupos de usuários: inputs e o campo com ícone (p-iconfield) ocupam a largura toda; botões ficam transparentes, com borda cinza de 2px e texto cinza; ícones dos botões com 14px.', exemplo: `<div class="user-group" style="max-width:360px; display:flex; flex-direction:column; gap:8px">${campo('Buscar grupo')}${botao('Novo grupo', { icone: 'pi-plus' })}</div>` },
  '.group-row': { categoria: 'formularios', descricao: 'Linha da lista de grupos (IAM): padding confortável; ao passar o mouse, fundo azul-claro.', exemplo: listaDeGrupos, dica: 'Passe o mouse nas linhas.' },
  '.group': { categoria: 'formularios', descricao: 'Nome do grupo na lista: ocupa no mínimo 40% da largura, 16px, cinza-escuro.', exemplo: listaDeGrupos },
  '.selected-group': { categoria: 'formularios', descricao: 'Linha de grupo selecionada: fundo azul-claro.', exemplo: listaDeGrupos },
  '.disabled-group': { categoria: 'formularios', descricao: 'Grupo desabilitado: fundo cinza-claro, texto cinza-claro e cursor normal. Usa !important, então vence o hover e a seleção.', exemplo: listaDeGrupos },
  '.radio-size': { categoria: 'formularios', descricao: 'Radio buttons menores: 16×16px.', exemplo: grade(radio(true), 'normal', `<span class="radio-size">${radio(true)}</span>`, 'com .radio-size') },
  '.required': { categoria: 'formularios', descricao: 'Coloca um asterisco vermelho depois do texto: rótulo de campo obrigatório.', exemplo: '<label class="required label-form">Nome do cliente</label>' },
  '.foreign-key-border': { categoria: 'formularios', descricao: 'Borda de destaque para campos de chave estrangeira (vínculo com outro cadastro). Foi declarada duas vezes: vale a segunda, cinza-clara com sombra; a azul da primeira é sobrescrita. O canto arredondado continua vindo da primeira.', exemplo: `<div class="foreign-key-border" style="padding:10px; max-width:320px; background:#fff">Cliente: Maria Souza <i class="pi pi-link" style="float:right"></i></div>` },
  '.clear-filter-segmentation': { categoria: 'formularios', descricao: 'Posiciona o "x" de limpar o filtro de segmentação à direita e no meio da altura. Só funciona se o elemento tiver position definido em outro lugar.', exemplo: `<div style="position:relative; max-width:300px">${campo('Segmento: Residencial')}<i class="pi pi-times clear-filter-segmentation" style="position:absolute; margin-top:-0.5rem"></i></div>` },
  '.custom-checkbox': { categoria: 'formularios', descricao: 'Checkbox HTML nativo no estado indeterminado (parcialmente marcado) fica azul-claro. Na prática, o navegador costuma ignorar a cor de fundo do checkbox nativo.', semExemplo: 'O estado indeterminado só é ativado por JavaScript (input.indeterminate = true).' },
  '.checkbox-partial': { categoria: 'formularios', descricao: 'Checkbox parcialmente marcado (alguns filhos selecionados): fundo e borda azul-claros.', exemplo: grade(caixaDeSelecao(true), 'marcado', caixaDeSelecao(true, { classeCaixa: 'checkbox-partial', icone: 'pi-minus' }), 'parcial (.checkbox-partial)') },

  // ===== Árvore =====
  '.selected': { categoria: 'arvore', descricao: 'Nó marcado como selecionado numa árvore: sem fundo e com a cor herdada; o ícone de caixa (pi-box) e o slot de equipamento ficam azuis com fundo azul bem claro.', exemplo: largura(360, arvore([{ rotulo: 'Armário 01', filhos: [{ rotulo: '<span class="selected"><span class="equipment-slot"><i class="pi pi-box"></i> Slot 1 (selecionado)</span></span>' }, { rotulo: '<span class="equipment-slot"><i class="pi pi-box"></i> Slot 2</span>' }] }])) },
  '.equipment-info': { categoria: 'arvore', descricao: 'Informações do equipamento num nó da árvore: padding 4px 8px; ao passar o mouse no nó, ganha fundo azul-claro arredondado.', exemplo: largura(360, arvore([{ rotulo: '<div class="equipment-info"><i class="pi pi-server"></i> OLT Huawei MA5800</div>', filhos: [{ rotulo: '<div class="equipment-info">Placa GPON 16 portas</div>' }] }])), dica: 'Passe o mouse nos nós.' },
  '.equipment-slot': { categoria: 'arvore', descricao: 'Posição vazia (slot) para equipamento num nó da árvore: borda tracejada cinza, cantos de 8px, ícone e texto em linha; fundo azul-claro no hover.', exemplo: largura(360, arvore([{ rotulo: 'Bastidor 01', filhos: [{ rotulo: '<span class="equipment-slot"><i class="pi pi-plus"></i> Slot vazio 1</span>' }, { rotulo: '<span class="equipment-slot"><i class="pi pi-plus"></i> Slot vazio 2</span>' }] }])), dica: 'Passe o mouse nos slots.' },
  '.add-equipment-tree': { categoria: 'arvore', descricao: 'Tela de adicionar equipamento à árvore: o paginador fica alinhado à direita, e os cards perdem o padding do conteúdo e ficam com 10px abaixo do corpo.', exemplo: `<div class="add-equipment-tree" style="max-width:520px">${card('Lista de equipamentos para adicionar')}${paginador()}</div>` },
  '.contracted-plan-tree': {
    categoria: 'arvore',
    descricao: 'Árvore do plano contratado: filhos recuados 2rem, checkbox de 18px com borda clara, seta de expandir pequena e cinza, sem borda externa. O nó selecionado fica azul-claro no hover e os marcados para remover (.node-remove) ficam com fundo vermelho translúcido. As abas (p-tabview) dentro dela têm navegação 12px e painéis com padding grande.',
    exemplo: largura(440, arvore([
      { rotulo: '<span class="main-label">Internet 500 Mega</span>', checkbox: 'parcial', filhos: [
        { rotulo: 'Franquia ilimitada', checkbox: true },
        { rotulo: 'IP fixo (será removido)', checkbox: false, classeNo: 'node-remove' },
      ] },
    ], 'contracted-plan-tree')),
  },

  // ===== Tabelas, abas, paginação =====
  '.portal-cliente-anexo-tabela': { categoria: 'tabelas', descricao: 'Tabela de anexos do portal do cliente: células e cabeçalho em Inter 13px médio, cinza-escuro. As células quebram textos longos (nomes de arquivo), os inputs dentro delas ocupam a largura toda e os ícones mostram a mãozinha ao passar o mouse.', exemplo: `<div class="portal-cliente-anexo-tabela">${tabela(['Arquivo', 'Descrição', ''], [['foto_fachada_residencia_cliente_20261119.jpg', campo('Fachada'), '<i class="pi pi-trash"></i>']])}</div>` },
  '.service-history': { categoria: 'tabelas', descricao: 'Tabela de histórico de serviços compacta: cabeçalho branco 12px seminegrito, células 12px e padding reduzido.', exemplo: `<div class="service-history">${tabela(['Data', 'Serviço', 'Técnico'], [['12/11/2026', 'Instalação', 'João'], ['18/11/2026', 'Manutenção', 'Ana']])}</div>` },
  '.reduce-paginator-size': { categoria: 'tabelas', descricao: 'Paginador compacto: alinhado à direita e com botões de 2rem.', exemplo: paginador('reduce-paginator-size') },
  '.compact-pagination': { categoria: 'tabelas', descricao: 'Paginador 10% menor (escala 0.9).', exemplo: coluna(paginador(), paginador('compact-pagination')) },
  '.req-tabs': { categoria: 'tabelas', descricao: 'Abas da requisição: navegação transparente com linha clara, títulos Geist 14px seminegrito e painel sem padding lateral.', exemplo: abas(['Dados', 'Insumos', 'Histórico'], 'Conteúdo da aba "Dados"', 'req-tabs') },
  '.dashboard-equipment-accordion': { categoria: 'tabelas', descricao: 'Acordeão do dashboard de equipamentos: cabeçalho branco sem borda nem contorno, com o conteúdo alinhado à direita; o conteúdo também perde a borda.', exemplo: largura(420, acordeao('Ver equipamentos', 'Lista de equipamentos', 'dashboard-equipment-accordion')) },
  '.tooltip-cto-history': { categoria: 'tabelas', descricao: 'Tooltip do histórico de CTO: texto 12px e padding menor. A classe vai no tooltipStyleClass.', exemplo: grade(dica('Tooltip padrão do tema'), dica('Com .tooltip-cto-history', 'tooltip-cto-history')), fundo: 'branco' },

  // ===== Estados =====
  '.empty-state-title': { categoria: 'estados', descricao: 'Título do estado vazio: Geist 16px seminegrito, azul-escuro.', exemplo: '<div class="empty-state-div" style="text-align:center"><div class="empty-state-title">Nenhuma restrição cadastrada</div><div class="empty-state-description">Adicione uma restrição para limitar o plano.</div></div>' },
  '.empty-state-description': { categoria: 'estados', descricao: 'Texto do estado vazio: Geist 14px, cinza-azulado.', exemplo: '<div class="empty-state-div" style="text-align:center"><div class="empty-state-title">Nenhuma restrição cadastrada</div><div class="empty-state-description">Adicione uma restrição para limitar o plano.</div></div>' },
  '.empty-state-div': { categoria: 'estados', descricao: 'Caixa do estado vazio: borda cinza-azulada, cantos de 6px e padding grande (65px 100px).', exemplo: '<div class="empty-state-div" style="text-align:center"><div class="empty-state-title">Nenhuma restrição cadastrada</div><div class="empty-state-description">Adicione uma restrição para limitar o plano.</div></div>' },
  '.no-results-state': { categoria: 'estados', descricao: 'Caixa de "nenhum resultado" da busca: borda, cantos de 6px, padding 30px 100px e texto centralizado.', exemplo: '<div class="no-results-state"><div class="empty-state-title">Nenhum resultado</div><div class="empty-state-description">Tente outros termos de busca.</div></div>' },
  '.req-empty': { categoria: 'estados', descricao: 'Estado vazio da requisição: ícone e texto centralizados, cinza, Geist 14px, altura mínima de 240px.', exemplo: '<div class="req-empty" style="background:#fff; border:1px dashed #cbd5e1"><i class="pi pi-inbox"></i><span>Nenhuma requisição encontrada</span></div>' },
  '.load-state': { categoria: 'estados', descricao: 'Estado de carregamento: conteúdo centralizado em coluna, Geist 13px, cinza.', exemplo: `<div class="load-state" style="padding:24px">${spinner()}<span>Carregando requisições…</span></div>` },
  '.load-state--error': { categoria: 'estados', descricao: 'Estado de erro no carregamento: ícone vermelho de 20px.', exemplo: '<div class="load-state load-state--error" style="padding:24px"><i class="pi pi-exclamation-circle"></i><span>Não foi possível carregar</span></div>' },
  '.form-alert': { categoria: 'estados', descricao: 'Alerta de erro do formulário: faixa vermelho-clara com borda, ícone e texto vermelhos, Geist 13px.', exemplo: '<div class="form-alert" style="max-width:480px"><i class="pi pi-exclamation-circle"></i> Preencha os campos obrigatórios antes de enviar.</div>' },
  '.restrictions-header-loading': { categoria: 'estados', descricao: 'Cabeçalho das restrições carregando: textos e spinner em cinza.', exemplo: `<div class="restrictions-header restrictions-header-loading" style="display:flex; align-items:center; gap:8px; padding:8px 12px; max-width:420px">${spinner(18)}<span class="label-restrictions">Carregando restrições…</span></div>` },
  '.restrictions-header-error': { categoria: 'estados', descricao: 'Cabeçalho das restrições com erro: textos em vermelho.', exemplo: '<div class="restrictions-header restrictions-header-error" style="display:flex; align-items:center; gap:8px; padding:8px 12px; max-width:420px"><i class="pi pi-exclamation-circle"></i><span class="label-restrictions">Erro ao carregar restrições</span><i class="pi pi-refresh restriction-retry-icon" style="margin-left:auto"></i></div>' },
  '.restriction-retry-icon': { categoria: 'estados', descricao: 'Ícone de "tentar de novo", cinza-azulado.', exemplo: '<i class="pi pi-refresh restriction-retry-icon" style="font-size:1.2rem"></i>' },
  '.restrictions-progress': { categoria: 'estados', descricao: 'Progresso das restrições: barra de 12rem × 6px com cantos arredondados, spinner cinza e margens ajustadas.', exemplo: `<div class="restrictions-progress" style="display:flex; align-items:center; gap:10px; padding-top:8px">${spinner(18)}${barraDeProgresso(60)}</div>` },
  '.restrictions-error-banner': { categoria: 'estados', descricao: 'Faixa de erro: fundo vermelho-claro, borda, texto vermelho-escuro 14px; o botão dentro dela fica branco com texto cinza.', exemplo: `<div class="restrictions-error-banner" style="display:flex; align-items:center; gap:12px; max-width:520px"><span>Não foi possível salvar as restrições.</span>${botao('Tentar novamente', { outlined: true })}</div>` },

  // ===== Utilitários =====
  '.noTextTransform': { categoria: 'utilitarios', descricao: 'Desfaz qualquer transformação de caixa (como caixa alta) herdada.', exemplo: '<div style="text-transform:uppercase">texto em caixa alta · <span class="noTextTransform">este trecho não</span></div>' },
  '.break-overflow': { categoria: 'utilitarios', descricao: 'Quebra palavras muito longas (e-mails, URLs, códigos) em qualquer ponto para não estourar o contêiner.', exemplo: grade(largura(200, '<div style="border:1px dashed #94a3b8; padding:6px">sem: maria.souza.atendimento@empresaexemplo.com.br</div>'), largura(200, '<div class="break-overflow" style="border:1px dashed #94a3b8; padding:6px">com: maria.souza.atendimento@empresaexemplo.com.br</div>')) },
  '.ellipsis': { categoria: 'utilitarios', descricao: 'Mantém o texto em uma linha e corta com reticências (…) quando não cabe.', exemplo: largura(220, '<span class="ellipsis">Rua das Flores, 1200 - Bloco B - Apartamento 304 - Centro</span>') },
  '.highlight': { categoria: 'utilitarios', descricao: 'Fundo amarelo-claro para destacar os termos encontrados numa busca.', exemplo: '<span>Cabo <span class="highlight">drop</span> 1 fibra · Cabo <span class="actual-highlight">drop</span> 2 fibras</span>' },
  '.actual-highlight': { categoria: 'utilitarios', descricao: 'Fundo azul-claro para o resultado de busca atual (o que está em foco).', exemplo: '<span>Cabo <span class="highlight">drop</span> 1 fibra · Cabo <span class="actual-highlight">drop</span> 2 fibras</span>' },
  '.icl-disabled': { categoria: 'utilitarios', descricao: 'Aparência de desabilitado: 60% de opacidade.', exemplo: grade('<span>Normal</span>', '<span class="icl-disabled">Com .icl-disabled</span>') },
  '.whiteIcon': { categoria: 'utilitarios', descricao: 'Força a cor branca (com !important), para ícones sobre fundo escuro.', exemplo: '<span style="background:#1e293b; padding:8px 12px; border-radius:6px"><i class="pi pi-check whiteIcon"></i></span>' },
  '.open-attachment': { categoria: 'utilitarios', descricao: 'Ícones dentro dele mostram a mãozinha ao passar o mouse (abrir anexo).', exemplo: '<span class="open-attachment" style="font-size:1.2rem"><i class="pi pi-external-link"></i></span>', dica: 'Passe o mouse no ícone.' },
  '.update-icon': { categoria: 'utilitarios', descricao: 'Ícones dentro dele ficam cinza-escuros e clicáveis (atualizar).', exemplo: '<span class="update-icon" style="font-size:1.2rem"><i class="pi pi-refresh"></i></span>' },
  '.btn-edit-icon': { categoria: 'utilitarios', descricao: 'Ícone de editar em cinza-claro.', exemplo: '<i class="pi pi-pencil btn-edit-icon" style="font-size:1.1rem"></i>' },
  '.icon-attachment-status': { categoria: 'utilitarios', descricao: 'Imagens de status do anexo dentro dele nunca passam da largura do contêiner (max-width 100%).', exemplo: largura(200, `<div class="icon-attachment-status" style="border:1px dashed #94a3b8"><img src="${imagemExemplo()}" alt=""></div>`) },
  '.file-view': { categoria: 'utilitarios', descricao: 'Imagens de pré-visualização de arquivo ficam com no máximo 320px de largura.', exemplo: `<div class="file-view"><img src="${imagemExemplo(640, 200, 'imagem de 640px reduzida para 320px')}" alt=""></div>` },
  '.unlink-icon': { categoria: 'utilitarios', descricao: 'Ícone de "desvincular" de 1rem, desenhado com uma imagem de fundo (/assets/img/icon.svg).', exemplo: grade('<span class="unlink-icon" style="outline:1px dashed #94a3b8"></span>', '<span style="color:#6b7280">← o espaço do ícone existe, mas a imagem não</span>') },
};
