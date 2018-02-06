import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginModalService {

    modalLogin: BsModalRef;

    constructor(
        private bsModalService: BsModalService
    ) { }

    openModal() {
        this.modalLogin = this.bsModalService.show( LoginComponent,
            Object.assign({ backdrop: 'static' }, { class: 'modal-sm' }));
    }
}