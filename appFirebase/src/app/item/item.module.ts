import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItensComponent } from './itens/itens.component';
import { ItemCardComponent } from './item-card/item-card.component';



@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule
  ],
  declarations: [
    ItensComponent,
    ItemCardComponent
  ],
  providers: []
})
export class ItemModule { }
