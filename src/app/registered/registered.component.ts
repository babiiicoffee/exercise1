import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModelList } from '../dataModelList'
import { DataManipulationService } from '../data-manipulation.service'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})

export class RegisteredComponent implements OnInit {

  public statusCode: number;

  public apiURL = 'http://jsonplaceholder.typicode.com/users'
  public apiDataList: DataModelList[];

  @Input() parentDataList: DataModelList[];
  @Output() toEditData = new EventEmitter();

  constructor(private serveData: DataManipulationService, private http: HttpClient) { }

  ngOnInit() {
  }

  edit(data : DataModelList) {
      this.toEditData.emit(data)
  }

  // onSubmit() {
  //   console.log(this.apiDataList)
  // }

  // onDelete(dataID: number) {
  //   this.serveData.deleteData(dataID)
  //   .subscribe(data => {
  //     this.parentDataList.splice(dataID-1,1);
  //     console.log("on delete function : " , this.parentDataList)
  //   });
  //       // console.log('onDelete : ' +  successCode)
  //   // .subscribe(successCode => {
  //   //     this.statusCode = 204;
  //   //     this.serveData.getData(Data => this.apiDataList = Data);
  //   //     console.log('onDelete : ' +  successCode)
  //       // console.log('onDelete : ' +  this.serveData.getData())
  //     }
  
  // onDelete(dataID : string){
  //   this.serveData.deleteData(dataID)
  //     .subscribe(successCode => {
  //       this.statusCode = 204;
  //       this.serveData.getData();
  //       console.log('ondelete : ',successCode);
  //     },
  //     errorCode => this.statusCode = errorCode);
  // }

 

  onDelete(dataID : any){
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: `Are you sure you want to delete this data ?`,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
    reverseButtons: false
  }).then((result) => {
    if (result.value) {
      
    this.serveData.deleteData(dataID)
    .subscribe(data => {
      this.parentDataList.splice(this.parentDataList.indexOf(dataID),1);
      // console.log(this.parentDataList.indexOf(dataID));
      // console.log(dataID)
    });
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your data has been deleted.',
        'success'
      )
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your data is safe :)',
        'error'
      )
    }
  })
  }

  onView(){

  }
}


