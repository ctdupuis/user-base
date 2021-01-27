import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  closeDetails = this.userService.closeDetails
}
