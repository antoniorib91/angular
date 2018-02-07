import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../model/user.model';
import { LoginComponent } from './login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Injectable()
export class LoginService {

  private autenticacao = false;


  errorMessageEmmiter = new EventEmitter<string>();

  constructor(
    private fireAuthService: AngularFireAuth,
    private router: Router
  ) { }

  getStatusAutenticacao(): boolean {
    return this.autenticacao;
  }



  googleLogin() {
    this.fireAuthService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        (result) => {
          let user = result.user;
          this.sessionSetUser( user );
          this.autenticacao = true;
        }
      ).catch(
      err => {
        this.errorMessageEmmiter.next(err.message);
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
        (res) => {
          let user = res.user;
          this.sessionSetUser( user );
          this.autenticacao = true;
        }
      )
      .catch(
      err => {
        this.errorMessageEmmiter.next(err.message);
      }
      )
  }

  logout() {
    this.fireAuthService.auth.signOut();

  }

  sessionSetUser(user) {
    sessionStorage.setItem('user',
      `{ 
        "id"     : "${user.uid}",
        "nome"   : "${user.displayName}",
        "email"  : "${user.email}",
        "imagem" : "${user.photoURL}"
      }`
    );

  }




}
