import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  template: `
  <input [(ngModel)]="username">

<p>Hello {{username}}!</p>
  `,
  styles: []
})

export class TwoWayComponent {


}
