import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginService } from '../auth/login/login.service';
import { BtnAddComponent } from './btn-add/btn-add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    BtnAddComponent
  ],
  providers: [
    LoginService
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
