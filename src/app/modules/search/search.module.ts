import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchIndexComponent } from './components/search-index/search-index.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchQuestionComponent } from './components/search-question/search-question.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { StackoverflowApiService } from '../../core/services/stackoverflow-api/stackoverflow-api.service';
import { SearchStorage } from "../../core/services/search-storage/search-storage.service";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchIndexComponent,
    SearchFormComponent,
    SearchListComponent,
    SearchQuestionComponent,
  ],
  imports: [
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [
    StackoverflowApiService,
    SearchStorage,ReactiveFormsModule
  ],
  bootstrap: [SearchIndexComponent]
})
export class SearchModule { }
