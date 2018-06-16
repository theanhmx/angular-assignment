import { Injectable } from '@angular/core';
import { NewsService } from './providers/news.service';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class CounterActions {
  static GET_NEWS = 'GET_NEWS';
  static STORE_NEWS = 'STORE_NEWS';

  constructor(private newsService: NewsService, private ngRedux: NgRedux<any>) {}

  getNews(query, page) {
  	this.newsService.getNews(query, page).subscribe(response => {
      this.ngRedux.dispatch({
        type: CounterActions.STORE_NEWS,
        payload: {
          query: query,
          page: page,
          newsArray: response.response.docs
        }
      })
    });
  }
}
