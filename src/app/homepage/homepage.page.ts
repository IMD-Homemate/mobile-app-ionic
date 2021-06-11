import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { Preferences } from '../shared/models/preferences.model';
import { ProfileImageService, PersonService, ProfileImage, PreferencesService } from './../model/crud.service';

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
  preferences: string[];
  tempPref: Preferences[];
  myPreferences: Preferences;

  constructor(private authService :AuthenticationService, private pImageService : ProfileImageService, private personService: PersonService, private preferencesService: PreferencesService, private router: Router) { 
    this.preferences = [];
  }

  ngOnInit() {  
    this.preferencesService.getPreference(this.authService.uuid).subscribe((data) => {
      this.myPreferences = data as Preferences;
    });
    this.personService.getPersons().subscribe((res) => {
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
    this.preferencesService.getPreferences().subscribe((data) => {
      this.tempPref = data.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Preferences
        };
      })
      this.tempPref.forEach(pref => {
        console.log(this.myPreferences.type, pref.type);
        if (this.myPreferences.type != pref.type) this.preferences.push(pref.uuid);
      });
    });

  }

  click(id){
    this.router.navigate(['tabs/detailpage'], { state: {id: id} });
  }

  checkType(person){
    if (this.preferences.includes(person.id)) {
      return true
    }
  }

  // next(id){
  //   this.router.navigate(['chat'], { state: {id: id} });
  // }
}
