import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';

@Component({
  selector: 'app-makeaccount1',
  templateUrl: './makeaccount1.page.html',
  styleUrls: ['./makeaccount1.page.scss'],
})
export class Makeaccount1Page implements OnInit {

  lastname: string;
  firstname: string;

  constructor(public router: Router, public authService: AuthenticationService) { 
    
  }

  ngOnInit() {

  }

  next(){
    this.router.navigate(['ma3'], { state: {firstname: this.firstname, lastname: this.lastname} });
  }

  check() : boolean{
    return this.firstname == undefined || this.lastname == undefined || this.firstname == '' || this.lastname == '';
  }

}
