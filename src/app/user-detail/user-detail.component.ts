import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from '../shared/models/user.model';
import { UserService } from '../user.service';
import { usStates } from '../states';

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

  statesArray = usStates;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  removeUser(userID: string) {
    if (window.confirm("Are you sure? This action is irreversible.")) { this.userService.removeUser(userID) }
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
    const userID = this.user.id
    this.userService.updateUser(userID, this.editForm.value)
    this.toggleEdit()
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
      input.value = this.inputFormat(date)
    } else {
      input.disabled = false
      input.value = ""
    }
  }

  public dateFormat(date: string) {
    const splitDate = date.split("-")
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }

  private inputFormat(date: string) {
    const value = date.split("/")
    return `${value[2]}-${value[0]}-${value[1]}`
  }

  isEditing:boolean = false;

  toggleEdit() { this.isEditing = !this.isEditing }

  removeEmployer() {
    this.employHistory.removeAt(-1)
  }
}
