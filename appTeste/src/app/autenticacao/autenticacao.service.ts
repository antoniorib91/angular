
import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HmacSHA256, enc, lib } from 'crypto-js';

import base64url from "base64url";


@Injectable()
export class AutenticacaoService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
 
  private status: boolean = false;
  private dados: any = [];
  private token: string;
  
  
  menuStatus = new EventEmitter(); 

  constructor(
    private http: Http,
    private router: Router
  ) {
    console.log("Iniciou o serviço de auth");
    this.populaDados();
    this.menuStatus.next( false );
    
  }
  
  getToken(){
    return this.token;
  }

  getStatusAutenticacao(){
    return this.status;
  }


  setStatusAutenticacao( value: boolean ){
    this.status = value;
  }

  getUsuarioLogin( nome: string, senha: string){
    
    let result = this.dados.filter( (usr) => usr.nome == nome && usr.senha == senha )

    if( result.length > 0 ) 
      return result[0];
    
    return null;

  }

  getUsuarios(){

    // return this.http.get('assets/usuarios.json',  {responseType: 'json'} )
    // .map( (res ) => res );
    return this.http.get('assets/usuarios.json' )
    .map( (res ) => res.json() );
  
  }

  populaDados(){

    this.getUsuarios().subscribe( (data) => {
      this.dados = data;
    });

  }

  login( nome: string, senha: string ){
    
    let usuario = this.getUsuarioLogin( nome, senha );

    if( usuario ){

      this.setStatusAutenticacao( true );
      this.menuStatus.emit( true );       
      this.token = usuario.token;
      return true;
      // let usr = {
      //   "nome": usuario.nome,
      //   "token": usuario.token,
      // }
      // localStorage.setItem('userSession', JSON.stringify(usr) );
  
    }

    this.menuStatus.emit(false);
    return false;
  
  }

  logout(){

    localStorage.removeItem('userSession');
    this.menuStatus.emit( false );
    this.status = false;
    
  }

  redirecionar(){

    if( this.status ){
      this.router.navigate( ['/']);
    }else{
      this.router.navigate( ['/autenticacao'] );
    }
    
  }

}

  // verificaAutenticidadeToken( token: string ){

  //   let result = this.dados.filter( (usr) => usr.token === token );

  //   if( result.length > 0 ) {
  //     let sec = result[0].secret;
      
  //     let sTokenDecoded = this.tokenDecode(token);
  //     let uTokenDecoded = this.tokenDecode( result[0].token );

  //     if( this.tokenCompare( sTokenDecoded, uTokenDecoded )){
  //       this.token = token;
  //       return true;
  //     }

  //   }
  //   return false;
  // }


  // tokenCompare( token1: any, token2: any ){

  //   if( token1.header    == token2.header   &&
  //       token1.payload   == token2.payload  &&
  //       token1.signature == token2.signature ){
  //     return true;
  //   }else{
  //     return false;
  //   }

  // }

  // tokenDecode( token: string ){

  //   let retorno;
  //   let partes = token.split('.');

  //   let header = partes[0];
  //   let payload = partes[1];
  //   let hmac = partes[2];

  //   header = base64url.decode( header );
  //   payload = base64url.decode( payload );
  //   hmac = base64url.toBase64( hmac );
  //   hmac = enc.Base64.parse( hmac ).toString();
    
  //   retorno = {
  //     header: header,
  //     payload: payload,
  //     signature: hmac
  //   }

  //   return retorno;

  // }


    // let header = {
    //   "alg": "HS256",
    //   "typ": "JWT"
    // }

    // let payload = {
    //   "sub": "1234567890",
    //   "name": "John Doe",
    //   "admin": true
    // };

    // const secret = 'bagual';
    // let stringHeader = JSON.stringify(header);
    // let stringPayload = JSON.stringify(payload);

    // //Cria uma hash do payload
    // let header64url = base64url( stringHeader );
    // let payload64url = base64url( stringPayload );
    // let body64url = header64url + '.' + payload64url;

    // //Cria o Hmac da Assinatura
    // let signatureHmac = HmacSHA256( body64url, secret );

    // //Transforma o hmac em base64 e logo apos converte esse base64 para base64url( so conver sem transformar )
    // let signature = base64url.fromBase64( signatureHmac.toString(enc.Base64) );
  
    // let token = body64url + '.' + signature;
    
    // console.log( 'Token' );
    // console.log( token );
    // console.log( signatureHmac.toString() );
