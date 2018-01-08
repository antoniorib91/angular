import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-exemplo-pipe',
  templateUrl: './exemplo-pipe.component.html',
  styleUrls: ['./exemplo-pipe.component.css']
})
export class ExemploPipeComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  
  constructor() { }

  // Maneira correta de efetuar um filtro
  obterCursos(){

    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(
       value => value.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  // Programação com promessas
  valorAsync = new Promise((resolve, reject) => {
    setTimeout( () => resolve('Valor assincrono'), 2000 );
  });

  // Programação Reativa
  valorAsync2 = Observable.interval(2000)
    .map( valor => 'Valor assincrono 2');

  ngOnInit() {
  }

}
