import { Component, inject, input, InputSignal, output } from '@angular/core';
import { TSocialNetwork } from '../../../pages/contact/contact';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { CopyEmailService } from '../../../services/copy-email.service';

@Component({
  selector: 'app-contact-buttons',
  imports: [NgIcon, HlmButtonDirective, HlmIconDirective],
  templateUrl: './contact-buttons.component.html',
  styleUrl: './contact-buttons.component.scss'
})
export class ContactButtonsComponent {

  public socialLinks: InputSignal<TSocialNetwork[]> = input.required();
  
  protected copyEmailService = inject(CopyEmailService);

}
