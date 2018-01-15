import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemFormComponent } from './item/item-form/item-form.component';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ModalModule } from 'ngx-bootstrap';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ItemModule } from './item/item.module';

import { environment } from '../environments/environment';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ModalModule.forRoot(),

    AuthModule,
    HomeModule,
    ItemModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemFormComponent
  ]
})
export class AppModule { }
