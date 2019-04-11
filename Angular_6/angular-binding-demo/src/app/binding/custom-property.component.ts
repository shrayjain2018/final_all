import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-property',
  template: `
    {{myId}}
  `,
  styles: []
})
export class CustomPropertyComponent {

  @Input() myId:number=173595;

}
