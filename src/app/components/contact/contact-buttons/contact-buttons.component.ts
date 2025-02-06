import { Component, input, InputSignal } from '@angular/core';
import { TSocialNetwork } from '../../../pages/contact/contact';

@Component({
  selector: 'app-contact-buttons',
  imports: [],
  templateUrl: './contact-buttons.component.html',
  styleUrl: './contact-buttons.component.scss'
})
export class ContactButtonsComponent {

  public socialLinks: InputSignal<TSocialNetwork[]> = input.required(); 

}
