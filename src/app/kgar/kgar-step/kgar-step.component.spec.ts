import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgarStepComponent } from './kgar-step.component';

describe('KgarStepComponent', () => {
  let component: KgarStepComponent;
  let fixture: ComponentFixture<KgarStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgarStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgarStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
