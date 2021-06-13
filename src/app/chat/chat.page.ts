import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../model/authentication-service';
import { ChatService } from '../model/chat.service';
import { Person, PersonService, ProfileImageService } from '../model/crud.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
 
  messages: Observable<any[]>;
  newMsg = '';
  receiver: any;
  receiverPerson: any;
 
  constructor(private pImageService: ProfileImageService,private chatService: ChatService, private router: Router, private authService :AuthenticationService, private personService: PersonService) {
    this.receiver = this.router.getCurrentNavigation().extras.state.id;
    this.receiverPerson = this.personService.getPerson(this.receiver);
  }

  
 
  ngOnInit() {
    this.messages = this.chatService.getChatMessages();    
  }
 
  check(message){
    return (message.to == this.receiver && message.from == this.authService.uuid) || (message.to == this.authService.uuid && message.from == this.receiver)
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg, this.receiver).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  getReceiver(){
    return this.receiverPerson.subscribe();
  }
 
  // signOut() {
  //   this.chatService.signOut().then(() => {
  //     this.router.navigateByUrl('/', { replaceUrl: true });
  //   });
  // }
 
}
