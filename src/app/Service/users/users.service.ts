import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../Model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  GetUserList(url: string) {
    return this.http.get<Users[]>(url)
  }

  GetUserbyID(url: string) {
        return this.http.get<Users>(url)
  }

}
