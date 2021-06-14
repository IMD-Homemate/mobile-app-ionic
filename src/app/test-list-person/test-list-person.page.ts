import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../model/authentication-service';
import { ChatService, Message } from '../model/chat.service';
import { PersonService, ProfileImage, ProfileImageService } from '../model/crud.service';

export class Person {
  $key: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: string;
  photo: string;
}

@Component({
  selector: 'app-test-list-person',
  templateUrl: './test-list-person.page.html',
  styleUrls: ['./test-list-person.page.scss'],
})


export class TestListPersonPage implements OnInit {

  persons: Person[];
  tempPersons: any[];
  messages: Message[];
  ids: string[];
  images: ProfileImage[];

  constructor(private imageService:ProfileImageService, private crudService: PersonService, private router: Router, private chatService: ChatService, private authService: AuthenticationService) {
    this.tempPersons = [];
    this.persons = [];
    this.messages = [];
    this.ids = [];
    this.images = [];
   }
   

  ngOnInit() {
    this.imageService.getProfileImages().subscribe((data) => {
      this.images = data.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as ProfileImage
        };
      })
    });
    this.crudService.getPersons().subscribe((hello) => {
      this.chatService.getMessages().subscribe((res) => {
        this.messages = res.map((t) => {
          return {
            id: t.payload.doc.id,
            ...t.payload.doc.data() as Message
          };
        })
        this.ids = [];
        this.messages.forEach(message => {
          if (message.from == this.authService.uuid) this.ids.push(message.to);
          if (message.to == this.authService.uuid) this.ids.push(message.from);
        });
        this.tempPersons = hello.map((t) => {
          return {
            id: t.payload.doc.id,
            ...t.payload.doc.data() as Person
          };
        })
        console.log(this.persons);
        this.persons = [];
        this.tempPersons.forEach(person => {
          if (this.ids.includes(person.id)) this.persons.push(person);
        });
      });
      
    });
  }

  next(id){
    this.router.navigate(['chat'], { state: {id: id} });
  }

  todoList() {
    this.crudService.getPersons()
    .subscribe((data) => {
      console.log(data)
    })
  }

  test(){
    console.log(this.ids);
    console.log(this.persons);
    console.log(this.messages);
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id)
    }
  }  
}