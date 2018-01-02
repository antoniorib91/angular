import { Injectable } from '@angular/core';

import { AutenticacaoService } from '../autenticacao.service';
import { CanActivate, CanLoad } from '@angular/router/src/interfaces';
import { 
    Route, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticacaoGuard implements CanActivate, CanLoad {
    
    constructor(
        private autenticacaoService: AutenticacaoService,
        private router: Router
    ) { }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.validaStatusLogin();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.validaStatusLogin();
    }

    private validaStatusLogin(){
        
        if( this.autenticacaoService.getStatusAutenticacao() ){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
    
    


}