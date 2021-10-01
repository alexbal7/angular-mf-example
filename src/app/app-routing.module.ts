import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'app-comp-from-first-module',
  template: `
    <p>Component from first module</p>
    <mfe1-web-component></mfe1-web-component>
  `,
})
export class FirstComponent {
}

@Component({
  selector: 'app-empty',
  template: '',
})
export class EmptyComponent {
}

const routes: Routes = [
  {path: 'mfe1/first', component: FirstComponent},
  {path: '**', component: EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
})
export class AppRoutingModule { }
