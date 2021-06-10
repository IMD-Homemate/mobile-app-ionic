import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from './../model/crud.service';

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

  constructor(private crudService: PersonService, private router: Router) { }

  ngOnInit() {
    this.crudService.getPersons().subscribe((res) => {
      this.persons = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Person
        };
      })
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

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id)
    }
  }  
}