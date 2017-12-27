import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor ( private http: Http) { }

  ngOnInit() {
  }

  consultaCep( cep, formulario ){
    cep = cep.replace(/\D/g, '');

    if( cep != ""){
      let validaCep =  /^[0-9]{8}$/;

      if( validaCep.test(cep)){
        this.resetaDadosForm( formulario );
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map( dados => dados.json())
          .subscribe(dados => this.populaDadosForm( dados, formulario ));
      }
    }
  }

  populaDadosForm( dados, formulario ){

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })

  }

  resetaDadosForm( formulario ){
    formulario.form.patchValue({
      endereco: {
        cep: null,
        numero: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

  verificaValidTouched( campo ){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro( campo ){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  onSubmit(formulario){
    //console.log(this.usuario);
    console.log(formulario);
  }
}
