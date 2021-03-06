import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ArgumentOutOfRangeError } from 'rxjs';
import { Preferences } from '../shared/models/preferences.model';
import { Residence } from '../shared/models/residence.model';
import { AuthenticationService } from './authentication-service';

export class Person {
    $key?: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: string;
    uuid: string;
    score? : any;
}

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(
    private ngFirestore: AngularFirestore,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  create(person: Person) {
    const id = this.authService.uuid;
    return this.ngFirestore.collection('person').doc(id).set(person);
  }

  getPersons() {
    return this.ngFirestore.collection('person').snapshotChanges();
  }
  
  getPerson(id) {
    return this.ngFirestore.collection('person').doc(id).valueChanges();
  }

  // getMe(id) {
  //   return this.ngFirestore.collection('person').doc(id).valueChanges();
  // }

  update(id, person: Person) {
    this.ngFirestore.collection('person').doc(id).update(person)
      .then(() => {
        console.log('Person updated');
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('person/' + id).delete();
  }

}

@Injectable({
  providedIn: 'root'
})

export class PreferencesService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  create(preference: Preferences) {
    const id = this.authService.uuid;
    return this.ngFirestore.collection('preferences').doc(id).set(preference);
  }

  getPreferences() {
    return this.ngFirestore.collection('preferences').snapshotChanges();
  }
  
  getPreference(id) {
    return this.ngFirestore.collection('preferences').doc(id).valueChanges();
  }

  update(id, preference: Preferences) {
    this.ngFirestore.collection('preferences').doc(id).update(preference)
      .then(() => {
        this.router.navigate(['/preferences-edit']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('preferences/' + id).delete();
  }

}



export class ProfileImage {
  $key?: string;
  filepath: string;
  name: string;
  uuid: string;
}


@Injectable({
  providedIn: 'root'
})

export class ProfileImageService {

  constructor(
    private ngFirestore: AngularFirestore
  ) { }

  // create(preference: Preferences) {
  //   return this.ngFirestore.collection('preferences').add(preference);
  // }

  getProfileImages() {
    return this.ngFirestore.collection('profileImages').snapshotChanges();
  }

  getResidenceImages() {
    return this.ngFirestore.collection('residenceImages').snapshotChanges();
  }
  
  getProfileImage(id) {
    return this.ngFirestore.collection('profileImages').doc(id).valueChanges();
  }

 
  // update(id, person: Person) {
  //   this.ngFirestore.collection('preferences').doc(id).update(person)
  //     .then(() => {
  //       this.router.navigate(['/test-list-person']);
  //     }).catch(error => console.log(error));;
  // }

  deleteProfileImage(id: string) {
    this.ngFirestore.doc('profileImages/' + id).delete();
  }

  deleteResidenceImage(id: string) {
    this.ngFirestore.doc('residenceImages/' + id).delete();
  }

  

}








@Injectable({
  providedIn: 'root'
})

export class ResidenceService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  create(residence: Residence) {
    const id = this.authService.uuid;
    return this.ngFirestore.collection('residence').doc(id).set(residence);
  }

  getResidences() {
    return this.ngFirestore.collection('residence').snapshotChanges();
  }
  
  getResidence(id) {
    return this.ngFirestore.collection('residence').doc(id).valueChanges();
  }


  update(id, residence: Residence) {
    this.ngFirestore.collection('residence').doc(id).update(residence)
      .then(() => {
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('residence/' + id).delete();
  }

}



