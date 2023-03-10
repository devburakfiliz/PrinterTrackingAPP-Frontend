import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterUpdateComponent } from './printer-update.component';

describe('PrinterUpdateComponent', () => {
  let component: PrinterUpdateComponent;
  let fixture: ComponentFixture<PrinterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
