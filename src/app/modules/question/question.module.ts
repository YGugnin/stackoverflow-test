import { NgModule } from '@angular/core';

import { QuestionIndexComponent } from './components/question-index/question-index.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { SearchStorage } from "../../core/services/search-storage/search-storage.service";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    QuestionIndexComponent,
    QuestionAnswerComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    RouterModule
  ],
  providers: [
    SearchStorage
  ],
  bootstrap: [QuestionIndexComponent]
})
export class QuestionModule { }
