import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BsModalRef } from 'ngx-bootstrap';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Lista } from '../../model/lista.model';
import { Subscription } from 'rxjs/Subscription';
import { UrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
import { LoginService } from '../../auth/login/login.service';
import { User } from '../../model/user.model';




@Component({
  selector: 'app-lista-form-create',
  templateUrl: './lista-form-create.component.html',
  styleUrls: ['./lista-form-create.component.css']
})
export class ListaFormCreateComponent implements OnInit {

  private collection: AngularFirestoreCollection<Lista>;

  formulario: FormGroup;
  inscricao: Subscription;
  fileName: string;
  locale = 'pt-br';


  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private banco: AngularFirestore,
    private modal: BsModalRef,
    private localeService: BsLocaleService,
  ) {
    this.localeService.use(this.locale);
  }

  ngOnInit() {
    this.getListaCollection();
    this.initFormulario();
  }

  ngOnDestroy() {
    if (this.inscricao != undefined)
      this.inscricao.unsubscribe();
  }

  initFormulario() {
    this.formulario = this.formBuilder.group(
      {
        titulo: [null, [Validators.required]],
        imagem: null,
        descricao: [null, [Validators.required]]
      }
    );

    // this.localeService.use( this.locale );

  }

  formSubmit() {

    if (this.formulario.valid) {
      let lista: Lista;
      console.log('entrou no if ');
      this.inscricao = this.getDownloadImgRef().subscribe(
        url => {
          console.log(url);
          this.formulario.get('imagem').setValue(url);
          lista = this.formulario.value;
          this.addLista(lista);
          this.modal.hide();
        },
        error => {
          console.log(error);
        }
      );
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

  getListaCollection() {
    this.collection = this.banco.collection<Lista>('lista');
  }

  addLista(lista: Lista) {
    const usr = JSON.parse( sessionStorage.getItem( 'user' ) );

    lista.status = 1;
    lista.usuarioId = usr.id;
    this.collection.add(lista);
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
      let file = event.target.files[0];
      this.formulario.get('imagem').setValue(file);
      this.fileName = file.name;
    }

  }

}
