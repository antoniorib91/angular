import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  constructor( private modalRef: BsModalRef ) {}

  ngOnInit() { }

  
}
