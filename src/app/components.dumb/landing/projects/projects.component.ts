import { Component } from '@angular/core';
import { projects } from '../../../../data/projects';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = projects;

}
