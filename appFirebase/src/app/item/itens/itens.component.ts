import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
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
  itens: Observable<Item[]>;
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
    if( this.inscricao != null || this.inscricao != undefined )
      this.inscricao.unsubscribe();    
  }

  openAddModal(){
    this.itemService.openModalAddItem();
  }
  

  getAllItens(){
    this.itemsCollection = this.firestore.collection<Item>('item');

    this.itens = this.itemsCollection.snapshotChanges().map( itens => {
      return itens.map( i => { 
        const data = i.payload.doc.data();
        const id = i.payload.doc.id;
        return { id, ...data } as Item
       })
    });

    this.inscricao = this.itens.subscribe( itens => {
      this.itensList = itens;
    })


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
