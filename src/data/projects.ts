import { PersonalProject } from "../app/models/personnal-project.model";
import { Project } from "../app/models/project.model";

export const projects : Project [] = [
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
      image: "portfolio_miorasophrologie.webp",
      company: "Freelance",
      job: "Développeur Full-Stack",
      duration: "3 mois"
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
      image: "portfolio_ducafeetducode.webp",
      company: "Freelance",
      job: "Développeur Full-Stack",
      duration: "4 mois"
    },
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
      technos: ["Angular", "Material", "RxJS", "TypeScript", "Karma", "Jasmine", "Jenkins", "GitHub"],
      title: "Portails Web pour Opérations Réseau",
      url: ""
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
      technos: ["Angular", "Scully", "TypeScript", "Strapi", "PostgreSQL", "AWS"],
      title: "",
      url: ""
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
      technos: ["Angular", "Bootstrap", "TypeScript", "NodeJS", "ExpressJS", "MongoDB", "AWS", "Docker"],
      title: "",
      url: ""
    }
  ]