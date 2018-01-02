import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { ImagemService } from './imagem.service';

import { CarouselComponent } from './carousel/carousel.component';
import { MenuTopComponent } from './menu-top/menu-top.component';

import { CarouselModule } from 'ngx-bootstrap';





@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    CarouselComponent,
    MenuTopComponent
  ],
  exports: [
    CarouselComponent,
    MenuTopComponent
  ],
  providers: [
    ImagemService
  ]
})
export class SharedModule { }
