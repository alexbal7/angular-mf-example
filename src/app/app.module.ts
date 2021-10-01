import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { createCustomElement } from '@angular/elements';

import {AppRoutingModule, EmptyComponent, FirstComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponentComponent } from './web-component/web-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EmptyComponent,
    WebComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    if (!customElements.get('mfe1-main')) {
      const appCustomElement = createCustomElement(AppComponent, {injector: this.injector});
      customElements.define('mfe1-main', appCustomElement);
    }

    if (!customElements.get('mfe1-web-component')) {
      const webComponentCustomElement = createCustomElement(WebComponentComponent, {injector: this.injector});
      customElements.define('mfe1-web-component', webComponentCustomElement);
    }
  }
}
