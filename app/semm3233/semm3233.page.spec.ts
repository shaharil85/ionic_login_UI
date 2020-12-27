import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Semm3233Page } from './semm3233.page';

describe('Semm3233Page', () => {
  let component: Semm3233Page;
  let fixture: ComponentFixture<Semm3233Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Semm3233Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Semm3233Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
