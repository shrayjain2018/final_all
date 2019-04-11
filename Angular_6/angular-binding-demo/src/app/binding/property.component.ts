import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
  <input type="button" [value]="btnText">

  <div [ngStyle]="{'color':'green'}">Green Color</div>
  <div [ngClass]={myText:onRefresh()}>This is text</div>
  

  `,
  styles: [
    `
    .myText{
      color:blue;
    }
    `
  ]
})
export class PropertyComponent {

  btnText: string = 'Add an Item';
  displayText='hide-class';

  onRefresh(){
    return true;
  }

}
