// Lê src/styles.css e gera src/app/telas/catalogo-css/dados/regras.gerado.ts
// com cada classe, suas regras, o valor final de cada atributo e os avisos
// (duplicatas, fontes com aspas curvas, imagens ausentes...).
//
// Uso: npm run catalogo   (roda sozinho antes de "npm start" e "npm run build")

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const arquivoCss = join(raiz, 'src', 'styles.css');
const arquivoSaida = join(raiz, 'src', 'app', 'telas', 'catalogo-css', 'dados', 'regras.gerado.ts');

const original = readFileSync(arquivoCss, 'utf8').replace(/\r\n/g, '\n');

// Comentários viram espaços (mantendo as quebras de linha, para os números de linha baterem).
const css = original.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));

const inicioDasLinhas = [0];
for (let k = 0; k < css.length; k++) if (css[k] === '\n') inicioDasLinhas.push(k + 1);
function linhaDe(pos) {
  let lo = 0, hi = inicioDasLinhas.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (inicioDasLinhas[mid] <= pos) lo = mid; else hi = mid - 1;
  }
  return lo + 1;
}

// ---------- leitura do CSS ----------

const imports = [];
const regras = [];

function fechaChave(abre) {
  let prof = 0;
  for (let k = abre; k < css.length; k++) {
    const c = css[k];
    if (c === '"' || c === "'") { k = css.indexOf(c, k + 1); continue; }
    if (c === '{') prof++;
    else if (c === '}' && --prof === 0) return k;
  }
  throw new Error('Chave sem fechamento na linha ' + linhaDe(abre));
}

function lerDeclaracoes(inicio, fim) {
  const declaracoes = [];
  let k = inicio;
  while (k < fim) {
    let fimDecl = k, aspas = null, parenteses = 0;
    for (; fimDecl < fim; fimDecl++) {
      const c = css[fimDecl];
      if (aspas) { if (c === aspas) aspas = null; continue; }
      if (c === '"' || c === "'") aspas = c;
      else if (c === '(') parenteses++;
      else if (c === ')') parenteses--;
      else if (c === ';' && parenteses === 0) break;
    }
    const texto = css.slice(k, fimDecl);
    const doisPontos = texto.indexOf(':');
    if (doisPontos > 0 && texto.trim()) {
      const prop = texto.slice(0, doisPontos).trim().toLowerCase();
      let valor = texto.slice(doisPontos + 1).trim().replace(/\s+/g, ' ');
      const importante = /!\s*important$/i.test(valor);
      if (importante) valor = valor.replace(/\s*!\s*important$/i, '');
      const desloc = texto.length - texto.trimStart().length;
      declaracoes.push({ prop, valor, importante, linha: linhaDe(k + desloc) });
    }
    k = fimDecl + 1;
  }
  return declaracoes;
}

function lerBloco(inicio, fim, media) {
  let k = inicio;
  while (k < fim) {
    while (k < fim && /\s/.test(css[k])) k++;
    if (k >= fim) break;
    if (css[k] === '@') {
      const pv = css.indexOf(';', k), ch = css.indexOf('{', k);
      if (pv !== -1 && (ch === -1 || pv < ch)) {
        imports.push({ texto: css.slice(k, pv + 1).trim(), linha: linhaDe(k) });
        k = pv + 1;
      } else {
        const fecha = fechaChave(ch);
        lerBloco(ch + 1, fecha, css.slice(k, ch).trim());
        k = fecha + 1;
      }
      continue;
    }
    const ch = css.indexOf('{', k);
    if (ch === -1 || ch > fim) break;
    const fecha = fechaChave(ch);
    const seletor = css.slice(k, ch).trim().replace(/\s+/g, ' ');
    regras.push({ seletor, linha: linhaDe(k), media, declaracoes: lerDeclaracoes(ch + 1, fecha) });
    k = fecha + 1;
  }
}
lerBloco(0, css.length, null);

// ---------- agrupamento por classe ----------

function partesDoSeletor(seletor) {
  const partes = []; let atual = '', prof = 0;
  for (const c of seletor) {
    if (c === '(') prof++;
    if (c === ')') prof--;
    if (c === ',' && prof === 0) { partes.push(atual.trim()); atual = ''; } else atual += c;
  }
  if (atual.trim()) partes.push(atual.trim());
  return partes;
}

const ehPrime = (c) => /^p-/.test(c) || /^pi(-|$)/.test(c);
const ehExterna = (c) => /^toastui-/.test(c);
const classesDe = (parte) => [...parte.matchAll(/\.(-?[_a-zA-ZÀ-ɏ][\wÀ-ɏ-]*)/g)].map((m) => m[1]);

