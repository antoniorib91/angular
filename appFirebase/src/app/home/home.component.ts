import { Component, OnInit } from '@angular/core';
import { LoginService } from './../auth/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { 
  }

}
