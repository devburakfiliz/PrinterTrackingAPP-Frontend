import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerTrackingDeleteComponent } from './toner-tracking-delete.component';

describe('TonerTrackingDeleteComponent', () => {
  let component: TonerTrackingDeleteComponent;
  let fixture: ComponentFixture<TonerTrackingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerTrackingDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerTrackingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
