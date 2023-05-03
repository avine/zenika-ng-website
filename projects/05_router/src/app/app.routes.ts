import { map, zip } from 'rxjs';

import { inject } from '@angular/core';
import { Routes } from '@angular/router';

import { BasketService } from './basket/basket.service';
import { CatalogService } from './catalog/catalog.service';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catalog/catalog.component').then((m) => m.CatalogComponent),
    resolve: {
      _: () => zip([inject(CatalogService).fetch(), inject(BasketService).fetch()]),
    },
  },
  {
    path: 'basket',
    loadComponent: () => import('./basket/basket.component').then((m) => m.BasketComponent),
    canMatch: [
      () =>
        inject(BasketService)
          .fetch()
          .pipe(map(({ length }) => length > 0)),
    ],
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
