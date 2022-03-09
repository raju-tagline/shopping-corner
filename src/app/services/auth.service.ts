import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public login(email: string, password: string): any {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    this.angularFireAuth.signOut();
  }
}
