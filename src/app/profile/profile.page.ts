import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { ProfileImageService, PersonService } from '../model/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  url: any;
  firstname: string;
  lastname: string;

  constructor(private router: Router,private authService :AuthenticationService, private pImageService : ProfileImageService, private personService: PersonService) {
    
  }

  

  ngOnInit() {
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

  logout() {
    this.authService.signOut()
      .then((res) => {
          this.router.navigate(['/login']);          
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  
}
