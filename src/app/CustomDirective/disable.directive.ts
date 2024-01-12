import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective {

  @Input() set appDisable(disable:Boolean ){
    if(disable){
      this.renderer.addClass(this.element.nativeElement, "colorChange")
    }
  }

  constructor(private element:ElementRef, private renderer:Renderer2) { }


}
