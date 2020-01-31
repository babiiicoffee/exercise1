import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  public event = " Event Binding : ";
  public style = " Style Binding : ";
  public class = " Class Active : ";
  public property = "Property Binding : ";

// style
  isActive = true;
// class
  isTrue = false;
// property
  isDisabled = true;

  constructor() { }

  ngOnInit() {
  }
// event
  onClick() {
    alert("you clicked me!")
  }

}
