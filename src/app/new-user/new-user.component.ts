import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
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
      zip: new FormControl('',
      [Validators.required, Validators.maxLength(5)])
    }),
    employHistory: new FormArray([
      new FormGroup({
        employer: new FormControl('', [Validators.required]),
        manager: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required])
      })
    ])
  });
  employHistory = this.userForm.get('employHistory') as FormArray;

  submitted = false;
  statesArray = usStates;
  user: User;
  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.addUser(this.userForm.value);
    this.userForm.reset();
  }

  private dateFormat(date: string) {
    const value = date.split("/")
    return `${value[2]}-${value[0]}-${value[1]}`
  }

  checkboxEvent(e: Event) {
    const input = document.getElementById('endDate') as HTMLInputElement
    const target = e.target as HTMLInputElement
    const date = new Date().toLocaleDateString("en", {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    })
    if (target.checked) {
      input.disabled = true
      input.value = this.dateFormat(date)
    } else {
      input.disabled = false
      input.value = ""
    }
  }

  addEmployer() {
    const employer = new FormGroup({
      employer: new FormControl('', [Validators.required]),
      manager: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    })

    this.employHistory.push(employer)
  }

  removeEmployer() {
    this.employHistory.removeAt(-1)
  }

}
