import { Component } from '@angular/core';
import { HeadTitleComponent } from '../../components/common/head-title/head-title.component';
import { ContactFormComponent } from "../../components/contact/contact-form/contact-form.component";
import { ContactButtonsComponent } from "../../components/contact/contact-buttons/contact-buttons.component";
import { SOCIALS } from './contact.content';

@Component({
  selector: 'app-contact',
  imports: [HeadTitleComponent, ContactFormComponent, ContactButtonsComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export class ContactPage {

  public socialLinks = SOCIALS;


}
