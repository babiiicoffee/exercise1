import { Component, OnInit } from '@angular/core';
import { DataModelList } from '../dataModelList';
import { DataManipulationService } from '../data-manipulation.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public id : number;
  public userList : Array<DataModelList> = [];

  constructor(private router : ActivatedRoute, private serveData: DataManipulationService,) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];

    this.serveData.viewData(id).subscribe(posts => {
      this.userList.push(posts)
      console.log(posts)
    })
  }



}
