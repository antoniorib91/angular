import { Component, OnInit, Input } from '@angular/core';
import { Lista } from '../../model/lista.model';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.css']
})
export class ListaCardComponent implements OnInit {

  @Input() lista: Lista;
  constructor() { }

  ngOnInit() {
  }

}
