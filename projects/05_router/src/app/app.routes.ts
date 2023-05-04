import { Routes } from '@angular/router';

import { basketGuard } from './basket/basket.guard';
import { catalogResolver } from './catalog/catalog.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catalog/catalog.component').then((m) => m.CatalogComponent),
    resolve: { _: catalogResolver },
  },
  {
    path: 'basket',
    loadComponent: () => import('./basket/basket.component').then((m) => m.BasketComponent),
    canMatch: [basketGuard],
  },
  {
    path: 'basket',
    loadComponent: () => import('./basket-empty/basket-empty.component').then((m) => m.BasketEmptyComponent),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
