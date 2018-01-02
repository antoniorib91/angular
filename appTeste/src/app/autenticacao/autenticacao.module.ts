import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component'

@NgModule({
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [],


})
export class AutenticacaoModule { }
