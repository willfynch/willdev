import { Component } from '@angular/core';
import { HeroImageComponent } from '../hero.image/hero.image.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
