import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PostEffects } from './store/post.effects';
import { provideHttpClient } from '@angular/common/http';
import { reducers } from './store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(),
    provideStore(reducers), 
    provideEffects(PostEffects), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
