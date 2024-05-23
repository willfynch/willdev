import { Component } from '@angular/core';
import { projects } from '../../../../data/projects';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, TagModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = projects;

}
