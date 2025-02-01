import { Component, input } from "@angular/core"
import { RouterLink } from "@angular/router"
import { IconType, NgIcon } from "@ng-icons/core"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { HlmTooltipTriggerDirective } from "@spartan-ng/ui-tooltip-helm"

@Component({
    selector: "app-navbar-button",
    imports: [HlmButtonDirective, NgIcon, HlmTooltipTriggerDirective, RouterLink],
    templateUrl: "./navbar-button.component.html",
    styleUrl: "./navbar-button.component.scss",
})
export class NavbarButtonComponent {
    iconName = input<IconType | undefined>()
    buttonNavigateTo = input<string>()
    toolTip = input<string>()
    active = input<boolean>()
}
