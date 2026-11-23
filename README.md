# CssArquivo

Protótipo IClass em Angular 17 + PrimeNG 17, com tradução por ngx-translate (pt, en, es).

## Requisitos

- Node 22 (recomendado, versão em `.nvmrc`) ou Node 20.9+. Com nvm-windows: `nvm use 22`.
  No Node 20, o `npm` mostra avisos `EBADENGINE` que podem ser ignorados.

## Comandos

| Comando | O que faz |
|---|---|
| `npm ci` | Instala as dependências nas versões exatas do `package-lock.json` |
| `npm start` | Sobe o protótipo em http://localhost:4200 |
| `npm run build` | Gera a versão de produção em `dist/` |

## Onde fica cada coisa

| Pasta | Conteúdo |
|---|---|
| `src/app/telas/` | As telas do protótipo, com seus componentes e mocks (`*.mock.ts`) |
| `src/app/app.routes.ts` | Rotas das telas (`rotasDasTelas`) |
| `src/assets/i18n/` | Textos traduzidos: `pt.json`, `en.json`, `es.json` |
| `src/app/traducao/` | Parser que aceita parâmetros posicionais (`{0}`, `{1}`) nas tags |

## Catálogo CSS

A tela inicial (`/`) é um catálogo de todas as classes do `src/styles.css`: nome, o que faz na tela,
exemplo ao vivo, atributos com o valor que de fato vale e avisos (duplicatas, fontes com aspas curvas,
regras sem efeito, ajustes globais escondidos).

| Arquivo | Papel |
|---|---|
| `scripts/gerar-catalogo-css.mjs` | Lê o `styles.css` e gera `dados/regras.gerado.ts`. Roda sozinho antes de `npm start` e `npm run build`; à mão: `npm run catalogo` |
| `src/app/telas/catalogo-css/dados/descricoes.ts` | Categoria, descrição e HTML do exemplo de cada classe. Classe nova sem descrição aparece em "Sem descrição" |
| `src/app/telas/catalogo-css/estilos-primeng.component.ts` | Instâncias escondidas dos componentes PrimeNG, para o CSS estrutural deles existir nos exemplos |

Link já filtrado: `http://localhost:4200/?busca=btn-search`.

`global-overrides.css`, `form-style.css` e `advanced-filter.css` foram criados vazios: o `styles.css`
original importa esses arquivos, mas o conteúdo não veio junto.
