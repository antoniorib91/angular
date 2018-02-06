import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private modalRef: BsModalRef) { }

  ngOnInit() { 
    this.initForm();
  }

  initForm() {
    this.formulario = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        pass: [null, [Validators.required]]
      }
    );
  }

  login() {
    const ctrl = this.formulario.controls;
    let email = ctrl['email'].value;
    let pass = ctrl['pass'].value;
    //if (this.validaForm()) {
      this.loginService.login(email, pass);
    //}
  }

  googleLogin() {
    //if (this.validaForm()) {
      this.loginService.googleLogin();
    //}
  }

  facebookLogin() {
    //if (this.validaForm()) {
      this.loginService.facebookLogin();
    //}
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



}
