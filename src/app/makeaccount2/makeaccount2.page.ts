import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-makeaccount2',
  templateUrl: './makeaccount2.page.html',
  styleUrls: ['./makeaccount2.page.scss'],
})
export class Makeaccount2Page implements OnInit {

  credentialsForm: FormGroup;
  passwordsEqual: Boolean = true;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.credentialsForm = this.formBuilder.group({
      email: [
        '', Validators.compose([
          Validators.pattern('^[A-Z0-9a-z\._%±]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$'),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.minLength(8),
          Validators.pattern('.*?[A-Z].*'),
          Validators.pattern('.*?[0-9#?!@$%^&*-].*'),
          Validators.required
        ])
      ],
      password2: [
        '', Validators.compose([
          Validators.minLength(8),
          Validators.pattern('.*?[A-Z].*'),
          Validators.pattern('.*?[0-9#?!@$%^&*-].*'),
          Validators.required
        ])
      ]
    });
  }

  ngOnInit() {
  }

  signUp(email, password1, password2){
    if (password1.value == password2.value){
      this.authService.registerUser(email.value, password1.value)
        .then((res) => {
          this.authService.sendVerificationMail()
          this.router.navigate(['verify-email'], { state: {mail: email.value, ps: password1.value} });
        }).catch((error) => {
          window.alert(error.message)
      })
    }else{
      this.passwordsEqual = false;
    }
  }
}
