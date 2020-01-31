import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-act7-template-driven',
  templateUrl: './act7-template-driven.component.html',
  styleUrls: ['./act7-template-driven.component.css']
})
export class Act7TemplateDrivenComponent implements OnInit {

  public fname: string;
  public emailAdd : string;
  public genderc : string;

  public fullname : string;
  public eAdd : string;
  public gender : string;

  public show : boolean = false;

  public information : any[] = []

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    let personInfo = {
      fullname : this.fname,
      eAdd : this.emailAdd,
      gender : this.genderc
    }
    this.information.push(personInfo)
    console.log(personInfo)
  }

  onShow(){
    this.show = true;
  }

  edit(){
    this.show = false;
  }

}
