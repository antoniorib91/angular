import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  mostrarMenu = false;

  constructor(
    private autenticacaoService: AutenticacaoService
  ){
    this.autenticacaoService.statusObservable.subscribe(
      (value: boolean ) => { this.mostrarMenu = value; console.log(value)} 
    )
  }

  ngOnInit(){
    
    
    // this.autenticacaoService.mostrarMenuEmitter.subscribe(
    //   (value) => { this.mostrarMenu = value; console.log(value); }
    // )

  }

  // ngOnDestroy(){
  //   this.autenticacaoService.getObsStatus();
  // }

}
