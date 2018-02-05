import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginService } from '../auth/login/login.service';
import { InputComponent } from './input/input.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    InputComponent
  ],
  providers: [
    LoginService
  ],
  exports: [
    MenuComponent,
    InputComponent
  ]
})
export class SharedModule { }
