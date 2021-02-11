import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from '../shared/models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  editForm = new FormGroup({
    phone: new FormControl('',
    [Validators.required]),
    email: new FormControl('',
    [Validators.required]),
    address: new FormGroup({
      street: new FormControl('',
      [Validators.required]),
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
  })
  employHistory = this.editForm.get('employHistory') as FormArray;

  @Input() user: User;
  @Input() closeDetails;


  constructor(public userService: UserService) { }

  ngOnInit(): void {
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
  
  onSubmit() {
    console.log(this.editForm.value)
  }

  public dateFormat(date: string) {
    const splitDate = date.split("-")
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }

  isEditing:boolean = false;
}
