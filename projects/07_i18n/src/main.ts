/// <reference types="@angular/localize" />

import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { WELCOME_MSG } from './app/app.token';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: WELCOME_MSG,
      useValue: $localize`:@@Welcome:Bienvenue sur Zenika Ecommerce`,
    },
  ],
}).catch((err) => console.error(err));
