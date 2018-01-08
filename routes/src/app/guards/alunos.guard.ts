import { Observable } from 'rxjs/Rx';
import { CanActivateChild } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

export class AlunosGuard implements CanActivateChild{
    
    constructor(){}
    
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | Observable<boolean> | Promise<boolean> {
        
        console.log('AlunosGuard: Guarda de rota filha');
        return true;
    }
    
}