import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
export enum TEXT {
  TITLE = `Du code. Du café.`,
  SUBTITLE = `Je développe des sites web et des applications intuitives et ergonomiques à l'aide d'Angular et NextJS.`,
  CTA = `Voir mon CV en ligne`
}

@Component({
    selector: 'app-hero',
    imports: [MatIconModule],
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {

  TITLE = TEXT.TITLE;
  SUBTITLE = TEXT.SUBTITLE;
  CTA = TEXT.CTA;
  

}
