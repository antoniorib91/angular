import { Component, ChangeDetectorRef } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  mostrarMenu = false;

  // constructor(private autenticacaoService: AutenticacaoService, private changeDetector: ChangeDetectorRef) {
  //   this.autenticacaoService.statusObservable.subscribe(
  //     (value: boolean) => {
  //       this.mostrarMenu = value;
  //       this.changeDetector.detectChanges();
  //     }
  //   );
  // }

  constructor(
    private autenticacaoService: AutenticacaoService, 
    private changeDetector: ChangeDetectorRef
  ){
    this.autenticacaoService.menuStatus.subscribe(
      (value: boolean ) => { 
        this.mostrarMenu = value;
        console.log(value);
        this.changeDetector.detectChanges();
      } 
    )
  }

  mostrarMenuFunc(): boolean{
    return this.mostrarMenu;
  }

  ngOnInit(){}

}
