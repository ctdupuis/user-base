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
    return new Promise<any>((res, rej) => {
      this.firestore
      .collection('users')
      .doc(userID).delete()
    })
  }

  openDetails(id: string): void {
    document.getElementById(`modal-${id}`).style.display = "block";
  }

  closeDetails(id: string, e: Event): void {
    document.getElementById(`modal-${id}`).style.display = "none";
    e.stopPropagation();
  }

  numberFormat = (value, previousValue) => {
    if (!value) return value;
    
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7) return `(${currentValue.slice(0, 3)} ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
  }

}
