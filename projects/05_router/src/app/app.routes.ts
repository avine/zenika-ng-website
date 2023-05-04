import { catchError, EMPTY, map, zip } from 'rxjs';

import { inject } from '@angular/core';
import { Routes } from '@angular/router';

import { AlertService } from './alert/alert.service';
import { BasketService } from './basket/basket.service';
import { CatalogService } from './catalog/catalog.service';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catalog/catalog.component').then((m) => m.CatalogComponent),
    resolve: {
      _: () => {
        const alertService = inject(AlertService);
        return zip([inject(CatalogService).fetch(), inject(BasketService).fetch()]).pipe(
          catchError(() => {
            alertService.addDanger("Désolé, impossible d'accéder au catalogue.");
            return EMPTY;
          })
        );
      },
    },
  },
  {
    path: 'basket',
    loadComponent: () => import('./basket/basket.component').then((m) => m.BasketComponent),
    canMatch: [
      () => {
        const alertService = inject(AlertService);
        return inject(BasketService)
          .fetch()
          .pipe(
            map(({ length }) => length > 0),
            catchError(() => {
              alertService.addDanger("Désolé, impossible d'accéder au panier.");
              return EMPTY;
            })
          );
      },
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
