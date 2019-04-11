import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  template: `
  
    <button (click)="valueChanged()">Click Me</button>
    
  `,
  styles: []
})
export class CustomEventComponent {

  @Output() valueChange=new EventEmitter();
  counter=0;

  valueChanged(){
    this.counter=this.counter+1;
    this.valueChange.emit(this.counter);
  }

}
