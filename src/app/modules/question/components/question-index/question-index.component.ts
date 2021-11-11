import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { QuestionModel } from "../../../../shared/models/question.model";
import { AnswerModel } from "../../../../shared/models/answer.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { catchError, finalize } from "rxjs/operators";
import { StackoverflowApiService } from "../../../../core/services/stackoverflow-api/stackoverflow-api.service";
import { SearchStorage } from "../../../../core/services/search-storage/search-storage.service";

@Component({
  selector: 'question-index',
  templateUrl: './question-index.component.html',
  styleUrls: ['./question-index.component.less']
})
export class QuestionIndexComponent implements OnInit {
  loadingQuestion: boolean = false;
  loadingAnswers:  boolean = false;
  question!:       QuestionModel;
  answers!:        AnswerModel[];

  private subscribers: any = {};

  constructor(private route: ActivatedRoute, private apiService: StackoverflowApiService, private searchStorage: SearchStorage, private router: Router) {}

  ngOnInit(): void {
    this.subscribers.route = this.route.params.subscribe(params => {
      if (parseInt(params['id']) != params['id']) {
        this.router.navigate(['/404']);
      } else  {
        const question = this.searchStorage.getSingle(params['id']);
        if (question) {
          this.question = question;
        } else {
          this.loadQuestion(params['id']);
        }
        this.loadAnswers(params['id']);
      }
    });
  }

  loadQuestion(id: number) {
    this.loadingQuestion = true;
    this.subscribers.question = this.apiService
      .getQuestion(id)
      .pipe(
        finalize(() => {
          this.loadingQuestion = false;
        })
      )
      .subscribe(
        result => {
          const question = this.searchStorage.getSingle(id, JSON.stringify(result.items));
          if (question) {
            this.question = question;
          } else {
            this.router.navigate(['/404']);
          }
        },
        err => {
          this.router.navigate(['/404']);
        });
  }

  loadAnswers(id: number) {
    this.loadingAnswers = true;
    this.subscribers.answers = this.apiService
      .getAnswers(id)
      .pipe(
        finalize(() => {
          this.loadingAnswers = false;
        })
      )
      .subscribe(
        result => {
          this.answers = result.items;
        },
        err => {
          this.router.navigate(['/404']);
        });
  }

  ngOnDestroy(): void {
    Object.keys(this.subscribers).forEach((key: string) => {
      this.subscribers[key].unsubscribe();
    });
  }
}

