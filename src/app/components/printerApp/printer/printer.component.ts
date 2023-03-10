import { Component, OnInit } from '@angular/core';
import { Printer } from 'src/app/models/printer';
import { PrinterService } from 'src/app/services/printer.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {
  printers : Printer[]=[];
  dataLoaded = false ;
  currentPrinter:Printer | null;
  filterText:""
  claims: string[] = []






  constructor(private printerService:PrinterService,
    private router:Router,
     private loginService:LoginService
    ){}

  ngOnInit(): void {
    this.getPrinters();
    this.getIfAdmin()

  }
  getPrinters(){
    this.printerService.getPrinters(). subscribe((response)=>{
      this.printers=response.data
      this.dataLoaded=true;
    })
  }
   setCurrentPrinter(printer:Printer){
    this.currentPrinter=printer;
  }
   getAllPrinterClass(){
    if (!this.currentPrinter) {
      return "list-group-item active"     
    }else{
      return"list-group-item"

    }
    

  }
    
  reset(){
    this.currentPrinter = null;
  }

  getIfAdmin(){
    this.loginService.getClaims().subscribe({
      next: (response) => {
        this.claims = response
      }
    })
  }

}
