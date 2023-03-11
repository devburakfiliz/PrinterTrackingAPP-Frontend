import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerBrandComponent } from './toner-brand.component';

describe('TonerBrandComponent', () => {
  let component: TonerBrandComponent;
  let fixture: ComponentFixture<TonerBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
