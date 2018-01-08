import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { AutenticacaoGuard } from './shared/guards/autenticacao.guard';

const routes: Routes = [
  { 
    path:               '',
    component:          HomeComponent,
    canActivate:        [AutenticacaoGuard],
    canLoad:            [AutenticacaoGuard]
  },
  { 
    path:               'personagens',
    component:          PersonagemComponent,
    canActivate:        [AutenticacaoGuard],
    canLoad:            [AutenticacaoGuard]
  },
  { 
    path:               'autenticacao',
    loadChildren:       'app/autenticacao/autenticacao.module#AutenticacaoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


