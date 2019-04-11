import { Component } from '@angular/core';

@Component({
  selector: '.myApp',
  
  template:
    `
  <h2>Shray Jain</h2>

  <app-another></app-another>

  <h2>Ng-content Example</h2>
  <app-other>Myyy Btn</app-other>

  <h2>Interpolation</h2>
  <app-interpolation></app-interpolation>

  <h2>Property Binding</h2>
  <app-property></app-property>

  <h2>Two Way Binding</h2>
  <app-two-way></app-two-way>

  <h2>Event Binding</h2>
  <app-event></app-event>

  <h2>Custom Event Binding</h2>
  <app-custom-event (valueChange)='displayCounter($event)'></app-custom-event>
  {{count}}

  <h2>Custom Property Binding</h2>
  <app-custom-property [myId]></app-custom-property>

  <h2>Directives</h2>
  <app-example></app-example>
  `,
  
  styles: [
    `
    h2
    {
      color:red;
    }`
  ]
})
export class AppComponent {
  title = 'New Angular App';

  //custom event binding
  count;
  displayCounter(count){
    this.count=count;
  }

}
