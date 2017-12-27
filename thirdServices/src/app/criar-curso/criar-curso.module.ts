
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { RecebeCursoComponent } from './../recebe-curso/recebe-curso.component';


@NgModule({
  declarations: [
    CriarCursoComponent,
    RecebeCursoComponent
  ],
  imports: [
    CommonModule
  ],
  //providers: [CursosService], //Recebe o serviço para todas as declarações do modulo
  exports: [CriarCursoComponent] //Exporta o component para outros modulos caso necessário
})
export class CriarCursoModule { }
