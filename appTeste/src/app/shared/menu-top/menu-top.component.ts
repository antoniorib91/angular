import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  autenticado = false;

  constructor(
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.autenticado = this.autenticacaoService.getStatusAutenticacao();
  }

}
