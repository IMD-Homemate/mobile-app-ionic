import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '../shared/models/preferences.model';

@Component({
  selector: 'app-preferences5',
  templateUrl: './preferences5.page.html',
  styleUrls: ['./preferences5.page.scss'],
})
export class Preferences5Page implements OnInit {

  interests = [[false,'Sports'], [false,'Gaming'], [false,'Hiking'],
              [false,'Music'], [false,'Movies'], [false,'Food'],
              [false,'Netflix'], [false,'Running'], [false,'Wine'],
              [false,'Vegan'], [false,'Nature']];

  tidy : string;
  healthy : string;
  education :string;
  agreements  :string;
  bathroom :string;

  important = [];
  temp = [];
  
  preferences : Preferences;
  constructor(public router: Router) { 
    this.preferences = this.router.getCurrentNavigation().extras.state.preferences;
  }



  ngOnInit() {
    
  }

  next(){
    if (this.tidy != undefined) this.important.push(this.tidy);
    if (this.healthy != undefined) this.important.push(this.healthy);
    if (this.education != undefined) this.important.push(this.education);
    if (this.agreements != undefined) this.important.push(this.agreements);
    if (this.bathroom != undefined) this.important.push(this.bathroom);
    
    this.interests.forEach(element => {
      if (element[0] == true) this.temp.push(element[1]);
    });

    this.preferences.interests = this.temp;
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

  
}
