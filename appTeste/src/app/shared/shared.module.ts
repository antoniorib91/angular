import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { ImagemService } from './imagem.service';

import { CarouselComponent } from './carousel/carousel.component';
import { MenuTopComponent } from './menu-top/menu-top.component';

import { CarouselModule } from 'ngx-bootstrap';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';






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
    ImagemService,
    TokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ]
})
export class SharedModule { }
