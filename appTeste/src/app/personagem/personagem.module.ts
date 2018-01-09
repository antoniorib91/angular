import { PersonagemService } from './personagem.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemComponent } from './personagem.component';
import { CartaoDetalheComponent } from './cartao-detalhe/cartao-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonagemComponent,
    CartaoDetalheComponent
  ],
  providers: [
    PersonagemService
  ]
})
export class PersonagemModule { }
