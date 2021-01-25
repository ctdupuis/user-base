import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { usStates } from '../states';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    contactInfo: new FormGroup({
      phone: new FormControl(''),
      email: new FormControl('')
    }),
    employHistory: new FormGroup({
      employer: new FormControl(''),
      manager: new FormControl(''),
      currentJob: new FormControl(false),
      startDate: new FormControl(''),
      endDate: new FormControl('')
    })
  });

  statesArray = usStates
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.addUser(this.userForm.value);
  }

}
