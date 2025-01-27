import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components.dumb/layout/navbar/navbar.component";
import { FooterComponent } from "./components.dumb/layout/footer/footer.component";



@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'willdev';

  
  ngOnInit(){
    
  }


}


