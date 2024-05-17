import { Component } from '@angular/core';
import { HeroComponent } from '../../components.dumb/landing/hero/hero.component';
import { PersonalProject } from '../../models/personnal-project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    HeroComponent
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
