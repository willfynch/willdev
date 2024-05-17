import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddClassOnScroll]',
  standalone: true
})
export class AddClassOnScrollDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('class.scrolled')
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(){
    this.scrolled = window.scrollY > 230;
  }

}
