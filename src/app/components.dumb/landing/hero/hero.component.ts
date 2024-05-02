import { Component } from '@angular/core';
import { HeroImageComponent } from '../hero.image/hero.image.component';

export enum TEXT {
  TITLE = `Bonjour, moi c'est William`,
  SUBTITLE = `Je développe des sites web et des applications intuitives et ergonomiques à l'aide d'Angular et NextJS.`,
  CTA = `Voir mon CV en ligne`
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroImageComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  TITLE = TEXT.TITLE;
  SUBTITLE = TEXT.SUBTITLE;
  CTA = TEXT.CTA;
  

}
