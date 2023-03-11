import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TonerModel } from '../models/tonerModel';

@Injectable({
  providedIn: 'root'
})
export class TonerModelService {
  apiUrl ='https://localhost:44354/api/';


  constructor(private httpClient:HttpClient) { }
  getTonerBrands():Observable<ListResponseModel<TonerModel>> {
    let newPath = this.apiUrl+"TonerModel/getall"
    return this.httpClient.get<ListResponseModel<TonerModel>>(newPath)
  }
}
