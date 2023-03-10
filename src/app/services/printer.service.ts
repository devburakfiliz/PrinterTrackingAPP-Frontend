import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Printer } from '../models/printer';
import { ResponseModel } from '../models/responseModel';


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
  add(printer:Printer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"printer/add",printer)
  }
  update(printer:Printer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"printer/update",printer)
  }
}
