import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAltComponent } from './tabs-alt.component';

describe('TabsAltComponent', () => {
  let component: TabsAltComponent;
  let fixture: ComponentFixture<TabsAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
