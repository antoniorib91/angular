import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModalService } from './login/login.modal.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    LoginModalService
  ]
})
export class AuthModule { }
