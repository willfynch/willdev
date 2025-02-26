import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { FadeInDirective } from '../../../directives/animations/fade-in.directive';

@Component({
  selector: 'app-company-logo',
  imports: [CommonModule, FadeInDirective],
  templateUrl: './company-logo.component.html',
  styleUrl: './company-logo.component.scss'
})
export class CompanyLogoComponent {
  logo: InputSignal<string> = input.required<string>()
  bannerImage: InputSignal<string> = input.required<string>();
  company: InputSignal<string> = input.required<string>();
  position: InputSignal<string> = input.required<string>();
  dates: InputSignal<string> = input.required<string>();
}
