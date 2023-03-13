import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerTrackingAddComponent } from './toner-tracking-add.component';

describe('TonerTrackingAddComponent', () => {
  let component: TonerTrackingAddComponent;
  let fixture: ComponentFixture<TonerTrackingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerTrackingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerTrackingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
