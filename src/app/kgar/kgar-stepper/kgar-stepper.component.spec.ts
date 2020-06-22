import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgarStepperComponent } from './kgar-stepper.component';

describe('KgarStepperComponent', () => {
  let component: KgarStepperComponent;
  let fixture: ComponentFixture<KgarStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgarStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgarStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
