import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterDeleteComponent } from './printer-delete.component';

describe('PrinterDeleteComponent', () => {
  let component: PrinterDeleteComponent;
  let fixture: ComponentFixture<PrinterDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
