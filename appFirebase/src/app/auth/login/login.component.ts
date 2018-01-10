import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

import { Item } from './../../model/item.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  


  constructor(
    private loginService: LoginService
  ) { 
    
  }


  ngOnInit() {
    
  }

  googleLogin(){
    this.loginService.googleLogin();
  }

  login(){
    
  }
}