function chaveDe(parte) {
  const classes = classesDe(parte);
  if (!classes.length) return { chave: parte, tipo: 'global', classe: parte };
  const propria = classes.find((c) => !ehPrime(c));
  if (!propria) return { chave: '.' + classes[0], tipo: 'global', classe: classes[0] };
  if (ehExterna(propria)) return { chave: '.' + propria, tipo: 'externa', classe: propria };
  // Elementos BEM (bloco__elemento) ficam junto do bloco.
  const bloco = propria.split('__')[0];
  return { chave: '.' + bloco, tipo: 'propria', classe: bloco };
}

// A regra estiliza o próprio elemento da classe ou algo dentro dela?
function alvoDaParte(parte, chave) {
  const compostos = parte.replace(/\s*([>+~])\s*/g, ' $1 ').split(' ').filter((s) => s && !/^[>+~]$/.test(s));
  const ultimo = compostos[compostos.length - 1] ?? '';
  const classesUltimo = classesDe(ultimo);
  if (classesUltimo.some((c) => c === chave || c.startsWith(chave + '__'))) return 'proprio';
  if (/^::?-?webkit|^::/.test(ultimo)) return 'interno';
  return compostos.length > 1 ? 'interno' : 'proprio';
}

const entradas = new Map();
function entrada(chave, tipo) {
  if (!entradas.has(chave)) entradas.set(chave, { chave, tipo, ordem: entradas.size, regras: [], avisos: [] });
  return entradas.get(chave);
}

regras.forEach((r, indice) => {
  const partes = partesDoSeletor(r.seletor);
  const chavesDaRegra = partes.map(chaveDe);
  partes.forEach((parte, p) => {
    const { chave, tipo, classe } = chavesDaRegra[p];
    const e = entrada(chave, tipo);
    if (e.regras.some((x) => x.indice === indice && x.seletor === parte)) return;
    e.regras.push({
      indice,
      seletor: parte,
      seletorOriginal: partes.length > 1 ? r.seletor : undefined,
      linha: r.linha,
      media: r.media ?? undefined,
      alvo: alvoDaParte(parte, classe),
      declaracoes: r.declaracoes,
    });
    // Lista de seletores que mistura algo restrito com algo que vale para o sistema todo.
    const outras = chavesDaRegra.filter((x, q) => q !== p);
    if (tipo !== 'global' && outras.some((x) => x.tipo === 'global')) {
      e.avisos.push({
        tipo: 'global-escondido',
        titulo: 'Regra com efeito global escondido',
        texto: `Na linha ${r.linha} o seletor "${r.seletor}" também tem uma parte que não depende desta classe ("${partes.filter((_, q) => chavesDaRegra[q].tipo === 'global').join(', ')}"). Essa parte vale para o sistema inteiro.`,
        linhas: [r.linha],
      });
    }
    if (tipo === 'global' && outras.some((x) => x.tipo !== 'global')) {
      e.avisos.push({
        tipo: 'global-escondido',
        titulo: 'Ajuste global declarado junto de outra classe',
        texto: `Na linha ${r.linha} a parte "${parte}" está na mesma regra que "${partes.filter((_, q) => q !== p).join(', ')}". Ela afeta todos os elementos do tipo, não só os da outra classe; parece não ter sido intencional.`,
        linhas: [r.linha],
      });
    }
  });
});

// ---------- valores finais, duplicatas e avisos ----------

const ABREVIADOS = {
  'font-size': 'font', 'font-family': 'font', 'font-weight': 'font', 'font-style': 'font', 'line-height': 'font',
  'background-color': 'background', 'background-image': 'background', 'background-size': 'background',
  'border-color': 'border', 'border-width': 'border', 'border-style': 'border',
  'padding-top': 'padding', 'padding-right': 'padding', 'padding-bottom': 'padding', 'padding-left': 'padding',
  'margin-top': 'margin', 'margin-right': 'margin', 'margin-bottom': 'margin', 'margin-left': 'margin',
};
const ESTILOS_DE_BORDA =/\b(solid|dashed|dotted|double|groove|ridge|inset|outset|none|hidden)\b/;

