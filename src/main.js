import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from 'app/app';

import { ServerDataService } from 'service/server-data';
import { FlashMessageService } from 'service/flash-message';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, ServerDataService, FlashMessageService]);
