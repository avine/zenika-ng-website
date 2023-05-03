import { zip } from 'rxjs';

import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket/basket.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogService } from './catalog/catalog.service';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    resolve: {
      _: () => zip([inject(CatalogService).fetch(), inject(BasketService).fetch()]),
    },
  },
  {
    path: 'basket',
    component: BasketComponent,
    resolve: {
      _: () => inject(BasketService).fetch(),
    },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
