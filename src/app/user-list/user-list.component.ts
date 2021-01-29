import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[]
  searchText;

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users.map(u => {
        return {
          id: u.payload.doc.id,
          ...u.payload.doc.data() as {}
        } as User;
      })
    });
  }

  openDetails = this.userService.openDetails;
  closeDetails = this.userService.closeDetails;

}
