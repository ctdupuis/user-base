import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { usStates } from '../states';
import { UserService } from '../user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('',
    [Validators.required]),
    lastName: new FormControl('',
    [Validators.required]),
    age: new FormControl('',
    [Validators.required]),
    phone: new FormControl('',
    [Validators.required]),
    email: new FormControl('',
    [Validators.required]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    employHistory: new FormGroup({
      employer: new FormControl(''),
      manager: new FormControl(''),
      currentJob: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl('')
    })
  });

  submitted = false;
  statesArray = usStates;
  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.addUser(this.userForm.value);
    this.userForm.reset();
  }

}
