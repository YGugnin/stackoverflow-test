import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from "../../../../shared/models/question.model";

@Component({
  selector: 'search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.less']
})
export class SearchQuestionComponent implements OnInit {
  @Input() question!:    QuestionModel;

  constructor() {}

  ngOnInit(): void {
  }
}

