import { Component } from '@angular/core';
import { HeroComponent } from '../../components.dumb/landing/hero/hero.component';
import { PersonalProject } from '../../models/personnal-project.model';
import { BioComponent } from '../../components.dumb/landing/bio/bio.component';
import { ContactComponent } from '../../components.dumb/landing/contact/contact.component';
import { ProjectsComponent } from '../../components.dumb/landing/projects/projects.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    HeroComponent, BioComponent, ContactComponent, ProjectsComponent
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
