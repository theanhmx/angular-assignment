import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsService } from './providers/news.service';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'The New York Times';
  newsArray: object[];
  query = 'vietnam';

  // MatPaginator Inputs
  length = 9999;
  pageSize = 10;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews(this.query, this.paginator.pageIndex).subscribe(response => {
      this.newsArray = response.response.docs;
      console.log(this.newsArray);
    });
  }
}
