import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() PData: string;
  @Output() childEvent = new EventEmitter();

  onChange(value) {
    this.childEvent.emit(value);
  }
}
