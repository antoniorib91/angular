import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRoutingModule } from './lista-routing.module';
import { ListasComponent } from './listas/listas.component';


@NgModule({
  imports: [
    CommonModule,
    ListaRoutingModule,
  ],
  declarations: [ListasComponent]
})
export class ListaModule { }
