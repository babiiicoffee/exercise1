import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pdata: string;
  public cdata: string;

  public reply: string;

  onSend(value: string) {
    this.reply = value;
    this.pdata = "";
  }
}
