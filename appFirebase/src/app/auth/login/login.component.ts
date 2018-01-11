import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Item } from './../../model/item.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  


  constructor(
    // private loginService: LoginService,
    private modalRef: BsModalRef
  ) { 
    
  }


  ngOnInit() {
    
  }

  // googleLogin(){
  //   this.loginService.googleLogin();
  // }

  // login(){
    
  // }
}
