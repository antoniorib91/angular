import { Component, OnInit } from '@angular/core';
import { Image } from '../shared/model/image.model';
import { ImagemService } from '../shared/imagem.service';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagensCarousel: Image[];
  
  constructor(
     private imagemService: ImagemService,
  ) { }

  ngOnInit() {
    this.imagemService.getImagesArray()
      .subscribe( data => this.imagensCarousel = data );
  }

}
