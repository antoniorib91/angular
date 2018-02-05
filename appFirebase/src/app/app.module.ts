import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './item/item-form/item-form.component';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BsDatepickerModule } from 'ngx-bootstrap'
import { ModalModule } from 'ngx-bootstrap';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ItemModule } from './item/item.module';
import { ListaModule } from './lista/lista.module';

import { environment } from '../environments/environment';
import { ItemFormEditComponent } from './item/item-form-edit/item-form-edit.component';
import { ListaFormCreateComponent } from './lista/lista-form-create/lista-form-create.component';

import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { ptBr } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBr);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),

    AuthModule,
    HomeModule,
    ItemModule,
    ListaModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemFormComponent,
    ItemFormEditComponent,
    ListaFormCreateComponent
  ]
})
export class AppModule { }
