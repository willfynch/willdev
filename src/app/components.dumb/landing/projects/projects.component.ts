import { Component } from '@angular/core';
import { projects } from '../../../../data/projects';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = projects;

}
