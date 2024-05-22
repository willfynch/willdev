import { Component } from '@angular/core';
import { Techno } from '../../../models/techno.model';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {

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
