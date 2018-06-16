import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';

import { rootReducer, IAppState, INITIAL_STATE } from './store';
import { CounterActions } from './app.actions';

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
    NgReduxModule,
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
  providers: [CounterActions, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE);
  }
}
