import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Index } from './components/error404-index/error404-index.component';

const routes: Routes = [
  {
    path: '',
    component: Error404Index
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error404RoutingModule{ }
