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
  mensagemDeErro: String = "";
  statusErro = false;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
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

      if( this.autenticacaoService.login( nome , email ) ){
        this.statusErro = false;
        this.autenticacaoService.redirecionar();
      }else{
        this.mensagemDeErro = "usuário ou senha incorreto";
        this.statusErro = true;
      }
    
    }else{
      this.mensagemDeErro = "válide os campos informados";
      this.statusErro = true;
    }

  }

  resetar(){

    this.formulario.reset();
    this.statusErro = false;
    
  }


}
