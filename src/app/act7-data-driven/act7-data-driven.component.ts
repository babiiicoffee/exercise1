import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-act7-data-driven',
  templateUrl: './act7-data-driven.component.html',
  styleUrls: ['./act7-data-driven.component.css']
})
export class Act7DataDrivenComponent implements OnInit {
  // public firstname : string;
  // public lastname : string;
  // public email : string;
  // public street : string;
  // public city : string;
  // public state : string;
  // public zipcode : string;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
  }

  information = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipcode: new FormControl(),

    infos: this.fb.array([
      this.fb.control('')
    ])
  })

  reactive = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', Validators.required]
  })

  get info() {
    return this.information.get('infos') as FormArray;
  }

  addInfo(){
    this.info.push(this.fb.control(''))
  }

  onSubmit() {
    console.log()
  }

}
