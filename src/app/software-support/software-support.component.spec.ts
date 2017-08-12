import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSupportComponent } from './software-support.component';

describe('SoftwareSupportComponent', () => {
  let component: SoftwareSupportComponent;
  let fixture: ComponentFixture<SoftwareSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
