import { Component, OnInit, Input, AfterContentInit, ContentChild } from '@angular/core';
import { FormGroup, FormControl, NgModel, FormControlName } from '@angular/forms';
import {  } from '@angular/forms/src/model';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {


  @Input() mensagemDeErro: string;
  @Input() statusError: boolean;


  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;
 
  input: any;

  constructor() {}

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model || this.control;
    
    if( this.input === undefined )
      throw new Error("Necessário informar o NgModel ou FormControlName para utilizar o input");
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
