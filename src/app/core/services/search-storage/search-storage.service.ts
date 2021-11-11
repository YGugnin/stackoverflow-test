import { QuestionModel } from "../../../shared/models/question.model";
import { Observable, BehaviorSubject } from 'rxjs';
import { elementAt, map } from "rxjs/operators";
import { QuestionResponseModel } from "../../../shared/models/question-response.model";

export class SearchStorage {
  queryString = new BehaviorSubject<string>('');
  list        = new BehaviorSubject<QuestionModel[]>([]);
  pageNum     = new BehaviorSubject<number>(1);
  showMore    = new BehaviorSubject<boolean>(true);

  setList(list: QuestionModel[]) {
    localStorage.setItem('searchList', JSON.stringify(list));
    this.list.next(list);
  }

  getList(): Observable<any> {
    return this.list.asObservable();
  }

  setQuery(query: string) {
    localStorage.setItem('searchQuery', query);
    this.queryString.next(query);
  }

  getQuery(): Observable<any> {
    return this.queryString.asObservable();
  }

  setPage(pageNum: number) {
    localStorage.setItem('searchPage', pageNum.toString());
    this.pageNum.next(pageNum);
  }

  getPage(): Observable<any> {
    return this.pageNum.asObservable();
  }

  setMore(more: boolean) {
    localStorage.setItem('searchMore', more ? '1' : '0');
    this.showMore.next(more);
  }

  getMore(): Observable<any> {
    return this.showMore.asObservable();
  }

  loadDataStorage() {
    const list = localStorage.getItem('searchList');
    if (list) {
      let parsedList =JSON.parse(list);
      parsedList.map((question: any) => new QuestionModel().deserialize(question));
      this.setList(parsedList.length ? parsedList : []);
    }
    const query = localStorage.getItem('searchQuery');
    this.setQuery(query || '');
    const page = localStorage.getItem('searchPage');
    this.setPage(page ? parseInt(page) : 1);
    const more = localStorage.getItem('searchMore');
    this.setMore(more ? !!parseInt(more) : true);
  }

  getSingle(questionId: number, checkList ?: string): any {
    const list = checkList || localStorage.getItem('searchList');
    if (list) {
      let parsedList =JSON.parse(list);
      const element = parsedList.find((element: any) => element.question_id == questionId);
      return element ? new QuestionModel().deserialize(element) : null;
    }
  }


}