for (const e of entradas.values()) {
  const porSeletor = new Map();
  for (const r of e.regras) {
    const id = (r.media ? r.media + ' ' : '') + r.seletor;
    if (!porSeletor.has(id)) porSeletor.set(id, { seletor: r.seletor, media: r.media, alvo: r.alvo, ocorrencias: [] });
    porSeletor.get(id).ocorrencias.push(r);
  }

  e.seletores = [...porSeletor.values()].map((g) => {
    const finais = new Map();
    for (const r of g.ocorrencias) {
      for (const d of r.declaracoes) {
        const atual = finais.get(d.prop);
        if (!atual) { finais.set(d.prop, { ...d, anteriores: [] }); continue; }
        const vence = d.importante || !atual.importante;
        if (vence) finais.set(d.prop, { ...d, anteriores: [...atual.anteriores, { valor: atual.valor, linha: atual.linha, importante: atual.importante }] });
        else atual.anteriores.push({ valor: d.valor, linha: d.linha, importante: d.importante, ignorado: true });
      }
    }
    const atributos = [...finais.values()];

    if (g.ocorrencias.length > 1) {
      const linhas = g.ocorrencias.map((o) => o.linha);
      const assinatura = (o) => o.declaracoes.map((d) => `${d.prop}:${d.valor}${d.importante ? '!' : ''}`).join(';');
      const identicas = g.ocorrencias.every((o) => assinatura(o) === assinatura(g.ocorrencias[0]));
      const mudancas = atributos
        .filter((a) => a.anteriores.some((x) => x.valor !== a.valor))
        .map((a) => `${a.prop}: ${a.anteriores.map((x) => `${x.valor} (linha ${x.linha})`).join(' → ')} → ${a.valor} (linha ${a.linha}, é o que vale)`);
      // Atributo específico declarado depois sobrescreve parte de um abreviado (ex.: font-size depois de font).
      for (const a of atributos) {
        const abreviado = ABREVIADOS[a.prop];
        const curto = abreviado && atributos.find((x) => x.prop === abreviado && x.linha < a.linha);
        if (curto) mudancas.push(`${a.prop}: ${a.valor} (linha ${a.linha}) sobrescreve a parte "${a.prop}" de "${curto.prop}: ${curto.valor}" (linha ${curto.linha})`);
      }
      const tipoDup = identicas ? 'duplicada-identica' : mudancas.length ? 'duplicada' : 'duplicada-complementar';
      const titulos = {
        'duplicada-identica': 'Declarada mais de uma vez (cópias iguais)',
        duplicada: 'Declarada mais de uma vez com valores diferentes',
        'duplicada-complementar': 'Declarada em mais de um lugar (sem conflito)',
      };
      const textos = {
        'duplicada-identica': `"${g.seletor}" aparece ${linhas.length} vezes (linhas ${linhas.join(', ')}) com o mesmo conteúdo. Pode apagar as cópias sem mudar nada na tela.`,
        duplicada: `"${g.seletor}" aparece ${linhas.length} vezes (linhas ${linhas.join(', ')}). Quando o mesmo atributo se repete, vale o da última declaração.`,
        'duplicada-complementar': `"${g.seletor}" aparece ${linhas.length} vezes (linhas ${linhas.join(', ')}), cada vez com atributos diferentes. Nada é sobrescrito, mas vale juntar num bloco só.`,
      };
      e.avisos.push({ tipo: tipoDup, titulo: titulos[tipoDup], texto: textos[tipoDup], detalhes: mudancas.length ? mudancas : undefined, linhas });
    }

    const props = new Set(atributos.map((a) => a.prop));
    for (const a of atributos) {
      if ((a.prop === 'font-family' || a.prop === 'font') && /[“”‘’]/.test(a.valor)) {
        const nome = (a.valor.match(/[“‘][^”’]*[”’]/) || [a.valor])[0];
        e.avisos.push({
          tipo: 'fonte-invalida',
          titulo: 'Fonte escrita com aspas curvas',
          texto: `${nome} usa aspas tipográficas (“ ”), então o navegador procura uma fonte chamada literalmente ${nome}, que não existe, e usa a reserva sans-serif. Na prática o texto não sai em Inter. Troque por "Inter".`,
          linhas: [a.linha],
        });
      }
      const url = a.valor.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
      if (url && url[1].startsWith('/')) {
        const caminho = join(raiz, 'src', url[1]);
        if (!existsSync(caminho)) {
          e.avisos.push({
            tipo: 'imagem-ausente',
            titulo: 'Imagem não encontrada',
            texto: `O arquivo ${url[1]} não existe neste projeto (src${url[1]}), então a imagem não aparece.`,
            linhas: [a.linha],
          });
        }
      }
      if (/^border(-top|-right|-bottom|-left)?$/.test(a.prop) && !ESTILOS_DE_BORDA.test(a.valor) && !props.has('border-style')) {
        e.avisos.push({
          tipo: 'sem-efeito',
          titulo: 'Borda sem estilo',
          texto: `"${a.prop}: ${a.valor}" não diz o estilo da borda (solid, dashed...). Sem isso o estilo é "none" e a borda não aparece.`,
          linhas: [a.linha],
        });
      }
      if (/^border(-top|-right|-bottom|-left)?-width$/.test(a.prop) && !props.has('border-style') && ![...props].some((p) => /^border(-top|-right|-bottom|-left)?$/.test(p))) {
        e.avisos.push({
          tipo: 'sem-efeito',
          titulo: 'Largura de borda sem estilo',
          texto: `"${a.prop}: ${a.valor}" só aparece se o elemento já tiver um border-style vindo de outro lugar.`,
          linhas: [a.linha],
        });
      }
    }
    if (['top', 'right', 'bottom', 'left'].some((p) => props.has(p)) && !props.has('position')) {
      e.avisos.push({
        tipo: 'sem-efeito',
        titulo: 'Posição sem "position"',
        texto: `Os atributos ${['top', 'right', 'bottom', 'left'].filter((p) => props.has(p)).join(', ')} só funcionam se o elemento tiver position (relative, absolute...) definido em outro lugar.`,
        linhas: [g.ocorrencias[0].linha],
      });
    }

    return {
      seletor: g.seletor,
      media: g.media,
      alvo: g.alvo,
      linhas: g.ocorrencias.map((o) => o.linha),
      atributos: atributos.map(({ prop, valor, importante, linha, anteriores }) => ({
        prop, valor, importante: importante || undefined, linha, anteriores: anteriores.length ? anteriores : undefined,
      })),
    };
  });

  // Avisos repetidos (mesmo tipo e mesmo texto) aparecem uma vez só.
  const vistos = new Set();
  e.avisos = e.avisos.filter((a) => { const k = a.tipo + a.texto; if (vistos.has(k)) return false; vistos.add(k); return true; });
  e.linha = Math.min(...e.regras.map((r) => r.linha));
  delete e.regras;
}

