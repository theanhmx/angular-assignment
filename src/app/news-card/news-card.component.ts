import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewsModalComponent } from '../news-modal/news-modal.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  viewNews(): void {
    let dialogRef = this.dialog.open(NewsModalComponent, {
      width: '20rem',
      data: {snippet: this.snippet, pub_date: this.pub_date, source: this.source, multimedia: this.multimedia}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
