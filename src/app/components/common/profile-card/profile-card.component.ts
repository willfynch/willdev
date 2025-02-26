import { Component, inject, input, InputSignal, signal, WritableSignal } from "@angular/core"
import { HlmCardContentDirective, HlmCardDirective } from "@spartan-ng/ui-card-helm"
import { HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective } from "@spartan-ng/ui-avatar-helm"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { RouterLink } from "@angular/router"
import { NgIcon, provideIcons } from "@ng-icons/core"
import { lucideCopy } from "@ng-icons/lucide"
import { CONTACT } from "../../../utilities/constants/contact.const"

import { HlmSeparatorDirective } from "@spartan-ng/ui-separator-helm"
import { BrnSeparatorComponent } from "@spartan-ng/brain/separator"
import { PROFILE_CARD_CONTENT } from "./profile-card-content"
import { TProfileCardPath } from "./profile-card"
import { CopyEmailService } from "../../../services/copy-email.service"

@Component({
    selector: "app-profile-card",
    imports: [
        HlmCardDirective,
        HlmCardContentDirective,
        HlmAvatarImageDirective,
        HlmAvatarComponent,
        HlmAvatarFallbackDirective,
        HlmButtonDirective,
        RouterLink,
        NgIcon,
        BrnSeparatorComponent,
        HlmSeparatorDirective,
    ],
    templateUrl: "./profile-card.component.html",
    styleUrl: "./profile-card.component.scss",
})
export class ProfileCardComponent {
    protected BIO = PROFILE_CARD_CONTENT.BIO
    protected copyEmailService = inject(CopyEmailService);
    public page: InputSignal<TProfileCardPath> = input.required<TProfileCardPath>()


}
