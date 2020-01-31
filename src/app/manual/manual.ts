import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: '<h1 class=primary> This is manual </h1>',
  styles: ['.primary{color:navy;font-size:90px;text-align:center}']
})
export class Manual implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}