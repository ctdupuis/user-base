import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { User } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }

  addUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('users')
      .add(user)
      .then(res => {}, err => reject(err))
    })
  }

  removeUser(userID: string) {
    this.firestore.collection('users').doc(userID).delete();
  }

  openDetails(id: string): void {
    document.getElementById(`modal-${id}`).style.display = "block";
  }

  closeDetails(id: string, e: Event): void {
    document.getElementById(`modal-${id}`).style.display = "none";
    e.stopPropagation();
  }

}
