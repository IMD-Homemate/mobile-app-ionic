import { Component, OnInit } from '@angular/core';

import { PersonService } from './../model/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-person',
  templateUrl: './test-person.page.html',
  styleUrls: ['./test-person.page.scss'],
})
export class TestPersonPage implements OnInit {

  todoForm: FormGroup;

  constructor(
    private crudService: PersonService,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      gender: [''],
      birthdate: [''],
      photo: ['']
    })
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.crudService.create(this.todoForm.value)
      .then(() => {
        this.todoForm.reset();
        this.router.navigate(['/test-list-person']);
      }).catch((err) => {
        console.log(err)
      });
    }
  }

}