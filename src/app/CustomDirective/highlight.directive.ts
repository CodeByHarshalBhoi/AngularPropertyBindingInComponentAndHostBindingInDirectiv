import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

@Input() backgroundColor:string='yellow';
@Input() textColor:string='Green';
@Input('appHighlight') backAndTextColor!: { backgroundColor: string, textColor: string};


  constructor(private element:ElementRef, private renderer:Renderer2) { }


  ngOnInit(): void {

   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backgroundColor)
   this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor)


   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backAndTextColor.backgroundColor)
   this.renderer.setStyle(this.element.nativeElement, 'color', this.backAndTextColor.textColor)
  }

}
