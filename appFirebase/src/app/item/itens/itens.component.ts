import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item } from '../../model/item.model';
import { Subscription } from 'rxjs/Rx';

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
    private firestore: AngularFirestore
  ) { 
    this.getAllItens();
  
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();    
  }

  getAllItens(){
    this.itemsCollection = this.firestore.collection<Item>('item');

    this.inscricao = this.itemsCollection.valueChanges().subscribe( itens => {
      this.itensList = itens;
    } );


    this.getById('6SX4diyFqVXInxSGegEP');
  }

  getById( id: string){
    let teste = this.itemsCollection.doc( `${id}` );
    console.log( teste );
  }
}
