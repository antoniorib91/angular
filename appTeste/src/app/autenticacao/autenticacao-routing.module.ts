import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AutenticacaoGuard } from '../shared/guards/autenticacao.guard';


const loginRoutes: Routes = [
    { 
        path:           '', 
        component:      LoginComponent 
    },
    {
        path:           'logout',
        component:      LogoutComponent,
        canActivate:    [AutenticacaoGuard],
        canLoad:        [AutenticacaoGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class AutenticacaoRoutingModule { }
