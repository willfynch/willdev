import { Component } from '@angular/core';
import { HeroComponent } from '../../components.dumb/landing/hero/hero.component';
import { PersonalProject } from '../../models/personnal-project.model';
import { BioComponent } from '../../components.dumb/landing/bio/bio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    HeroComponent, BioComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  projects: PersonalProject[] = [];

  constructor( ){

  }

  async ngOnInit(){
  }

}
