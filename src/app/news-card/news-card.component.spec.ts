import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { NewsModalComponent } from '../news-modal/news-modal.component';
import { NewsCardComponent } from './news-card.component';

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardComponent ],
      imports: [
        MatCardModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    const snippet = 'Lorem ipsum dolor sit amet';
    const pub_date = '2018-03-28T09:45:05+0000';
    const source = 'The New York Times';
    const multimedia = [{
        "rank": 0,
        "subtype": "xlarge",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/05/30/business/30SINGAPORE/merlin_138828375_8d2c8b23-ea8a-43d3-89d1-5556b11ccf5b-articleLarge.jpg",
        "height": 450,
        "width": 600,
        "legacy": {
          "xlarge": "images/2018/05/30/business/30SINGAPORE/merlin_138828375_8d2c8b23-ea8a-43d3-89d1-5556b11ccf5b-articleLarge.jpg",
          "xlargewidth": 600,
          "xlargeheight": 450
        },
        "subType": "xlarge",
        "crop_name": "articleLarge"
    }];

    component.snippet = snippet;
    component.pub_date = pub_date;
    component.source = source;
    component.multimedia = multimedia;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the card correctly', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.news-title').textContent).toEqual('The New York Times');
    expect(compiled.querySelector('.news-image')).toBeTruthy();
    expect(compiled.querySelector('mat-card-content').textContent).toEqual('Lorem ipsum dolor sit amet');
    expect(compiled.querySelector('.news-pub_date').textContent).toEqual('Wednesday, March 28, 2018');
  }));
});

