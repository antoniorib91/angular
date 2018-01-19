import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item-form-edit',
  templateUrl: './item-form-edit.component.html',
  styleUrls: ['./item-form-edit.component.css']
})
export class ItemFormEditComponent implements OnInit {

  item: Item;
  itemCollection: AngularFirestoreCollection<Item>;
  fileUrl: string;
  formulario: FormGroup;
  inscricao: Subscription;
  constructor(
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private firestorage: AngularFireStorage,
    private banco: AngularFirestore
  ) {
    this.itemCollection = this.banco.collection<Item>('item');
  }

  ngOnInit() {
    this.initFormulario();
    this.preencheItensForm();
  }

  ngOnDestroy() {
    if( this.inscricao != null || this.inscricao != undefined )
      this.inscricao.unsubscribe();
      
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
      retorno.push(ctrl);
    });

    return retorno;

  }

  update(item: Item) {
    let doc: AngularFirestoreDocument<Item>;
    doc = this.itemCollection.doc(this.item.id);
    doc.update(item);
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

  formSubmit() {
    if (this.formulario.valid && this.formulario.dirty) {

      let formItem: Item;

      if (this.verificaValidTouched('imagem')) {
        this.inscricao = this.getDownloadImgRef().subscribe(
          url => {
            this.formulario.get('imagem').setValue(url);
            formItem = this.formulario.value;
            this.update(formItem);
            this.modalRef.hide();
          });
      } else {
        formItem = this.formulario.value;
        this.update(formItem);
        this.modalRef.hide();

      }

    } else {
      this.verificaValidacoesForm(this.formulario);
    }
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
      this.formulario.setControl('links', this.toFormArray(this.item.links));

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

}
