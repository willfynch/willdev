import { Component, input } from '@angular/core';
import { ISideProject } from '../../../pages/about/about';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-side-project-item',
  imports: [NgIcon],
  templateUrl: './side-project-item.component.html',
  styleUrl: './side-project-item.component.scss'
})
export class SideProjectItemComponent {
  sideProjectItem = input<ISideProject>()
}
