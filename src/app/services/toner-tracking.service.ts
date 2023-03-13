import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { TonerTracking } from '../models/tonerTracking';

@Injectable({
  providedIn: 'root'
})
export class TonerTrackingService {
  apiUrl = 'https://localhost:44354/api/';

  constructor(private httpClient:HttpClient) { }

  getTonerTracking():Observable<ListResponseModel<TonerTracking>>{
    let newPath= this.apiUrl+"tonertracking/gettonerdetails"
    return this.httpClient.get<ListResponseModel<TonerTracking>>(newPath)
  }
  add(toner:TonerTracking):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"tonertracking/add",toner)
  }
  update(toner:TonerTracking):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"tonertracking/update",toner)
  }
  remove(toner:TonerTracking):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"TonerTracking/delete",toner)
  }

  deleted(id: number){   
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "TonerTracking/delete?id=" + id);
  }
}
