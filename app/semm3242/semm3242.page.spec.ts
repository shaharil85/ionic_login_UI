import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Semm3242Page } from './semm3242.page';

describe('Semm3242Page', () => {
  let component: Semm3242Page;
  let fixture: ComponentFixture<Semm3242Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semm3242Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Semm3242Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
