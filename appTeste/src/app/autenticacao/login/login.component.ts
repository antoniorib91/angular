import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // this.autenticacaoService.login( 'joao', '123456');
    this.criarFormLogin();
    
  }

  criarFormLogin(){
    this.formulario = this.formBuilder.group({
      nome: [ null, [ Validators.required ] ],
      senha: [ null, [ Validators.required ] ]
    })
  }

  onSubmit(){

    if( this.formulario.valid ){
      
      let nome  = this.formulario.get('nome').value; 
      let email = this.formulario.get('senha').value;
      
      this.autenticacaoService.login( nome , email );

    }else{
      alert("Form False");
    }
  }

  resetar(){}

}
