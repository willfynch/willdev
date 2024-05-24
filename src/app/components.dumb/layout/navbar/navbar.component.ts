import { Component } from '@angular/core';
import { navItem } from '../../../models/navItem.model';
import {MatIconModule} from '@angular/material/icon'; 
import { AddClassOnScrollDirective } from '../../../directives/add-class-on-scroll.directive';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, AddClassOnScrollDirective, CommonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentRoute: string | undefined = '';
  navItems: navItem[] = [
     {label: 'CV', path: 'resume', icon: 'person'}
  ]

  constructor(private router: Router){}
  ngOnInit(){
    this.router.events.subscribe((event:any)=>{
       if(event instanceof NavigationEnd){
        this.currentRoute = event.urlAfterRedirects
       }
    })
  }
}
