import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerUpdateComponent } from './toner-update.component';

describe('TonerUpdateComponent', () => {
  let component: TonerUpdateComponent;
  let fixture: ComponentFixture<TonerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
