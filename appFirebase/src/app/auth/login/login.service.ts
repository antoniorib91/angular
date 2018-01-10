import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {

  constructor(
    private fireAuthService: AngularFireAuth
  ) { }

  googleLogin(){
    this.fireAuthService.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
  }
  
  logout(){
    this.fireAuthService.auth.signOut();
  }
}
