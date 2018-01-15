import { Injectable } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { ItemFormComponent } from './item-form/item-form.component';


@Injectable()
export class ItemService {

  modalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService
  ) { }


  openModalAddItem(){
    this.modalRef = this.bsModalService.show( ItemFormComponent );
  }
}
