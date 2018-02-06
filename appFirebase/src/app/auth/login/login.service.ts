import { User } from './../../model/user.model';
import { LoginComponent } from './login.component';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Injectable()
export class LoginService {

  statusUser: boolean = false;

  constructor(
    private fireAuthService: AngularFireAuth
  ) { }

  googleLogin() {
    this.fireAuthService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        (result) => {
          let user = result.user;

          sessionStorage.setItem('user',
            `{ 
                id:     "${user.uid}",
                nome:   "${user.displayName}",
                email:  "${user.email}",
                imagem: "${user.photoURL}"}`
          );
        }
      );
  }

  facebookLogin() {
    this.fireAuthService.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(
        (result) => {
          console.log(result);
        }
      );
  }

  login(email: string, pass: string) {
    this.fireAuthService.auth.signInWithEmailAndPassword(email, pass)
      .then(
        (result) => {
          let user = result.user;

          sessionStorage.setItem('user',
            `{ 
                id:     "${user.uid}",
                nome:   "${user.displayName}",
                email:  "${user.email}",
                imagem: "${user.photoURL}"}`
          );
        }
      )
  }

  logout() {
    this.fireAuthService.auth.signOut();
  }




}
