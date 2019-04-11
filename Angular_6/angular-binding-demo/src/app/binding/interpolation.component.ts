import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    {{myName | lowercase}}
  `,
  styles: []
})
export class InterpolationComponent {

myName="Shray Jain";

}
