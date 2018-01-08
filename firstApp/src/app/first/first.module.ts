import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstComponent } from './first.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FirstComponent,
    DetalheComponent
  ],
  exports: [
    FirstComponent
  ]
})
export class FirstModule { }
