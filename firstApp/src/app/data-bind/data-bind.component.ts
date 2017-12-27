import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {


  url: any = 'http://www.google.com.br';
  urlImagem: any = 'http://lorempixel.com/400/200/sports/';
  valorInput: string = "";
  valorInput2: string = "";
  nome: string = "abc"
  
  isOnTarget: boolean = false;
  valIni: number = 15;


  nomeDoCurso: string = "Angular 2.x e 4.x";

  constructor() {}

  botaoClicado(){
      alert("Clicado!");
  }

  onKeyUp(event: KeyboardEvent){
    this.valorInput = (<HTMLInputElement>event.target).value;
  }

  onKeyUp2( value ){
    this.valorInput2 = value;
  }

  onOverAndOut(){
    this.isOnTarget = !this.isOnTarget;
  }

  onMudouValor(event){
    console.log(event);
  }

  ngOnInit() {
  }

}
