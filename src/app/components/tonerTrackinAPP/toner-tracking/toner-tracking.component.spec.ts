import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerTrackingComponent } from './toner-tracking.component';

describe('TonerTrackingComponent', () => {
  let component: TonerTrackingComponent;
  let fixture: ComponentFixture<TonerTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
