import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {TagModule} from 'primeng/tag'
import { ResumeHeaderComponent } from '../../components.dumb/resume-header/resume-header.component';
import { ResumeExperienceComponent } from '../../components.dumb/resume-experience/resume-experience.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ResumeHeaderComponent, ResumeExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {





}
