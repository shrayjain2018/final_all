import { Injectable } from '@angular/core';

// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class ServiceTodoService {

baseUrl=" http://localhost:3000/todo"
  constructor(private http:HttpClient) { }



getTodo()
{
return this.http.get<ToDo[]>(this.baseUrl)
}
deletetoJson(id){
  return this.http.delete(this.baseUrl+"/"+id)
}

addtoJson(user:ToDo){
 
   return this.http.post(this.baseUrl,user)
 
}
edittojson(user:ToDo){
  console.log(user.id)
  return this.http.put<ToDo[]>(this.baseUrl+"/"+user.id,user)
}

getUserById(id:number){
  return this.http.get<ToDo>(this.baseUrl+"/"+id)
}
}







