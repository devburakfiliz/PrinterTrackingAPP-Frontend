import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { PrinterBrand } from '../models/printerBrand';

@Injectable({
  providedIn: 'root'
})
export class PrinterBrandService {
  apiUrl ='https://localhost:44354/api/';

  constructor( private httpClient:HttpClient) { }
  getPrinterBrands():Observable<ListResponseModel<PrinterBrand>> {
    let newPath = this.apiUrl+"PrinterBrand/getall"
    return this.httpClient.get<ListResponseModel<PrinterBrand>>(newPath)
  }
}
