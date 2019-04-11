import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
  <button class='btn' (click)='submit()'>Submit</button>
  `,
  styles: []
})
export class EventComponent {

submit(){
  alert("Submitted Successfully!!");
}  

}
