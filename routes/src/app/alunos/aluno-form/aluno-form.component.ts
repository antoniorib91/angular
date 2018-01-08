import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { FormCanDeactivate } from './../../guards/form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, FormCanDeactivate {

  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getById( id );
        this.aluno == null ? this.aluno = {} : this.aluno
        
      }
    )
  }

  onInput(){
    this.formMudou = true;
    console.log( 'mudou!');
  }

  podeMudarRota(){
    if( this.formMudou ){
      confirm('Tem certeza que deseja sair dessa página');
    }

    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
