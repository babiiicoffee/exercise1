import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-act5-child',
  templateUrl: './act5-child.component.html',
  styleUrls: ['./act5-child.component.css']
})
export class Act5ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() fullname: string;
  @Input() enroll: string;
  @Input() gender: string;

  @Output() addNotification = new EventEmitter;
  @Output() declineEvent = new EventEmitter;
  // @Output() addApproved = new EventEmitter;

  public fname: string;

  public appFullname: string;
  public appEnroll: string;
  public appGender: string;

  public approvedInformation: any[] = []
  public declineInformation: any[] = []

  onApprove() {
    let personInformation = {
      name: this.fullname,
      status: this.enroll,
      gender: this.gender
    }

    this.addNotification.emit("Approved");
    this.approvedInformation.push(personInformation)
  }

  onDecline() {
    let personInformation = {
      name: this.fullname,
      status: this.enroll,
      gender: this.gender
    }
    this.declineInformation.push(personInformation);
    this.addNotification.emit("Disapproved");
    this.declineEvent.emit(this.declineInformation);
  }

}
