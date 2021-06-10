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
  p:Person;
  imageEvent: any;
  photo: any;

  constructor(private router: Router, 
              private authService :AuthenticationService, 
              private pImageService : ProfileImageService, 
              private personService: PersonService,
              private imageService: ImageService,
              ) {
                
   }

  ngOnInit() {
    // this.pImageService.getProfileImage(this.authService.uuid).subscribe((data) => {
    //   this.url = data['filepath'];
    // });
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

  async updateImageURL($event){
    this.imageEvent = $event;
    this.pImageService.delete(this.authService.uuid);
    await this.imageService.uploadFile(this.imageEvent);
  }

  async save(){
    this.p = {
      firstname: this.firstname,
      lastname: this.lastname,
      gender: this.gender,
      birthdate: this.birthdate,
      uuid: this.authService.uuid
    }

    this.personService.update(this.authService.uuid, this.p);
    this.router.navigate(['/profile']);
  }
  
  ionViewWillEnter(){
    this.pImageService.getProfileImage(this.authService.uuid).subscribe((data) => {
      this.url = data['filepath'];
    });
  }
}