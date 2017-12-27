import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService{

    emitCursoCriado = new EventEmitter<String>();
    static cursoCriado = new EventEmitter<String>();
    cursos: string[] = ['Angular', 'Java', '.Net'];

    constructor(private _logService: LogService){
        console.log('CursosService');
    }

    getCursos(){
        this._logService.log('Obtendo lista de cursos!');
       return this.cursos;
    }

    addCursos(curso: string){
        this._logService.log(`Criando um novo curso! ${curso}` );
        this.cursos.push(curso);
        this.emitCursoCriado.emit(curso);
        CursosService.cursoCriado.emit(curso);
    }
}