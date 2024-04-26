import { Component } from '@angular/core';
import { Formation } from '../../models/formation.model';
import { CardModule } from 'primeng/card';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-resume-formations',
  standalone: true,
  imports: [CardModule, MatExpansionModule],
  templateUrl: './resume-formations.component.html',
  styleUrl: './resume-formations.component.scss'
})
export class ResumeFormationsComponent {

  formations: Formation[] = [
    {
      school: "Ecole PMN",
      degree: "Titre RNCP eq BAC+5 en Développement Web",
      type: "Alternance - 1 an",
      duration: "Mars 2021 - Mars 2022",
      image: "logo_pmn.webp",
      color: '#A8C7D0',
      website: 'https://www.ecole-pmn.fr/'
    },
    {
      school: "ESCOM Chimie",
      degree: "Ingénieur Chimiste",
      type: "Formation initiale - 5 ans",
      duration: "2013 - 2018",
      image: "logo_escom.png",
      color: '#e9ebe3',
      website: 'https://www.escom.fr/'
    }
  ]


}
