import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user'
import { Mobile } from '../model/mobile'

@Injectable({
  providedIn: 'root'
})

export class MobileService {


  baseUrl = "http://localhost:3000/user";
  baseUrlMobile = "http://localhost:3000/product";

  constructor(private http: HttpClient) { }



  getUser() {
    return this.http.get<User[]>(this.baseUrl)
  }

  setUser(user: User) {
    return this.http.post(this.baseUrl, user)
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + "/" + id)
  }

  setMobile(mobile: Mobile) {
    return this.http.post(this.baseUrlMobile, mobile)
  }

  getMobile() {
    return this.http.get<Mobile[]>(this.baseUrlMobile)
  }

  updateMobile(mobile: Mobile) {
    return this.http.put(this.baseUrlMobile + '/' + mobile.id, mobile);
  }

  deleteMobile(id) {
    return this.http.delete(this.baseUrlMobile + "/" + id)
  }

  getMobileById(id: number) {
    return this.http.get<Mobile>(this.baseUrlMobile + "/" + id)
  }
}
