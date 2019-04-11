import { Component, OnInit, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styles: [
  `
  .myColor{
    color:red;
  }
  .border{
    border: 2px solid black;
    width: 100px;
    height: 100px;
  }
  .background{
    background-color:blue;
    color:white;
  }
  `]
})

export class ExampleComponent {

  constructor() { }
  
  switch=true;
  friendsList=["Shray","Ankit","Rishabh","Jitesh"];
  value=100;
  checkIf=1;

  onSwitch(){
    this.switch=!this.switch;
  }

  onLoad(){
    return this.switch;
  }

}
