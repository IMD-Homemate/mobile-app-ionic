import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { Person, PersonService, ProfileImageService } from '../model/crud.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  
  url: any;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
  gender: string;
  p:Person;

  constructor(private router: Router, private authService :AuthenticationService, private pImageService : ProfileImageService, private personService: PersonService) {
   }

  ngOnInit() {
    this.pImageService.getProfileImage(this.authService.uuid).subscribe((data) => {
      this.url = data['filepath'];
    });
    this.personService.getPerson(this.authService.uuid).subscribe((data) => {
      this.firstname = data['firstname'];
      this.lastname = data['lastname'];
      this.birthdate = data['birthdate'];
      this.gender = data['gender'];
    });
  }

  onOpChange($event) {
    this.gender = $event.target.value;
  }

  save(){
    this.p = {
      firstname: this.firstname,
      lastname: this.lastname,
      gender: this.gender,
      birthdate: this.birthdate,
      photo: 'hello',
      uuid: this.authService.uuid
    }

    this.personService.update(this.authService.uuid, this.p);
    this.router.navigate(['/profile']);
  }
  
}