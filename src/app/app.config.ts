import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appEffects } from './store/app.effects';
import { errorInterceptor } from './interceptors/error.interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(
      withInterceptors([errorInterceptor])
    ),
    provideStore(appReducers), 
    provideEffects(appEffects)
  ]
};
