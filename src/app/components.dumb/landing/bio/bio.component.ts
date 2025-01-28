import { Component } from '@angular/core';
import { Techno } from '../../../models/techno.model';

@Component({
    selector: 'app-bio',
    standalone: true,
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.scss'
})
export class BioComponent {

  bio = `
  Bonjour ! Je suis un développeur Angular et NextJS avec 3 ans d'expérience. Je me suis formé d'abord 
  en autodidacte puis j'ai rejoint une formation par alternance d'un an au sein de la PMN avec un apprentissage chez
  Capgemini. 
  Je suis en mission depuis 2 ans sur un poste de développeur front-end Angular. À côté, je produis des sites pour solopreneurs
  et je documente sur LinkedIn la création de mon premier SaaS.
  `

  technos: Techno[] = [

    {name: 'Angular', image: '../../../assets/svgs/logo_angular.svg'},
    {name: 'RxJS', image: '../../../assets/svgs/logo_rxjs.svg'},
    {name: 'NextJS', image: '../../../assets/svgs/logo_nextjs.svg'},
    {name: 'TypeScript', image: '../../../assets/svgs/logo_ts.svg'},
    {name: 'Tailwind', image: '../../../assets/svgs/logo_tailwind.svg'},
    {name: 'AWS', image: '../../../assets/svgs/logo_aws.svg'},
    {name: 'Terraform', image: '../../../assets/svgs/logo_terraform.svg'},
    {name: 'Strapi', image: '../../../assets/svgs/logo_strapi.svg'},
    {name: 'TinaCMS', image: '../../../assets/svgs/logo_tina.svg'},
    {name: 'Figma', image: '../../../assets/svgs/logo_figma.svg'},


];

}
