
import { Component, OnInit } from '@angular/core';
import { PersonagemService } from './personagem.service';
import { Personagem } from './../shared/model/personagem.model';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  personagens: Array<Personagem>;
  inscricao: Subscription;
  constructor(private personagemService: PersonagemService) { }

  ngOnInit( ) {
    this.inscricao = this.personagemService.getPersonagens().subscribe(
      (data) => this.personagens = data
    );
  }

  ngOnDestroy() {
   this.inscricao.unsubscribe();
  }

}
