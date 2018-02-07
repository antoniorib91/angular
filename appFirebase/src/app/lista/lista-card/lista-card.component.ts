import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Lista } from '../../model/lista.model';
import { ListaService } from '../lista.service';
import { LoginService } from '../../auth/login/login.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.css']
})
export class ListaCardComponent implements OnInit {

  private colecao: AngularFirestoreCollection<Lista>;
  private autenticado: boolean
  inscricao: Subscription;

  @Input() lista: Lista;


  constructor(
    private listaService: ListaService,
    private loginService: LoginService,
    private banco: AngularFirestore
  ) {
    this.initColecao();
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.inscricao != undefined) {
      this.inscricao.unsubscribe();
    }
  }

  removeList() {
    this.remove();
  }

  openEditList() {
    this.listaService.openModalEditLista(this.lista);
  }

  initColecao() {
    this.colecao = this.banco.collection<Lista>('lista');
  }

  remove() {
    let doc = this.colecao.doc<Lista>(this.lista.id);

    this.inscricao = doc.snapshotChanges().subscribe(
      data => {
        if (data.payload.exists) {
          doc.delete();
        } else {
          console.log('not found');
        }
      }
    )
  }

  showOptions() {
    let sessionUsr = sessionStorage.getItem('user'); 
    if (sessionUsr) {
      let usr = JSON.parse(sessionStorage.getItem('user'));
      if (this.lista.usuarioId == usr.id) {
        return true;
      }
    } else {
      return false;
    }
  }


}
