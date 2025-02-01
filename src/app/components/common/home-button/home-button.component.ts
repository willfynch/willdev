import { Component, input } from "@angular/core"
import { RouterLink } from "@angular/router"
import { IconType, NgIcon } from "@ng-icons/core"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { HlmTooltipTriggerDirective } from "@spartan-ng/ui-tooltip-helm"

@Component({
    selector: "app-home-button",
    imports: [
        HlmButtonDirective,
        NgIcon,
        HlmTooltipTriggerDirective,
        RouterLink,
    ],
    templateUrl: "./home-button.component.html",
    styleUrl: "./home-button.component.scss",
})
export class HomeButtonComponent {
    iconName = input<IconType | undefined>()
    buttonNavigateTo = input<string>()
    toolTip = input<string>()
    active = input<boolean>()
}
