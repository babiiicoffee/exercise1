import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-act5-parent',
  templateUrl: './act5-parent.component.html',
  styleUrls: ['./act5-parent.component.css']
})
export class Act5ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() declineInfos : any[] = []
  // variables that will hold the values from HTML
  public fname: string;
  public enroll: boolean = false;
  public genderChoice: string;
  // variables that will hold the value of variables from HTML
  public genderC: string;
  public fn: string;
  public en: string = "";

  public declinedInformation: any[] = []

  onSubmit() {
    this.fn = this.fname; // if unsay sulod ni fn, iyang ipasa kang fname
    if (this.enroll) { // check if enroll checkebox is true or false (checked or not)
      this.en = "Yes"
    } else {
      this.en = "No"
    }
    this.genderC = this.genderChoice;

    this.fname = ""; // empty the textfield for fullname
    this.enroll = false;
    this.genderChoice = ""
  }

  declinedInfo(value:String){
    console.log(value);
    this.declinedInformation.push(value);
  }


}


