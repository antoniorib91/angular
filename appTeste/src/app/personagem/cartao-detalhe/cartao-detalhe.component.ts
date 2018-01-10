

import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import { Personagem } from './../../shared/model/personagem.model';


@Component({
  selector: 'app-cartao-detalhe',
  templateUrl: './cartao-detalhe.component.html',
  styleUrls: ['./cartao-detalhe.component.css']
})
export class CartaoDetalheComponent implements OnInit {
  
  
  @Input() personagem: Personagem;

  constructor() { }

  ngOnInit() {
        
  }
  


}
