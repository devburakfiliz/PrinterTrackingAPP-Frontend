import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerModelComponent } from './toner-model.component';

describe('TonerModelComponent', () => {
  let component: TonerModelComponent;
  let fixture: ComponentFixture<TonerModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
