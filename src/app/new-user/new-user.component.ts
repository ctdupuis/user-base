import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { usStates } from '../states';
import { NewUserService } from '../new-user.service';

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
    })
  });

  statesArray = usStates
  constructor(private newUserService: NewUserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    // console.warn(this.userForm.value)
    this.newUserService.addUser(this.userForm.value);
  }

}
