import { Component, input, signal } from "@angular/core"
import {
    HlmCardContentDirective,
    HlmCardDirective,
} from "@spartan-ng/ui-card-helm"
import {
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
} from "@spartan-ng/ui-avatar-helm"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { RouterLink } from "@angular/router"
import { NgIcon, provideIcons } from "@ng-icons/core"
import { lucideCopy } from "@ng-icons/lucide"
import { CONTACT } from "../../../utilities/constants/contact.const"

import { HlmSeparatorDirective } from "@spartan-ng/ui-separator-helm"
import { BrnSeparatorComponent } from "@spartan-ng/brain/separator"
import { PROFILE_CARD_CONTENT } from "./profile-card-content"

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
    providers: [provideIcons({ lucideCopy })],
    templateUrl: "./profile-card.component.html",
    styleUrl: "./profile-card.component.scss",
})
export class ProfileCardComponent {
    BIO = PROFILE_CARD_CONTENT.BIO
    copyEmailText = signal<string>("Email")
    page = input<"home" | "contact">()

    copyEmail() {
        this.copyEmailText.set("Copied !")
        navigator.clipboard.writeText(CONTACT.EMAIL)
        setTimeout(() => {
            this.copyEmailText.set("Email")
        }, 800)
    }
}
