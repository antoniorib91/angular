import { LoginComponent } from './login.component';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Injectable()
export class LoginService {

  modalRef: BsModalRef;
  statusUser: boolean = false;

  constructor(
    private fireAuthService: AngularFireAuth,
    private bsModalService: BsModalService
  ) {
    console.log('Iniciou Login Service');
  }

  googleLogin(){
    this.fireAuthService.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
  }

  facebookLogin(){
    this.fireAuthService.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider() );
  }

  login(){
    
  }
  
  logout(){
    this.fireAuthService.auth.signOut();
  }

  openModal(){
    this.modalRef = this.bsModalService.show( LoginComponent,
      Object.assign( {backdrop: 'static'}, { class: 'modal-sm'} )  );
  }

}
