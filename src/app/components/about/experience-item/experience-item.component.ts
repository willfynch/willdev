import { Component, input } from '@angular/core';
import { IExperience } from '../../../pages/about/about';

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss'
})
export class ExperienceItemComponent {

  experienceItem = input<IExperience>()

}
