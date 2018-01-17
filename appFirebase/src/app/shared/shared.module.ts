import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginService } from '../auth/login/login.service';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    ButtonComponent,
    InputComponent
  ],
  providers: [
    LoginService
  ],
  exports: [
    MenuComponent,
    ButtonComponent,
    InputComponent
  ]
})
export class SharedModule { }
