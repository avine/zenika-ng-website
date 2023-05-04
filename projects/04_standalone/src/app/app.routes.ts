import { Routes } from '@angular/router';

import { BasketComponent } from './basket/basket.component';
import { basketResolver } from './basket/basket.resolver';
import { CatalogComponent } from './catalog/catalog.component';
import { catalogResolver } from './catalog/catalog.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    resolve: { _: catalogResolver },
  },
  {
    path: 'basket',
    component: BasketComponent,
    resolve: { _: basketResolver },
  },
];
