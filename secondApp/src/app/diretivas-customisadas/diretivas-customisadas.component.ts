import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customisadas',
  templateUrl: './diretivas-customisadas.component.html',
  styleUrls: ['./diretivas-customisadas.component.less']
})
export class DiretivasCustomisadasComponent implements OnInit {

  corDefault: string = '';
  corHighlight: string = '';
  mostrarCurso: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}
