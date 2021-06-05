import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(public authService: AuthenticationService, public router : Router) { }

  ngOnInit() {
  }

  reset(email){
    console.log(email.value);
    this.authService.passwordRecover(email.value);
    this.router.navigate(['/']);

  }

}
