import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterImageComponent } from './printer-image.component';

describe('PrinterImageComponent', () => {
  let component: PrinterImageComponent;
  let fixture: ComponentFixture<PrinterImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
