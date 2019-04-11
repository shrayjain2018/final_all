import { Injectable } from '@angular/core';
import { Product } from '../model/product'
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:1000/api/product";
  baseUrlUser: string = "http://localhost:1000/api/user";

  getProduct() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  addProduct(product: Product) {
    return this.http.post(this.baseUrl, product);
  }

  editProduct(product: Product) {
    return this.http.put(this.baseUrl + '/' + product.prdname, product);
  }

  deleteProduct(prdname) {
    return this.http.delete(this.baseUrl + "/" + prdname)
  }
  getUser() {
    return this.http.get<User[]>(this.baseUrlUser)
  }

  setUser(user: User) {
    return this.http.post(this.baseUrlUser, user)
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrlUser + "/" + id)
  }
}