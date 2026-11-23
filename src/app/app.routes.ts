import { Routes } from '@angular/router';

/**
 * Rotas das telas do protótipo. Cada tela nova entra aqui.
 * Exemplo:
 *   { path: 'filial', loadComponent: () => import('./telas/filial/filial-lista.component').then((m) => m.FilialListaComponent) },
 */
export const rotasDasTelas: Routes = [
  {
    path: '',
    title: 'Catálogo CSS',
    loadComponent: () => import('./telas/catalogo-css/catalogo-css.component').then((m) => m.CatalogoCssComponent),
  },
];

export const routes: Routes = rotasDasTelas;
