import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerAddComponent } from './toner-add.component';

describe('TonerAddComponent', () => {
  let component: TonerAddComponent;
  let fixture: ComponentFixture<TonerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
