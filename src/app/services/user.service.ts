import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44354/api/user/';

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  changePassword(oldPassword: string, newPassword: string){
    let form = new FormData()
    form.append("oldPassword", oldPassword)
    form.append("newPassword", newPassword)
    return this.httpClient.post<ResponseModel>(this.apiUrl + "changePassword", form);
  }
}
