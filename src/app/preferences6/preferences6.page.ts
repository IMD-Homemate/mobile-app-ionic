import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { PreferencesService, ProfileImageService, ResidenceService, ProfileImage } from '../model/crud.service';
import { ImageService } from '../model/image.service';
import { Preferences } from '../shared/models/preferences.model';
import { Residence } from '../shared/models/residence.model';

@Component({
  selector: 'app-preferences6',
  templateUrl: './preferences6.page.html',
  styleUrls: ['./preferences6.page.scss'],
})
export class Preferences6Page implements OnInit {

  preferences : Preferences;
  residence: Residence;
  images: ProfileImage[];

  constructor(public router : Router, public authService : AuthenticationService, public preferenceService : PreferencesService, private residenceService: ResidenceService, private pImageService : ProfileImageService, private imageService : ImageService) {
    this.preferences = this.router.getCurrentNavigation().extras.state.preferences;
    this.residence = new Residence();
   }

  ngOnInit() {
    this.pImageService.getResidenceImages().subscribe((data) => {
      this.images = data.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as ProfileImage
        };
      })
    });
  }

  next(){
    console.log(this.preferences);

    console.log(this.residence);

    this.preferences.uuid = this.authService.uuid;

    this.preferenceService.create(Object.assign({}, this.preferences))
      .then(() => {
        console.log('Preference added succesfully');
      }).catch((err) => {
        console.log(err)
      }
    );
    
    this.residenceService.create(Object.assign({}, this.residence))
      .then(() => {
        console.log('Residence added succesfully');
        this.router.navigate(['/tabs/homepage']);
      }).catch((err) => {
        console.log(err)
      }
    );
  }

}
