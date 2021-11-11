import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent implements OnInit {
  searchForm!: FormGroup;
  @Output() completeSearch = new EventEmitter<string>();
  @Input() searchText: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: [this.searchText.toString(), Validators.required]
    });
  }

  formSubmit = () => {
    const formData = this.searchForm.value;
    if ('searchText' in formData) {
      this.completeSearch.emit(formData.searchText);
    }
  }

}

