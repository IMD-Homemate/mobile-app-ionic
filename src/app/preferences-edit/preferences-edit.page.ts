import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../model/authentication-service';
import { PersonService, PreferencesService } from '../model/crud.service';
import { Preferences } from '../shared/models/preferences.model';

@Component({
  selector: 'app-preferences-edit',
  templateUrl: './preferences-edit.page.html',
  styleUrls: ['./preferences-edit.page.scss'],
})
export class PreferencesEditPage implements OnInit {

  firstname: string;
  lastname:string;
  preferences: any;

  constructor(private personService: PersonService, private authService: AuthenticationService, private preferenceService: PreferencesService) { }

  ngOnInit() {
    this.personService.getPerson(this.authService.uuid).subscribe((data) => {
      this.firstname = data['firstname'];
      this.lastname = data['lastname'];
    });
    this.preferenceService.getPerson(this.authService.uuid).subscribe((data) => {
      this.preferences = data;
      console.log(this.preferences);
    });
  }

}
