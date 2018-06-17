import { TestBed, async } from '@angular/core/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { HttpClientModule } from '@angular/common/http';
import { PageEvent, MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsService } from './providers/news.service';
import { NewsModalComponent } from './news-modal/news-modal.component';
import { rootReducer, IAppState, INITIAL_STATE } from './store';
import { CounterActions } from './app.actions';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        NewsCardComponent,
        NewsModalComponent
      ],
      imports: [
        HttpClientModule,
        NgReduxTestingModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatToolbarModule
      ],
      providers: [ CounterActions, NewsService, PageEvent ],
    }).compileComponents();
    MockNgRedux.reset();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'The New York Times'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('The New York Times');
  }));

  it('should render the app header component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header').textContent).toBeDefined();
  }));

  it('should render the MatPaginator', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-paginator').textContent).toBeDefined();
  }));
});
