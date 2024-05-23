import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentRoute: string | undefined = '';
  constructor(private router: Router){

  }
  ngOnInit(){
    this.router.events.subscribe((event:any)=>{
      if(event instanceof NavigationEnd){
       this.currentRoute = event.urlAfterRedirects
      }
   })
  }


}
