
import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';

import { Personagem } from './../shared/model/personagem.model';


@Injectable()
export class PersonagemService {

  private personagens: any;
  constructor(
    private http: HttpClient
  ) { }


  getPersonagens(){
    return this.http.get( 'assets/personagens.json', { responseType: "json" }).map(
      (res: any ) => Personagem.parseArrayJson( res )
    );
  }

  
  

}
