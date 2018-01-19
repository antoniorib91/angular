import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemRoutingModule } from './item-routing.module';
import { ItemService } from './item.service';
import { ItensComponent } from './itens/itens.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemFormComponent } from './item-form/item-form.component';


import { SharedModule } from './../shared/shared.module';
import { ItemFormEditComponent } from './item-form-edit/item-form-edit.component';



@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule,
    ReactiveFormsModule    
  ],
  declarations: [
    ItensComponent,
    ItemCardComponent,
    ItemFormComponent,
    ItemFormEditComponent
  ],
  providers: [
    ItemService
  ]
})
export class ItemModule { }
