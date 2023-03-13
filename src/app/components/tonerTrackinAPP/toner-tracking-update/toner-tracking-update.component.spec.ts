import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerTrackingUpdateComponent } from './toner-tracking-update.component';

describe('TonerTrackingUpdateComponent', () => {
  let component: TonerTrackingUpdateComponent;
  let fixture: ComponentFixture<TonerTrackingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerTrackingUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerTrackingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
