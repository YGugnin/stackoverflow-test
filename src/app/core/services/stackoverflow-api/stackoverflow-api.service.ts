import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {APP_CONFIG} from "../../../config/app-settings.config";
import { QuestionResponseModel } from "../../../shared/models/question-response.model";
import { AnswerResponseModel } from "../../../shared/models/answer-response.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowApiService {

  constructor(private http: HttpClient) {}

  getSearchResults(searchTest: string, page: number): Observable<QuestionResponseModel> {
    return this.http.get(APP_CONFIG.apiUrl + '/search/advanced?order=desc&sort=activity&site=stackoverflow&q=' + encodeURI(searchTest) + ' &page=' + page + '&filter=' + APP_CONFIG.apiFilter + (APP_CONFIG.apiKey ? '&key=' + APP_CONFIG.apiKey : ''))
      .pipe(
        map((response: any) =>new QuestionResponseModel().deserialize(response)),
      );
  }

  getQuestion(questionId : number): Observable<QuestionResponseModel> {
    return this.http.get(APP_CONFIG.apiUrl + '/questions/' + questionId + '?site=stackoverflow' + '&filter=' + APP_CONFIG.apiFilter + (APP_CONFIG.apiKey ? '&key=' + APP_CONFIG.apiKey : ''))
      .pipe(
        map((response: any) => new QuestionResponseModel().deserialize(response)),
      );
  }

  getAnswers(questionId : number): Observable<AnswerResponseModel> {
    return this.http.get(APP_CONFIG.apiUrl + '/questions/' + questionId + '/answers?sort=votes&order=desc&site=stackoverflow' + '&filter=' + APP_CONFIG.apiFilter + (APP_CONFIG.apiKey ? '&key=' + APP_CONFIG.apiKey : ''))
      .pipe(
        map((response: any) =>new AnswerResponseModel().deserialize(response)),
      );
  }
}
