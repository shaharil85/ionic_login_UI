import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Semm3242FindStudentPage } from './semm3242-find-student.page';

describe('Semm3242FindStudentPage', () => {
  let component: Semm3242FindStudentPage;
  let fixture: ComponentFixture<Semm3242FindStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semm3242FindStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Semm3242FindStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
