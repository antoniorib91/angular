import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valor: number = 25;
  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  deletar(){
    this.deletarCiclo = true;
  }
}
