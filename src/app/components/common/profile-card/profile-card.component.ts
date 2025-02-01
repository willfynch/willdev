import { Component, signal } from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
} from '@spartan-ng/ui-card-helm';
import {
  HlmAvatarImageDirective,
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCopy } from '@ng-icons/lucide';
import { toObservable } from '@angular/core/rxjs-interop';
import { CONTACT } from '../../../utilities/constants/contact.const';

@Component({
  selector: 'app-profile-card',
  imports: [
    HlmCardDirective,
    HlmCardContentDirective,
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    HlmButtonDirective,
    RouterLink,
    NgIcon
  ],
  providers: [
    provideIcons({lucideCopy})
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {

  copyEmailText = signal<string>('Email');

  copyEmail(){
    this.copyEmailText.set('Copied !');
    navigator.clipboard.writeText(CONTACT["EMAIL"])
    setTimeout(()=>{
      this.copyEmailText.set('Email');
    },800)
  }



}
