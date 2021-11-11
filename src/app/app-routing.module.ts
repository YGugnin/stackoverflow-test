import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'question',
    loadChildren: () =>
      import('./modules/question/question.module').then(m => m.QuestionModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/error404/error404.module').then(m => m.Error404Module)
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy'
    })
  ],
})
export class AppRoutingModule { }
