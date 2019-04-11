import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor() { }

  sendChild() {
    return "Hello From Child";
  }

}
