import { Component, computed, inject, input, InputSignal, Signal } from "@angular/core"
import { NavigationEnd, Router, RouterLink } from "@angular/router"
import { IconType, NgIcon } from "@ng-icons/core"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from "@spartan-ng/ui-tooltip-helm"
import { TPath } from "../../../utilities/common-types/paths"
import {toSignal} from "@angular/core/rxjs-interop";
import { filter, map } from "rxjs"
@Component({
    selector: "app-navbar-button",
    imports: [HlmButtonDirective, NgIcon, HlmTooltipTriggerDirective, RouterLink],
    templateUrl: "./navbar-button.component.html",
    styleUrl: "./navbar-button.component.scss",
})
export class NavbarButtonComponent {
    private router = inject(Router);
    public iconName: InputSignal<IconType | undefined> = input.required<IconType | undefined>()
    public linkPath: InputSignal<TPath> = input.required<TPath>()
    public toolTipContent: InputSignal<string> = input.required<string>()
    
    private currentUrl: Signal<string> = toSignal(
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            map(event => event.urlAfterRedirects)
        ),
        { initialValue: this.router.url }
    );

    public active: Signal<Boolean> = computed(() => {
        return this.currentUrl() === this.linkPath()
    });
}
