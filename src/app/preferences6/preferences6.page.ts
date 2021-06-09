import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { PreferencesService } from '../model/crud.service';
import { Preferences } from '../shared/models/preferences.model';

@Component({
  selector: 'app-preferences6',
  templateUrl: './preferences6.page.html',
  styleUrls: ['./preferences6.page.scss'],
})
export class Preferences6Page implements OnInit {

  preferences : Preferences;

  constructor(public router : Router, public authService : AuthenticationService, public preferenceService : PreferencesService) {
    this.preferences = this.router.getCurrentNavigation().extras.state.preferences;
   }

  ngOnInit() {
  }

  next(){
    console.log(this.preferences);

    this.preferences.uuid = this.authService.uuid;

    this.preferenceService.create(Object.assign({}, this.preferences))
      .then(() => {
        console.log('Preference added succesfully');
        this.router.navigate(['/homepage']);
      }).catch((err) => {
        console.log(err)
      });

    
  }

}
