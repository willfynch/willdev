import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Card, CardModule } from 'primeng/card';
import { Experience } from '../../models/experience.model';
import { ScrollerModule } from 'primeng/scroller';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-resume-experience',
  standalone: true,
  imports: [CarouselModule, CardModule, ScrollerModule, TagModule],
  templateUrl: './resume-experience.component.html',
  styleUrl: './resume-experience.component.scss'
})
export class ResumeExperienceComponent {



  experiences:Experience[] = [
     {
      company: "Société Générale",
      job: "Développeur Angular",
      image: "logo_sg.png",
      duration: "2 ans",
      description: "Portails web pour opérations réseau interne",
      tasks: [
        "Agile SCRUM",
        "Développement de nouvelles fonctionnalités",
        "Maquettage UX/UI et développement quasi from scratch de deux applications",
        "Tests unitaires (Karma/Jasmine) et end to end",
        "Refactoring",
        "Migration Angular 14 -> 17",
        "Documentation"
      ],
      technos: ["Angular", "Material", "RxJS", "TypeScript", "Karma", "Jasmine", "Jenkins", "GitHub"]
    },
    {
      company: "Indarra",
      job: "DevOps & Chef de Projet",
      image: "logo_indarra.jpg",
      duration: "6 mois",
      description: "Site Web éditorial d’un fonds de dotation",
      tasks: [
        "Agile SCRUM",
        "Réalisation d’un webhook pour relier AWS CodePipeline et Strapi",
        "Mise sous Cloudformation de l’environnement de production pour la livraison",
        "Coordination de 4 développeurs pour la version 1.0.0 après la 0.1.0",
        "Rencontres client, rédaction d’US",
        "Tests d’acceptance, revue de code",
        "Documentation"
      ],
      technos: ["Angular", "Scully", "TypeScript", "Strapi", "PostgreSQL", "AWS"]
    },
    {
      company: "AFJ",
      job: "Dev Full-Stack & DevOps",
      image: "logo_afj.jpg",
      duration: "6 mois",
      description: "Application de gestion d’un foyer d’hébergement",
      tasks: [
        "Agile SCRUM",
        "Développement de fonctionnalités (formulaires & statistiques)",
        "Mise sous Terraform de l’environnement de recette sur AWS",
        "Tests d’acceptance",
        "Rencontres client & prises du besoin",
        "Documentation"
      ],
      technos: ["Angular", "Bootstrap", "TypeScript", "NodeJS", "ExpressJS", "MongoDB", "AWS", "Docker"]
    }
  ]

  ngOnInit(){
  }
  
}

