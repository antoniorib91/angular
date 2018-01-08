import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

import { FirstModule } from './first/first.module';
import { DataBindComponent } from './data-bind/data-bind.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';



@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FirstModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
