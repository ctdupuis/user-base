import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    console.log("Hey I got some users here")
    return this.firestore.collection('users').snapshotChanges();
  }

  addUser(userdata: object) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('users')
      .add(userdata)
      .then(res => {}, err => reject(err))
    })
  }

}
