import { ItemFormEditComponent } from './item-form-edit/item-form-edit.component';
import { Injectable } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { ItemFormComponent } from './item-form/item-form.component';


@Injectable()
export class ItemService {

  modalAddRef: BsModalRef;
  modalEditRef: BsModalRef;
  constructor(
    private bsModalService: BsModalService
  ) { }


  openModalAddItem(){
    this.modalAddRef = this.bsModalService.show( ItemFormComponent );
  }

  openModalEditItem( item ){
  
    this.modalEditRef = this.bsModalService.show( ItemFormEditComponent );
    this.modalEditRef.content.item = item;
  
  }

}
