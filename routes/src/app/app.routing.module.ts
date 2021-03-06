import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    {   path:               'cursos', 
        loadChildren:       'app/cursos/cursos.module#CursosModule',
        canActivate:        [AuthGuard],
        canActivateChild:   [CursosGuard],
        canLoad:            [AuthGuard]
    },    
    {   path:               'alunos', 
        loadChildren:       'app/alunos/alunos.module#AlunosModule',
        canActivate:        [AuthGuard],
        canActivateChild:   [AlunosGuard],
        canLoad:            [AuthGuard]
    },    
    {   path:               'login', 
        component:          LoginComponent 
    },
    {   path:               '' , 
        component:          HomeComponent,
        canActivate:        [AuthGuard] 
    },
    {
        path:               '**',
        component:          PaginaNaoEncontradaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    
})
export class AppRoutingModule {}