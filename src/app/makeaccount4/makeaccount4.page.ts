import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../model/authentication-service";
import { Router } from '@angular/router';
import { Person } from '../model/crud.service';
import { PersonService } from './../model/crud.service';
import { ImageService } from '../model/image.service';

@Component({
  selector: 'app-makeaccount4',
  templateUrl: './makeaccount4.page.html',
  styleUrls: ['./makeaccount4.page.scss'],
})
export class Makeaccount4Page implements OnInit {

  firstname: string;
  lastname: string;
  gender: string;
  public date: any;
  p : Person;
  imageEvent: any;
  photo:any;

  constructor(private router: Router, public authService: AuthenticationService, public crudService: PersonService, public imageService: ImageService) {
    this.firstname = this.router.getCurrentNavigation().extras.state.firstname;
    this.lastname = this.router.getCurrentNavigation().extras.state.lastname; 

  }

  ngOnInit() {
  }

  updateImageURL($event){
    this.imageEvent = $event;
  }

  onOpChange($event) {
    this.gender = $event.target.value;
    console.log(this.gender);
  }

  showdate($event){
    this.date = $event.target.value;
    console.log(this.date);
  }

  async next(){

    this.photo = await this.imageService.uploadFile(this.imageEvent);
    console.log(this.photo);
    this.p = {
      firstname: this.firstname,
      lastname: this.lastname,
      gender: this.gender,
      birthdate: this.date,
      photo: 'hello',
      uuid: this.authService.uuid
    }

    this.crudService.create(this.p)
      .then(() => {
        console.log('Person added succesfully');
        this.router.navigate(['/terms']);
      }).catch((err) => {
        console.log(err)
      });
  }

  check() : boolean{
    return this.gender == undefined || this.gender == '' || this.date == undefined;
  }

}
