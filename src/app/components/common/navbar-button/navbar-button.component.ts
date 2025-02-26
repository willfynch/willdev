import { Component, input, InputSignal } from "@angular/core"
import { RouterLink } from "@angular/router"
import { IconType, NgIcon } from "@ng-icons/core"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { HlmTooltipTriggerDirective } from "@spartan-ng/ui-tooltip-helm"
import { TPath } from "../../../utilities/common-types/paths"

@Component({
    selector: "app-navbar-button",
    imports: [HlmButtonDirective, NgIcon, HlmTooltipTriggerDirective, RouterLink],
    templateUrl: "./navbar-button.component.html",
    styleUrl: "./navbar-button.component.scss",
})
export class NavbarButtonComponent {
    public iconName: InputSignal<IconType | undefined> = input.required<IconType | undefined>()
    public linkPath: InputSignal<TPath> = input.required<TPath>()
    public toolTipContent: InputSignal<string> = input.required<string>()
    public active: InputSignal<boolean> = input.required<boolean>()
}
