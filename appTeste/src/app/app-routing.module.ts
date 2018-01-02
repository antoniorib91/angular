import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PersonagemComponent } from './personagem/personagem.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'personagens',
    component: PersonagemComponent
  },
  { 
    path: 'login',
    loadChildren: 'app/autenticacao/autenticacao.module#AutenticacaoModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


