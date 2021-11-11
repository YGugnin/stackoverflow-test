import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionModel } from "../../../../shared/models/question.model";

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.less']
})
export class SearchListComponent implements OnInit {
  @Input() loading:    boolean = false;
  @Input() error:      boolean = false;
  @Input() init:       boolean = false;
  @Input() showMore:   boolean = true;
  @Input() list:       QuestionModel[] = [];

  @Output() loadData = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  loadMore() {
    this.loadData.emit();
  }
}

