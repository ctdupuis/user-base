import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { MessagesService } from './messages.service';
import { User } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore, private messagesService: MessagesService) { }

  getUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }

  addUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('users')
      .add(user)
      .then(res => {}, err => reject(err))
      this.messagesService.addMessage("User succesfully created!")
    })
  }

  removeUser(userID: string) {
    return new Promise<any>((res, rej) => {
      this.firestore
      .collection('users')
      .doc(userID).delete()
      this.messagesService.addMessage("User successfully deleted!")
    })
  }

  openDetails(id: string): void {
    document.getElementById(`modal-${id}`).style.display = "block";
  }

  closeDetails(id: string, e: Event): void {
    document.getElementById(`modal-${id}`).style.display = "none";
    e.stopPropagation();
  }

}
