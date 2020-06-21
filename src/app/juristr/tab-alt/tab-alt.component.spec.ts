import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAltComponent } from './tab-alt.component';

describe('TabAltComponent', () => {
  let component: TabAltComponent;
  let fixture: ComponentFixture<TabAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
