import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ListaFormCreateComponent } from './lista-form-create/lista-form-create.component';
import { ListaFormEditComponent } from './lista-form-edit/lista-form-edit.component';

@Injectable()
export class ListaService {

  modalAddRef   : BsModalRef;
  modalEditRef  : BsModalRef;
  constructor(
    private bsModalService: BsModalService
  ) { }


  openModalAddLista(){
    this.modalAddRef = this.bsModalService.show( ListaFormCreateComponent );
  }

  openModalEditList( lista ){
  
    this.modalEditRef = this.bsModalService.show( ListaFormEditComponent );
    this.modalEditRef.content.lista = lista;
  
  }

}