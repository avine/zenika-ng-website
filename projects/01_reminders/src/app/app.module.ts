import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: 'WELCOME_MSG',
      useValue: 'Bienvenue sur Zenika Ecommerce',
    },
  ],
  declarations: [AppComponent, BasketComponent, CatalogComponent, MenuComponent, ProductComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
