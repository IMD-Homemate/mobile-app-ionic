import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { Preferences } from '../shared/models/preferences.model';

export class Person {
    $key?: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: string;
    photo: string;
    uuid: string;
}

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(person: Person) {
    return this.ngFirestore.collection('person').add(person);
  }

  getPersons() {
    return this.ngFirestore.collection('person').snapshotChanges();
  }
  
  getPerson(id) {
    return this.ngFirestore.collection('person').doc(id).valueChanges();
  }

  update(id, person: Person) {
    this.ngFirestore.collection('person').doc(id).update(person)
      .then(() => {
        this.router.navigate(['/test-list-person']);
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
    private router: Router
  ) { }

  create(preference: Preferences) {
    return this.ngFirestore.collection('preferences').add(preference);
  }

  getPersons() {
    return this.ngFirestore.collection('preferences').snapshotChanges();
  }
  
  getPerson(id) {
    return this.ngFirestore.collection('preferences').doc(id).valueChanges();
  }

  update(id, person: Person) {
    this.ngFirestore.collection('preferences').doc(id).update(person)
      .then(() => {
        this.router.navigate(['/test-list-person']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('preferences/' + id).delete();
  }

}