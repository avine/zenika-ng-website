import { catchError, EMPTY, zip } from 'rxjs';

import { inject } from '@angular/core';
import { Routes } from '@angular/router';

import { AlertService } from './alert/alert.service';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket/basket.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogService } from './catalog/catalog.service';

export const appRoutes: Routes = [
  {
    path: '',
    component: CatalogComponent,
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
    component: BasketComponent,
    resolve: {
      _: () => {
        const alertService = inject(AlertService);
        return inject(BasketService)
          .fetch()
          .pipe(
            catchError(() => {
              alertService.addDanger("Désolé, impossible d'accéder au panier.");
              return EMPTY;
            })
          );
      },
    },
  },
];
