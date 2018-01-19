import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

import { Item } from '../../model/item.model';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-item-form-edit',
  templateUrl: './item-form-edit.component.html',
  styleUrls: ['./item-form-edit.component.css']
})
export class ItemFormEditComponent implements OnInit {

  item: Item;
  fileUrl: string;
  formulario: FormGroup;
  constructor(
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private firestorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.initFormulario();
    this.preencheItensForm();
  }

  initFormulario() {
    this.formulario = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        imagem: '',
        valor: ['', [Validators.required]],
        descricao: ['', [Validators.required]],
        links: this.formBuilder.array([])
      }
    );
  }

  preencheItensForm() {
    if (this.item != undefined || this.item != null) {

      this.formulario.get('nome').setValue(this.item.nome);
      this.formulario.get('imagem').setValue(this.item.imagem);
      this.formulario.get('valor').setValue(this.item.valor);
      this.formulario.get('descricao').setValue(this.item.descricao);
      this.formulario.setControl( 'links', this.toFormArray( this.item.links ) );

      this.fileUrl = this.item.imagem;

    } else {

      setTimeout(() => {
        this.preencheItensForm();
      }, 0);

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

  getDownloadImgRef() {

    let img = this.formulario.get('imagem');
    if (img.value != null && img.value != undefined) {

      let ref = this.firestorage.ref(`itens/${img.value.name}`);
      let task = ref.put(img.value);
      return task.downloadURL()

    } else {
      return null;
    }

  }

  toFormArray(data: string[]): FormArray {

    let retorno: FormArray = new FormArray([]);
    
    this.item.links.forEach(element => {
      let ctrl: FormControl = new FormControl(element);
      retorno.push( ctrl );
    });

    return retorno;

  }

  addLinkInput() {
    this.links.push(new FormControl());
  }

  removeLinkInput(index) {
    this.links.removeAt(index);
  }

  get links(): FormArray {
    return this.formulario.get('links') as FormArray;
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
