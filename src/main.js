import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from 'app/app';

import { appRouterProviders } from 'app/app/app.routes';

import { ServerDataService } from 'service/server-data';
import { FlashMessageService } from 'service/flash-message';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  ServerDataService,
  FlashMessageService,
  appRouterProviders,
]);