// ---------- avisos do arquivo ----------

const avisosDoArquivo = [];
const contagemImports = new Map();
for (const imp of imports) contagemImports.set(imp.texto, [...(contagemImports.get(imp.texto) ?? []), imp.linha]);
for (const [texto, linhas] of contagemImports) {
  if (linhas.length > 1) avisosDoArquivo.push({ tipo: 'duplicada-identica', titulo: 'Import repetido', texto: `${texto} aparece ${linhas.length} vezes (linhas ${linhas.join(', ')}). O navegador baixa a fonte duas vezes; pode apagar uma.`, linhas });
}
for (const imp of imports) {
  const m = imp.texto.match(/@import\s+"([^"]+\.css)"/);
  if (m && !m[1].includes('/')) {
    const caminho = join(raiz, 'src', m[1]);
    if (existsSync(caminho) && !readFileSync(caminho, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').trim()) {
      avisosDoArquivo.push({ tipo: 'sem-efeito', titulo: 'Arquivo importado está vazio', texto: `${m[1]} foi criado vazio neste projeto porque o conteúdo original não veio junto. As classes dele não aparecem no catálogo.`, linhas: [imp.linha] });
    }
  }
}

const lista = [...entradas.values()].sort((a, b) => a.ordem - b.ordem).map(({ ordem, ...resto }) => resto);

const saida = `// ARQUIVO GERADO por scripts/gerar-catalogo-css.mjs a partir de src/styles.css.
// Não edite à mão: rode "npm run catalogo" (roda sozinho no start e no build).
import { ArquivoCss } from './modelo';

export const ARQUIVO_CSS: ArquivoCss = ${JSON.stringify({
  totalRegras: regras.length,
  totalLinhas: original.split('\n').length,
  imports,
  avisos: avisosDoArquivo,
  entradas: lista,
}, null, 2)};
`;
writeFileSync(arquivoSaida, saida);

const totalAvisos = lista.reduce((s, e) => s + e.avisos.length, 0);
console.log(`Catálogo CSS: ${regras.length} regras, ${lista.length} classes, ${totalAvisos} avisos -> ${arquivoSaida.replace(raiz, '.')}`);
if (process.argv.includes('--listar')) {
  for (const e of lista) console.log(`${e.tipo.padEnd(8)} ${e.chave}  [${e.seletores.map((s) => s.seletor).join(' | ')}]${e.avisos.length ? '  !' + e.avisos.map((a) => a.tipo).join(',') : ''}`);
}
