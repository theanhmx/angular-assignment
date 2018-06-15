import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
	@Input() snippet: string;
	@Input() pub_date: string;
	@Input() source: string;
	@Input() multimedia: object[];
	
  constructor() { }

  ngOnInit() {
  }
}
