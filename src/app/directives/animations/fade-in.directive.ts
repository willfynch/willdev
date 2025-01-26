import { Directive, ElementRef, inject, input, InputSignal, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
  host: {
    'style.position': 'relative',
    'style.display': 'block'
}
})
export class FadeInDirective implements OnInit {

  delay: InputSignal<number> = input<number>(0)

  animationService = inject(AnimationService);
  element = inject(ElementRef);

  ngOnInit() {
    this.animationService.fadeInUp(this.element.nativeElement, this.delay());
  }
}
