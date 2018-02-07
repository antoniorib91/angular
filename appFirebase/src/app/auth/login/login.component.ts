import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  formulario: FormGroup;
  inscricao: Subscription;
  autenticado: boolean;
  messageError: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private modalRef: BsModalRef) { }

  ngOnInit() { 
    this.initForm();
    this.atualizaMessageError();
  }

  ngOnDestroy(){
    if( this.inscricao != undefined )
      this.inscricao.unsubscribe();
  }

  initForm() {
    this.formulario = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        pass: [null, [Validators.required]]
      }
    );
  }

  atualizaMessageError(){
    this.inscricao = this.loginService.errorMessageEmmiter.subscribe(
      msg => {
        this.messageError = msg;
      }
    )
  }


  login() {
    const ctrl  = this.formulario.controls;
    const email = ctrl['email'].value;
    const pass  = ctrl['pass'].value;
    
    if ( this.validaForm() ) {
      this.loginService.login(email, pass);   
    }
    
  }

  googleLogin() {
    this.loginService.googleLogin();
  }

  facebookLogin() {
    this.loginService.facebookLogin();
  }

  validaForm() {
    if (this.formulario.valid) {
      return true
    }
    this.verificaValidacoesForm(this.formulario);
    return false;
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(
      campo => {

        const controle = formGroup.get(campo);
        controle.markAsDirty();

        if (controle instanceof FormGroup) {
          this.verificaValidacoesForm(controle);
        }
      }
    );
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }



}
