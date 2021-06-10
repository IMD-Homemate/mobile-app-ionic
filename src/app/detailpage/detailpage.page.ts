import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { ProfileImage, ProfileImageService } from '../model/crud.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.page.html',
  styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {


  images: ProfileImage[];
  temp: ProfileImage[];
  id:string;

  constructor(private router: Router,public authService : AuthenticationService, private pImageService : ProfileImageService) { 
    this.images = [];
    this.id = this.router.getCurrentNavigation().extras.state.id;
  }

  ngOnInit() {
    this.pImageService.getResidenceImages().subscribe((data) => {
      this.temp = data.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as ProfileImage
        };
      })
      this.temp.forEach(element => {
        if (this.id == element.uuid) this.images.push(element);
      });
    });
  }

}
