import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  // Lembrar de incluir o serviço no providers do app
  // e adicionar no servico o decorator injectable
  cursos: string[] = [];
  // Aula 38
  // cursosService: CursosService;
  
  // constructor() {
  //   this.cursosService = new CursosService();
  //  }

  // Aula 39
  // a injeção ocorre no construtor como no exemplo acime e abaixo 
  constructor(
    private _cursosService: CursosService
  ){

  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    CursosService.cursoCriado.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
