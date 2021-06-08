import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../model/authentication-service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }


  logOut() {
    this.authService.signOut()
      .then((res) => {
          this.router.navigate(['/']);          
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}