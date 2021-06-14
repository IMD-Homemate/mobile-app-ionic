import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../model/authentication-service';
import { Person, PersonService, ProfileImageService } from '../model/crud.service';
import { ImageService } from '../model/image.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  
  url: Observable<any>;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
  gender: string;
  person :Person;
  imageEvent: any;
  photo: any;

  constructor(private router: Router, 
              private authService :AuthenticationService, 
              private pImageService : ProfileImageService, 
              private personService: PersonService,
              private imageService: ImageService,
              ) {
       this.person = new Person();
   }

  ngOnInit() {
    this.personService.getPerson(this.authService.uuid).subscribe((data) => {
      this.person = data as Person;
    });
  }

  onOpChange($event) {
    this.person.gender = $event.target.value;
  }

  async updateImageURL($event){
    this.imageEvent = $event;
    this.pImageService.deleteProfileImage(this.authService.uuid);
    await this.imageService.uploadFile(this.imageEvent, 'profileImages');
  }

  async save(){
    this.personService.update(this.authService.uuid, this.person);
    this.router.navigate(['/profile']);
  }
  
  ionViewWillEnter(){
    this.pImageService.getProfileImage(this.authService.uuid).subscribe((data) => {
      this.url = data['filepath'];
    });
  }
}