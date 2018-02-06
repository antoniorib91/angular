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
  ) {}

  googleLogin(){
    this.fireAuthService.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
    .then(
      (result) => {
        console.log( result.user.uid );
      }
    );
  }

  facebookLogin(){
    this.fireAuthService.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider() );
  }

  login( email: string, pass: string ){
    this.fireAuthService.auth.signInWithEmailAndPassword( email, pass )
    .then(
      (result) => {
        console.log( result.user );
      }
    )
  }
  
  logout(){
    this.fireAuthService.auth.signOut();
  }

 


}
