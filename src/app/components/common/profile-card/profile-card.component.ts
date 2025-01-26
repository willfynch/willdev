import { Component, ElementRef, inject, input, InputSignal, OnInit, signal, ViewChild, WritableSignal } from "@angular/core"
import { HlmCardContentDirective, HlmCardDirective } from "@spartan-ng/ui-card-helm"
import { HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective } from "@spartan-ng/ui-avatar-helm"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { RouterLink } from "@angular/router"
import { NgIcon } from "@ng-icons/core"
import { HlmSeparatorDirective } from "@spartan-ng/ui-separator-helm"
import { BrnSeparatorComponent } from "@spartan-ng/brain/separator"
import { CURRENT_TECHNOS, PROFILE_CARD_CONTENT } from "./profile-card-content"
import { TProfileCardPath } from "./profile-card"
import { CopyEmailService } from "../../../services/copy-email.service"
import { HlmBadgeDirective } from "@spartan-ng/ui-badge-helm"
import gsap from 'gsap'
import { FadeInDirective } from "../../../directives/animations/fade-in.directive"
@Component({
    selector: "app-profile-card",
    imports: [
        HlmBadgeDirective,
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
        FadeInDirective
    ],
    templateUrl: "./profile-card.component.html",
    styleUrl: "./profile-card.component.scss",
})
export class ProfileCardComponent {
    protected BIO = PROFILE_CARD_CONTENT.BIO
    protected TECHNOS = CURRENT_TECHNOS;
    protected copyEmailService = inject(CopyEmailService)
    public page: InputSignal<TProfileCardPath> = input.required<TProfileCardPath>()

}
