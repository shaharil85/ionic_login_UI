import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindStudentPage } from './find-student.page';

describe('FindStudentPage', () => {
  let component: FindStudentPage;
  let fixture: ComponentFixture<FindStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
