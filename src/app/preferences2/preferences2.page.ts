import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '../shared/models/preferences.model';

@Component({
  selector: 'app-preferences2',
  templateUrl: './preferences2.page.html',
  styleUrls: ['./preferences2.page.scss'],
})
export class Preferences2Page implements OnInit {

  preferences : Preferences;

  constructor(public router: Router) { }

  ngOnInit() {
    this.preferences = new Preferences();
    this.preferences.pet = this.preferences.instrument = this.preferences.smoker =  
    this.preferences.isOkWithInstrument = this.preferences.isOkWithPet = this.preferences.isOkWithSmoker = false;
  }

  next(){
    this.router.navigate(['preferences5'], { state: {preferences: this.preferences} });
  }
}
