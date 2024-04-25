import { Component } from '@angular/core';
import { ResumeHeaderComponent } from '../../components.dumb/resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../../components.dumb/resume-experience/resume-experience.component';
import { ScrolltopDirective } from '../../directives/scrolltop.directive';
import { ResumePersonalProjectsComponent } from '../../components.dumb/resume-personal-projects/resume-personal-projects.component';
import { ResumeFormationsComponent } from '../../components.dumb/resume-formations/resume-formations.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    ResumeHeaderComponent, 
    ResumeExperienceComponent, 
    ScrolltopDirective, 
    ResumePersonalProjectsComponent,
    ResumeFormationsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
