import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterBrandComponent } from './printer-brand.component';

describe('PrinterBrandComponent', () => {
  let component: PrinterBrandComponent;
  let fixture: ComponentFixture<PrinterBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
