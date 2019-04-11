import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
  <button class="add-btn">
    <ng-content></ng-content>
  </button>
  `
})
export class OtherComponent {

}
