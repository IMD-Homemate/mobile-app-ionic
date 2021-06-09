import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../model/authentication-service';
import { ProfileImageService, PersonService } from './../model/crud.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  url: any;
  firstname: string;
  lastname: string;

  constructor(private authService :AuthenticationService, private pImageService : ProfileImageService, private personService: PersonService) {
    
  }

  

  ngOnInit() {
    // this.pImageService.getProfileImage(this.authService.uuid).subscribe((data) => {
    //   this.url = data['filepath'];
    // });
    this.personService.getPerson(this.authService.uuid).subscribe((data) => {
      this.firstname = data['firstname'];
      this.lastname = data['lastname'];
    });
  }

  ionViewWillEnter(){
    this.pImageService.getProfileImage(this.authService.uuid).subscribe((data) => {
      this.url = data['filepath'];
    });
  }
  
}
