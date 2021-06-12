import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../model/authentication-service';
import { Person, PersonService, ProfileImage, ProfileImageService, ResidenceService } from '../model/crud.service';
import { Residence } from '../shared/models/residence.model';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.page.html',
  styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {

  residence: any;
  images: ProfileImage[];
  temp: ProfileImage[];
  id:string;
  personImage: ProfileImage;
  person: Person;

  constructor(private route: ActivatedRoute,private personService: PersonService, private router: Router,public authService : AuthenticationService, private pImageService : ProfileImageService, private residenceService: ResidenceService) { 
    this.images = [];
    this.residence = [];
    this.personImage = new ProfileImage();
    this.person = new Person();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
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

    this.residenceService.getResidence(this.id).subscribe((data) => {
      this.residence = data;
    });

    this.personService.getPerson(this.id).subscribe((data) => {
      this.person = data as Person;
    });

    this.pImageService.getProfileImage(this.id).subscribe((data) => {
      this.personImage = data as ProfileImage;
    });
  }

  next(id){
    this.router.navigate(['chat'], { state: {id: id} });
  }

}
