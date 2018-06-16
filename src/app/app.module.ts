import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsService } from './providers/news.service';
import { NewsModalComponent } from './news-modal/news-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsCardComponent,
    NewsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  entryComponents: [NewsCardComponent, NewsModalComponent],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
