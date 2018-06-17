// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MAT_DIALOG_DATA,
//   MatDialog,
//   MatDialogModule,
//   MatDialogRef } from '@angular/material';
// import { NewsModalComponent } from './news-modal.component';

// describe('NewsModalComponent', () => {
//   let component: NewsModalComponent;
//   let dialog: MatDialog;
//   let fixture: ComponentFixture<NewsModalComponent>;
//   let dialogRef: MatDialogRef<NewsModalComponent>;
//   const snippet = 'Lorem ipsum dolor sit amet';
//   const pub_date = '2018-03-28T09:45:05+0000';
//   const source = 'The New York Times';
//   const multimedia = [{
//       "rank": 0,
//       "subtype": "xlarge",
//       "caption": null,
//       "credit": null,
//       "type": "image",
//       "url": "images/2018/05/30/business/30SINGAPORE/merlin_138828375_8d2c8b23-ea8a-43d3-89d1-5556b11ccf5b-articleLarge.jpg",
//       "height": 450,
//       "width": 600,
//       "legacy": {
//         "xlarge": "images/2018/05/30/business/30SINGAPORE/merlin_138828375_8d2c8b23-ea8a-43d3-89d1-5556b11ccf5b-articleLarge.jpg",
//         "xlargewidth": 600,
//         "xlargeheight": 450
//       },
//       "subType": "xlarge",
//       "crop_name": "articleLarge"
//   }];

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NewsModalComponent ],
//       imports: [MatDialog, MatDialogModule],
//       providers: [{provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: {}}]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NewsModalComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     let dialogRef = dialog.open(NewsModalComponent, {
//       width: '20rem',
//       data: {snippet: snippet, pub_date: pub_date, source: source, multimedia: multimedia}
//     })
//     expect(dialogRef).toBeTruthy();
//   });
// });
