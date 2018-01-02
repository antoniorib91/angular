import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutenticacaoService } from './autenticacao.service';
import { LoginComponent } from './login/login.component';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module'

@NgModule({
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AutenticacaoService
  ],


})
export class AutenticacaoModule { }
