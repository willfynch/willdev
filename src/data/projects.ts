import { PersonalProject } from "../app/models/personnal-project.model";
import { Project } from "../app/models/project.model";

export const projects : Project [] = [
    {
      client: "Miora Sophrologie",
      job: "Développeur Full-Stack",
      company: "Freelance",
      description: "Site vitrine pour une sophrologue basée en région parisienne.",
      tasks: [
        "Maquettage",
        "Développement",
        "Mise en production"
      ],
      url: "https://miorasophrologie.fr",
      technos: ["NextJS", "TailwindCSS", "TypeScript", "Netlify", "Figma"],
      image: "portfolio_miorasophrologie.webp",
      duration: "3 mois",
      avatar: "../assets/images/me.png"
    },
    {
      client: "Du Café et du Code",
      job: "Développeur Full-Stack",
      company: "Freelance",
      description: "Site vitrine et éditorial pour un studio de développement de sites web. Le projet est en cours de finitions.",
      tasks: [
        "Maquettage",
        "Développement",
        "Mise en production"
      ],
      url: "https://ducafeetducode.com",
      technos: ["NextJS", "TinaCMS", "TailwindCSS", "TypeScript", "Vercel", "Figma", "Hook Form"],
      image: "portfolio_ducafeetducode.webp",
      duration: "4 mois",
      avatar: "../assets/images/me.png"
    },
    {
      company: 'Capgemini',
      client: "Société Générale",
      job: "Développeur Angular",
      description: "Portails en intranet pour réaliser des opérations sur le réseau interne.",
      image: "portfolio_sg.jpg",
      duration: "2 ans",
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
      url: "",
      avatar: "../assets/images/logo_capgemini.png",
    },
    {
      company: 'Capgemini',
      client: "Indarra",
      job: "DevOps & Chef de Projet",
      image: "portfolio_indarra.png",
      duration: "6 mois",
      description: "Site Web éditorial d’un fonds de dotation territorial du Crédit Agricole.",
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
      url: "https://www.indarra.fr/",
      avatar: "../assets/images/logo_capgemini.png",
    },
    {
      company: 'Capgemini',
      client: "AFJ",
      job: "Dev Full-Stack & DevOps",
      image: "logo_afj.jpg",
      duration: "6 mois",
      description: "Application de gestion d’un foyer d’hébergement de victimes de traite humaine.",
      tasks: [
        "Agile SCRUM",
        "Développement de fonctionnalités (formulaires & statistiques)",
        "Mise sous Terraform de l’environnement de recette sur AWS",
        "Tests d’acceptance",
        "Rencontres client & prises du besoin",
        "Documentation"
      ],
      technos: ["Angular", "Bootstrap", "TypeScript", "NodeJS", "ExpressJS", "MongoDB", "AWS", "Docker"],
      url: "",
      avatar: "../assets/images/logo_capgemini.png",
    }
  ]