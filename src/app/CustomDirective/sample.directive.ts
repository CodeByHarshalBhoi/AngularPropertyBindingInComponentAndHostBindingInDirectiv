import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {
  @HostBinding('value')hostInputVal:string='this is hot binding';
  constructor() { }


  @HostListener('focus') onFocusChange(){
    console.log("Directive event binding called...");

  }
}
