import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Semm3242ListStudentPage } from './semm3242-list-student.page';

describe('Semm3242ListStudentPage', () => {
  let component: Semm3242ListStudentPage;
  let fixture: ComponentFixture<Semm3242ListStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semm3242ListStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Semm3242ListStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
