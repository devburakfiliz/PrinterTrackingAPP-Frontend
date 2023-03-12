import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterModelComponent } from './printer-model.component';

describe('PrinterModelComponent', () => {
  let component: PrinterModelComponent;
  let fixture: ComponentFixture<PrinterModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
