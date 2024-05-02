import { Component } from '@angular/core';
import { ResumeHeaderComponent } from '../../components.dumb/resume/resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../../components.dumb/resume/resume-experience/resume-experience.component';
import { ScrolltopDirective } from '../../directives/scrolltop.directive';
import { ResumePersonalProjectsComponent } from '../../components.dumb/resume/resume-personal-projects/resume-personal-projects.component';
import { ResumeFormationsComponent } from '../../components.dumb/resume/resume-formations/resume-formations.component';
import {MatIconModule} from '@angular/material/icon'; 
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ResumeHeaderComponent, 
    ResumeExperienceComponent, 
    ScrolltopDirective, 
    ResumePersonalProjectsComponent,
    ResumeFormationsComponent,
    MatIconModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
