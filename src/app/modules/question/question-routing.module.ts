import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionIndexComponent } from './components/question-index/question-index.component';
import { Error404Index } from '../error404/components/error404-index/error404-index.component';

const routes: Routes = [
  {
    path: ':id',
    component: QuestionIndexComponent
  },
  {
    path: '**',
    component: Error404Index
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule{ }
