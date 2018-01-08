import { Injectable } from '@angular/core';


@Injectable()
export class SettingsService {

  locale = 'pt';

  constructor() { }

  getLocale(){
    return this.locale;
  }
}
