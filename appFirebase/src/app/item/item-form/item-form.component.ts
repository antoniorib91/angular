import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Item } from '../../model/item.model';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  formulario: FormGroup;
  fileName: string;
  inscricao: Subscription;
  itemCollection: AngularFirestoreCollection<Item>;
  constructor( 
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private firestorage: AngularFireStorage,
    private banco: AngularFirestore,
  ){ 
    this.itemCollection = this.banco.collection<Item>('item');
  }

  ngOnInit() {
    this.initFormulario();
  }

  ngOnDestroy() {
    if( this.inscricao != null || this.inscricao != undefined )
      this.inscricao.unsubscribe();
  }

  initFormulario(){
    this.formulario = this.formBuilder.group(
      {
        nome:       [ null, [ Validators.required ] ],
        imagem:       null,
        valor:      [ null, [ Validators.required ] ],
        descricao:  [ null, [ Validators.required] ],
        links:      new FormArray( [new FormControl()] )
      }
    );
  }

  get links(): FormArray {
    return this.formulario.get('links') as FormArray;
  }

  addLinkInput(){
    this.links.push( new FormControl() );
  }

  removeLinkInput( index ){
    this.links.removeAt( index );
  }

  onImgInput(event){
    
    if( event.target.files.length > 0 ){
      let file = event.target.files[0];
      this.formulario.get('imagem').setValue(file);
      this.fileName = file.name;
    }
     
  }

  getDownloadImgRef(){
   
    let img = this.formulario.get('imagem');
    if( img.value != null && img.value != undefined ){
      
      let ref = this.firestorage.ref(`itens/${img.value.name}`);
      let task = ref.put( img.value );
      return task.downloadURL()
    
    } else {
      return null;
    }
    
  }

  formSubmit(){
    if( this.formulario.valid ){
      let item: Item;
      this.inscricao = this.getDownloadImgRef().subscribe(
        url => {
          this.formulario.get('imagem').setValue( url );
          item = this.formulario.value;
          this.addItem( item );
          this.modalRef.hide();
        }
      );
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


  addItem( item: Item ){
    this.itemCollection.add( item );
  }

  

}
