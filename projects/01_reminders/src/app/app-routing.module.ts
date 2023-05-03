import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
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
