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
  temp: ProfileImage[];

  constructor(public router : Router, public authService : AuthenticationService, public preferenceService : PreferencesService, private residenceService: ResidenceService, private pImageService : ProfileImageService, private imageService : ImageService) {
    this.preferences = this.router.getCurrentNavigation().extras.state.preferences;
    this.residence = new Residence();
    this.images = [];
   }

  ngOnInit() {
    this.pImageService.getResidenceImages().subscribe((data) => {
      this.temp = data.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as ProfileImage
        };
      })
      this.images = [];
      this.temp.forEach(image => {
        if (image.uuid == this.authService.uuid) this.images.push(image);
      });
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
    if (this.preferences.type.toString() == 'offerer'){
      this.residenceService.create(Object.assign({}, this.residence))
      .then(() => {
        console.log('Residence added succesfully');
        
      }).catch((err) => {
        console.log(err)
      }
    );
    }
    this.router.navigate(['/tabs/homepage']);

  }

  test(){
    console.log(this.images);
  }

}
