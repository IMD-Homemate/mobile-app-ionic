import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export class Person {
    $key: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: string;
    photo: string;
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