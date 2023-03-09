import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Toner } from '../models/toner';

@Injectable({
  providedIn: 'root'
})
export class TonerService {
  apiUrl = 'https://localhost:44354/api/toner/';

  constructor(private httpClient:HttpClient) { }

  getToner():Observable<ListResponseModel<Toner>>{
    let newPath= this.apiUrl+"getdetail"
    return this.httpClient.get<ListResponseModel<Toner>>(newPath)
  }
  
}
