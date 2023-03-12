import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
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
}
