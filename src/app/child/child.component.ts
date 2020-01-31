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

  @Input() parentData: string;
  @Input() enroll: string;
  @Output() childEvent = new EventEmitter;

  public cdata: string;

  onChange(value: string) {
      this.childEvent.emit(value);
      this.cdata = "";
  }
}
