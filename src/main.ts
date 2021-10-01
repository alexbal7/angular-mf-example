import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { singleSpaAngularElements } from 'single-spa-angular/elements';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  try {
    enableProdMode();
  } catch (error) {
    // Prod mode may have been enabled by another app that is sharing the same engine
  }
}

const lifecycles = singleSpaAngularElements({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: '<mfe1-main />',
});

export const {
  bootstrap,
  mount,
  unmount,
} = lifecycles;
