import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PersonalProject } from '../../models/personnal-project.model';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-resume-personal-projects',
  standalone: true,
  imports: [CardModule,CarouselModule, ButtonModule, TagModule],
  templateUrl: './resume-personal-projects.component.html',
  styleUrl: './resume-personal-projects.component.scss'
})
export class ResumePersonalProjectsComponent {

  responsiveOptions: any[] | undefined;

  projects : PersonalProject[] = [
    {
      title: "Miora Sophrologie",
      description: "Site vitrine",
      tasks: [
        "Maquettage",
        "Développement",
        "Mise en production"
      ],
      url: "https://miorasophrologie.fr",
      technos: ["NextJS", "TailwindCSS", "TypeScript", "Netlify", "Figma"],
      image: "portfolio_miorasophrologie.webp"
    },
    {
      title: "Du Café et du Code",
      description: "Site vitrine et éditorial - en cours",
      tasks: [
        "Maquettage",
        "Développement",
        "Mise en production"
      ],
      url: "https://ducafeetducode.com",
      technos: ["NextJS", "TinaCMS", "TailwindCSS", "TypeScript", "Vercel", "Figma", "Hook Form"],
      image: "portfolio_ducafeetducode.webp"
    }
  ]

  ngOnInit(){
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 3
      },
      {
          breakpoint: '1220px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

}
