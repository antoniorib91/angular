import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';






@Injectable()
export class AutenticacaoService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
 
  private status: boolean = false;
  private dados: any;
  
  menuStatus = new EventEmitter(); 

  constructor(
    private http: Http, 
    private router: Router
  ) {
    console.log("Iniciou o serviço de auth");
    this.populaDados();
    this.menuStatus.next( false );
  }



  
  getStatusAutenticacao(){
    return this.status;
  }


  setStatusAutenticacao( value: boolean ){
    this.status = value;
  }

  buscaUsuario( nome: string, senha: string){
    
    let result = false;
    this.dados.forEach(usr => {
      if(usr.nome == nome && usr.senha === senha)
        result = true;
    });
    return result;

  }

  getUsuarios(){
    return this.http.get('assets/usuarios.json')
    .map( (res: Response) => res.json() );
  }

  populaDados(){
    this.getUsuarios().subscribe( (data) => {
      this.dados = data;
    });
  }

  login( nome: string, senha: string ){
    
    if( this.buscaUsuario( nome, senha )){
      this.setStatusAutenticacao( true );
      this.menuStatus.emit( true );
      this.router.navigate( ['/']);
    }else{
      this.menuStatus.emit(false);
      alert( "Usuário Inválido!" );
    }

  }

  logout(){
    this.menuStatus.emit( false );
    this.status = false;
    this.router.navigate( ['/autenticacao'] );
  }

}
