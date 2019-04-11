import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/services/parent.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle: boolean = false;

  doToggle() {
    this.toggle = !this.toggle;
    console.log("Toggle Value: " + this.toggle);
    return this.toggle;
  }

}
