import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from './basket/basket.component';
import { basketResolver } from './basket/basket.resolver';
import { CatalogComponent } from './catalog/catalog.component';
import { catalogResolver } from './catalog/catalog.resolver';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
