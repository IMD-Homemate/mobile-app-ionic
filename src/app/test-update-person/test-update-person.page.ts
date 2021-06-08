import { Component, OnInit } from '@angular/core';
import { PersonService } from './../model/crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-test-update-person',
  templateUrl: './test-update-person.page.html',
  styleUrls: ['./test-update-person.page.scss'],
})

export class TestUpdatePersonPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private crudService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getPerson(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        firstname: [data['firstname']],
        lastname: [data['lastname']],
        gender: [data['gender']],
        birthdate: [data['birthdate']],
        photo: [data['photo']],
      })
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      gender: [''],
      birthdate: [''],
      photo: ['']
    })    
  }

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value)
  }
}