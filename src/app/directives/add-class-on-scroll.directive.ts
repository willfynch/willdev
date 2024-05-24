import { Directive, ElementRef, HostBinding, HostListener, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Directive({
  selector: '[appAddClassOnScroll]',
  standalone: true
})
export class AddClassOnScrollDirective {

  constructor(@Optional() @Inject(DOCUMENT) private document: Document) { 
    
  }

  ngAfterViewChecked(){
   if(this.isBrowser()){
    this.onScroll();
   }
  }

  @HostBinding('class.scrolled')
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(){
     this.scrolled = this.document.defaultView!.scrollY > 230;
  }

  private isBrowser() {
    return this.document !== undefined && this.document.defaultView !== undefined;
  }

}
