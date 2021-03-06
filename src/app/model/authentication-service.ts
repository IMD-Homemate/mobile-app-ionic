import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/app';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Login in with email/password
  signIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  registerUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email verification when new user register
  async sendVerificationMail() {
    return (await this.ngFireAuth.currentUser).sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email']);
    });
  }

  // Recover password
  async passwordRecover(passwordResetEmail) {
    try {
          await this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail);
          window.alert('Password reset email has been sent, please check your inbox.');
      } catch (error) {
          window.alert(error);
      }
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  get uuid(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.uid;
  }

  // Sign in with Gmail
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  //Not working yet
  facebookAuth() {
    return this.authLogin(new firebase.auth.FacebookAuthProvider());
  }

  // Auth providers
  async authLogin(provider) {
    try {
          const result = await this.ngFireAuth.signInWithPopup(provider);
          this.ngZone.run(() => {
              // this.router.navigate(['dashboard']);
          });
          this.setUserData(result.user);
      } catch (error) {
          window.alert(error);
      }
  }

  // Store user in localStorage
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign-out
  async signOut() {
    await this.ngFireAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['']);
  }

}
