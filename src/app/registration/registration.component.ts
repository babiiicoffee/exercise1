import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModelList } from '../dataModelList'
import { DataManipulationService } from '../data-manipulation.service'


import Swal from 'sweetalert2'
import { element } from 'protractor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public fname: string;
  public email: string;
  public phone: string;

  public id : number;
  public addDataBtn: boolean = true;
  public updateDataBtn: boolean = false;
  public edit: boolean = false;

  public apiURL = 'http://jsonplaceholder.typicode.com/users'

  public apiDataList: DataModelList[];
  public addData: DataModelList;

  constructor(private serveData: DataManipulationService, private http: HttpClient) { }



  ngOnInit() {
    this.serveData.getData().subscribe(Data => this.apiDataList = Data);
  }

  //  getData() {
  //   const data = this.http.get<ApiData[]>(this.apiURL).subscribe((Data: any[]) =>
  //     this.apiDataList = Data
  //   )
  //   return data;  
  // }

  onAddCreateData() {
    if (this.edit) {
      this.apiDataList.forEach(data => {
      if(data.id == this.id){
        data.name = this.fname,
        data.email = this.email,
        data.phone = this.phone
      }
        // console.log("edit = true : ", data)
      })
    } else {
      this.addData = {
        id : this.apiDataList[this.apiDataList.length -1].id +1,
        name: this.fname,
        email: this.email,
        phone: this.phone
      }
      // this.apiDataList.push(this.addData)

      this.serveData.createData(this.addData).subscribe(data => this.apiDataList.push(this.addData))
      Swal.fire({
        title: 'Successully added',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      console.log("on add function : ", this.apiDataList)
    }
  }

  updateData(data) {
    this.addDataBtn = false;
    this.updateDataBtn = true;
    this.edit = true;

    this.id = data.id;
    this.fname = data.name;
    this.email = data.email;
    this.phone = data.phone;
    console.log("on update in parent data from child passed to parent", data)
  }



}
