import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { Person, PersonService, PreferencesService, ResidenceService } from '../model/crud.service';
import { Preferences } from '../shared/models/preferences.model';
import { Residence } from '../shared/models/residence.model';

@Component({
  selector: 'app-preferences-edit',
  templateUrl: './preferences-edit.page.html',
  styleUrls: ['./preferences-edit.page.scss'],
})
export class PreferencesEditPage implements OnInit {

  lastname:string;
  preferences: Preferences;
  person :Person;
  residence: Residence;
  tidy : string;
  healthy : string;
  education :string;
  agreements  :string;
  bathroom :string;
  important = [];
  temp = [];

  constructor(private router: Router, private personService: PersonService, private authService: AuthenticationService, private preferenceService: PreferencesService, private residenceService: ResidenceService) { 
    this.preferences = new Preferences();
    this.residence = new Residence();
  }

  ngOnInit() {
    this.preferenceService.getPreference(this.authService.uuid).subscribe((data) => {
      this.preferences = data as Preferences;
      console.log(this.preferences);
    });
    this.residenceService.getResidence(this.authService.uuid).subscribe((data) => {
      this.residence = data as Residence;
      console.log(this.residence);
    });
    this.personService.getPerson(this.authService.uuid).subscribe((data) => {
      this.person = data as Person;
    });
  }

  next(){
    console.log(this.preferences);

    console.log(this.residence);

    this.preferences.uuid = this.authService.uuid;

    if (this.tidy != undefined) this.important.push(this.tidy);
    if (this.healthy != undefined) this.important.push(this.healthy);
    if (this.education != undefined) this.important.push(this.education);
    if (this.agreements != undefined) this.important.push(this.agreements);
    if (this.bathroom != undefined) this.important.push(this.bathroom);
  
    this.preferences.importentList = this.important;

    this.router.navigate(['preferences6'], { state: {preferences: this.preferences} });
  }

  print(interest){
    console.log(interest.value);
  }

  update(n, value){
    switch (n) {
      case 0:
        value ? this.tidy = 'A tidy house' : undefined;
      break;
      case 1:
        value ? this.healthy = 'Healthy food' : undefined;
      break;
      case 2:
        value ? this.education = 'Higher education' : undefined;
      break;
      case 3:
        value ? this.agreements = 'Making clear agreements' : undefined;
      break;
      case 4:
        value ? this.bathroom = 'Private bathroom' : undefined;
      break;
    }
  }

  async save(){
    this.preferenceService.update(this.authService.uuid, this.preferences);
    this.residenceService.update(this.authService.uuid, this.residence);
    this.router.navigate(['/profile']);
  }
  

}
