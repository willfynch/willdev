import { Component } from '@angular/core';
import { navItem } from '../../../models/navItem.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navItems: navItem[] = [
     {label: 'CV', path: 'resume'}
  ]

}
