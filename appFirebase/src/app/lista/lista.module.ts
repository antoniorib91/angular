import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRoutingModule } from './lista-routing.module';
import { ListasComponent } from './listas/listas.component';
import { ListaComponent } from './lista/lista.component';
import { ListaFormCreateComponent } from './lista-form-create/lista-form-create.component';
import { ListaFormEditComponent } from './lista-form-edit/lista-form-edit.component';
import { ListaCardComponent } from './lista-card/lista-card.component';
import { ListaService } from './lista.service';
import { InputComponent } from '../shared/input/input.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ListaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListasComponent, 
    ListaComponent, 
    ListaFormCreateComponent, 
    ListaFormEditComponent, 
    ListaCardComponent
  ],
  providers: [
    ListaService
  ]
})
export class ListaModule { }
