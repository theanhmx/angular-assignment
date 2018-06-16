import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';
import { NgRedux } from '@angular-redux/store';
import { CounterActions } from './app.actions';
import { IAppState } from "./store";
import { HeaderComponent } from './header/header.component';
import { NewsCardComponent } from './news-card/news-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{
  subscription;
  title = 'The New York Times';
  newsArray: object[];
  query = 'vietnam';

  // MatPaginator Inputs
  length = 9999;
  pageSize = 10;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {
    this.subscription = ngRedux.select<string>('query').subscribe(newQuery => this.query = newQuery);
  }

  ngOnInit() {
    this.getNews();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  

  getNews() {
    this.ngRedux.dispatch(this.actions.getNews(this.query, this.paginator.pageIndex));
  }
}
