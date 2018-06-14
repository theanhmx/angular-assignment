import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsService } from './providers/news.service';
import { News } from './model/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'The New York Times';
  newsArray: object[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.newsService.getNews().subscribe(news => {
      if (news.response && news.response.docs) {
        this.newsArray = news.response.docs;
      }
    });
  }
}
