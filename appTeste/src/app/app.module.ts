import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonagemComponent } from './personagem/personagem.component';

import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { AutenticacaoGuard } from './shared/guards/autenticacao.guard';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AutenticacaoModule,
    HttpClientModule
  ],
  providers: [
    AutenticacaoGuard,
    AutenticacaoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
