import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Printer } from '../models/printer';
import { PrinterModel } from '../models/printerModel';

@Injectable({
  providedIn: 'root'
})
export class PrinterModelService  {
  apiUrl ='https://localhost:44354/api/';

  constructor(private httpClient:HttpClient) { }
  getPrinterModels():Observable<ListResponseModel<PrinterModel>> {
    let newPath = this.apiUrl+"PrinterModel/getall"
    return this.httpClient.get<ListResponseModel<PrinterModel>>(newPath)
  }

  
}
