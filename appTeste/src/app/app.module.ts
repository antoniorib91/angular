
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { PersonagemModule } from './personagem/personagem.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { AutenticacaoGuard } from './shared/guards/autenticacao.guard';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AutenticacaoModule,
    PersonagemModule,
    HttpClientModule
  ],
  providers: [
    AutenticacaoGuard,
    AutenticacaoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
