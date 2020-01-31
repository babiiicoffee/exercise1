import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit { public fillUp = true;
  public edit = false;
  public firstname: string
  public lastname: string
  public email: string
  public street: string
  public city: string
  public state: string
  public zipcode: string

  reactiveForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    })
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmitData() {
    this.edit = true;
  }
}
