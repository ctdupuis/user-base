import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor() { }

  getUsers() {
    console.log("Hey I got some users here")
  }

  addUser(userdata) {
    console.log(userdata)
  }
}
