import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Printer } from '../models/printer';


@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  apiUrl ='https://localhost:44354/api/';

  constructor(private httpClient:HttpClient) { }
  getPrinters():Observable<ListResponseModel<Printer>>{
    let newPath = this.apiUrl+"printer/getdetail"
    return this.httpClient.get<ListResponseModel<Printer>>(newPath)
  }
}
