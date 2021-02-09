import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { EmployHistory } from '../shared/models/employHistory.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  @Input() closeDetails;


  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  public dateFormat(date: string) {
    const splitDate = date.split("-")
    // debugger
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }

  isEditing: false;
}
