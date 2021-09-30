import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, EmptyComponent, FirstComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
