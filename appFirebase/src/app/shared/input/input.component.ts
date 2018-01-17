import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  } from '@angular/forms/src/model';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Input() messageErro: string;
  @Input() statusError: boolean;

 
  constructor() { }

  ngOnInit() {
  }

}
