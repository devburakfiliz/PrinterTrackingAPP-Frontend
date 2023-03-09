import { Component, OnInit } from '@angular/core';
import { Printer } from 'src/app/models/printer';
import { PrinterService } from 'src/app/services/printer.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {
  printers : Printer[]=[];
  dataLoaded = false ;




  constructor(private printerService:PrinterService,
    ){}

  ngOnInit(): void {
    this.getPrinters();
  }
  getPrinters(){
    this.printerService.getPrinters(). subscribe((response)=>{
      this.printers=response.data
      this.dataLoaded=true;
    })
  }
}
