import { Component, OnInit, OnDestroy }       from '@angular/core';
import { StackoverflowApiService } from '../../../../core/services/stackoverflow-api/stackoverflow-api.service';
import { Subscription, of } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { QuestionModel } from "../../../../shared/models/question.model";
import { SearchStorage } from "../../../../core/services/search-storage/search-storage.service";

@Component({
  selector: 'search-index',
  templateUrl: './search-index.component.html'
})
export class SearchIndexComponent implements OnInit, OnDestroy {
  loading:    boolean = false;
  error:      boolean = false;
  init:       boolean = true;
  showMore:   boolean = true;
  list!:      QuestionModel[];
  searchText: string = '';
  private page:       number = 1;

  private subscribers: any = {};

  constructor(private apiService: StackoverflowApiService, private searchStorage: SearchStorage) {}

  ngOnInit(): void {
    this.searchStorage.loadDataStorage();
    this.subscribers.list = this.searchStorage.getList().subscribe(
      (list) => {
        this.list = list;
      });
    this.subscribers.query = this.searchStorage.getQuery().subscribe(
      (query) => {
        this.searchText = query;
      });
    this.subscribers.more = this.searchStorage.getMore().subscribe(
      (more) => {
        this.showMore = more;
      });
    this.subscribers.page = this.searchStorage.getPage().subscribe(
      (page) => {
        this.page = page;
      });
  }

  completeSearch(searchText: string) {
    this.searchStorage.setQuery(searchText);
    this.searchStorage.setPage(1);
    this.searchStorage.setList([]);
    this.searchStorage.setMore(true);
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.init    = false;
    this.error   = false;

    this.subscribers.loadList = this.apiService
      .getSearchResults(this.searchText, this.page)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        result => {
          this.searchStorage.setMore(result.has_more);
          this.searchStorage.setList(this.list.concat(result.items));
          this.searchStorage.setPage(this.page + 1);
        },
        err => {
          this.error = true;
        });
  }

  ngOnDestroy(): void {
    Object.keys(this.subscribers).forEach((key: string) => {
      this.subscribers[key].unsubscribe();
    });
  }

}

