import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-resume-header',
  standalone: true,
  imports: [CardModule, ButtonModule, TagModule,],
  templateUrl: './resume-header.component.html',
  styleUrl: './resume-header.component.scss'
})
export class ResumeHeaderComponent {

}
