import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  terms : boolean;
  constructor(public router : Router) { }

  ngOnInit() {
  }

  acceptTerms(){
    console.log(this.terms);
    this.router.navigate(['/preferences1']);
    // this.router.navigate(['ma3'], { state: {firstname: this.firstname, lastname: this.lastname} });
  }

  update($event){
    this.terms = $event.detail.checked;
  }


}
