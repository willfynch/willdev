import { Component } from '@angular/core';
import { navItem } from '../../../models/navItem.model';
import {MatIconModule} from '@angular/material/icon'; 
import { AddClassOnScrollDirective } from '../../../directives/add-class-on-scroll.directive';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu'

@Component({
    selector: 'app-navbar',
    imports: [MatIconModule, AddClassOnScrollDirective, CommonModule, MatMenuModule],
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
