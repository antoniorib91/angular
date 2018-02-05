import { Component, OnInit } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection, 
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../model/item.model';
import { ItemService } from './../item.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../model/lista.model';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})

export class ItensComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private refLista: AngularFirestoreDocument<Lista>;
  itensList: Array<Item> = [];
  itens: Observable<Item[]>;
  inscricao: Subscription;



  constructor( 
    private firestore: AngularFirestore,
    private itemService: ItemService,
    private router: ActivatedRoute   
  ) { 
    this.getLista();
    this.getAllItens();
    
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if( this.inscricao.closed == false )
      this.inscricao.unsubscribe();    
  }

  openAddModal(){
    this.itemService.openModalAddItem();
  }
  
  getLista(){
    this.inscricao = this.router.params.subscribe( 
      param => {
        let id = param['id'];
        this.refLista = this.firestore.collection<Lista>('lista').doc<Lista>( id );
      }
    )     
  }

  getAllItens(){
    this.itemsCollection = this.refLista.collection<Item>('itens');
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

  }
    //this.getById('6SX4diyFqVXInxSGegEP');
    //this.removeById( '6SX4diyFqVXInxSGegEP' );
  
  // getById( id: string){
  //   // let t = this.itemsCollection.doc( id ).snapshotChanges().subscribe(
  //   //   item => { console.log( item.payload.data() ) }
  //   // )
  //   let teste = this.itemsCollection.doc<Item>( `${id}` );
  //   teste.snapshotChanges().subscribe(
  //     item => { console.log( item.payload.exists );  }
  //   )
    
  // }

  // removeById( id: string ){
  //   let doc = this.itemsCollection.doc<Item>( `${id}` );
  //   let localInscription = doc.snapshotChanges().subscribe( data => {
  //     if( data.payload.exists ){
  //       doc.delete();
  //     }else{
  //       console.log( 'Item not found!' );
  //     }
  //   });
  // }
}
