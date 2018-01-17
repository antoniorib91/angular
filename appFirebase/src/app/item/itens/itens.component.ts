import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Rx';

import { Item } from '../../model/item.model';
import { ItemService } from './../item.service';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  itensList: Array<Item> = [];
  inscricao: Subscription;

  constructor( 
    private firestore: AngularFirestore,
    private itemService: ItemService,
    
  ) { 
    this.getAllItens();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();    
  }

  getEventClick( event: any ){
    if( event == 'create'){
      this.itemService.openModalAddItem();
    }
  }
  

  getAllItens(){
    this.itemsCollection = this.firestore.collection<Item>('item');

    this.inscricao = this.itemsCollection.valueChanges().subscribe( itens => {
      this.itensList = itens;
    } );


    //this.getById('6SX4diyFqVXInxSGegEP');
    //this.removeById( '6SX4diyFqVXInxSGegEP' );
  }

  getById( id: string){
    // let t = this.itemsCollection.doc( id ).snapshotChanges().subscribe(
    //   item => { console.log( item.payload.data() ) }
    // )
    let teste = this.itemsCollection.doc<Item>( `${id}` );
    teste.snapshotChanges().subscribe(
      item => { console.log( item.payload.exists );  }
    )
    
  }

  removeById( id: string ){
    let doc = this.itemsCollection.doc<Item>( `${id}` );
    let localInscription = doc.snapshotChanges().subscribe( data => {
      if( data.payload.exists ){
        doc.delete();
      }else{
        console.log( 'Item not found!' );
      }
    });


    
  }
}
