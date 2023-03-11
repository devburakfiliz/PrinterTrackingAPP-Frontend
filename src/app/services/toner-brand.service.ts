import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TonerBrand } from '../models/tonerBrand';

@Injectable({
  providedIn: 'root'
})
export class TonerBrandService {
  apiUrl ='https://localhost:44354/api/';

  constructor(private httpClient:HttpClient) {   }

  getTonerBrands():Observable<ListResponseModel<TonerBrand>> {
    let newPath = this.apiUrl+"TonerBrand/getall"
    return this.httpClient.get<ListResponseModel<TonerBrand>>(newPath)
  }
}
