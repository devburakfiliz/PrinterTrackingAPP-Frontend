import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { PrinterImage } from '../models/printerImage';

@Injectable({
  providedIn: 'root'
})
export class PrinterImageService {

  apiURL = 'https://localhost:44354/';

  constructor(private httpClient:HttpClient) { }
 
  getPrinterImages():Observable<ListResponseModel<PrinterImage>>{
   let newPath = this.apiURL + "PrinterImages/getall"
   return this.httpClient.get<ListResponseModel<PrinterImage>>(newPath);    
  }
  
  
  getCarImagesByPrinterId(printerId:number):Observable<ListResponseModel<PrinterImage>>{
   let newPath = this.apiURL + "api/PrinterImages/getbyprinterid?printerId="+printerId 
   return this.httpClient.get<ListResponseModel<PrinterImage>>(newPath);     
  }

 
  getImagePath(printerImage: string):Observable<ListResponseModel<PrinterImage>>{
    let newPath = this.apiURL+"uploads/images/="+printerImage
    return this.httpClient.get<ListResponseModel<PrinterImage>>(newPath)
  }

}
