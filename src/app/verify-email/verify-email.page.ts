import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../model/authentication-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  email: String;
  password: String;

  constructor(private router: Router, public authService: AuthenticationService) {
    this.password = this.router.getCurrentNavigation().extras.state.ps;
    this.email = this.router.getCurrentNavigation().extras.state.mail; 
  }
  ngOnInit() {
  }

  logIn() {
    this.authService.signIn(this.email, this.password)
      .then((res) => {
        if(this.authService.userData.emailVerified) {
          this.router.navigate(['ma1']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}