import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AnswerModel } from "../../../../shared/models/answer.model";

@Component({
  selector: 'question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionAnswerComponent implements OnInit {
  @Input() answer!: AnswerModel;

  constructor() {}

  ngOnInit(): void {
  }
}

