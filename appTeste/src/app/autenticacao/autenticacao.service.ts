import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';



@Injectable()
export class AutenticacaoService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  private status: boolean = false;
  private dados: any;

  constructor(
    private http: Http, 
    private router: Router
  ) {
    console.log("Iniciou o serviço de auth");
    this.populaDados();
  }

  getStatusAutenticacao(){
    return this.status;
  }

  setStatusAutenticacao( value: boolean ){
    this.status = value;
  }

  login( nome: string, senha: string ){
    
    this.dados.forEach(usr => {
      if(usr.nome == nome && usr.senha === senha){
        this.setStatusAutenticacao( true );
        this.mostrarMenuEmitter.emit( true );
        this.router.navigate( ['/']);
      }
    });

    this.mostrarMenuEmitter.emit(false); 
    
    
  }

  logout(){

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

}
