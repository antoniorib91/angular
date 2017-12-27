import { 
  Directive, 
  HostListener, 
  ElementRef, 
  Renderer,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  //Modo 1
  // @HostListener('mouseenter') onMouseOver() {
  //   this._renderer.setElementStyle( 
  //     this._elementRef.nativeElement,
  //     'background-color',
  //     'yellow'
  //   );
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this._renderer.setElementStyle( 
  //     this._elementRef.nativeElement,
  //     'background-color',
  //     'white'
  //   );
  // }
  //constructor( private _renderer: Renderer, private _elementRef: ElementRef) { }

  //Modo 2
  // @HostListener('mouseenter') onMouseOver() { 
  //   this.backgroundColor = 'yellow';
  //  }
  // @HostListener('mouseleave') onMouseLeave() { 
  //   this.backgroundColor = 'white';
  // }
  // @HostBinding( 'style.backgroundColor' ) backgroundColor: string;

  //Mode 3
  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() { 
    this.backgroundColor = 'yellow';
   }

   @HostListener('mouseleave') onMouseLeave() { 
    this.backgroundColor = 'white';
  }

  @HostBinding( 'style.backgroundColor') get setColor(){
    //Codigo extra para caso precisar alguma manipulação
    return this.backgroundColor;
  }

  constructor() { }

}
