

import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import { AutenticacaoService } from './../autenticacao/autenticacao.service';



@Injectable(  )
export class TokenInterceptor implements HttpInterceptor {

  constructor( 
    private autenticacaoService: AutenticacaoService 
  ){}
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   
    let statusAutenticacao = this.autenticacaoService.getStatusAutenticacao();
      
    if( statusAutenticacao ){

      const token = this.autenticacaoService.getToken();
      const reqWithToken = req.clone({ setHeaders: { Authorization: `Bearer ${token}`} })
  
      return next.handle(reqWithToken);
    }else{

      return next.handle(req);
    
    }
    

  }

}