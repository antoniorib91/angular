import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  constructor() { }

  
  getCursos(){
    return [ 'Java', 'Angular', 'Php', 'Ruby' ];
  }
  
  
}
