
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

import { CursosService } from './cursos/cursos.service';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    CriarCursoModule,
    FormsModule
  ],
  providers: [LogService], //Permite o uso do serviço a nivel global
  bootstrap: [AppComponent]
})
export class AppModule { }
