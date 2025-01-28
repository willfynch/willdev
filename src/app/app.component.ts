import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideUser } from "@ng-icons/lucide";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { NavbarComponent } from "./components.dumb/layout/navbar/navbar.component";

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, HlmButtonDirective, NgIcon],
    standalone: true,
    providers: [
      provideIcons({lucideUser})
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'willdev';

  
  ngOnInit(){
    
  }


}


