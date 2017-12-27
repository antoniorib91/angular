import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CursosGuard implements CanActivateChild {
    
    
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }
    
    constructor() { }

}