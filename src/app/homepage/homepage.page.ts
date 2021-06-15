import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../model/authentication-service';
import { Preferences } from '../shared/models/preferences.model';
import { Residence } from '../shared/models/residence.model';
import { ProfileImageService, PersonService, ProfileImage, PreferencesService, ResidenceService} from './../model/crud.service';

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

  amount: Observable<any>;
  images: ProfileImage[];
  url: any;
  persons: Person[];
  preferences: string[];
  tempPref: Preferences[];
  myPreferences: Preferences;
  residences: Residence[];
  residenceImages : ProfileImage[];
  score : any;

  constructor(private authService :AuthenticationService, private residenceService: ResidenceService,private pImageService : ProfileImageService, private personService: PersonService, private preferencesService: PreferencesService, private router: Router) { 
    this.preferences = this.images = this.persons = this.preferences = this.residences = this.residenceImages = [];
    this.myPreferences = new Preferences();
    this.myPreferences.importentList = [];
    this.myPreferences.interests = [];
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
      this.preferences = [];
      this.score = [];
      this.tempPref.forEach(pref => {
        if (this.myPreferences.type != pref.type) {
          this.preferences.push(pref.uuid);


          let amount = 0;
          if (this.myPreferences.instrument == pref.instrument) amount++;
          if (this.myPreferences.pet == pref.pet) amount++;
          if (this.myPreferences.smoker == pref.smoker) amount++;
          if (this.myPreferences.isOkWithInstrument == pref.isOkWithInstrument) amount++;
          if (this.myPreferences.isOkWithPet == pref.isOkWithPet) amount++;
          if (this.myPreferences.isOkWithSmoker == pref.isOkWithSmoker) amount++;
          pref.importentList.forEach(item => {
            if (this.myPreferences.importentList.includes(item)) amount++;
          });
          pref.interests.forEach(item => {
            if (this.myPreferences.interests.includes(item)) amount++;
          });
          this.score.push([pref.uuid, amount]);
        }
      });
      console.log(this.score);




    });    
  }

  click(id){
    if (this.myPreferences.type.toString() == 'seeker') this.router.navigate(['/tabs/detailpage', { id: id }]);
    if (this.myPreferences.type.toString() == 'offerer') this.router.navigate(['/tabs/person-detailpage', {id: id}]);
    
  }

  getScore(id){
    let s;
    this.score.forEach(element => {
      console.log(element)
      if (element[0] == id){
        s = element[1]/10;
      } 
    });
    return s;
  }

  // getColor(id){
  //   if (this.getScore(id)< 0.5) return '#FF0000';
  //   if (0.5 < this.getScore(id) && this.getScore(id) < 0.75) return '#FFA500';
  //   if (this.getScore(id) > 0.75) return '#00FF00';
  // }

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


}
