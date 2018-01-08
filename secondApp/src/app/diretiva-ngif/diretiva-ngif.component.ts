import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.less']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = [ 'Angular 2', 'Angular 4', 'Angular 20'];
  mostrarCursos = false;

  constructor() {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }


  ngOnInit() {
  }

}
