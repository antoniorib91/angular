import { Component, OnInit } from '@angular/core';
import { LoginModalService } from './../../auth/login/login.modal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private loginModalService: LoginModalService) { }

  ngOnInit() {
  }

  openLoginModal(){
    this.loginModalService.openModal();
  }

}
