import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { FormCanDeactivate } from './form-candeactivate';




@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<FormCanDeactivate> {

    canDeactivate(
        component: FormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {
        console.log('Guarda de desativação');
        
        return component.podeDesativar ? component.podeDesativar() : true;

    }

}