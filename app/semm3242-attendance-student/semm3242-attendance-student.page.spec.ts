import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Semm3242AttendanceStudentPage } from './semm3242-attendance-student.page';

describe('Semm3242AttendanceStudentPage', () => {
  let component: Semm3242AttendanceStudentPage;
  let fixture: ComponentFixture<Semm3242AttendanceStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semm3242AttendanceStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Semm3242AttendanceStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
