import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAutomationComponent } from './mobile-automation.component';

describe('MobileAutomationComponent', () => {
  let component: MobileAutomationComponent;
  let fixture: ComponentFixture<MobileAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
