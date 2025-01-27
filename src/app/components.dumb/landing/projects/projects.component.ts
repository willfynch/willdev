import { Component } from '@angular/core';
import { projects } from '../../../../data/projects';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-projects',
    imports: [MatCardModule, MatButtonModule],
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = projects;

}
