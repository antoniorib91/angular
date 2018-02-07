import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Lista } from '../../model/lista.model';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-lista-form-edit',
  templateUrl: './lista-form-edit.component.html',
  styleUrls: ['./lista-form-edit.component.css']
})
export class ListaFormEditComponent implements OnInit {

  private colecao: AngularFirestoreCollection<Lista>;
  lista: Lista;
  fileUrl: string;
  formulario: FormGroup;
  inscricao: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private banco: AngularFirestore,
    private modal: BsModalRef,
  ) { }

  ngOnInit() {
    this.initForm();
    this.initColecao();
    this.preencheListaForm();
  }
  
  ngOnDestroy() {
    if( this.inscricao != null || this.inscricao != undefined )
      this.inscricao.unsubscribe();
      
  }

  initColecao(){
    this.colecao = this.banco.collection<Lista>('lista');
  }

  initForm(){
    this.formulario = this.formBuilder.group(
      {
        titulo: [null, [ Validators.required ]],
        imagem: null,
        descricao: [null, [ Validators.required ]]
      }
    );
  }

  preencheListaForm() {
    if (this.lista != undefined || this.lista != null) {

      this.formulario.get('titulo').setValue(this.lista.titulo);
      this.formulario.get('imagem').setValue(this.lista.imagem);
      this.formulario.get('descricao').setValue(this.lista.descricao );
    
      this.fileUrl = this.lista.imagem;

    } else {

      setTimeout(() => {
        this.preencheListaForm();
      }, 0);

    }
  }

  formSubmit() {
    if (this.formulario.valid && this.formulario.dirty) {

      let formLista: Lista;

      if (this.verificaValidTouched('imagem')) {
        this.inscricao = this.getDownloadImgRef().subscribe(
          url => {
            this.formulario.get('imagem').setValue(url);
            formLista = this.formulario.value;
            this.update(formLista);
            this.modal.hide();
          });
      } else {
        formLista = this.formulario.value;
        this.update(formLista);
        this.modal.hide();

      }

    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  update( lista: Lista ){
    let doc: AngularFirestoreDocument<Lista>;
    doc = this.colecao.doc<Lista>(this.lista.id);
    doc.update(lista);
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

  getDownloadImgRef() {

    let img = this.formulario.get('imagem');
    if (img.value != null && img.value != undefined) {

      let ref = this.storage.ref(`listas/${img.value.name}`);
      ref.put(img.value);
      
      return ref.getDownloadURL();

    } else {
      let ref = this.storage.ref('listas/default.png');
      return ref.getDownloadURL();
    }

  }

  onImgInput(event) {

    if (event.target.files.length > 0) {
      let file: File = event.target.files[0];
      let reader = new FileReader();
      this.formulario.get('imagem').setValue(file);
      
      reader.onload = (event: any) => {
        this.fileUrl = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }

  }

  

}
