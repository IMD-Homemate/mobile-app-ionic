import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { Preferences } from '../shared/models/preferences.model';
import { Residence } from '../shared/models/residence.model';
import { ProfileImageService, PersonService, ProfileImage, PreferencesService, ResidenceService } from './../model/crud.service';

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
  residences: Residence[];
  residenceImages : ProfileImage[];

  constructor(private authService :AuthenticationService, private residenceService: ResidenceService,private pImageService : ProfileImageService, private personService: PersonService, private preferencesService: PreferencesService, private router: Router) { 
    this.preferences = this.images = this.persons = this.preferences = this.residences = this.residenceImages = [];
    this.myPreferences = new Preferences();
  }

  ngOnInit() {  
    this.pImageService.getResidenceImages().subscribe((data) => {
      this.residenceImages = data.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as ProfileImage
        };
      })
    });

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
    this.residenceService.getResidences().subscribe((res) => {
      this.residences = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Residence,
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
        if (this.myPreferences.type != pref.type) this.preferences.push(pref.uuid);
      });
    });

    
  }

  click(id){
    this.router.navigate(['/tabs/detailpage'], { state: {id: id} });
  }

  checkType(person){
    if (this.preferences.includes(person.id)) {
      return true
    }
  }

  getFirstResidenceImage(residenceId){
    return this.residenceImages.find(image => {
      if (residenceId == image.uuid){
        return image.filepath;
      } 
    }).filepath;
  }

  

  // next(id){
  //   this.router.navigate(['chat'], { state: {id: id} });
  // }
}
