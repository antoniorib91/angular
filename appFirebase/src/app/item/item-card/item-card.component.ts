import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ItemService } from './../item.service';
import { Item } from './../../model/item.model';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item;
  itemsCollection: AngularFirestoreCollection<Item>;

  constructor( 
    private firestore: AngularFirestore,
    private itemService: ItemService
    ) { 
    this.itemsCollection = this.firestore.collection<Item>('item');
  }

  ngOnInit( ) {
  }

  removeItem( item ){
    console.log( item.id );
    this.removeById( item.id );
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

  openEditItem(){
    this.itemService.openModalEditItem( this.item );
  }

}
