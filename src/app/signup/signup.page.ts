import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public authService : AuthenticationService, public router: Router) { }

  ngOnInit() {
  }


  signUp(){
    this.authService.googleAuth();
    this.router.navigate(['/ma1']);
  }

}
