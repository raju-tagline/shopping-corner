import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public login(email: string, password: string) {
    // console.log('password :>> ', password);
    // console.log('email :>> ', email);

    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        // console.log('value :>> ', value);
      })
      .catch((err) => {
        // console.log('Something went wrong:', err.message);
      });
  }

  public logout() {
    this.angularFireAuth.signOut();
  }
}
