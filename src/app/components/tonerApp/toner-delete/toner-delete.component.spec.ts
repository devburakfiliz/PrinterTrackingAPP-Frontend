import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerDeleteComponent } from './toner-delete.component';

describe('TonerDeleteComponent', () => {
  let component: TonerDeleteComponent;
  let fixture: ComponentFixture<TonerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
