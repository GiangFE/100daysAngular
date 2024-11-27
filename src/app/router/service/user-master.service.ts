import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../user-management/user-management';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http: HttpClient) { }
  apiurl = 'https://randomuser.me/api/';


  getAllUser():Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiurl);
  }

  getUserbyId(UserId: any) {
    return this.http.get(this.apiurl + '/' + UserId);
  }

  deleteUser(UserId: any) {
    return this.http.delete(this.apiurl + '/' + UserId);
  }


  updateUser(inputdata: any) {
    return this.http.post(this.apiurl + '/ActivateUser', inputdata);
  }

  getAllRoles(){
    return this.http.get("https://localhost:44308/User/GetAllRole");
  }


}
