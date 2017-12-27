import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'], //,
  providers: [CursosService] //Injeta o serviço no component somente!
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  campoInput: string;
  constructor(
    private _cursosService: CursosService
  ) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCurso(curso: string){
    this._cursosService.addCursos(curso);
  }

}
