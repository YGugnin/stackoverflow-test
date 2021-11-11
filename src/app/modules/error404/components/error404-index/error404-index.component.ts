import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AnswerModel } from "../../../../shared/models/answer.model";

@Component({
  selector: 'error404-index',
  templateUrl: './error404-index.component.html',
  styleUrls: ['./error404-index.component.less']
})
export class Error404Index implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}

