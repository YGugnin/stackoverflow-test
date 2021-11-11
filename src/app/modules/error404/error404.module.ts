import { NgModule } from '@angular/core';

import { Error404Index } from './components/error404-index/error404-index.component';
import { RouterModule } from "@angular/router";
import { Error404RoutingModule } from './error404-routing.module';


@NgModule({
  declarations: [
    Error404Index
  ],
  imports: [
    RouterModule,
    Error404RoutingModule
  ],
  providers: [],
  bootstrap: [Error404Index]
})
export class Error404Module { }
