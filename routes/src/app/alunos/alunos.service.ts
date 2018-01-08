import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  
  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno01', email: 'aluno01@gmail.com' },
    { id: 2, nome: 'Aluno02', email: 'aluno02@gmail.com' },
    { id: 3, nome: 'Aluno03', email: 'aluno03@gmail.com' }
  ]

  getAlunos(){
    return this.alunos;
  }

  getById( id: number ){
    
    let retorno = this.alunos.find( x => x.id == id );
    
    if( retorno != null || retorno != undefined )
      return retorno;
    else
      return null;
  }
  
  constructor() { }

}
