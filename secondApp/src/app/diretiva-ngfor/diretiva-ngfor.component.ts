import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.less']
})
export class DiretivaNgforComponent implements OnInit {

  
  cursos = [ 'Angular 2', 'Java', 'Phonegap'];
  
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.cursos.length; index++) {
      let curso = this.cursos[index];
      
    }
  }

}
