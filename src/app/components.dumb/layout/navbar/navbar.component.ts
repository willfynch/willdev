import { Component } from '@angular/core';
import { navItem } from '../../../models/navItem.model';
import { AddClassOnScrollDirective } from '../../../directives/add-class-on-scroll.directive';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [AddClassOnScrollDirective, CommonModule],
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentRoute: string | undefined = '';
  navItems: navItem[] = [
     {label: 'CV', path: 'resume', icon: 'person'}
  ]

}
