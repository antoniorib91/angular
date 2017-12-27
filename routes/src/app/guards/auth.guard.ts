import { Injectable } from '@angular/core';
import { 
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route } from '@angular/router';
  
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../login/auth.service';



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {


 
 
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): 
      Observable<boolean> | boolean {

      console.log( 'AuthGard' );

      return this.verificarAcesso();

  }

  canLoad(
    route: Route): boolean | Observable<boolean> | Promise<boolean> {
      console.log( 'CanLoad verificando se o usuario pode carregar o modulo' );

      return this.verificarAcesso();
  }

  private verificarAcesso(){

    if( this.authService.usuarioEstaAutenticado() ){
      return true;  
    }

    this.router.navigate(['/login']);
    return false

  }

}
