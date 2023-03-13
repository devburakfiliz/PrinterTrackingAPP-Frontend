import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Toner } from '../models/toner';

@Injectable({
  providedIn: 'root'
})
export class TonerService {
  apiUrl = 'https://localhost:44354/api/';

  constructor(private httpClient:HttpClient) { }

  getToner():Observable<ListResponseModel<Toner>>{
    let newPath= this.apiUrl+"toner/getdetail"
    return this.httpClient.get<ListResponseModel<Toner>>(newPath)
  }
  add(toner:Toner):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"toner/add",toner)
  }
  update(toner:Toner):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"toner/update",toner)
  }
  
  
}
