import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './news.service';

describe('NewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NewsService],
      imports: [
        HttpClientModule
      ],
    });
  });

  it('should be created', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));

  it('NYT should return data',
    inject([NewsService],
      (service: NewsService) => {
      service.getNews('world cup', 0).subscribe(response => {
        console.log('response', response);
        expect(response['status']).toEqual('Not OK');
      });
    }));
});

