import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ptLocale from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { ExemploPipeComponent } from './exemplo-pipe/exemplo-pipe.component';
import { SettingsService } from './settings.service';
import { CamelCasePipe } from './camel-case.pipe';
import { ptbrLocale } from './pt-br-locale';



registerLocaleData(ptLocale);

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipeComponent,
    CamelCasePipe
  ],
  imports: [
  BrowserModule,
    FormsModule
  ],
  providers: [
    // { provide: LOCALE_ID,
    //   useValue: 'pt-BRng g s'     //Passa apenas um valor
    //  }
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: ptbrLocale
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
