import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { ProfileImageService, PersonService, ProfileImage } from './../model/crud.service';

export class Person {
  $key: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: string;
  id: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  images: ProfileImage[];
  url: any;
  persons: Person[];

  constructor(private authService :AuthenticationService, private pImageService : ProfileImageService, private personService: PersonService, private crudService: PersonService, private router: Router) { 
    
  }

  ngOnInit() {  
    this.crudService.getPersons().subscribe((res) => {
      this.persons = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Person,
        };
      })
    });
    this.pImageService.getProfileImages().subscribe((data) => {
      this.images = data.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as ProfileImage
        };
      })
    });
  }

  click(id){
    this.router.navigate(['detailpage'], { state: {id: id} });
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

}
