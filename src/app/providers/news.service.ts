import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  constructor(private http: HttpClient) { }

  url = 'https://api.nytimes.com';
  apiKey = '2938c67dd3604509bb7ecac1851766f9';

  getNews(query, page) {
    let params = new HttpParams({
      fromObject: {
        'api-key': this.apiKey,
        'q': query,
        'page': page,
        'sort': 'newest'
      }
    });

  	return this.http.get(`${this.url}/svc/search/v2/articlesearch.json`, {
      params: params
    });
  }
}
