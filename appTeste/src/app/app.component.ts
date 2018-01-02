import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mostrarMenu: boolean = false;

  constructor(
    private autenticacaoService: AutenticacaoService
  ){

  }

  ngOnInit(){
    this.autenticacaoService.mostrarMenuEmitter.subscribe(
      (value) => { this.mostrarMenu = value;
      console.log( value ); }
    )
    console.log(this.mostrarMenu);
  }
}
