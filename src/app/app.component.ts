import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription, catchError, mergeMap, of } from 'rxjs';
import { NavbarComponent } from './components.dumb/layout/navbar/navbar.component';
import { FooterComponent } from './components.dumb/layout/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'willdev';

  
  ngOnInit(){
    
  }


}


