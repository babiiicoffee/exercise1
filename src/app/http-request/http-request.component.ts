import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModelList } from '../dataModelList'
import { DataManipulationService } from '../data-manipulation.service'

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  public apiURL = 'http://jsonplaceholder.typicode.com/users'
  public apiDataList: DataModelList[];

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

  onSubmit(){
    console.log(this.apiDataList)
  }


}
