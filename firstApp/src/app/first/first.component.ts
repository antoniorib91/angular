import { FirstService } from './first.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [ FirstService ]
})
export class FirstComponent implements OnInit {

  nomePortal: string;
  cursos: string[];
  
  constructor( private firstService: FirstService) { 
    this.nomePortal = "http://google.com.br";

    // for (let i = 0; i < this.cursos.length; i++) {
    //   let curso = this.cursos[i];
    // }
    this.cursos = this.firstService.getCursos();
  }

  ngOnInit() {
  }

}
