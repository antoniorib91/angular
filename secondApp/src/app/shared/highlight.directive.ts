import { 
  Directive, 
  HostListener, 
  HostBinding, 
  Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';
  constructor() { }

  OnInit(){
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseOver() {   
    this.backgroundColor = this.highlightColor;
    this.validaCor();
    
   }

  @HostListener('mouseleave') onMouseLeave() { 
    this.backgroundColor = this.defaultColor;
    this.validaCor();
  }

  @HostBinding( 'style.backgroundColor' ) backgroundColor: string
  @HostBinding( 'style.color' ) color: string

  validaCor(){
    if( this.backgroundColor === 'black' ){
      this.color = 'white';
    }else{
      this.color = 'black';
    }
  }
}
