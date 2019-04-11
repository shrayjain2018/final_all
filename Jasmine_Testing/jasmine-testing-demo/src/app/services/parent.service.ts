import { Injectable } from '@angular/core';
import { ChildService } from './child.service';

@Injectable({
  providedIn: 'root'
})

export class ParentService {

  constructor(private childSvc: ChildService) {

  }

  sendParent() {
    return this.childSvc.sendChild();
  }

}
