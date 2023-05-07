import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { WELCOME_MSG } from './app.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: WELCOME_MSG,
      useValue: 'Bienvenue sur Zenika Ecommerce',
    },
  ],
};
