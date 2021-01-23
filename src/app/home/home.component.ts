import { Component, OnInit } from '@angular/core';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private newUserService: NewUserService) { }

  ngOnInit(): void {
    this.newUserService.getUsers();
  }

}
