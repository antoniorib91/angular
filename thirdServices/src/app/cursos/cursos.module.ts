
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CursosService], //Recebe o serviço para todas as declarações do modulo
  exports: [CursosComponent] //Exporta o component para outros modulos caso necessário
})
export class CursosModule { }
