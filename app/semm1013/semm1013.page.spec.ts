import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Semm1013Page } from './semm1013.page';

describe('Semm1013Page', () => {
  let component: Semm1013Page;
  let fixture: ComponentFixture<Semm1013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semm1013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Semm1013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
