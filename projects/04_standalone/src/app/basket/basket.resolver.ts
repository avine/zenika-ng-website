import { catchError, EMPTY } from 'rxjs';

import { inject } from '@angular/core';

import { AlertService } from '../alert/alert.service';
import { BasketService } from './basket.service';

export const basketResolver = () => {
  const alertService = inject(AlertService);
  return inject(BasketService)
    .fetch()
    .pipe(
      catchError(() => {
        alertService.addDanger("Désolé, impossible d'accéder au panier.");
        return EMPTY;
      })
    );
};
