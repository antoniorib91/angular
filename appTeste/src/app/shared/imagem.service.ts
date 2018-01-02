import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ImagemService {

  constructor(
    private http: Http
  ) { }

  getImagesArray(){
    return this.http.get('assets/imagens.json')
      .map( (res: Response ) => 
      { 
        return res.json();
      });
  }

}
