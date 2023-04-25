import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(public eObj: ElementRef) { }
  
  @HostListener('mouseleave') onmouseleave(){
   this.eObj.nativeElement.style.background="pink";
   this.eObj.nativeElement.style.color="black";
    }
 @HostListener('mouseenter') onmouseenter(){
   this.eObj.nativeElement.style.background="yellow";
   this.eObj.nativeElement.style.color="red";
  }
  

}
