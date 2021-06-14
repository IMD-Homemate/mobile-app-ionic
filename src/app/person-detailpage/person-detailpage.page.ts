import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { Person, PersonService, PreferencesService, ProfileImage, ProfileImageService, ResidenceService } from '../model/crud.service';
import { Preferences } from '../shared/models/preferences.model';
import { Residence } from '../shared/models/residence.model';

@Component({
  selector: 'app-person-detailpage',
  templateUrl: './person-detailpage.page.html',
  styleUrls: ['./person-detailpage.page.scss'],
})
export class PersonDetailpagePage implements OnInit {
  id:string;
  personImage: ProfileImage;
  person: Person;
  preferences: Preferences;

  constructor(private route: ActivatedRoute,private personService: PersonService, private router: Router,public authService : AuthenticationService, private pImageService : ProfileImageService, private preferencesService: PreferencesService) { 
    this.preferences = new Preferences();
    this.personImage = new ProfileImage();
    this.person = new Person();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.personService.getPerson(this.id).subscribe((data) => {
      this.person = data as Person;
    });

    this.pImageService.getProfileImage(this.id).subscribe((data) => {
      this.personImage = data as ProfileImage;
    });

    this.preferencesService.getPreference(this.id).subscribe((data) => {
      this.preferences = data as Preferences;
      console.log(this.preferences);
    });
  }

  back(){
    this.router.navigate(['/tabs/detailpage', { id: this.id }])
  }

}
