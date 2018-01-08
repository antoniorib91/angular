import { Directive, ElementRef, Renderer } from '@angular/core';

// Se colocar a tag html, a diretiva so se aplicara a essa tag ex.: p[fundoAmarelo]
@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor( private _elementRef: ElementRef, private _render: Renderer) {

    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; // risco de segurança
    this._render.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
