import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';



import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Lista } from './../../model/lista.model';
import { Item } from '../../model/item.model';
import { firestore } from 'firebase/app';
import { ListaService } from '../lista.service';
import { LoginService } from '../../auth/login/login.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  listasCollection: AngularFirestoreCollection<Lista>;
  listas: Array<Lista>;
  obsListas: Observable<Lista[]>;
  inscricao: Subscription;
  
  constructor(
    private firestore: AngularFirestore,
    private listaService: ListaService,
    private loginService: LoginService

  ) { }

  ngOnInit() {
    this.getAllListas();
  }

  ngOnDestroy() {
    if( this.inscricao.closed == false )
      this.inscricao.unsubscribe();
    
  }

  showAddButton(){
    let sessionUsr = sessionStorage.getItem( 'user' );
    
    if( sessionUsr ){
      return true;
    }else{
      return false;
    }

  }

  getSubColletion( id ): AngularFirestoreCollection<Item> {
    return this.firestore.collection<Lista>('lista').
    doc<Lista>(id).collection<Item>('itens');
  }

  getAllListas(){
    this.listasCollection = this.firestore.collection<Lista>('lista');
    
    this.obsListas = this.listasCollection.snapshotChanges().map( listas => {
      return listas.map( li => { 
        const id = li.payload.doc.id;     
        const data = li.payload.doc.data();
        return { id, ...data } as Lista
       })
    });

    this.inscricao = this.obsListas.subscribe( listas => {
      this.listas = listas;
    });

  }

  addLista(){
    this.listaService.openModalAddLista();
  }


}
