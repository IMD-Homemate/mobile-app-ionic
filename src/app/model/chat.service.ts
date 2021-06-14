import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication-service';
import { Person, ProfileImageService } from './crud.service';

export interface Message {
  createdAt: Date;
  id: string;
  from: string;
  to: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentUser: any;
  url:string;

  constructor(private pImageService: ProfileImageService,private afAuth: AngularFireAuth, private afs: AngularFirestore, private authService: AuthenticationService) {
    this.currentUser = this.authService.uuid;
  }

  addChatMessage(msg, to) {
    console.log(new Date().getTime());
    return this.afs.collection('messages').add({
      msg: msg,
      from: this.currentUser,
      createdAt: new Date().getTime(),
      to
    });
  }

  getMessages() {
    return this.afs.collection('messages').snapshotChanges();
  }
  
  


   
  getChatMessages() {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        // Get the real name for each user
        for (let m of messages) {          
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser === m.from;
        }        
        return messages
      })
    )
  }
   
  private getUsers() {
    return this.afs.collection('person').valueChanges({ uid: 'uid' }) as Observable<Person[]>;
  }
   
  private getUserForMsg(msgFromId, users: Person[]): string {    
    for (let usr of users) {
      if (usr.uuid == msgFromId) {
        return usr.firstname;
      }
    }
    return 'Deleted';
  }

}
