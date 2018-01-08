import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {


  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.incricao = this.route.params.subscribe(
    //   (param) => {
    //     let id = param['id'];
    //     this.aluno = this.alunosService.getById(id);
    //     this.aluno == null ? this.aluno = {} : this.aluno
    //   }
    // )

    console.log('ngOnInit: Iniciou o component');

    this.inscricao = this.route.data.subscribe(
      (data: { aluno: Aluno }) => {
        console.log( 'Recebeu os dados do aluno' );
        this.aluno = data.aluno;
      }

    );
  };

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit'] );    
  }

}
