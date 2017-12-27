import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.less']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: "Tarefa 01",
    responsavel:  {
      nome: "João das Neves"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
