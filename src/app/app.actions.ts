import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NewsService } from './providers/news.service';

@Injectable()
export class CounterActions {
  static GETNEWS = 'GETNEWS';

  constructor(private newsService: NewsService) {}

  getNews(query, page): Action {
  	this.newsService.getNews(query, page).subscribe(response => {
  	  // this.newsArray = response.response.docs;
  	  console.log(response);
  	});
    return { type: CounterActions.GETNEWS };
  }
}