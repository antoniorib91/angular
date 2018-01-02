import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../model/image.model';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() imagens: Image[];

  constructor( ) { }

  ngOnInit() { }

}
