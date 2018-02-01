import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-lista-form-create',
  templateUrl: './lista-form-create.component.html',
  styleUrls: ['./lista-form-create.component.css']
})
export class ListaFormCreateComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private storage     : AngularFireStorage,
    private banco       : AngularFirestore,
    private modal       : BsModalRef
  ) { }

  ngOnInit() {
    this.initFormulario();
  }

  initFormulario(){
    this.formulario = this.formBuilder.group(
      {
        titulo: [ null, [ Validators.required ] ],
        imagem: null,
        descricao: [ null, [ Validators.required ] ]
      }
    );
  }

  formSubmit(){
    if( this.formulario.valid ){
      this.modal.hide;
    }else{
      this.verificaValidacoesForm( this.formulario );
    }

  }

  verificaValidacoesForm( formGroup: FormGroup ){
    Object.keys( formGroup.controls).forEach(
      campo => {

        const controle = formGroup.get(campo);
        controle.markAsDirty(); 
        
        if( controle instanceof FormGroup ){
          this.verificaValidacoesForm( controle );
        }
      } 
    );
  }
  
  verificaValidTouched(campo: string){
    return !this.formulario.get(campo).valid && 
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty );
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
